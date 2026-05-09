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

// Reveal on Scroll Logic (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active-reveal");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Magnetic Button Logic
const magneticBtns = document.querySelectorAll(".magnetic-btn");
magneticBtns.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// Custom Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline movement
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor Hover Effects
    const hoverTargets = document.querySelectorAll("a, button, .project-card, .card, .magnetic-btn, .theme-btn");
    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", () => cursorOutline.classList.add("cursor-active"));
        target.addEventListener("mouseleave", () => cursorOutline.classList.remove("cursor-active"));
    });
}

// 3D Tilt Logic
const tiltElements = document.querySelectorAll(".project-card, .card");
tiltElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    el.addEventListener("mouseleave", () => {
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});
