const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign= document.querySelector(".hover-sign")
const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
    
    video.muted = true;

    video.addEventListener('mouseover', function() {
        console.log("Mouse over on video");  
        video.play();  
        hoverSign.classList.add("active")
    });

    video.addEventListener('mouseout', function() {
        console.log("Mouse out from video"); 
        video.pause(); 
        hoverSign.classList.remove("active")
    });
 
    video.addEventListener('canplay', function() {
        console.log(`Video is ready to play: ${video.id}`);
    });
});


