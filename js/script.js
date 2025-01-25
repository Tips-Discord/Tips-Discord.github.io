const titleElement = document.getElementById("title");
let index = 0;

function toggleTab(tabName) {
    const activeTab = document.getElementById(tabName);
    const currentlyVisibleTab = document.querySelector(".tab.active");

    if (currentlyVisibleTab) {
        currentlyVisibleTab.classList.add("fade-out");
        setTimeout(() => {
            currentlyVisibleTab.style.display = "none";
            currentlyVisibleTab.classList.remove("fade-out", "active");
            if (currentlyVisibleTab !== activeTab) {
                activeTab.style.display = "block";
                activeTab.classList.add("active");
            }
            updateTabButtonState(tabName);
        }, 559);
    } else if (activeTab) {
        activeTab.style.display = "block";
        activeTab.classList.add("active");
        updateTabButtonState(tabName);
    }
}

function updateTabButtonState(tabName) {
    document.querySelectorAll(".tab-buttons button").forEach(button => {
        button.classList.toggle("active", button.getAttribute("data-tab") === tabName);
    });
}

document.querySelectorAll(".tab-buttons button").forEach(button => {
    button.addEventListener("click", () => toggleTab(button.getAttribute("data-tab")));
});

function typeEffect() {
    const text = "Tips's PyDev Playground";
    if (index < text.length) {
        titleElement.innerHTML += text.charAt(index++);
        setTimeout(typeEffect, 100);
    }
}

if (titleElement && titleElement.innerHTML.trim() === "") {
    typeEffect();
}

if ('scrollBehavior' in document.documentElement.style) {
    document.querySelectorAll('.tab-buttons button').forEach(button => {
        button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    });
}

['contextmenu', 'selectstart', 'dragstart'].forEach(eventType => 
    document.addEventListener(eventType, event => event.preventDefault())
);