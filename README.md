# NewHelpline — Candidate Recruitment Website

A responsive website explaining NewHelpline's recruitment purpose and guiding candidates and employers to the right enquiry path. The design preserves the original orange, blue, pale-blue and white brand palette.

## Pages

- `index.html`: candidate-focused homepage, “What NewHelpline does” explainer, candidate registration form, process information and FAQs.
- `hiring.html`: dedicated hiring & jobs page, company explainer, candidate/employer pathways and employer hiring enquiry form.

## What the website communicates

NewHelpline supports candidate registration and employer hiring enquiries. Candidates can share their qualifications, skills and job preferences; employers can describe the roles they need to fill. The information provides a starting point for recruitment conversations where a suitable opportunity may exist. The website does not currently publish live vacancies or guarantee interviews or placements.

## Features

- Responsive mobile navigation and accessible skip link.
- Company purpose section explaining candidate support, recruitment enquiries and employer requirements.
- Candidate application and employer enquiry forms with required fields and basic validation.
- Forms prepare WhatsApp messages for the visitor to review and send.
- Social metadata, favicon, responsive styling and reduced-motion support.
- Netlify configuration for static deployment from the repository root.

## Run locally

Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`; open `hiring.html` to preview the hiring page.

## Deployment

Deploy the repository root to Netlify. The included `netlify.toml` sets `publish = "."`.

## Important limitations before production

- The forms prepare WhatsApp messages and do not store applications in a database. Visitors must review and send the message.
- The site is not yet a live job board and has no candidate login, CV upload, employer accounts or admin dashboard.
- Confirm the phone number and WhatsApp destination and add a privacy notice appropriate for candidate information before collecting applications at scale.
