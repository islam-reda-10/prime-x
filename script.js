// ==========================================
// SUBSCRIPTION PLANS DATA
// ==========================================
const plansData = {
    prime: {
        title: { ar: "برايم", en: "Prime" },
        plans: [
            {
                duration: { ar: "شهر واحد", en: "1 Month" },
                price: 500,
                features: {
                    ar: [
                        "يومين أسبوعياً",
                        "دعوة واحدة",
                        "جهاز InBody واحد"
                    ],
                    en: [
                        "2 Days weekly",
                        "1 Invitation",
                        "1 InBody"
                    ]
                }
            },
            {
                duration: { ar: "3 شهور", en: "3 Months" },
                price: 1200,
                features: {
                    ar: [
                        "يومين أسبوعياً",
                        "دعوتين",
                        "جهازين InBody",
                        "جلسة واحدة (ساونا / جاكوزي / بخار)"
                    ],
                    en: [
                        "2 Days weekly",
                        "2 Invitations",
                        "2 InBody",
                        "1 Session (Sauna / Jacuzzi / Steam)"
                    ]
                }
            },
            {
                duration: { ar: "6 شهور", en: "6 Months" },
                price: 1900,
                features: {
                    ar: [
                        "يومين أسبوعياً",
                        "4 دعوات",
                        "4 أجهزة InBody",
                        "جلستين (ساونا / جاكوزي / بخار)"
                    ],
                    en: [
                        "2 Days weekly",
                        "4 Invitations",
                        "4 InBody",
                        "2 Sessions (Sauna / Jacuzzi / Steam)"
                    ]
                }
            },
            {
                duration: { ar: "12 شهر", en: "12 Months" },
                price: 2800,
                features: {
                    ar: [
                        "يومين أسبوعياً",
                        "6 دعوات",
                        "6 أجهزة InBody",
                        "2 سبا",
                        "جلسة استشفاء واحدة",
                        "30 يوم تجميد"
                    ],
                    en: [
                        "2 Days weekly",
                        "6 Invitations",
                        "6 InBody",
                        "2 Spa",
                        "1 Recovery Session",
                        "30 Days Freeze"
                    ]
                }
            }
        ]
    },
    "prime-pro": {
        title: { ar: "برايم برو", en: "Prime Pro" },
        plans: [
            {
                duration: { ar: "شهر واحد", en: "1 Month" },
                price: 750,
                features: {
                    ar: [
                        "4 أيام أسبوعياً",
                        "دعوتين",
                        "جهاز InBody واحد",
                        "جلسة واحدة"
                    ],
                    en: [
                        "4 Days weekly",
                        "2 Invitations",
                        "1 InBody",
                        "1 Session"
                    ]
                }
            },
            {
                duration: { ar: "3 شهور", en: "3 Months" },
                price: 1800,
                features: {
                    ar: [
                        "4 أيام أسبوعياً",
                        "4 دعوات",
                        "جهازين InBody",
                        "جلستين"
                    ],
                    en: [
                        "4 Days weekly",
                        "4 Invitations",
                        "2 InBody",
                        "2 Sessions"
                    ]
                }
            },
            {
                duration: { ar: "6 شهور", en: "6 Months" },
                price: 2800,
                features: {
                    ar: [
                        "4 أيام أسبوعياً",
                        "5 دعوات",
                        "5 أجهزة InBody",
                        "5 سبا",
                        "جلسة استشفاء واحدة",
                        "15 يوم تجميد"
                    ],
                    en: [
                        "4 Days weekly",
                        "5 Invitations",
                        "5 InBody",
                        "5 Spa",
                        "1 Recovery Session",
                        "15 Days Freeze"
                    ]
                }
            },
            {
                duration: { ar: "12 شهر", en: "12 Months" },
                price: 5200,
                features: {
                    ar: [
                        "4 أيام أسبوعياً",
                        "10 دعوات",
                        "10 أجهزة InBody",
                        "10 سبا",
                        "3 جلسات استشفاء",
                        "30 يوم تجميد"
                    ],
                    en: [
                        "4 Days weekly",
                        "10 Invitations",
                        "10 InBody",
                        "10 Spa",
                        "3 Recovery Sessions",
                        "30 Days Freeze"
                    ]
                }
            }
        ]
    },
    "prime-x": {
        title: { ar: "برايم إكس", en: "Prime X" },
        plans: [
            {
                duration: { ar: "شهر واحد", en: "1 Month" },
                price: 1100,
                features: {
                    ar: [
                        "أيام غير محدودة",
                        "دعوتين",
                        "جهاز InBody واحد",
                        "سبا واحد"
                    ],
                    en: [
                        "Unlimited Days",
                        "2 Invitations",
                        "1 InBody",
                        "1 Spa"
                    ]
                }
            },
            {
                duration: { ar: "3 شهور", en: "3 Months" },
                price: 2800,
                features: {
                    ar: [
                        "أيام غير محدودة",
                        "4 دعوات",
                        "3 أجهزة InBody",
                        "3 سبا"
                    ],
                    en: [
                        "Unlimited Days",
                        "4 Invitations",
                        "3 InBody",
                        "3 Spa"
                    ]
                }
            },
            {
                duration: { ar: "6 شهور", en: "6 Months" },
                price: 4500,
                features: {
                    ar: [
                        "أيام غير محدودة",
                        "8 دعوات",
                        "6 أجهزة InBody",
                        "6 سبا",
                        "3 جلسات استشفاء",
                        "30 يوم تجميد"
                    ],
                    en: [
                        "Unlimited Days",
                        "8 Invitations",
                        "6 InBody",
                        "6 Spa",
                        "3 Recovery Sessions",
                        "30 Days Freeze"
                    ]
                }
            },
            {
                duration: { ar: "12 شهر", en: "12 Months" },
                price: 8000,
                features: {
                    ar: [
                        "أيام غير محدودة",
                        "12 دعوة",
                        "12 جهاز InBody",
                        "12 سبا",
                        "6 جلسات استشفاء + 2 إضافية (مساج / إبر جافة / حجامة)",
                        "60 يوم تجميد"
                    ],
                    en: [
                        "Unlimited Days",
                        "12 Invitations",
                        "12 InBody",
                        "12 Spa",
                        "6 Recovery Sessions + 2 extra (Massage / Dry Needling / Cupping)",
                        "60 Days Freeze"
                    ]
                }
            }
        ]
    }
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentLanguage = "en";
let currentTab = "prime";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "+201027670123";

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initializeLanguage();
    initializeEventListeners();
    renderContent();
});

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================
function initializeLanguage() {
    // Set default language to Arabic
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    updateLanguageToggle();
}

function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    updateLanguageToggle();
    updateAllTranslations();
    renderContent();
}

function updateLanguageToggle() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function updateAllTranslations() {
    // Update tab labels
    document.querySelectorAll(".tab-btn span").forEach(span => {
        span.textContent = span.dataset[currentLanguage];
    });
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function initializeEventListeners() {
    // Language toggle buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            switchLanguage(btn.dataset.lang);
        });
    });

    // Tab buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            switchTab(btn.dataset.tab);
        });
    });
}

// ==========================================
// TAB MANAGEMENT
// ==========================================
function switchTab(tab) {
    currentTab = tab;
    
    // Update active tab button
    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.dataset.tab === tab) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Render new content
    renderContent();
}

// ==========================================
// CONTENT RENDERING
// ==========================================
function renderContent() {
    const contentArea = document.getElementById("content");
    const planData = plansData[currentTab];
    
    if (!planData) return;

    // Build HTML content
    let html = `
        <div class="container fade-in">
            <h2 class="section-title">${planData.title[currentLanguage]}</h2>
            <div class="cards-grid">
    `;

    // Generate subscription cards
    planData.plans.forEach(plan => {
        html += generateCard(plan);
    });

    html += `
            </div>
        </div>
    `;

    // Update content with fade effect
    contentArea.style.opacity = "0";
    setTimeout(() => {
        contentArea.innerHTML = html;
        contentArea.style.transition = "opacity 0.3s ease";
        contentArea.style.opacity = "1";
        
        // Attach event listeners to CTA buttons
        attachCTAListeners();
    }, 150);
}

// ==========================================
// CARD GENERATION
// ==========================================
function generateCard(plan) {
    const duration = plan.duration[currentLanguage];
    const features = plan.features[currentLanguage];
    const ctaText = currentLanguage === "ar" ? "احجز الآن" : "Subscribe Now";
    const currencyText = currentLanguage === "ar" ? "جنيه" : "L.E";

    let featuresHTML = features.map(feature => `<li>${feature}</li>`).join("");

    return `
        <div class="card">
            <div class="card-header">
                <div class="card-duration">${duration}</div>
                <div class="card-price">
                    ${plan.price} <span class="card-price-currency">${currencyText}</span>
                </div>
            </div>
            <ul class="card-features">
                ${featuresHTML}
            </ul>
            <button class="cta-button" data-duration="${duration}" data-price="${plan.price}">
                ${ctaText}
            </button>
        </div>
    `;
}

// ==========================================
// WHATSAPP INTEGRATION
// ==========================================
function attachCTAListeners() {
    document.querySelectorAll(".cta-button").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const duration = e.target.dataset.duration;
            const price = e.target.dataset.price;
            openWhatsApp(duration, price);
        });
    });
}

function openWhatsApp(duration, price) {
    const planName = plansData[currentTab].title[currentLanguage];
    const currencyText = currentLanguage === "ar" ? "جنيه" : "L.E";
    
    let message;
    if (currentLanguage === "ar") {
        message = `مرحباً، أود الاشتراك في:\n\nالباقة: ${planName}\nالمدة: ${duration}\nالسعر: ${price} ${currencyText}\n\nشكراً لكم`;
    } else {
        message = `Hello, I would like to subscribe to:\n\nPlan: ${planName}\nDuration: ${duration}\nPrice: ${price} ${currencyText}\n\nThank you`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappURL, "_blank");
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
// Smooth scroll to top when switching tabs
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Add scroll to top on tab switch
const originalSwitchTab = switchTab;
switchTab = function(tab) {
    originalSwitchTab(tab);
    scrollToTop();
};
