// Main configuration - EDITED VIA ADMIN PANEL
const CONFIG = {
    storeName: localStorage.getItem('storeName') || 'OP STORE',
    storeCaption: localStorage.getItem('storeCaption') || 'Premium Products · College Edition',
    currency: localStorage.getItem('currency') || '$',
    telegramTarget: localStorage.getItem('telegramTarget') || 'op_college_bot',
    whatsappTarget: localStorage.getItem('whatsappTarget') || '+1234567890',
    paymentDetails: localStorage.getItem('paymentDetails') || 'UPI: op@paytm',
    adminPassword: localStorage.getItem('adminPassword') || 'admin123'
};

// Update from localStorage if available
function loadConfig() {
    const saved = localStorage.getItem('adminConfig');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(CONFIG, parsed);
    }
}

loadConfig();
