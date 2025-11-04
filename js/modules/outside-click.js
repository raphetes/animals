export default function initOutsideClick(element, userEvents, callback) {
  const dataOutside = "data-outside";
  const html = document.documentElement;

  if (!element.hasAttribute(dataOutside)) {
    element.setAttribute(dataOutside, "");
    userEvents.forEach((event) => {
      setTimeout(() => html.addEventListener(event, close));
    });
  }

  function close(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(dataOutside, "");
      userEvents.forEach((userEvent) =>
        html.removeEventListener(userEvent, close)
      );
      callback();
    }
  }
}
