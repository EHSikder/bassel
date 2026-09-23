# Employee Discount Platform: interactive demo

An interactive demo of the Employee Discount Platform, by RIWA. It runs entirely in the browser on sample data and covers the three sides of the programme:

- **Employee app**: sign in with an employee ID and a text code, see the 100 KD allowance, pick a brand and branch, show a live QR code, and view discount history.
- **Cashier till**: scan the QR, run the eligibility checks, confirm the photo, calculate the discount against what's left, push it to the POS and take payment.
- **Admin**: employees (including CSV import and photos), brands, branches, discount rules, the transaction ledger, reports and POS integration.

**Test scenarios** in the top bar walks through every feature step by step. **Reset data** restores the sample data.

This demo is separate from the production platform. It has no backend and shares no code or data with it.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page |
| `assets/app.css` | Styles (RIWA palette: `#151B35`, `#175195`, `#3792C2`) |
| `assets/app.js` | The demo: sample data, screens and logic |
| `favicon.svg` | RIWA mark |
| `vercel.json` | Hosting headers for Vercel |

There is no build step and nothing to install.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Publish

1. Create an empty repository on GitHub, then push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Employee Discount Platform demo"
   git branch -M main
   git remote add origin https://github.com/<your-account>/<repo-name>.git
   git push -u origin main
   ```

2. In Vercel, choose **Add New → Project** and import the repository.
3. Set **Framework Preset** to **Other**. Leave the build command and output directory empty.
4. Deploy. Every push to `main` redeploys the site.

## Good to know

- **Data stays in each visitor's browser** (localStorage). Two people testing at once don't see each other's changes. The phone and till stay in sync on one computer, whether side by side or in two tabs.
- **Search engines are asked not to index the demo**, using the `robots` meta tag in `index.html` and the `X-Robots-Tag` header in `vercel.json`. Remove both if you want it indexed.
- **Placeholders**: brand names (Brand A–E), branches, products, staff rates, the monthly reset and the 30-second QR refresh are all sample settings. Most can be changed live under Admin.
- **The POS is simulated.** The messages match the planned integration steps.
- **External resources**: Google Fonts (Urbanist, IBM Plex Sans, IBM Plex Mono), [qrcode-generator](https://github.com/kazuhiko-arase/qrcode-generator) from cdnjs, and [jsQR](https://github.com/cozmo/jsQR) from jsDelivr. jsQR loads only when a cashier uploads an image. Both scripts are pinned with integrity hashes.

© RIWA. All rights reserved.
