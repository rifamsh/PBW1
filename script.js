// DATA DESTINASI
const destinations = [
    { name: "Situ Patenggang", image: "../asset/situ.jpg" },
    { name: "Ranca Upas", image: "../asset/RANCA.jpg" },
    { name: "Kawah Putih", image: "../asset/Kawah.jpg" },
    { name: "Ciwalini", image: "../asset/ciwalini.jpg" },
    { name: "Ranca Bali", image: "../asset/rancabali.jpg" },
];

// MENAMPILKAN DESTINASI 
const container = document.getElementById("destinations");

destinations.forEach(dest => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}">
    <h3>${dest.name}</h3>
  `;
    container.appendChild(card);
});

//  SCROLL KE DESTINASI 
const mulaiBtn = document.getElementById("mulaiBtn");
mulaiBtn.addEventListener("click", () => {
    document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
});

//  MENU TOGGLE UNTUK HP 
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// FORM KONTAK ALERT 
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim.");
    form.reset();
});
