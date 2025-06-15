//


// scroll to top
const topBtn = document.querySelector("button#top");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
