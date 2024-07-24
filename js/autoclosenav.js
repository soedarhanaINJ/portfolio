// Function for auto close offcanvas if has been click

document.addEventListener("DOMContentLoaded", function () {
  var offcanvasElement = document.getElementById("offcanvasNavbar");
  var offcanvas = new bootstrap.Offcanvas(offcanvasElement);

  document.querySelectorAll(".offcanvas-body .nav-link").forEach(function (element) {
    element.addEventListener("click", function () {
      offcanvas.close();
    });
  });
});
