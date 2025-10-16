# 🚀 Quick Deploy to GitHub Pages

## Prerequisites
- GitHub account (create one at github.com)
- Git installed (✓ You have it!)

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your GitHub username)
3. Make it **Public**
4. **Don't** add README, .gitignore, or license
5. Click "Create repository"

### 2. Copy these commands

After creating the repository, GitHub will show you commands. Use these instead:

```bash
# Add all files to git
git add .

# Create first commit
git commit -m "Initial portfolio website"

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Remember to replace YOUR-USERNAME with your actual GitHub username!**

### 3. Wait 2-3 minutes

Your website will be live at: `https://YOUR-USERNAME.github.io`

### 4. Update Your Content

1. Edit the HTML file with your actual CV information
2. Save changes
3. Run these commands:

```bash
git add .
git commit -m "Update content"
git push
```

## Need Help?

See `GITHUB_SETUP.md` for detailed instructions.

---

## Quick Tips

✅ Repository must be named exactly: `username.github.io`  
✅ Repository must be Public  
✅ Use your exact GitHub username  
✅ Wait 2-3 minutes for first deployment  
✅ Changes appear within 1-2 minutes  

## Common Issues

**Issue:** Website shows 404  
**Solution:** Check repository name matches your username exactly

**Issue:** Changes not showing  
**Solution:** Hard refresh (Ctrl+F5) or clear cache

**Issue:** Images not loading  
**Solution:** Ensure image files are uploaded and names match exactly (case-sensitive)

## Next Steps

1. Create your GitHub repository
2. Run the commands above
3. Fill out `CV_INFO_TEMPLATE.txt` with your actual information
4. Update `index.html` with your details
5. Commit and push changes

Good luck! 🎓

