const titleElement = document.getElementById("title");
let index = 0;

function toggleTab(tabName) {
    const activeTab = document.getElementById(tabName);
    const currentlyVisibleTab = document.querySelector(".tab.active");

    if (currentlyVisibleTab) {
        currentlyVisibleTab.classList.add("fade-out");

        setTimeout(() => {
            try {
                if (currentlyVisibleTab === activeTab) {
                    currentlyVisibleTab.style.display = "none";
                    currentlyVisibleTab.classList.remove("fade-out", "active");
                    const tabButton = document.querySelector(`.tab-buttons button[data-tab="${tabName}"]`);
                    if (tabButton) {
                        tabButton.classList.remove("active");
                    }
                    return;
                }

                currentlyVisibleTab.style.display = "none";
                currentlyVisibleTab.classList.remove("fade-out", "active");

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
        }, 300);
    } else if (!currentlyVisibleTab && activeTab) {
        try {
            activeTab.style.display = "block";
            activeTab.classList.add("active");

            const tabButton = document.querySelector(`.tab-buttons button[data-tab="${tabName}"]`);
            if (tabButton) {
                document.querySelectorAll(".tab-buttons button").forEach(button => {
                    button.classList.remove("active");
                    if (button === tabButton) {
                        button.classList.add("active");
                    }
                });
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
    const text = "Tips's PyDev Playground";

    if (index < text.length) {
        try {
            titleElement.innerHTML += text.charAt(index);
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