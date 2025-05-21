export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    this.removeTooltip = this.removeTooltip.bind(this);
    this.moveTooltip = this.moveTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  addTooltipEvents() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.showTooltip);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvents();
    }
    return this;
  }

  showTooltip(event) {
    const tooltipBox = this.tooltipCreate(event.currentTarget);
    const pageY = event.pageY + "px";
    const pageX = event.pageX + "px";
    this.tooltipBox.style.top = pageY;
    this.tooltipBox.style.left = pageX;

    this.removeTooltip.tooltip = tooltipBox;
    this.removeTooltip.element = this;
    this.moveTooltip.tooltip = tooltipBox;

    event.currentTarget.addEventListener("mouseleave", this.removeTooltip);
    event.currentTarget.addEventListener("mousemove", this.moveTooltip);
  }

  removeTooltip({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.removeTooltip);
    currentTarget.removeEventListener("mousemove", this.moveTooltip);
  }
  moveTooltip(event) {
    const pageY = event.pageY + 20 + "px";
    const pageX = event.pageX + 20 + "px";
    this.tooltipBox.style.top = pageY;
    this.tooltipBox.style.left = pageX;
  }

  tooltipCreate(map) {
    const tooltipBox = document.createElement("div");
    const tooltipText = map.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.textContent = tooltipText;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
}
