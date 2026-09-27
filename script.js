// Показываем текущую дату

const dateElement = document.getElementById("currentDate");

const today = new Date();

dateElement.textContent = today.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
});


// Мобильное меню

function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
}


// Фильтр новостей

function filterNews(category) {

    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "block";
            return;
        }

        if (card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
