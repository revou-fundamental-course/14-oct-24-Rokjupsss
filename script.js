// Meminta nama pengguna melalui prompt ketika halaman pertama kali dimuat
window.onload = function() {
    let userName = prompt("What is your name?");

    if (userName) {
        // Mengupdate elemen h1 dengan ucapan selamat datang
        const welcomeMessage = `Hai ${userName}, welcome to my website!`;
        document.getElementById("welcomeMessage").innerText = welcomeMessage;

        // Menggunakan Web Speech API untuk ucapan selamat datang
        if ("speechSynthesis" in window) {
            const speech = new SpeechSynthesisUtterance(welcomeMessage);
            window.speechSynthesis.speak(speech);
        } else {
            alert("Browser Anda tidak mendukung fitur Speech Synthesis!");
        }
    } else {
        // Jika tidak ada nama yang dimasukkan, teks default tetap
        document.getElementById("welcomeMessage").innerText =
            "Welcome to my website!";
    }

    // Start slideshow
    startSlideshow();
};

// Slideshow functionality
let slideIndex = 0;

function startSlideshow() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(startSlideshow, 3000); // Change image every 3 seconds
}

// Form handling for Message Us
document
    .getElementById("messageForm")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        // Mengambil nilai dari input dengan benar
        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const message = document.getElementById("message").value;

        // Menampilkan hasil pesan di sebelah kanan
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
        <h3>Message Sent!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

        // Reset the form
        this.reset();
    });