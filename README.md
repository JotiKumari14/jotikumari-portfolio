# Joti Kumari — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, Lucide React, and EmailJS.

## Requirements

- Node.js 20.19+ (or a compatible newer supported version)
- npm
- Git (for GitHub deployment)

Check versions:

```powershell
node -v
npm -v
git --version
```

## Local setup

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open the local URL shown in the terminal, normally `http://localhost:5173`.

## EmailJS setup

1. Create/sign in to an account at https://www.emailjs.com/.
2. Add an email service and note the Service ID.
3. Create an email template and note its Template ID.
4. Set the template's **To Email** to your own inbox.
5. Use these template variables in the template body:

   - `{{from_name}}`
   - `{{reply_to}}`
   - `{{subject}}`
   - `{{message}}`

   Set Reply-To to `{{reply_to}}` if the template editor offers that field.
6. In EmailJS account/API settings, copy the public key.
7. Put the values in `.env.local`:

```dotenv
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

8. Restart the dev server after changing environment values.
9. Test the form with an email you can access and check inbox/spam.

EmailJS public keys are meant for browser usage. Do not store private server credentials in `VITE_` variables. Configure EmailJS allowed origins/domain restrictions and any available anti-abuse protections before sharing the public site.

## Add your resume PDF

Place your final PDF at `public/resume.pdf` if you later add a Resume download link. Keep it up to date and check the PDF before publishing. No resume file is bundled by default.

## Build and preview

```powershell
npm run build
npm run preview
```

Vite writes the production output to `dist/`. Fix any build errors before deployment.

## Deploy to Vercel using GitHub

1. Create a GitHub repository named `joti-portfolio`.
2. In the project folder:

```powershell
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/joti-portfolio.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your real GitHub username. If Git says the remote already exists, inspect it with `git remote -v` instead of adding it again.

3. Sign in at https://vercel.com/ with GitHub.
4. Select **Add New → Project**, import `joti-portfolio`, and keep the Vite defaults:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. In Project Settings → Environment Variables, add the three EmailJS variables from `.env.local` for Production (and Preview if you want to test there).
6. Deploy. Open the generated URL and test every section and the contact form.
7. Every future push to the connected production branch can trigger a new deployment.

## Alternative: Vercel CLI

```powershell
npm install -g vercel
vercel
```

Follow the prompts for a preview deployment. When it looks correct:

```powershell
vercel --prod
```

## Accessibility, SEO and quality checks

- Semantic sections, labelled form inputs, keyboard focus states, skip link, and reduced-motion support are included.
- `index.html` includes title, description, theme color, Open Graph metadata, and favicon.
- Replace the default social preview image/metadata if you add a custom domain.
- Run Lighthouse in Chrome DevTools on the deployed production URL. Record the actual Performance, Accessibility, Best Practices, and SEO results; no score is guaranteed in advance.
- Test at mobile/tablet/desktop widths, keyboard navigation, external links, and contact-form success/failure.
- Make sure all project descriptions and links accurately represent work you have actually completed.
