export default function initDate() {
  const workDate = document.querySelector("[data-week]");
  const week = workDate.dataset.week.split(",").map(Number);
  const hours = workDate.dataset.hour.split(",").map(Number);

  const now = new Date();
  const dayNow = now.getDay();
  const hourNow = now.getHours();

  const isDayOpen = week.includes(dayNow);
  const isHourOpen = hourNow >= hours[0] && hourNow < hours[1];

  if (isDayOpen && isHourOpen) workDate.classList.add("isOpen");
}
