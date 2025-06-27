export default class initDate {
  constructor(date) {
    this.workinDate = document.querySelector(date);
  }
  workDate() {
    this.week = this.workinDate.dataset.week.split(",").map(Number);
    this.hours = this.workinDate.dataset.hour.split(",").map(Number);
  }

  nowDate() {
    this.now = new Date();
    this.dayNow = this.now.getDay();
    this.hourNow = this.now.getUTCHours();
  }

  isOpen() {
    const isDayOpen = this.week.includes(this.dayNow);
    const isHourOpen =
      this.hourNow >= this.hours[0] && this.hourNow < this.hours[1];

    return isDayOpen && isHourOpen;
  }
  open() {
    if (this.isOpen()) this.workinDate.classList.add("isOpen");
  }

  init() {
    if (this.workinDate) {
      this.nowDate();
      this.workDate();
      this.open();
    }
    return this;
  }
}
