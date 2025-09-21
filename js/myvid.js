
<script>
    var video = document.getElementById("urvid");

    var btn = document.getElementById("pause_button");

    function  myFunction (params) {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";

        } else {

            video.pause()
            btn.innerHTML = "Play";
        }

    }
</script>