
  document.addEventListener("DOMContentLoaded", () => {
    let currentPage = location.pathname.split("/").pop();

    // If path ends in / (no filename), treat it as "index.html"
    if (!currentPage || currentPage === "") {
      currentPage = "index.html";
    }

    currentPage = currentPage.split("?")[0].split("#")[0];

    console.log("Current page detected:", currentPage);

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      let linkHref = link.getAttribute("href").split("/").pop().split("?")[0].split("#")[0];

      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  });
