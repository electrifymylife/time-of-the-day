const setTime = (now) => {
  const time = document.querySelector(".timer__time");
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    time.textContent = `0${hours}:${minutes}`
  } else {
    time.textContent = `${hours}:${minutes}`
  }

  if (minutes < 10) {
    time.textContent = `${hours}:0${minutes}`
  } else {
    time.textContent = `${hours}:${minutes}`
  }
}

setTime(new Date());

const setTimer = () => {
  let seconds = new Date().getSeconds();
  let delay = 60 - seconds;

  let startTimer;

  if (delay >= 1) {
    delay = delay * 1000;
    startTimer = setInterval(() => {
      setTime(new Date());
    }, delay);

    setTimeout(() => {
      clearInterval(startTimer);
      delay = 60 * 1000;
      setInterval(() => {
        setTime(new Date());
      }, delay);
    }, delay);

  } else if (delay === 0) {
    setInterval(() => {
      setTime(new Date())
    }, delay);
  }
}

setTimer();

const greetingSetter = (now) => {
  const greetingText = document.querySelector(".timer__daytime");
  const screen = document.querySelector(".screen");

  if ((now.getHours() >= 22 && now.getHours() <= 23) || (now.getHours() >= 0 && now.getHours() < 6)) {
    greetingText.textContent = "Good night";
    screen.classList.add("screen--nighttime");
  } else if (now.getHours() >= 6 && now.getHours() < 10) {
    greetingText.textContent = "Good morning";
    screen.classList.add("screen--daytime");
  } else if (now.getHours() >= 10 && now.getHours() < 16) {
    greetingText.textContent = "Good afternoon";
    screen.classList.add("screen--daytime");
  } else if (now.getHours() >= 16 && now.getHours() < 22) {
    greetingText.textContent = "Good evening";
    screen.classList.add("screen--nighttime");
  }
}

greetingSetter(new Date())