# Nastaran Darabi - Portfolio Website

A sophisticated, modern portfolio website designed for a PhD graduate. This website features elegant animations, responsive design, and a professional aesthetic perfect for showcasing academic achievements, research, and publications.

## Features

- **Modern & Sophisticated Design**: Clean, professional layout with elegant typography
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Interactive Elements**: Animated counters, hover effects, and dynamic interactions
- **SEO Optimized**: Semantic HTML with proper meta tags
- **Fast Loading**: Optimized performance with minimal dependencies
- **Easy to Customize**: Well-organized code with clear sections

## Sections

1. **Hero Section**: Eye-catching introduction with photo and call-to-action buttons
2. **About**: Personal introduction with animated statistics
3. **Research**: Showcase of research areas and interests
4. **Publications**: List of academic publications with details
5. **Experience & Education**: Timeline of career and academic milestones
6. **Skills**: Technical and soft skills categorized
7. **Contact**: Contact form and information with social links

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Google Fonts (Playfair Display & Inter)

## Customization Guide

### 1. Personal Information

Edit `index.html` to update:

- **Name**: Change "Nastaran Darabi" in the hero section (line 48-49)
- **Title/Subtitle**: Update the subtitle and description (lines 51-56)
- **Contact Information**: Update email, LinkedIn, GitHub, and location in the contact section (lines 296-335)

### 2. Photo

Replace `Nastaran_photo.jpg` with your own photo. For best results:
- Use a high-quality image (at least 800x800px)
- Square aspect ratio works best
- Professional headshot recommended

### 3. Resume/CV

Replace `Nastaran Darabi_CV_Oct_2025.pdf` with your CV file, or update the filename in:
- Line 59 of `index.html` (Download CV button)

### 4. About Section

Edit the about text (lines 68-80 in `index.html`):
- Update your personal statement
- Modify the statistics numbers in the `data-target` attributes (lines 86, 90, 94, 98)

### 5. Research Areas

Customize research cards (lines 107-161 in `index.html`):
- Update titles and descriptions
- Keep or modify the SVG icons

### 6. Publications

Add or modify publications (lines 169-209 in `index.html`):
- Update titles, authors, journals, and years
- Add tags as needed
- Copy the `<article class="publication-item">` structure for more publications

### 7. Experience & Education

Update timeline items (lines 222-279 in `index.html`):
- Change dates, titles, locations, and descriptions
- Add more timeline items by copying the structure

### 8. Skills

Modify skills in each category (lines 288-336 in `index.html`):
- Add or remove skills as needed
- Customize category names

### 9. Color Scheme

Edit CSS variables in `styles.css` (lines 5-15):

```css
:root {
    --primary-color: #2c3e50;      /* Main text and headings */
    --secondary-color: #e74c3c;     /* Accent color */
    --accent-color: #3498db;        /* Secondary accent */
    /* ... other colors */
}
```

### 10. Fonts

To change fonts, update the Google Fonts import in `index.html` (line 10) and CSS variables in `styles.css`:

```css
--font-heading: 'Your Heading Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

## Optional Features

The JavaScript file includes commented-out optional features you can enable:

### Dark Mode Toggle
Uncomment line 334 in `script.js`:
```javascript
new DarkModeToggle();
```

### Typing Effect
Uncomment lines 210-214 in `script.js`:
```javascript
const nameElement = document.querySelector('.name');
if (nameElement) {
    const originalText = nameElement.textContent;
    typeWriter(nameElement, originalText, 80);
}
```

### Cursor Trail
Uncomment lines 282-284 in `script.js`:
```javascript
if (window.innerWidth > 768) {
    new CursorTrail();
}
```

## Setup & Installation

1. **Download the files**: Ensure you have all files in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `Nastaran_photo.jpg`
   - `Nastaran Darabi_CV_Oct_2025.pdf`

2. **Open in browser**: Simply double-click `index.html` or open it with your web browser.

3. **Deploy**: Upload all files to your web hosting service. Recommended platforms:
   - GitHub Pages (Free)
   - Netlify (Free)
   - Vercel (Free)
   - Traditional web hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance:
- Minimal external dependencies (only GSAP and Google Fonts)
- Efficient CSS with hardware-accelerated animations
- Lazy loading of animations
- Mobile-optimized

## Contact Form

The contact form currently logs submissions to the console. To make it functional:

1. **Using a form service** (Recommended):
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [Getform](https://getform.io/)

2. **Using your own backend**: Update the form handling in `script.js` (line 177) to send data to your API.

## Accessibility

The website follows accessibility best practices:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing

## License

This portfolio template is free to use for personal and commercial projects.

## Support

For questions or issues, please contact nastaran.darabi@email.com

---

**Note**: Remember to update all placeholder content with your actual information before deploying the website!

## Deployment Checklist

- [ ] Updated all personal information
- [ ] Replaced photo with your image
- [ ] Uploaded your CV/Resume
- [ ] Customized About section
- [ ] Added your research areas
- [ ] Listed your publications
- [ ] Updated experience timeline
- [ ] Modified skills section
- [ ] Updated contact information
- [ ] Tested on multiple devices
- [ ] Tested all links
- [ ] Checked for spelling/grammar
- [ ] Optimized images
- [ ] Set up contact form (if needed)
- [ ] Tested in different browsers

Good luck with your portfolio! 🎓

