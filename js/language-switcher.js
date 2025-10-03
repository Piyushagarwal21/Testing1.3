// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        // Set initial language from localStorage or default to English
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        languageSelect.value = currentLang;
        
        // Apply initial language
        applyLanguage(currentLang);
        
        // Handle language change
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            localStorage.setItem('selectedLanguage', selectedLang);
            applyLanguage(selectedLang);
        });
    }
    
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
        
        // Update WhatsApp message based on language
        updateWhatsAppMessage(lang);
    }
    
    function updateWhatsAppMessage(lang) {
        const whatsappLink = document.querySelector('.whatsapp-link');
        if (whatsappLink) {
            const messages = {
                en: "Hello! I'm interested in your agricultural products.",
                es: "¡Hola! Estoy interesado en sus productos agrícolas.",
                fr: "Bonjour ! Je suis intéressé par vos produits agricoles.",
                de: "Hallo! Ich interessiere mich für Ihre landwirtschaftlichen Produkte.",
                it: "Ciao! Sono interessato ai vostri prodotti agricoli.",
                pt: "Olá! Estou interessado nos seus produtos agrícolas.",
                ru: "Привет! Меня интересуют ваши сельскохозяйственные продукты.",
                ar: "مرحبا! أنا مهتم بمنتجاتكم الزراعية.",
                hi: "नमस्ते! मैं आपके कृषि उत्पादों में रुचि रखता हूं।",
                zh: "你好！我对你们的农产品感兴趣。"
            };
            
            const message = messages[lang] || messages.en;
            const encodedMessage = encodeURIComponent(message);
            whatsappLink.href = `https://wa.me/918306894430?text=${encodedMessage}`;
        }
    }
}); 