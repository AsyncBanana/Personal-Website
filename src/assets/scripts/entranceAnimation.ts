const observer = new IntersectionObserver(
  (e) => {
    if (e[0]) {
      if (e[0].intersectionRatio <= 0) return;
      console.log("test");
      e[0].target.classList.add(
        e[0].target.getAttribute("data-entrance") as string
      );
      observer.unobserve(e[0].target);
    }
  },
  { threshold: 1 }
);
function initEntranceListeners() {
  const elements = document.querySelectorAll("[data-entrance]");
  elements.forEach((element) => observer.observe(element));
}
export default initEntranceListeners;
