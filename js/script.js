const titleElement = document.getElementById("title");
const textToType = "Tips's PyDev Playground";
let index = 0;

function toggleTab(tabName) {
    const activeTab = document.getElementById(tabName);
    const currentlyVisibleTab = document.querySelector(".tab.active");

    if (currentlyVisibleTab && currentlyVisibleTab !== activeTab) {
        currentlyVisibleTab.classList.add("fade-out");

        setTimeout(() => {
            try {
                if (currentlyVisibleTab) {
                    currentlyVisibleTab.style.display = "none";
                    currentlyVisibleTab.classList.remove("fade-out", "active");
                }

                if (activeTab) {
                    activeTab.style.display = "block";
                    activeTab.classList.add("active");
                    const tabButton = document.querySelector(`.tab-buttons button[data-tab="${tabName}"]`);
                    if (tabButton) {
                        document.querySelectorAll(".tab-buttons button").forEach(button => button.classList.remove("active"));
                        tabButton.classList.add("active");
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }, 500);
    } else if (!currentlyVisibleTab && activeTab) {
        try {
            activeTab.style.display = "block";
            activeTab.classList.add("active");
            const tabButton = document.querySelector(`.tab-buttons button[data-tab="${tabName}"]`);
            if (tabButton) {
                document.querySelectorAll(".tab-buttons button").forEach(button => button.classList.remove("active"));
                tabButton.classList.add("active");
            }
        } catch (error) {
            console.error(error);
        }
    }
}

if (document.querySelectorAll) {
    document.querySelectorAll(".tab-buttons button").forEach(button => {
        if (button) {
            button.addEventListener("click", () => {
                try {
                    toggleTab(button.getAttribute("data-tab"));
                } catch (error) {
                    console.error(error);
                }
            });
        }
    });
}

function typeEffect() {
    if (index < textToType.length) {
        try {
            titleElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 120);
        } catch (error) {
            console.error(error);
        }
    }
}

if (titleElement && titleElement.innerHTML.trim() === "") {
    typeEffect();
}

if ('scrollBehavior' in document.documentElement.style) {
    document.querySelectorAll('.tab-buttons button').forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                try {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } catch (error) {
                    console.error(error);
                }
            });
        }
    });
}