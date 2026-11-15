# Event Job by Ksis

Free event-job discovery for Thailand and international locations. Public site: https://ksiszz.github.io/event-job/

Jobs are read hourly from public employer recruitment feeds (Fever and Informa). Only event-related titles are imported. Sources may be incomplete; country/province fields are omitted where unknown. Vacancy titles and application links lead directly to the original employer. No application is submitted on a visitor's behalf.

GitHub Pages hosts the public interface. Sites hosts sign-in, a D1 submission database and protected moderation endpoints. Employer posts require sign-in and remain pending until reviewed. AI moderation uses Qwen2.5 1.5B through Ollama on a standard public Ubuntu GitHub runner, only when there are pending submissions. Uncertain/risky posts are held for the owner. A model result is not employer verification. No candidate selection is performed.

Hourly workflow: minute 37, subject to GitHub queue delay. The workflow refuses private repositories and uses no paid APIs, premium runners, artifacts or paid caches. Do not enable billing or paid tiers. Provider free-service terms can change.

Backend runtime secrets: `ADMIN_EMAIL` (site owner's authenticated email), `MODERATION_KEY` (queue access). Store the same moderation key as GitHub Actions secret `EVENT_MODERATION_KEY`; never commit it. This key can read only the pending posting text and save content-moderation results. It cannot edit the site, read account emails or access applicant information. No resumes are collected.

Run `npm test`, `npm run update`, `npm run build`. The website's public files are `index.html`, `app.js`, `style.css`, `snapshot.json`, `sitemap.xml`, `robots.txt`, `.nojekyll`. Source code is under `ui/`, `worker/`, `updater/`; the backend manifest retains its existing Site ID.
