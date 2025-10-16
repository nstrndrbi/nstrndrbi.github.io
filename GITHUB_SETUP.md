# GitHub Pages Setup Guide

Follow these steps to host your portfolio website on GitHub Pages (username.github.io)

## Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account if you don't have one
3. Verify your email address

## Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. **Important:** Name your repository exactly as: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
   - Example: If your username is `nastaran-darabi`, name it `nastaran-darabi.github.io`
4. Make it **Public**
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 3: Upload Your Files

### Option A: Using Git (Recommended)

1. Open PowerShell or Command Prompt in your portfolio folder
2. Run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Go to your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop ALL files from your portfolio folder:
   - index.html
   - styles.css
   - script.js
   - Nastaran_photo.jpg
   - Nastaran Darabi_CV_Oct_2025.pdf
   - README.md
   - .gitignore
4. Click "Commit changes"

## Step 4: Enable GitHub Pages

1. Go to your repository settings (Settings tab)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click "Save"
5. Wait 2-3 minutes for deployment

## Step 5: Access Your Website

Your website will be live at:
```
https://YOUR-USERNAME.github.io
```

Example: `https://nastaran-darabi.github.io`

## Step 6: Update Content

1. Update the HTML file with your actual CV information
2. Replace placeholder text with your real data
3. Commit and push changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Changes will appear on your website within 1-2 minutes.

## Troubleshooting

### Website not loading?
- Wait 5-10 minutes after initial setup
- Check repository name matches: `username.github.io`
- Ensure repository is Public
- Check GitHub Pages settings are correct

### Changes not appearing?
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Wait 1-2 minutes for changes to deploy

### Images not showing?
- Ensure image files are uploaded
- Check file names match exactly (case-sensitive)
- Verify paths in HTML are correct

## Custom Domain (Optional)

If you have a custom domain (e.g., nastaran-darabi.com):

1. Update the `CNAME` file with your domain name
2. In your domain registrar, add these DNS records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: YOUR-USERNAME.github.io
3. In GitHub repository settings, add your custom domain under "Pages"

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Git Documentation: https://git-scm.com/doc
- Contact: nastaran.darabi@email.com

---

## Quick Reference Commands

### Update website after making changes:
```bash
git add .
git commit -m "Describe your changes"
git push
```

### Check status:
```bash
git status
```

### View commit history:
```bash
git log
```

Good luck with your portfolio! 🚀

