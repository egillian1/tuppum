<!-- TODO: Add explanation about purpose, static website, open source, etc. all the fancy buzzwords -->

# tuppum

A simple portfolio page, created to be easy to modify and deploy via GitHub pages. See a preview at [the associated GitHub Page](https://egillian1.github.io/tuppum/) and access the encrypted page with the password `1234`.

<!-- TODO: Change headers for readme -->

## Development

Files can be directly edited in any editor (including the one on GitHub) and viewed by opening the files in your browser and refreshing after a change (e.g. visiting `file:///C:/Location/To/Repository/tuppum/index.html` in your browser with the correct location to the `index.html` file).

Alternatively if you have Node.js installed, run `npm install` in the root of the directory and then run `npm run dev` to see changes in real-time.

### Changing styling, fonts, colors, etc.

This is a static HTML site using basic CSS. You can change the images shown, URLs, fonts, colors, etc. Store whatever images you want to show in `images/portfolio/`. If you would like different fonts, you can download fonts from e.g. Google Fonts and place them in `fonts/`. The file `style.css` controls all of the colors, layout, animation and which fonts get used where, so feel free to edit that stylesheet to suit your needs. See sections below on some further details.

### HTML encryption

If you would like to use password-protected pages, modify `unencrypted-example.html` to suit your needs and then head off to [this encryption tool](https://translateabook.com/staticrypt/) in order to encrypt. If you wish to change the default colors on the password page and other details, see the `+ More options` button.

### Embedding images in the encrypted sites

Since you don't want to upload your hidden images directly here in a public repository, I recommend embedding them in the unencrypted example using a tool like [this base64 image encryption tool](https://base64.guru/converter/encode/image) and embedding it in your HTML before encrypting it.

### Embedding videos in the encrypted site

Many video hosting services allow for unlisted videos to be uploaded. This means the video will not be searchable and can only be accessed if a person knows the direct link to said video. See [this guide](https://support.google.com/youtube/answer/157177?hl=en&co=GENIE.Platform%3DDesktop) on how to make a video on YouTube unlisted.

### Hosting the page

Since this is a static web page with no backend, you can use GitHub Pages to host it and make it available on the internet. The easiest thing to do is probably to clone this repository, make the changes you want and replace media, and then upload it to a GitHub repository in your account. Once you have your own repository, you can follow the [GitHub Pages quickstart guide](https://docs.github.com/en/pages/quickstart) to start making it available to others.

### Making the page searchable via search engines

If you would like people to be able to type in your name and search for your portfolio in e.g. Google, you will need to generate a sitemap and upload it to the search engines you want people to use. See [this guide](https://filipmikina.com/blog/github-pages-indexing) for details on how to do so.

A quick rundown of this process is as follows:

- Make sure `robots.txt` is configured the way you want it to be
- Let GitHub build your page and wait for it to deploy
- Go to a sitemap generator site such as [this one](https://www.xml-sitemaps.com/) and enter your site
- Download the generated sitemap and place the contents in `sitemap.xml`
- Go to the [Google Search Console](https://search.google.com/search-console/welcome)
- Enter your portfolio as a URL prefix option
- Copy the HTML tag option and put it in the header of `index.html`
- Let GitHub build your page again
- Hit the "Verify" button in Google Search Console to confirm your ownership of the site
- Submit your sitemap through the console as well
- At this point, you can request indexing via the console
- Wait a little bit and your site should be search indexed soon!

<!-- TODO: Add further documentation for non-techies -->

### Custom domain for your page

If you would like a custom domain to point towards your website (e.g. you want to visit www.yournameportfolio.com), you can do so via GitHub Pages as well and follow [the guide to use your own domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Note that you will need to purchase a domain from somewhere like porkbun.com or namecheap.com in order to do this.

### Adding icons & fonts

This project uses Font Awesome as its library for icons. If you want to add more of them, visit [their website](https://fontawesome.com/search?ic=free-collection), download the free version icon you'd like as an SVG and add it to `images/icons/`.

For fonts, see [Google Fonts](https://fonts.google.com/) to get different fonts for your website. Download the fonts you'd like, put them in `fonts/` and then use a `@font-face` command like in the top of `style.css` to import the font.
