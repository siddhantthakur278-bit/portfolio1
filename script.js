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
