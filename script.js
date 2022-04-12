window.onload = function () {
  AOS.init();

  const header = $("#header");
  document.addEventListener("scroll", () => {
    let position = document.documentElement.scrollTop;
    if (position > 100) {
      header.addClass("white");
    } else {
      header.removeClass("white");
    }
  });
};
