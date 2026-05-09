const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");
const videoList = [video1, video2, video3].filter(v => v !== null);

const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");

videoList.forEach(function(video) {
    video.muted = true;

    video.addEventListener('mouseover', function() {
        video.play();
        if (hoverSign) hoverSign.classList.add("active");
    });

    video.addEventListener('mouseout', function() {
        video.pause();
        if (hoverSign) hoverSign.classList.remove("active");
    });
});

if (menu && sideBar) {
    menu.addEventListener("click", function() {
        sideBar.classList.remove("close-sidebar");
        sideBar.classList.add("open-sidebar");
        sideBar.style.width = "80%";
        sideBar.style.opacity = "1";
    });
}

const closeBtn = document.querySelector(".close-icon");

if (closeBtn && sideBar) {
    closeBtn.addEventListener("click", function() {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
        sideBar.style.width = "0%";
        sideBar.style.opacity = "0";
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        const icon = themeToggle.querySelector("i");
        if(icon) icon.classList.replace("bx-moon", "bx-sun");
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            const icon = themeToggle.querySelector("i");
            if(icon) icon.classList.replace("bx-sun", "bx-moon");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            const icon = themeToggle.querySelector("i");
            if(icon) icon.classList.replace("bx-moon", "bx-sun");
        }
    });
}

// Scroll Logic
const scrollProgress = document.querySelector(".scroll-progress");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;

    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
