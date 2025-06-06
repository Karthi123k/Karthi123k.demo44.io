
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage) currentPage = "index.html";

  currentPage = currentPage.split("?")[0].split("#")[0];

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    let linkHref = link.getAttribute("href").split("/").pop();
    linkHref = linkHref.split("?")[0].split("#")[0];

    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });
});

