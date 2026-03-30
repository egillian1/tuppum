// Create a reusable lightbox element
const lightbox = document.createElement("div");
lightbox.className = "lightbox-overlay";

const contentWrapper = document.createElement("div");
contentWrapper.className = "lightbox-wrapper";
lightbox.appendChild(contentWrapper);

const lightboxImage = document.createElement("img");

const headerAnimationClone = document
  .getElementsByClassName("trinity-spinner")[0]
  .cloneNode(true);
headerAnimationClone.className = "trinity-spinner image-placeholder-spinner";

const prevButton = document.createElement("button");
prevButton.className = "lightbox-arrow left";
prevButton.type = "button";

const nextButton = document.createElement("button");
nextButton.className = "lightbox-arrow right";
nextButton.type = "button";

contentWrapper.appendChild(prevButton);
contentWrapper.appendChild(headerAnimationClone);
contentWrapper.appendChild(lightboxImage);
contentWrapper.appendChild(nextButton);

document.body.appendChild(lightbox);

let currentIndex = -1;
const portfolioImages = Array.from(
  document.querySelectorAll(".portfolio-grid img"),
);

const showImageAt = (index) => {
  if (index < 0 || index >= portfolioImages.length) return;
  currentIndex = index;
  const img = portfolioImages[currentIndex].cloneNode();
  currentImage = document.querySelector(".lightbox-wrapper img");
  currentImage.replaceWith(img);
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
};

const showNextImage = () => {
  if (portfolioImages.length === 0) return;
  showImageAt((currentIndex + 1) % portfolioImages.length);
  loadImages();
};

const showPrevImage = () => {
  if (portfolioImages.length === 0) return;
  showImageAt(
    (currentIndex - 1 + portfolioImages.length) % portfolioImages.length,
  );
  loadImages();
};

// Preload unviewed images if flipping through images in lightbox to
// avoid loading delay
const loadImages = () => {
  let startTime = new Date().getTime();
  // Only load images not scrolled to yet. We assume images 0 to i
  // have already been viewed and loaded
  for (let i = currentIndex; i < portfolioImages.length; i++) {
    const img = new Image();
    img.src = portfolioImages[i].src;
    console.log("image loaded", portfolioImages[i]);

    // Don't load images for more than 1 second at a time to avoid
    // freezing the UI
    if (startTime - new Date().getTime() > 1000) {
      break;
    }
  }
};

const closeLightbox = () => {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
};

lightbox.addEventListener("click", (event) => {
  // Close if click is outside the image (but not on controls)
  if (event.target === lightbox || event.target == contentWrapper) {
    closeLightbox();
  }
});

prevButton.addEventListener("click", (event) => {
  event.stopPropagation();
  showPrevImage();
});

nextButton.addEventListener("click", (event) => {
  event.stopPropagation();
  showNextImage();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
  if (event.key === "ArrowRight") {
    showNextImage();
  }
  if (event.key === "ArrowLeft") {
    showPrevImage();
  }
});

// Add click listeners to all images inside portfolio-grid containers
portfolioImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImageAt(index);
  });
});

// Sidebar behavior
document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("open");
});

document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.remove("open");
  });
});

// Swiping on images for mobile
var zoomFactor = 1;
var viewport = window.visualViewport;
function resizeHandler() {
  zoomFactor = viewport.scale;
}
window.visualViewport.addEventListener("resize", resizeHandler);

let startX, startY, distX, distY;
const threshold = 75; // Minimum distance for a swipe
const allowedTime = 500; // Maximum time allowed for a swipe
let startTime;

const touchsurface = contentWrapper;

touchsurface.addEventListener(
  "touchstart",
  function (e) {
    let touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // Record time when finger first makes contact
  },
  false,
);

touchsurface.addEventListener("touchmove", function (e) {}, false);

touchsurface.addEventListener(
  "touchend",
  function (e) {
    let touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX; // Horizontal distance traveled by finger while in contact with surface
    distY = touchobj.pageY - startY; // Vertical distance traveled by finger while in contact with surface
    let elapsedTime = new Date().getTime() - startTime; // Calculate elapsed time
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
        // Swipe left or right
        if (distX > 0) {
          handleSwipe("right");
        } else {
          handleSwipe("left");
        }
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= 100) {
        // Swipe up or down
        if (distY > 0) {
          handleSwipe("down");
        } else {
          handleSwipe("up");
        }
      }
    }
  },
  false,
);

function handleSwipe(direction) {
  // If user is zoomed in and is only trying to pan on
  // the zoomed in image, prevent from skipping over to the
  // next image on accident
  if (zoomFactor > 1.05) {
    return;
  }

  switch (direction) {
    case "left":
      showPrevImage();
      break;
    case "right":
      showNextImage();
      break;
    case "up":
      closeLightbox();
      break;
  }
}
