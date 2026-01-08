ocument.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Logika Greeting Otomatis Berdasarkan Waktu ---
    const greetingElement = document.getElementById("greeting-text");
    if (greetingElement) {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours >= 5 && hours < 12) {
            greeting = "Selamat Pagi";
        } else if (hours >= 12 && hours < 15) {
            greeting = "Selamat Siang";
        } else if (hours >= 15 && hours < 18) {
            greeting = "Selamat Sore";
        } else {
            greeting = "Selamat Malam";
        }
        greetingElement.textContent = greeting;
    }

    // --- 2. Kontrol Input Destination (Cegah Tombol Enter) ---
    const destinationInput = document.getElementById("destinationInput");
    if (destinationInput) {
        destinationInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); 
            }
        });
    }

    // --- 3. Logika Pencarian Perjalanan ---
    const searchBtn = document.getElementById("searchBtn");
    const dateInput = document.getElementById("dateInput");
    
    if (searchBtn) {
        searchBtn.addEventListener("click", function(e) {
            e.preventDefault();
            const dest = destinationInput ? destinationInput.value : "";
            const date = dateInput ? dateInput.value : "";

            if (dest || date) {
                alert(`Mencari perjalanan ke: ${dest || "Semua Destinasi"}\nTanggal: ${date || "Kapan saja"}`);
            } else {
                alert("Silakan masukkan tujuan perjalanan Anda.");
            }
        });
    }

    // --- 4. Handler Tampilan Placeholder Tanggal ---
    const placeholder = document.getElementById('date-placeholder');
    if (dateInput && placeholder) {
        dateInput.addEventListener('change', function() {
            if (this.value) {
                placeholder.style.display = 'none';
            } else {
                placeholder.style.display = 'block';
            }
        });
    }

    // --- 5. Efek Scroll Navbar (Tambahan untuk Clean UI) ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.85)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.background = "transparent";
            navbar.style.padding = "15px 0";
        }
    });

});