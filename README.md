# Leah Finkelstein — Personal Portfolio

A responsive professional portfolio for marketing, communications, and strategy opportunities. Built with ChatGPT Work / Codex using Leah's supplied résumé, photo, and LinkedIn URL.

## How the website works

- `index.html` is the homepage. `about.html`, `experience.html`, `work.html`, and `contact.html` are separate pages with shared navigation.
- `styles.css` controls colors, layout, responsive sizing, and animation.
- `script.js` handles the mobile menu, scroll progress, and section reveals.
- `assets/` contains the supplied photo. The photo is framed with CSS; the original pixels are preserved.
- `.nojekyll` tells GitHub Pages to serve these static files directly.

There are no packages to install, no server-side code, no tracking, and no API keys. Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder to preview locally.

## Publish on GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/(root)**, then **Save**. GitHub displays the live URL when deployment finishes. Later commits to main update the same website.

Expected URL after enabling Pages: https://leahfinkelstein04.github.io/Personal-Website-Project-/

## Design and accessibility

Warm ivory and sage with muted teal accents and charcoal text, large typography, a real portrait, and concise project summaries. Native expandable details reveal each project's role and contribution. Responsive layouts, keyboard focus indicators, semantic headings, image alternative text, a skip link, and reduced-motion support are included. LinkedIn links identify when they open a new tab.

## Content sources

Professional roles, dates, and performance metrics come from the supplied Fall 2026 résumé. Introductory copy also reflects Leah's stated career interests and education. Project summaries describe work from the résumé; they do not imply that confidential campaign materials are available. The original résumé PDF is not published; a download can be added after explicit approval to publish its contact information.

## Research informing the design

- Nielsen Norman Group, [5 Steps to Creating a UX-Design Portfolio](https://www.nngroup.com/articles/ux-design-portfolios/): applied the general principle of making a person's role and contribution clear, adapted here to marketing work rather than UX design.
- Nielsen Norman Group, [How to Maintain a UX Portfolio Over Time](https://www.nngroup.com/articles/maintain-ux-portfolio/): concise project descriptions and concrete results support scanning by hiring managers.
- GitHub Docs, [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): branch-based publishing for a static website.

## Assignment submission

Submit the public repository URL, the verified live GitHub Pages URL, and your own short screen-share video. In the video, explain how you used ChatGPT Work / Codex, show the mobile layout and project details, and describe a design decision you like. Keep improving this same repository after Round 1 feedback.

## Editing later

Edit the content in the relevant HTML page, use `--accent` in `styles.css` to change the accent color. The portrait CSS is tailored to the supplied screenshot; update its positioning if you replace the image. Commit changes with descriptive messages so improvements are visible in the repository history.

## Expanded profile content

Certifications, volunteer work, and organizations were checked against [Leah’s public LinkedIn profile](https://www.linkedin.com/in/leah-c-finkelstein). The supplied résumé remains the source for detailed marketing roles and results. Each page has its own title and description, and all links use relative paths compatible with GitHub Pages.

## Color palette

- Warm ivory: `#F6F3EE`
- Muted teal: `#426C65`
- Charcoal: `#293533`
- Sage: `#DCE5DC`
- Card surface: `#FCFAF7`

The softer palette retains readable contrast and reduced-motion support. The five-page version also adds public LinkedIn certifications, service roles, and organizations.
