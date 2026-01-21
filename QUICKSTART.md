# 🚀 Quick Start Guide - Prime X Gym Website

## ⚡ Fastest Way to Preview (3 Steps)

### Method 1: Direct Browser Open (Easiest)
1. **Navigate** to `/Users/islam.reda/Downloads/prime-x/`
2. **Double-click** `index.html`
3. **Done!** Your browser will open the website

### Method 2: Local Server (Recommended for Testing)
```bash
cd /Users/islam.reda/Downloads/prime-x
python3 server.py
```
Your browser will automatically open to http://localhost:8000

---

## 📸 Before You Start

### ⚠️ Add Your Images First!

The website needs 4 images in the `images/` folder:

1. **logo.png** - Your gym logo
2. **prime.jpg** - Prime membership banner  
3. **prime-pro.jpg** - Prime Pro membership banner
4. **prime-x.jpg** - Prime X membership banner

**Without these images, you'll see broken image icons.**

**Free gym images:**
- https://unsplash.com/s/photos/gym
- https://www.pexels.com/search/gym/

---

## ✅ Testing Checklist

Open `index.html` and verify:

- [ ] Logo appears at top
- [ ] "Prime X" title visible
- [ ] "Commit to be fit" slogan shows
- [ ] Language toggle works (AR | EN)
- [ ] Three tabs visible (Prime, Prime Pro, Prime X)
- [ ] Clicking tabs changes content
- [ ] Banner image shows for each section
- [ ] 4 subscription cards per section
- [ ] "احجز الآن" / "Subscribe Now" buttons present
- [ ] Clicking button opens WhatsApp
- [ ] Website looks good on mobile (resize browser)

---

## 📱 Mobile Testing

### Option A: Chrome DevTools
1. Open `index.html` in Chrome
2. Press `F12` (or `Cmd+Option+I` on Mac)
3. Click the device icon (or press `Cmd+Shift+M`)
4. Select different phone models to test

### Option B: Real Phone
1. Run local server: `python3 server.py`
2. Find your Mac's IP address:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
3. On your phone, open: `http://YOUR_IP:8000`

---

## 🚀 Deploy in 2 Minutes

### Netlify (Easiest!)

1. **Go to** https://www.netlify.com
2. **Sign up** (free, no credit card needed)
3. **Click** "Add new site" → "Deploy manually"
4. **Drag the entire `prime-x` folder** into the browser
5. **Done!** You'll get a live URL like `https://prime-x-123.netlify.app`

**Optional:** Change site name in Netlify settings

---

## 🔧 Quick Customizations

### Change WhatsApp Number
**File:** `script.js` (line 138)
```javascript
const WHATSAPP_NUMBER = "+201027670123"; // ← Change this
```

### Change Colors
**File:** `style.css` (lines 11-18)
```css
:root {
    --primary-bg: #000000;    /* Background */
    --accent-red: #e31e24;    /* Red accent */
    --text-white: #ffffff;    /* Text */
}
```

### Change Prices
**File:** `script.js` (lines 5-207)
Edit the `plansData` object

---

## 📂 Project Files

```
prime-x/
├── index.html          ← Main page
├── style.css           ← All styles
├── script.js           ← All functionality
├── server.py           ← Local test server
├── README.md           ← Full documentation
├── TESTING.html        ← Detailed testing guide
├── PROJECT_COMPLETE.md ← Project summary
└── images/             ← Put your images here!
    ├── logo.png
    ├── prime.jpg
    ├── prime-pro.jpg
    └── prime-x.jpg
```

---

## 🆘 Troubleshooting

### Images not showing?
- Check files exist in `/images/` folder
- Verify exact filenames (case-sensitive)
- Make sure logo is `.png`, others are `.jpg`

### WhatsApp not working?
- Number format must be: `+[country][number]`
- Test on real phone (works better than desktop)

### Website looks broken?
- Clear browser cache (Cmd+Shift+R on Mac)
- Check browser console for errors (F12)

---

## 🎯 You're All Set!

1. ✅ Add your 4 images
2. ✅ Open `index.html` to test
3. ✅ Deploy to Netlify
4. ✅ Generate QR code from your live URL
5. ✅ Print QR codes for your gym!

---

## 📚 More Help

- **Full docs:** Read `README.md`
- **Testing guide:** Open `TESTING.html` in browser
- **Code help:** All files are well-commented

---

**Ready to launch? Let's go! 💪🏋️**

*Prime X Gym - Commit to be fit!*
