(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Sürüm bilgisi alınamadı.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("En güncel sürümü kullanıyorsunuz.");
        }
    } catch (error) {
        console.error("Sürüm kontrolü sırasında hata oluştu:", error);
    }
})();


const messages = [
    "Emin misin?",
    "Gerçekten emin misin?",
    "Konuşsak fena mı olurdu?",
    "Bak üzülüyorum ama...",
    "Yine de düşündün mü?",
    "Cidden mi? :(",
    "Peki tamam, bir daha sormam...",
    "Şaka şaka, hadi konuşalım! "
];

let messageIndex = 0;

// Hayır butonuna tıklanınca yapılacaklar
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Hayır yazısını sıradaki mesajla değiştir
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Evet butonunun yazı boyutunu büyüt
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// Evet butonuna tıklanınca yönlendirme
function handleYesClick() {
    window.location.href = "yes_page.html";
}