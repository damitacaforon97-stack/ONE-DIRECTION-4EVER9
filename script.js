document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  const button = document.getElementById("surpriseBtn");
  const output = document.getElementById("surprise");
  if (button && output) {
    const messages = [
      "Once a Directioner, always a Directioner! ♡",
      "Five boys, countless memories. ✨",
      "We will always have these songs. 🕊️",
      "Forever and always, a Directioner. 💗"
    ];
    button.addEventListener("click", () => {
      output.textContent = messages[Math.floor(Math.random() * messages.length)];
    });
  }
});
