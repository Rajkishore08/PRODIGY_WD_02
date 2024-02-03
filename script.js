(() => {
    let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    let timeRef = document.querySelector(".timer-display");
    let int = null;
  
    const startTimer = () => {
      if (int !== null) {
        clearInterval(int);
      }
      int = setInterval(displayTimer, 10);
    };
  
    const pauseTimer = () => {
      clearInterval(int);
    };
  
    const resetTimer = () => {
      clearInterval(int);
      [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
      updateTimerDisplay();
    };
  
    const displayTimer = () => {
      milliseconds += 10;
      if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
          seconds = 0;
          minutes++;
          if (minutes == 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      updateTimerDisplay();
    };
  
    const updateTimerDisplay = () => {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      let ms =
        milliseconds < 10
          ? "00" + milliseconds
          : milliseconds < 100
          ? "0" + milliseconds
          : milliseconds;
  
      timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    };
  
    document.getElementById("start-timer").addEventListener("click", startTimer);
    document.getElementById("pause-timer").addEventListener("click", pauseTimer);
    document.getElementById("reset-timer").addEventListener("click", resetTimer);
  })();
  