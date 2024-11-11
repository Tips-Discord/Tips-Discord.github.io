const title = document.getElementById("title");
const text = "Tips's PyDev Playground";
let index = 0;

function toggleTab(tabName) {
    const activeTab = document.getElementById(tabName);
    const isTabVisible = activeTab.style.display === "block";

    document.querySelectorAll(".tab").forEach(tab => {
        if (tab.style.display === "block" && tab !== activeTab) {
            tab.classList.add("fade-out");
            setTimeout(() => {
                tab.style.display = "none";
                tab.classList.remove("fade-out");
            }, 500);
        }
    });

    document.querySelectorAll(".tab-buttons button").forEach(button => {
        button.classList.remove("active");
    });

    if (!isTabVisible) {
        activeTab.style.display = "block";
        activeTab.classList.add("active");
        document.querySelector(`.tab-buttons button[data-tab="${tabName}"]`).classList.add("active");
    } else {
        activeTab.classList.add("fade-out");
        setTimeout(() => {
            activeTab.style.display = "none";
            activeTab.classList.remove("fade-out");
        }, 500);
    }
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
