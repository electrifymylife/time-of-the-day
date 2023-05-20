const setDaysCountInfo = (now) => {
  const weekDayInformer = document.querySelector(".info__weekDay");
  const yearDayInformer = document.querySelector(".info__yearDay");
  const weekNumberInformer = document.querySelector(".info__weekNumber");

  const weekDay = now.getDay();
  const yearDay = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const weekNumber = Math.ceil(yearDay / 7);

  weekDayInformer.textContent = weekDay;
  yearDayInformer.textContent = yearDay;
  weekNumberInformer.textContent = weekNumber;
}

setDaysCountInfo(new Date());