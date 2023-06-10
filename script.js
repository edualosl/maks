
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector(".menu");
    var menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});

function onYouTubeIframeAPIReady() {
    // Замените 'YOUR_VIDEO_ID' на реальный идентификатор видео YouTube
    const videoId = 'L_A5cyPegcg';
  
    const player = new YT.Player('player', {
      videoId: videoId,
      playerVars: {
        autoplay: 0, // Измените на 1, если хотите, чтобы видео автоматически воспроизводилось
      },
    });
  }


