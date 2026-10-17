# Jaswantgarh Memorial Guide — Starter Website

This is a ready-to-edit static website for the Jaswantgarh Memorial Guide.

## What is already working

- Responsive desktop / tablet / mobile layout
- 6 sections:
  1. Battle of Nuranang
  2. Chinese Graveyard
  3. Rifleman Jaswant Singh's Tree
  4. The Martyrs
  5. Shaurya Bhoomi
  6. Explore Nearby
- English / Hindi switch
- Selected language is remembered while moving between pages
- Dedicated URL for every exhibit
- Photo gallery with lightbox
- English / Hindi narration support
- Browser text-to-speech fallback for demo
- Video placeholder
- Map / reference-image placeholder
- Previous / next exhibit navigation
- QR-friendly URLs

## Open the website

For a quick local preview, double-click `index.html`.

For the best result, run a simple local web server:

### Windows
1. Open the project folder.
2. Shift + right-click inside the folder and open Terminal / PowerShell.
3. If Python is installed:
   `python -m http.server 8000`
4. Open:
   `http://localhost:8000`

## Where to edit text

Open:

`data.js`

All English and Hindi content is stored there.

Example:

```js
en: {
  title: "Battle of Nuranang",
  ...
},
hi: {
  title: "नुरानांग का युद्ध",
  ...
}
```

## Where to add photographs

Put real images in:

`assets/images/`

Then replace the placeholder path in `data.js`.

Example:

```js
image: "assets/images/nuranang-main.jpg"
```

## Where to add audio

Put your recorded audio in:

`assets/audio/`

Recommended names:

- `nuranang-en.mp3`
- `nuranang-hi.mp3`
- `graveyard-en.mp3`
- `graveyard-hi.mp3`
- `tree-en.mp3`
- `tree-hi.mp3`
- `martyrs-en.mp3`
- `martyrs-hi.mp3`
- `shaurya-en.mp3`
- `shaurya-hi.mp3`
- `explore-en.mp3`
- `explore-hi.mp3`

The code automatically selects the correct audio when the user changes language.

## Where to add videos

Put MP4 files in:

`assets/video/`

Then set, for example:

```js
video: "assets/video/nuranang-documentary.mp4"
```

## QR Code URLs

After hosting, every QR should point directly to the appropriate exhibit URL.

Examples:

- `https://YOURDOMAIN.com/exhibit.html?id=nuranang`
- `https://YOURDOMAIN.com/exhibit.html?id=chinese-graveyard`
- `https://YOURDOMAIN.com/exhibit.html?id=jaswant-tree`
- `https://YOURDOMAIN.com/exhibit.html?id=martyrs`
- `https://YOURDOMAIN.com/exhibit.html?id=shaurya-bhoomi`
- `https://YOURDOMAIN.com/exhibit.html?id=explore-nearby`

You can update photographs, audio and text later without replacing the physical QR codes.

## Recommended next stage

This version intentionally uses a simple static `data.js` content store so it is easy to understand and inexpensive to host.

Once your final content is ready, the next upgrade can add:
- real curator/admin login
- database
- browser-based photo/audio/video upload
- individual martyr profile pages
- analytics showing which QR codes are scanned most
- downloadable / printable QR-code sheet
- offline caching for weak network areas


## Built-in QR codes

The project now includes:

`qr-codes.html`

Open this page to generate and print QR codes for all six memorial sections.

Important:
- If the site is running on `localhost` or a private IP such as `192.168.x.x`, do NOT print the codes permanently.
- After hosting the website, open `qr-codes.html` on the live domain.
- The page automatically uses the live website address.
- You can also manually enter your final website domain and press **Generate QR Codes**.
- Every individual exhibit page also has a **Show QR Code** button.

The six QR codes point to:
- `exhibit.html?id=nuranang`
- `exhibit.html?id=chinese-graveyard`
- `exhibit.html?id=jaswant-tree`
- `exhibit.html?id=martyrs`
- `exhibit.html?id=shaurya-bhoomi`
- `exhibit.html?id=explore-nearby`

The QR code generator currently uses the QRCode.js library from CDN, so an internet connection is needed when generating the QR image. Visitors do not need this library just to read the memorial pages.
