# Karakoram Tour Detail Page — Lukas Feedback Implementation Plan

**Tour:** `br-around-karakoram-SP26-01-lukas`
**Page:** `/package-tour/br-around-karakoram-SP26-01-lukas`
**Status:** Draft for Hussain's review and approval
**Rule:** All layout changes are opt-in for this one tour. Every other itinerary detail page must render exactly as it does today.

---

## 1. Summary

The current tour detail page is built from shared components used by all package tours. To avoid breaking other itineraries, we will:

1. Add a single opt-in flag to this tour's data (`detailLayout: "hostJourney"`).
2. Render a separate composition branch for this tour only.
3. Keep existing components backward-compatible by adding optional props with safe defaults.
4. Scope all copy, image, and section-order changes to this tour id only.
5. Leave the existing branch for all other tours untouched.

Already prepared (staged, not committed):

- New "Meet Your Host" bio is already in `data/cohosted-profiles.js:333`.
- Bio line clamp was raised from 7 to 12 lines in `components/packageTourDetailScreen/meetYourHost/meetYourHost.module.css`.

---

## 2. Requested page order vs current page

| # | Lukas requested | Current section | Action |
|---|---|---|---|
| 1 | Hero image of the region | `HeroBanner` | Replace hero background for this tour with a new no-people region/Islamabad shot |
| 2 | My photo | `MeetYourHost` image | Keep, but restructure for this variant |
| 3 | My text | `MeetYourHost` bio | Already updated; show full new text |
| 4 | My video | Does not exist on tour page | Replace "View Profile" button with inline host video |
| 5 | Trip overview "in a nutshell" | Does not exist | New `TripSnapshot` component |
| 6 | What's included | `WhatsIncluded` | New data-driven, photo-per-item version for this tour |
| 7 | What's not included (shortened) | Inside `WhatsIncluded` | Replace list with shortened 6-item list for this tour |
| 8 | Itinerary | `ThirdHomePageSection` + `TourFaq` | Keep; swap photos; add stable `#itinerary` anchor |
| 9 | Reviews from past travellers | `TestimonialSection` at bottom | Move directly below itinerary; use host reviews; autoplay 5–7s |
| 10 | Big Book Now button | No standalone CTA | New `BookNowCta` section after reviews |
| 11 | FAQ | Only on `/faq` | Reuse `FaqContent`, exclude one question, place after CTA |
| — | Remove map | `MapSection` | Do not render for this tour |
| — | Remove contact block | `ContactNow` | Do not render for this tour |
| — | Remove "What you will experience" | `TopDestinations` | Do not render for this tour (highlights move into snapshot) |

---

## 3. Review findings (important before implementation)

### 3.1 Entrance fees are contradictory on the current page

- `data/tours-pakages.js:1443` has `entery_fees: "Not included"`.
- `components/packageTourDetailScreen/whatsIncluded/index.js:97-100` renders an **ENTRANCE FEES** card inside "What's Included" and displays the value `"Not included"`.
- The same tour also lists `"Entry tickets, site permits and museum fees"` in `notIncluded` at `data/tours-pakages.js:1446+`.

So the page currently says "What's included → Entrance fees: Not included", while also listing it under "What's not included". This must be resolved, not just reworded.

**Recommendation:** Include entrance fees in the tour price, remove them from `notIncluded`, and show an "Included" card with a short explanation. If operations decide not to include them, keep them transparently in "What's not included" rather than deleting the line.

### 3.2 Booking page uses the wrong image for this tour

`pages/book-now/index.jsx:539` uses:

```js
tourDetailData?.service_img.src || card_img.src
```

For this tour `service_img` is a **string**, so `.src` is `undefined` and the booking card falls back to the generic `card_img`. This is why the booking trip card image may not match the tour. Fix by handling both string and object forms.

### 3.3 Host data mapping drops the video and reviews

`data/hosts.js:fromCohost()` only returns a subset of the cohost profile. It does not include `introURL`, `reviews`, `rating`, or `reviewCount`. The page needs those for the new video and reviews sections.

**Fix:** Add these fields additively in `fromCohost()`; other pages receive extra fields but are otherwise unaffected.

### 3.4 Itinerary photos do not match the day descriptions

Current paths in `data/tours-pakages.js:1331-1404`:

- Day 1 uses a group photo at Faisal Mosque (`pk24-10/Day_1.jpg`).
- Day 5 (Rakaposhi / cricket ground) uses a glacier image.
- Day 6 (Indus) is the overcast shot Lukas mentioned.
- Day 7 (Shigar) uses a Sarfaranga desert image.
- Day 10 (Homeward) uses a shared group/trip image.

These need photographer-supplied replacements, not logo or icon swaps.

### 3.5 Removing the map breaks the hero anchor

`components/packageTourDetailScreen/heroBanner/index.js:119` links to `#map-&-itinery`, and `components/packageTourDetailScreen/mapSection/index.js:7` owns that id. If the map is removed, the nav link must point to a new `#itinerary` anchor on `ThirdHomePageSection`.

### 3.6 Reviews are generic and autoplay is disabled

`components/testimonialSection/index.js:24` has `autoplay` commented out and always renders site-wide `TESTIMONIALS`. Lukas has his own reviews in `data/cohosted-profiles.js`. For this tour we should use host reviews and enable autoplay with a 6-second interval.

### 3.7 Minor logic issue in itinerary date lookup

`components/packageTourDetailScreen/thirdHomePageSection/index.js:83` returns `null` when `host.pastItineraries.length < 1`. For a host with `pastItineraries: []`, the host date would disappear even though upcoming itineraries exist. Lukas currently has no `pastItineraries`, so it works by accident. Fix it to check only `upcomingItineraries`.

### 3.8 The archive data file is not used

`data/archive/around-karakoram-sp26.js` looks like an older duplicate but is not imported anywhere. Do **not** edit it expecting changes to appear on the site. The live data is `data/tours-pakages.js`.

### 3.9 `?host=3` is not used for host resolution

`pages/package-tour/[id]/index.js` resolves the host from the tour id via `getHostForTour()`. The `?host=3` query in Lukas's URL is effectively decorative. This is fine, but it means the new variant cannot be toggled by adding `?host=...`; it must be driven by the tour data flag.

### 3.10 Mobile performance risk

Current assets are heavy for Instagram mobile traffic:

- `banner.jpg` is ~3.3 MB.
- Some itinerary images are 1.3–3.3 MB.
- `Pakistan-LukasRichter.mp4` is ~27 MB.

Plan for compressed WebP/AVIF images, responsive sizes, a video poster, and `preload="none"` on the video.

---

## 4. Isolation strategy (no effect on other itineraries)

### 4.1 Tour data flag

Add to this tour only in `data/tours-pakages.js`:

```js
detailLayout: "hostJourney",
```

Then in `pages/package-tour/[id]/index.js`:

```js
const isHostJourney = tourDetailData?.detailLayout === "hostJourney";
```

Use it to render either the new composition or the existing JSX. The existing JSX remains the default for every other tour.

### 4.2 Additive component props

Any shared component change must have a default that preserves current behaviour:

- `HeroBanner`: optional `detailHeroImage`, `itineraryAnchor`, `hideMapLink`.
- `MeetYourHost`: optional `showVideo`, `layout`.
- `TestimonialSection`: optional `data`, `autoplay`, `autoplaySpeed`.
- `FaqContent`: optional `excludeTitles`.
- `WhatsIncluded`: optional `variant` and `detailData`.
- `ThirdHomePageSection`: optional `anchorId`, `hideMapAnchor`.

### 4.3 Scoped data changes

All copy, image paths, and section flags go inside the `br-around-karakoram-SP26-01-lukas` object only. Do not change shared defaults or global arrays.

### 4.4 Booking page

- Hide the description line only when `tourDetailData?.detailLayout === "hostJourney"`.
- Fix the image fallback globally (it is a bug fix, not a layout change).
- Mobile CSS improvements can be global if they do not change desktop behaviour.

---

## 5. Detailed implementation plan

### 5.1 Hero image (feedback item 1)

**Files:** `data/tours-pakages.js`, `pages/package-tour/[id]/index.js`, `components/packageTourDetailScreen/heroBanner/index.js`

- Add `detailHeroImage` to this tour, e.g. `/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/hero.jpg`.
- Pass `banner_img={tourDetailData?.detailHeroImage || tourDetailData?.service_img}` so the listing card image (`service_img`) is unchanged.
- Keep the existing title overlay, sticky price/date bar, PDF download, and Book Now button.
- Use a 16:9 or wider image, ideally 2400 px wide, with the subject clear of the title area.

**Acceptance:** Hero shows the new image only on this tour; all other tours still use their existing `service_img`.

### 5.2 Meet Your Host (feedback item 2)

**Files:** `components/packageTourDetailScreen/meetYourHost/index.jsx`, `meetYourHost.module.css`, `data/hosts.js`

- Keep the new bio already in `data/cohosted-profiles.js`.
- Remove the "View Profile" button for this variant.
- Replace it with an inline video block directly below the text.
- For this tour, use a stacked order: **host photo → name/title → bio → video**. On desktop the current two-column layout may be kept if the video still appears after the text; if strict order is required, use the stacked variant.
- Add `introURL` to `fromCohost()` in `data/hosts.js` so `MeetYourHost` receives it.
- Video UI: poster image, play button, `controls`, `playsInline`, `preload="none"`, no autoplay.
- Use the existing local file `/assets/cohosted_profile/Pakistan-LukasRichter.mp4` for now, but request a compressed/streaming version.

**Acceptance:** No "View Profile" button on this tour; video plays on desktop, iOS, and Android; other hosts' tour pages still show the existing button/layout.

### 5.3 Trip overview "in a nutshell" (feedback item 3)

**New component:** `components/packageTourDetailScreen/tripSnapshot/index.js` + CSS module

**Placement:** immediately after `SecondHomePageSection` (location overview) and before "What's included".

**Proposed content:**

| Label | Value |
|---|---|
| Duration | 10 days / 9 nights |
| Dates | April 2 – 11, 2027 |
| Host | Lukas Richter, Travel & Outdoor Creator |
| Group size | 8–12 travellers |
| Fitness level | Moderate |
| Hotels | Ambience Hotel Islamabad · Ambience Hotel Hunza (3 nights) · Ramada Gilgit · PC Legacy Skardu (3 nights) |
| Main experiences | Baltit & Altit Forts · Attabad Lake · Passu Glacier · Rakaposhi cricket ground · Shigar Fort · Sarfaranga Cold Desert · K2 Museum · Chunda Valley |
| Meals | 26 meals: 9 breakfasts, 8 lunches, 9 dinners |
| Price | From £1,650 per person, double occupancy |

**Data:** store as a `tripSnapshot` array in the tour object so copy can change without touching the component.

**Acceptance:** Appears only on this tour; reads as a quick scannable summary on mobile.

### 5.4 What's included (feedback item 4)

**Files:** `components/packageTourDetailScreen/whatsIncluded/index.js`, CSS, `data/tours-pakages.js`

For this tour only, render a new data-driven version with one photo per item. Proposed copy:

| Item | Proposed copy | Photo needed |
|---|---|---|
| Meals | 26 meals, including local cuisine: 9 breakfasts, 8 lunches and 9 dinners, with opportunities to experience traditional Hunza and Balti food. | Traditional Hunza/Balti table |
| Transport | All transport during the itinerary: travel by Toyota Grand Cabin and 4x4 jeeps where specified, with the group exploring the region together. | Jeep on a mountain road |
| Accommodation | 9 nights in hand-picked hotels: 2 nights Islamabad, 3 nights Hunza, 1 night Gilgit and 3 nights Skardu. Twin/double share; single supplement available. | **Ambience Hotel Hunza** (highest priority) |
| Group size | 8–12 travellers, hosted by Lukas and supported by a local guide and film crew. | Group in the mountains |
| Expert team | English-speaking guide, local mountain guides and a content creator travelling with the group throughout. | Guide/crew |
| Domestic flight | Return Islamabad–Skardu flight, weather permitting. | Flight/valley view |
| Cultural experiences | Traditional musical night, bonfire, souvenirs and a Hunza/Balti culinary experience. | Music/bonfire/food |
| Fitness rating | Moderate: short walks, uneven ground and altitudes up to about 2,600 m. | Walking/hiking |
| Entrance fees | **Decision required** (see section 7). If included, say what is covered. If not included, do not show it in "What's included". | Fort/museum |
| Book with confidence | Flexible booking and cancellation terms; see T&Cs. | Optional |

Implementation notes:

- Use a card grid with a small landscape photo at the top of each card.
- Keep images lazy-loaded and compressed.
- For this variant, do not render the contradictory "Entrance Fees: Not included" card.
- Keep the existing hardcoded icon grid for all other tours.

**Acceptance:** Every included item has a relevant image and expanded copy; no "included but not included" contradiction.

### 5.5 What's not included — shortened (feedback item 5)

**File:** `data/tours-pakages.js` (this tour only)

Replace `notIncluded` with exactly:

1. International flights to and from Islamabad
2. Pakistan visa fees (we prepare the documentation, you pay the fee)
3. Travel and medical insurance (strongly recommended)
4. Medical costs, evacuation and rescue
5. Costs from landslides, road closures, weather or flight delays
6. Anything not explicitly listed as included

Remove: entry tickets/site permits/museum fees, optional activities, spa treatments, Day 1 lunch, Day 10 lunch/dinner, drinks, laundry/phone/Wi-Fi, personal shopping, tips.

**Important:** Removing "Entry tickets" and "Day 1/Day 10 meals" from this list means we are implicitly saying they are included. Do not remove them unless the price/inclusions are updated accordingly (see decisions).

**Acceptance:** Shorter list; no contradiction with "What's included".

### 5.6 Itinerary photos (feedback item 6)

**File:** `data/tours-pakages.js` (this tour only)

Swap these images:

| Day | Current | Replace with |
|---|---|---|
| Day 1 | `/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg` | Professional Faisal Mosque / Islamabad sunrise or sunset, no people |
| Day 5 | `.../SP26-01-lukas/Day 5.jpg` | Rakaposhi / Pissan cricket ground in good weather |
| Day 6 | `.../SP26-01-lukas/Day 6.jpg` | Indus gorge / Jaglot–Skardu road in good weather |
| Day 7 | `.../SP26-01-lukas/Day 7.jpg` | Shigar Fort in good weather |
| Day 10 | `/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg` | Clean "homeward"/Islamabad shot |

Also add a stable `id="itinerary"` to `ThirdHomePageSection` and `scroll-margin-top` so the hero nav anchor lands correctly under the sticky bar.

**Acceptance:** Day photos match the day descriptions; only this tour's images change.

### 5.7 Remove map and contact block (feedback item 7)

**Files:** `pages/package-tour/[id]/index.js`, `components/packageTourDetailScreen/heroBanner/index.js`, `components/packageTourDetailScreen/thirdHomePageSection/index.js`

- Do not render `<MapSection />` when `isHostJourney`.
- Do not render `<ContactNow />` when `isHostJourney`.
- Change the hero nav link from `#map-&-itinery` to `#itinerary` when `isHostJourney`.
- Keep the "Dates and Prices" block inside the itinerary section unless Hussain wants it moved.
- Optionally hide `TopDestinations` ("What you will experience") for this variant because those highlights now live in the snapshot.

**Acceptance:** No map, no contact block, no dead anchor on this tour.

### 5.8 Reviews + autoplay + Book Now CTA (feedback item 7 continued)

**Files:** `components/testimonialSection/index.js`, `pages/package-tour/[id]/index.js`, `data/hosts.js`, new `components/packageTourDetailScreen/bookNowCta/index.js`

Reviews:

- Move `<TestimonialSection />` to immediately after `<ThirdHomePageSection />`.
- Pass host reviews for this tour. Add `reviews` to `fromCohost()`.
- Map host reviews to the component shape: `{ name, text: review, img: avatar }`.
- Add optional props: `autoplay = false`, `autoplaySpeed = 6000`.
- Enable `autoplay: true`, `autoplaySpeed: 6000`, `pauseOnHover: true` for this tour only.
- Keep the title "Travel Tales".

CTA:

- New full-width section after reviews with a large "Book Now" button.
- Link to `/book-now?tour=br-around-karakoram-SP26-01-lukas&host=3` (include `&coupon=...` if a valid coupon is applied).
- Optionally show date and price above the button.

**Acceptance:** Reviews sit directly below the itinerary on this tour and auto-advance every 6 seconds; other pages keep their current review behaviour.

### 5.9 FAQ below booking (feedback item 8)

**Files:** `components/faqScreen/faqContent/index.js`, `pages/package-tour/[id]/index.js`

- Reuse `FaqContent` on the tour page for this variant only.
- Add optional `excludeTitles = []` prop and filter out:
  - `"Can I get a private tour organized?"`
- Place after the Book Now CTA.
- Add an `id="faq"` anchor if useful.
- Do not change the `/faq` page content; it should still show the private-tour question.

**Acceptance:** FAQ appears below the CTA on this tour; the private-tour question is absent only here.

### 5.10 Booking page mobile (feedback item 9)

**Files:** `pages/book-now/index.jsx`, `pages/book-now/bookNow.module.css`

- Remove the `Description: ...` line from the trip card **for this variant only** (or when a host is present). Keep title, price, host, and date.
- Fix the image fallback:

```js
const tourImage =
  typeof tourDetailData?.service_img === "string"
    ? tourDetailData.service_img
    : tourDetailData?.service_img?.src || card_img.src;
```

- Mobile improvements:
  - Reduce card top margin on small screens.
  - Slightly reduce title/price font sizes.
  - Ensure card width and padding do not overflow at 320–414 px.
  - Keep the card stacked and readable; no horizontal scroll.
- Keep the form and payment flow unchanged.

**Acceptance:** On a 390 px phone, the trip card shows image, title, price, host, and date with no cut-off description and no overflow.

---

## 6. Proposed data model

Add only to the Lukas SP26-01 tour object:

```js
{
  id: "br-around-karakoram-SP26-01-lukas",
  detailLayout: "hostJourney",
  detailHeroImage: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/hero.jpg",
  tripSnapshot: [
    { label: "Duration", value: "10 days / 9 nights" },
    { label: "Dates", value: "April 2 – 11, 2027" },
    { label: "Host", value: "Lukas Richter" },
    { label: "Group size", value: "8–12 travellers" },
    { label: "Fitness level", value: "Moderate" },
    { label: "Hotels", value: "Ambience Islamabad · Ambience Hunza · Ramada Gilgit · PC Legacy Skardu" },
    { label: "Main experiences", value: "Baltit & Altit Forts · Attabad Lake · Passu Glacier · Rakaposhi cricket ground · Shigar Fort · Sarfaranga · K2 Museum · Chunda Valley" },
    { label: "Meals", value: "26 meals: 9 breakfasts, 8 lunches, 9 dinners" },
    { label: "Price", value: "From £1,650 per person" }
  ],
  includesDetail: [
    { key: "meals", title: "Meals", text: "...", image: "..." }
    // etc.
  ],
  hostJourneyOptions: {
    showMap: false,
    showContactBlock: false,
    showExperienceStrip: false,
    reviewsSource: "host",
    reviewsAutoplaySpeed: 6000,
    faqExclude: ["Can I get a private tour organized?"]
  }
}
```

This keeps everything reviewable in one place and makes it trivial to roll back.

---

## 7. Decisions needed before implementation

### 7.1 Entrance fees (client asked explicitly)

**Question:** What do the sites cost, and should we include them in the price?

**Recommendation:** Include them. The amount is likely small relative to a £1,650 trip, and it removes a recurring "extra cost" objection. If included:

- Update `includes.entery_fees` to a positive description.
- Remove `"Entry tickets, site permits and museum fees"` from `notIncluded`.
- Update the What's Included card.
- Adjust the price only if the cost is material.

If not included: keep the line transparent in "What's not included"; do not silently delete it.

### 7.2 Day 1 and Day 10 meals (client asked explicitly)

**Recommendation:**

- Include **Day 1 lunch**. It is the group's first meal together and a low-cost goodwill item.
- Include **Day 10 lunch only if flight times allow**; most departures will not need dinner on Day 10.
- Do not promise Day 10 dinner if guests are flying out.

If both Day 1 lunch and Day 10 lunch are added, meal counts change from **9 breakfasts / 8 lunches / 9 dinners** to **9 / 9 / 9** (or **9 / 9 / 10** only if Day 10 dinner is truly included). Update the snapshot, included copy, and `notIncluded` together.

### 7.3 Other confirmations

1. **Reviews source:** Use Lukas's 4 host reviews, or keep the site-wide "Travel Tales"? Recommendation: host reviews.
2. **Asset pack:** We need hero, Day 1/5/6/7/10, included-item photos, and hotel photos (especially Ambience Hotel Hunza).
3. **Scope:** Only `br-around-karakoram-SP26-01-lukas`, or also the October `br-around-karakoram-AT26-02-lukas`? Recommendation: this tour only for now.
4. **Dates:** Confirm April 2–11, 2027.
5. **Experience strip:** Hide "What you will experience" for this variant? Recommendation: yes, because the snapshot covers it.
6. **Booking description:** Remove only for this variant, or for all booking pages? Recommendation: this variant only, to stay conservative.
7. **Video delivery:** Keep the 27 MB local MP4, or move to YouTube/Cloudinary/compressed MP4? Recommendation: compressed streaming version.
8. **CTA link:** Use the direct `/book-now?tour=...&host=3` link (preserves coupon) or the short `/book/3` link (cleaner for Instagram)? Recommendation: direct link with coupon support.

---

## 8. Files to add / change

| File | Change |
|---|---|
| `data/tours-pakages.js` | Add `detailLayout`, `detailHeroImage`, `tripSnapshot`, `includesDetail`, options; swap Day 1/5/6/7/10 images; shorten `notIncluded`; add `id="itinerary"` support |
| `data/hosts.js` | Add `introURL`, `reviews`, `rating`, `reviewCount` to `fromCohost()` |
| `data/cohosted-profiles.js` | New bio already present; no further change unless review source changes |
| `pages/package-tour/[id]/index.js` | Add `isHostJourney` branch; reorder sections; remove map/contact/experience for variant; move reviews; add CTA and FAQ |
| `components/packageTourDetailScreen/heroBanner/index.js` | Accept `detailHeroImage`; switch map link to itinerary anchor for variant |
| `components/packageTourDetailScreen/meetYourHost/index.jsx` + CSS | Replace View Profile with video; optional stacked layout |
| `components/packageTourDetailScreen/tripSnapshot/*` | New component + CSS |
| `components/packageTourDetailScreen/whatsIncluded/index.js` + CSS | Add photo-per-item variant; fix entrance-fee contradiction |
| `components/packageTourDetailScreen/thirdHomePageSection/index.js` | Add `id="itinerary"` and scroll margin; fix `pastItineraries` condition |
| `components/testimonialSection/index.js` | Optional `data`, `autoplay`, `autoplaySpeed`, `pauseOnHover` |
| `components/faqScreen/faqContent/index.js` | Optional `excludeTitles` prop |
| `components/packageTourDetailScreen/bookNowCta/*` | New CTA section |
| `pages/book-now/index.jsx` | Hide description for variant; fix `service_img` fallback |
| `pages/book-now/bookNow.module.css` | Mobile card spacing/typography |

**Do not edit:** `data/archive/around-karakoram-sp26.js` (unused duplicate).

---

## 9. Assets checklist

### Required from Lukas / photographer

- [ ] Hero: Islamabad at sunrise/sunset, no people, 16:9+, high resolution
- [ ] Day 1: Faisal Mosque at sunrise/sunset, no people
- [ ] Day 5: Rakaposhi / Pissan cricket ground, good weather
- [ ] Day 6: Indus gorge / Jaglot–Skardu road, good weather
- [ ] Day 7: Shigar Fort, good weather
- [ ] Day 10: homeward / Islamabad
- [ ] Ambience Hotel Hunza (highest priority for accommodation card)
- [ ] Ambience Hotel Islamabad
- [ ] Ramada Gilgit
- [ ] PC Legacy Skardu
- [ ] Jeep on mountain road
- [ ] Traditional Hunza/Balti food
- [ ] Group/guide/crew
- [ ] Bonfire / musical night / souvenirs

Existing usable placeholders (not final hotel proof):

- `public/assets/places_to_stay/pc_legacy.jpg`
- `public/assets/IMAGES/tour-packages/karakoram-wellness-culinary/experience-*.jpg`
- `public/assets/IMAGES/tour-packages/womens-adventure-cultural-sep2026/Highlights/*`

Do not use a photo of a different hotel for Ambience. A wrong hotel image is worse than no image.

---

## 10. Testing / QA checklist

1. `npm run build` and `npm run lint` pass.
2. Lukas tour renders the new order:
   Hero → photo → text → video → location overview → trip snapshot → included → not included → itinerary → reviews → Book Now → FAQ.
3. No map, no contact block, no "What you will experience" on this tour.
4. Reviews auto-advance every 6 seconds; arrows still work; pause on hover.
5. Book Now CTA opens the correct booking page with tour and host.
6. FAQ on this tour excludes "Can I get a private tour organized?"; `/faq` still includes it.
7. Booking page at 390 px: no description line, no overflow, correct tour image.
8. Video plays on iOS Safari and Android Chrome; poster shows before play.
9. Anchors work: `#overview`, `#itinerary`, `#dates-and-prices`.
10. Regression check these tours are unchanged:
    - `br-around-karakoram-SP26-01-jonas`
    - `br-around-karakoram-SP26-01-meths`
    - `br-around-karakoram-SP26-01-ogik`
    - one specialist tour
11. SEO metadata and JSON-LD remain valid.
12. Lighthouse/mobile check: hero, itinerary images, and video do not block first render.
13. No new console errors or hydration warnings.

---

## 11. Suggested rollout

1. **Approve plan** and answer section 7 decisions.
2. **Build variant scaffolding** using current images (so layout can be reviewed before assets arrive).
3. **Replace assets** once Lukas sends the photo pack.
4. **QA on desktop + mobile**, including regression tours.
5. **Deploy** behind the same URL; no redirects or route changes.

---

## 12. Approval

- [ ] Plan approved
- [ ] Entrance fees decision: include / keep excluded
- [ ] Day 1 lunch decision: include / keep excluded
- [ ] Day 10 lunch/dinner decision: include lunch / include lunch + dinner / keep excluded
- [ ] Reviews source: host reviews / site testimonials
- [ ] Scope: SP26-01 only / also AT26-02
- [ ] Assets received
- [ ] Ready to implement
