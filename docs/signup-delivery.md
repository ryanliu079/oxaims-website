# Signup collection

As of 29 October 2026, `/join` links to the society-owned Google Form instead of submitting to FormSubmit.

- Respond: https://docs.google.com/forms/d/e/1FAIpQLScq1BKjBcupkl1PAbH1qppT6NBogXGBay9y9-654q5-uQzO4w/viewform?usp=publish-editor
- Edit: https://docs.google.com/forms/d/13ura0evMix0ZEJsKBO_zSsK27oPDlGcGEiUbxY1eVMQ/edit
- Owner: oxfordaimakers@gmail.com
- Required: typed email address, full name, contact consent. Optional: course and interests.
- Google sign-in is not required. Responses and the linked spreadsheet are private; the results summary is disabled.
- New-response email notifications are enabled for the society account. Responders are configured to always receive a copy.

The website link works without JavaScript. The old POST endpoint returns HTTP 410 with a refresh instruction so a stale browser tab cannot continue to FormSubmit or claim a new registration succeeded. Existing D1 registrations and the private admin CSV export remain intact; new Google Form responses are not mirrored into D1.

Verification on 29 October 2026: a labelled setup test submitted successfully while signed out of Google. The response appeared in the form dashboard, and both the respondent receipt (17:21 London time) and society notification (17:22) arrived in oxfordaimakers@gmail.com. The labelled setup-test response is not a member registration.

Run `node --test tests/signup-flow.test.mjs` to check that the live link is present, the old client handoff is gone, and the retired endpoint cannot report success.
