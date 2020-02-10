function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('YouTubeBackgroundVideoPlayer', {
    videoId: 'MxJaKrZftns', // YouTube Video ID
    width: 1280,            // Player width (in px)
    height: 720,            // Player height (in px)
    playerVars: {
      playlist: 'MxJaKrZftns',
      autoplay: 1,        // Auto-play the video on load
      autohide: 1,
      cc_load_policy: 0,  // No closed captions
      iv_load_policy: 0,  // No annotations
      disablekb: 1,       // No keyboard shortcuts
      controls: 0,        // Hide pause/play buttons
      showinfo: 0,        // Hide title
      modestbranding: 1,  // Hide Youtube Logo
      loop: 1,            // Run video in a loop
      fs: 0,              // Hide fullscreen button
      autohide: 0,        // Hide video controls when playing
      rel: 0,
      start: 0,           // Start video at 0:00 timestamp
      enablejsapi: 1
    },
    events: {
      onReady: function(e) {
        e.target.mute();
        e.target.setPlaybackQuality('hd1080');
      },
    onStateChange: function(e) {
      if(e && e.data === 1){
        var videoHolder = document.getElementById('home-banner-box');
        if(videoHolder && videoHolder.id){
          videoHolder.classList.remove('loading');
        }
      }else if(e && e.data === 0){
        e.target.playVideo()
        }
      }
    }
  });
}

// This code was sourced from
// "How to Use a YouTube Video as Your Webpage Background in 2019"
// by Tim Lillyman:
// internetrix.com.au/blog/how-to-use-youtube-video-as-your-webpage-background-2
