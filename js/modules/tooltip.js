export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", showTooltip);
  });

  function showTooltip(event) {
    const tooltipBox = tooltipCreate(this);
    const pageY = event.pageY + "px";
    const pageX = event.pageX + "px";
    tooltipBox.style.top = pageY;
    tooltipBox.style.left = pageX;

    removeTooltip.tooltip = tooltipBox;
    removeTooltip.element = this;
    moveTooltip.tooltip = tooltipBox;

    this.addEventListener("mouseleave", removeTooltip);
    this.addEventListener("mousemove", moveTooltip);
  }

  const removeTooltip = {
    handleEvent() {
      this.tooltip.remove();
      this.element.removeEventListener("mouseleave", removeTooltip);
      this.element.removeEventListener("mousemove", moveTooltip);
    },
  };
  const moveTooltip = {
    handleEvent(event) {
      const pageY = event.pageY + 20 + "px";
      const pageX = event.pageX + 20 + "px";
      this.tooltip.style.top = pageY;
      this.tooltip.style.left = pageX;
    },
  };

  function tooltipCreate(map) {
    const tooltipBox = document.createElement("div");
    const tooltipText = map.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.textContent = tooltipText;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
