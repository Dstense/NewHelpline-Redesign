# NewHelpline — Candidate Recruitment Website

A responsive recruitment and candidate information website using the existing NewHelpline orange, blue, pale-blue and white brand palette.

## Pages

- `index.html`: candidate-focused homepage, hiring-process information, FAQs and candidate registration form.
- `hiring.html`: dedicated hiring and jobs information page with a separate employer enquiry form.

## Features

- Responsive mobile navigation and accessible skip link.
- Candidate benefits, application steps, FAQs and clear application calls to action.
- Required fields and basic validation for candidate and employer enquiry forms.
- Candidate and employer forms prepare WhatsApp messages for the visitor to review and send.
- Social metadata, favicon, responsive styling and reduced-motion support.
- Netlify configuration for static deployment from the repository root.

## Run locally

Open `index.html` in a browser, or run a local server in this directory:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` and open `hiring.html` to preview the hiring page.

## Deployment

Deploy the repository root to Netlify. The included `netlify.toml` sets `publish = "."`.

## Important limitations before production

- The forms do not store applications in a database. They open a prefilled WhatsApp message; a visitor must review and send it.
- This is not yet a live job board and contains no live vacancies, employer accounts, candidate login, CV upload or admin dashboard.
- Confirm the WhatsApp/phone destination and all company details before publishing.
- Add an appropriate privacy notice and retention policy before collecting candidate data at scale.
- Do not add fake vacancy listings, reviews, placement rates or candidate statistics.
