// Create a reusable lightbox element
const lightbox = document.createElement("div");
lightbox.className = "lightbox-overlay";

const contentWrapper = document.createElement("div");
contentWrapper.className = "lightbox-wrapper";
lightbox.appendChild(contentWrapper);

const lightboxImage = document.createElement("img");

const prevButton = document.createElement("button");
prevButton.className = "lightbox-arrow left";
prevButton.type = "button";
prevButton.innerHTML = "&#x2039;";

const nextButton = document.createElement("button");
nextButton.className = "lightbox-arrow right";
nextButton.type = "button";
nextButton.innerHTML = "&#x203A;";

contentWrapper.appendChild(prevButton);
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
  const img = portfolioImages[currentIndex];
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt || "";
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
};

const showNextImage = () => {
  if (portfolioImages.length === 0) return;
  showImageAt((currentIndex + 1) % portfolioImages.length);
};

const showPrevImage = () => {
  if (portfolioImages.length === 0) return;
  showImageAt(
    (currentIndex - 1 + portfolioImages.length) % portfolioImages.length,
  );
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
