function toggleLanguage() {
    const enContent = document.getElementById('en-content');
    const arContent = document.getElementById('ar-content');
    const button = document.querySelector('.language-switcher');
    const footerText = document.getElementById('footer-text');
    
    if (enContent.classList.contains('hidden')) {
        // Switch to English
        enContent.classList.remove('hidden');
        arContent.classList.add('hidden');
        button.textContent = 'العربية';
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        footerText.textContent = '© 2023 Prime Vision 360. All rights reserved.';
    } else {
        // Switch to Arabic
        enContent.classList.add('hidden');
        arContent.classList.remove('hidden');
        button.textContent = 'English';
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        footerText.textContent = '© 2023 برايم فيجن 360. جميع الحقوق محفوظة.';
    }
}
