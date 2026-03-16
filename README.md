# tuppum

A simple portfolio page, created to be easy to modify and deploy via GitHub pages. See a preview at [the associated GitHub Page](https://egillian1.github.io/tuppum/) and access the encrypted page with the password `1234`.

## Development

Files can be directly edited in any editor (including the one on GitHub) and viewed by opening the files in your browser and refreshing after a change.

Alternatively if you have Node.js installed, run `npm install` in the root of the directory and then run `npm run dev` to see changes in real-time.

### HTML encryption

If you would like to use password-protected pages, modify `unencrypted-example.html` to suit your needs and then head off to [this encryption tool](https://translateabook.com/staticrypt/) in order to encrypt. If you wish to change the default colors on the password page and other details, see the `+ More options` button.

### Embedding images in the encrypted sites

Since you don't want to upload your hidden images directly here in a public repository, I recommend embedding them in the unencrypted example using a tool like [this base64 image encryption tool](https://base64.guru/converter/encode/image) and embedding it in your HTML before encrypting it.

### Embedding videos in the encrypted site

Many video hosting services allow for unlisted videos to be uploaded. This means the video will not be searchable and can only be accessed if a person knows the direct link to said video. See [this guide](https://support.google.com/youtube/answer/157177?hl=en&co=GENIE.Platform%3DDesktop) on how to make a video on YouTube unlisted.

### Making the page searchable via search engines

If you would like people to be able to type in your name and search for your portfolio in e.g. Google, you will need to generate a sitemap and upload it to the search engines you want people to use. See [this guide](https://filipmikina.com/blog/github-pages-indexing) for details on how to do so.
