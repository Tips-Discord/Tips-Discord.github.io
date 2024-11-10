const title = document.getElementById("title");
const text = "Tips's PyDev Playground";
let index = 0;

function toggleTab(tabName) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active", "fade-out");
        tab.style.display = "none";
    });

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = "block";
    activeTab.classList.add("active");

    document.querySelectorAll(".tab-buttons button").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`.tab-buttons button[data-tab="${tabName}"]`).classList.add("active");
}

document.querySelectorAll(".tab-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        toggleTab(button.getAttribute("data-tab"));
    });
});

function typeEffect() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}

if (title.innerHTML.trim() === "") {
    typeEffect();
}

if ('scrollBehavior' in document.documentElement.style) {
    document.querySelectorAll('.tab-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}