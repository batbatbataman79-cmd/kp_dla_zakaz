# Design QA

Reference: supplied business-proposal PNG (1248 × 2248).
Implementation: business/index.html, verified with the in-app browser at http://127.0.0.1:4181/business/.

Preserved section sequence, Russian copy, orange accents, light cards, two-column development list, prices and final dark contact panel. Four new raster images are an intentional requested replacement.

Verified: image loading (4/4), accordion expand/collapse with accessible state and hidden-panel inert handling, navigation, reveal on scroll, pricing and contact sections. Browser console: no errors. JavaScript syntax check passed.

Responsive check at 390px: found card-grid overflow, changed grid minimum sizing and mobile cards to two columns; repeated DOM measurement: clientWidth 375, scrollWidth 375. Added a tablet arrangement for feature cards. Source is desktop-only, mobile layout is adapted.

Visual fixes: softened image edges and card imagery to protect text readability. Typography uses Arial with compact headings and regular weights to match the source. Image content differs intentionally; exact source raster reconstruction is not claimed.

Images replaced with the four exact user-supplied PNG files: hero, shop, corporate, landing. Byte hashes matched the source attachments.

Spacing update: desktop section gaps 68px, mobile 52px, wider card gaps and padding, increased text line height. Verified accordion expansion/collapse and zero browser console errors. At mobile width: clientWidth=375, scrollWidth=375. User-requested spacing changes intentionally supersede the original compact reference.

final result: passed
