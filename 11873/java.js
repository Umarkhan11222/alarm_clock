function startTimer() {
    var hours = parseInt(document.getElementById("hours").value);
    var minutes = parseInt(document.getElementById("minutes").value);
    var seconds = parseInt(document.getElementById("seconds").value);
  
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;
    var time = totalSeconds;
    var timer = setInterval(function() {
      var hoursLeft = Math.floor(time / 3600);
      var minutesLeft = Math.floor((time % 3600) / 60);
      var secondsLeft = time % 60;
  
      document.getElementById("hours").value = hoursLeft.toString().padStart(2, '0');
      document.getElementById("minutes").value = minutesLeft.toString().padStart(2, '0');
      document.getElementById("seconds").value = secondsLeft.toString().padStart(2, '0');
  
      if (time === 0) {
        clearInterval(timer);
        document.getElementById("alarm").play();
        window.alert("Time's up!");
      }
      else {
        time--;
      }
    }, 1000);
  }
  