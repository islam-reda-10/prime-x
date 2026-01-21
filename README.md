# Prime X Gym Website

A responsive, mobile-first static website for Prime X Gym with Arabic and English language support.

## 🌟 Features

- **Bilingual Support**: Arabic (default) and English with easy toggle
- **Mobile-First Design**: Optimized for QR code scanning and mobile devices
- **Three Membership Tiers**: Prime, Prime Pro, and Prime X
- **Dynamic Content**: Tab-based navigation without page reloads
- **WhatsApp Integration**: Direct subscription via WhatsApp with pre-filled messages
- **Modern Design**: Black background, red accents, clean premium gym aesthetic
- **RTL Support**: Full right-to-left layout for Arabic

## 📁 Project Structure

```
/prime-x/
├── index.html          # Main HTML file
├── style.css           # All styles (mobile-first responsive design)
├── script.js           # Vanilla JavaScript (no frameworks)
├── README.md           # This file
└── /images/
    ├── logo.png        # Gym logo
    ├── prime.jpg       # Prime section banner
    ├── prime-pro.jpg   # Prime Pro section banner
    └── prime-x.jpg     # Prime X section banner
```

## 🚀 Getting Started

### Prerequisites
None! This is a pure HTML/CSS/JavaScript website with no dependencies.

### Installation

1. **Clone or download this project**
2. **Add your images** to the `/images/` folder:
   - `logo.png` - Your gym logo
   - `prime.jpg` - Banner image for Prime membership
   - `prime-pro.jpg` - Banner image for Prime Pro membership
   - `prime-x.jpg` - Banner image for Prime X membership

3. **Open `index.html`** in your browser - That's it!

### Image Requirements

- **Logo**: Recommended size 120-150px width, transparent background (PNG)
- **Banner Images**: Recommended size 1200x400px or similar aspect ratio (JPG)
- All images should be optimized for web (compressed)

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-bg: #000000;      /* Main background */
    --accent-red: #e31e24;      /* Brand red */
    --text-white: #ffffff;      /* Primary text */
    --text-gray: #cccccc;       /* Secondary text */
    --card-bg: #1a1a1a;        /* Card background */
    --border-color: #333333;    /* Border color */
    --hover-red: #ff2a30;       /* Hover state */
}
```

### WhatsApp Number
Change the WhatsApp number in `script.js`:

```javascript
const WHATSAPP_NUMBER = "+201027670123"; // Replace with your number
```

### Subscription Plans
Edit the `plansData` object in `script.js` to modify:
- Plan durations
- Prices
- Features
- Translations

## 📱 Responsive Design

The website is built mobile-first and includes breakpoints for:
- Mobile: < 576px (default)
- Small: ≥ 576px
- Medium: ≥ 768px (tablets)
- Large: ≥ 992px (desktops)
- XL: ≥ 1200px (large desktops)

## 🌍 Deployment

### Option 1: Netlify
1. Create a free account at [netlify.com](https://www.netlify.com)
2. Drag and drop the `prime-x` folder
3. Your site is live!

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Any Web Host
Upload all files via FTP to your web hosting service.

## 📋 Subscription Plans

### Prime
- 1 Month: 500 L.E
- 3 Months: 1200 L.E
- 6 Months: 1900 L.E
- 12 Months: 2800 L.E

### Prime Pro
- 1 Month: 750 L.E
- 3 Months: 1800 L.E
- 6 Months: 2800 L.E
- 12 Months: 5200 L.E

### Prime X
- 1 Month: 1100 L.E
- 3 Months: 2800 L.E
- 6 Months: 4500 L.E
- 12 Months: 8000 L.E

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **No Build Process**: Open and run directly
- **SEO Friendly**: Semantic HTML structure
- **Accessible**: WCAG compliant with focus states
- **Fast Loading**: Minimal code, optimized assets
- **Cross-Browser**: Works on all modern browsers

## 📞 Support

For issues or questions about the website, contact:
- WhatsApp: +201027670123

## 📄 License

All rights reserved © 2026 Prime X Gym

---

**Built with ❤️ for Prime X Gym**
