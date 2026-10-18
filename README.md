# NewHelpline Redesign

A polished, responsive static website for NewHelpline that preserves the original orange, blue, pale-blue and white palette.

## Features

- Responsive mobile-first layout with keyboard-accessible navigation.
- Dedicated journeys for students/parents, teachers and hiring teams.
- Context-aware enquiry tabs, learning subject shortcuts, and FAQ accordions.
- Validated enquiry form that opens WhatsApp with a prepared message; it does not store submissions on a server.
- Subtle motion with reduced-motion support, focus styles, semantic landmarks and accessible status messaging.
- SEO/social metadata, favicon, and Netlify headers/configuration.

## Run locally

Open `index.html` in a browser, or start a local server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Netlify

Deploy the repository root. The included `netlify.toml` sets the publish directory to the root.

## Before launch

Confirm the phone number and WhatsApp destination in `index.html` and `script.js`. Review all claims and contact information for accuracy. The form requires the visitor to press Send in WhatsApp; it is not a backend lead-management system.
