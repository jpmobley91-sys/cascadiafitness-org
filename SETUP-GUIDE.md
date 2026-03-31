# CascadiaFitness.org — Setup Guide

**What you're doing:** Getting your website running locally on your computer, then deploying it live to cascadiafitness.org using GitHub + Vercel.

**Time estimate:** 45–60 minutes for the full setup.

**What you'll need:**
- A computer (Mac or Windows)
- An internet connection
- The cascadiafitness-scaffold.tar.gz file (you already have this)

---

## Part 1: Install Node.js (10 minutes)

Node.js is what runs your website on your computer during development.

### Mac

1. Open your web browser and go to: https://nodejs.org
2. Click the big green button that says **"LTS"** (Long Term Support). This downloads an installer.
3. Open the downloaded file (it will be called something like `node-v22.x.x.pkg`)
4. Click through the installer — accept the defaults on every screen.
5. When it says "Installation Complete," you're done.

### Windows

1. Open your web browser and go to: https://nodejs.org
2. Click the big green button that says **"LTS"**. This downloads an installer.
3. Open the downloaded file (it will be called something like `node-v22.x.x-x64.msi`)
4. Click through the installer — accept the defaults on every screen.
5. **Important:** Make sure the checkbox "Automatically install the necessary tools" is checked.
6. When it says "Installation Complete," you're done.

### Verify it worked

1. Open **Terminal** (Mac) or **Command Prompt** (Windows).
   - Mac: Press `Cmd + Space`, type "Terminal", press Enter.
   - Windows: Press `Windows key`, type "cmd", press Enter.
2. Type this and press Enter:
   ```
   node --version
   ```
3. You should see something like `v22.x.x`. If you do, Node.js is installed.

---

## Part 2: Extract and Run the Project (10 minutes)

### Mac

1. Find the `cascadiafitness-scaffold.tar.gz` file in your Downloads folder.
2. Double-click it. This creates a folder called `cascadiafitness`.
3. Drag that folder somewhere you'll remember — your Desktop or Documents folder works fine.
4. Open Terminal and type:
   ```
   cd ~/Desktop/cascadiafitness
   ```
   (Replace `Desktop` with `Documents` if you put it there.)
5. Install the project's dependencies:
   ```
   npm install
   ```
   This takes 1–2 minutes. You'll see a lot of text scrolling. That's normal.
6. Start the development server:
   ```
   npm run dev
   ```
7. You should see a message that includes `http://localhost:3000`
8. Open your web browser and go to: **http://localhost:3000**

You should see your CascadiaFitness.org homepage.

### Windows

1. Find the `cascadiafitness-scaffold.tar.gz` file in your Downloads folder.
2. Right-click it → **Extract All** → choose your Desktop or Documents folder → **Extract**.
3. Open Command Prompt and type:
   ```
   cd %USERPROFILE%\Desktop\cascadiafitness
   ```
   (Replace `Desktop` with `Documents` if you put it there.)
4. Install the project's dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```
6. Open your web browser and go to: **http://localhost:3000**

**To stop the server later:** Go back to Terminal/Command Prompt and press `Ctrl + C`.

---

## Part 3: Create a GitHub Account and Repository (10 minutes)

GitHub stores your code online. Vercel pulls from GitHub to deploy your site.

1. Go to https://github.com and click **Sign Up**.
2. Create your account (use whatever email you prefer).
3. Once logged in, click the **+** icon in the top-right corner → **New repository**.
4. Fill in:
   - **Repository name:** `cascadiafitness`
   - **Description:** `CascadiaFitness.org website`
   - **Visibility:** Private (you can change this later)
   - Do NOT check "Add a README file" — your project already has one.
5. Click **Create repository**.
6. You'll see a page with setup instructions. Leave this browser tab open — you'll need it in a moment.

### Install Git (if you don't have it)

**Mac:** Git is usually pre-installed. In Terminal, type `git --version`. If it prompts you to install developer tools, click **Install** and wait.

**Windows:** Go to https://git-scm.com/download/win and download the installer. Run it with all default settings.

### Push your code to GitHub

Open Terminal (Mac) or Command Prompt (Windows). Make sure you're in the cascadiafitness folder, then run these commands one at a time:

```
git init
git add .
git commit -m "Initial scaffold"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/cascadiafitness.git
git push -u origin main
```

**Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username** in the line that starts with `git remote`.

When prompted for credentials, enter your GitHub username and a **Personal Access Token** (not your password). To create a token:
1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Give it a name like "CascadiaFitness"
4. Check the box for **repo**
5. Click **Generate token**
6. Copy the token and paste it when prompted for a password

Refresh the GitHub page in your browser. You should see your files listed.

---

## Part 4: Deploy to Vercel (10 minutes)

1. Go to https://vercel.com and click **Sign Up**.
2. Choose **Continue with GitHub** — this links your accounts.
3. Authorize Vercel to access your GitHub.
4. Once on the Vercel dashboard, click **Add New → Project**.
5. You should see your `cascadiafitness` repository listed. Click **Import**.
6. On the configuration screen, leave everything as-is. Vercel auto-detects Next.js.
7. Click **Deploy**.
8. Wait 1–2 minutes. You'll see a build log. When it says **Congratulations!**, your site is live.
9. Vercel gives you a temporary URL like `cascadiafitness-abc123.vercel.app`. Click it to see your live site.

---

## Part 5: Connect Your Domain (15 minutes)

This tells the internet that cascadiafitness.org should point to your Vercel site.

### In Vercel

1. From your Vercel project dashboard, click **Settings** → **Domains**.
2. Type `cascadiafitness.org` and click **Add**.
3. Vercel will show you DNS records you need to set. It will look something like:
   - **Type:** A
   - **Name:** @
   - **Value:** 76.76.21.21
   
   And possibly:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** cname.vercel-dns.com

Write these down or keep this tab open.

### In Network Solutions

1. Log into your Network Solutions account.
2. Go to **My Domain Names** → click on **cascadiafitness.org**.
3. Find **DNS Settings** or **Advanced DNS** or **Manage DNS**.
4. Look for existing A records or CNAME records. You may need to delete old ones.
5. Add the records Vercel gave you:
   - Add an **A record**: Host = `@`, Value = `76.76.21.21`
   - Add a **CNAME record**: Host = `www`, Value = `cname.vercel-dns.com`
6. Save your changes.

**DNS propagation takes up to 48 hours**, but often works within 15–30 minutes. You can check progress at https://dnschecker.org by entering `cascadiafitness.org`.

Once propagation completes, visiting cascadiafitness.org in your browser will show your site. Vercel automatically sets up HTTPS (the lock icon).

---

## Part 6: Add Google Analytics (5 minutes)

Your roadmap requires traffic data for the NBHWC pitch. Do this on Day 1.

1. Go to https://analytics.google.com
2. Click **Start measuring** and create an account (name it "CascadiaFitness").
3. Create a property called "cascadiafitness.org".
4. Choose **Web** as the platform.
5. Enter your website URL: `https://cascadiafitness.org`
6. Google will give you a **Measurement ID** that looks like `G-XXXXXXXXXX`.
7. Come back to our chat with that ID, and I'll add the tracking code to your site.

---

## Ongoing: How to Make Updates

After the initial setup, updating your site follows this pattern every time:

1. Make changes to files in your `cascadiafitness` folder.
2. Open Terminal/Command Prompt and navigate to the folder.
3. Run:
   ```
   git add .
   git commit -m "Brief description of what you changed"
   git push
   ```
4. Vercel automatically detects the push and redeploys in ~30 seconds.
5. Your live site updates automatically. No uploading, no file manager.

---

## Troubleshooting

**"command not found: node"** — Node.js didn't install correctly. Re-download from nodejs.org and try again. On Mac, you may need to close and reopen Terminal after installing.

**"command not found: git"** — Git isn't installed. See the Git installation step above.

**"npm install" shows errors** — Make sure you're inside the `cascadiafitness` folder (use `cd cascadiafitness` first). If errors persist, try deleting the `node_modules` folder and running `npm install` again.

**Site shows "404" after DNS change** — DNS propagation can take up to 48 hours. Check https://dnschecker.org to see if your domain is pointing to Vercel yet.

**Vercel build fails** — Check the build log in Vercel's dashboard. The error message will tell you what's wrong. Screenshot it and bring it to our next chat.
