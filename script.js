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

  const pageBtn = document.querySelectorAll(".navbtn");
  for (let i = 0; i < pageBtn.length; i++) {
    pageBtn[i].addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(".pages" + (i + 1))
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  // document.querySelector(".portfolio").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   document.querySelector(".pages3").scrollIntoView({ behavior: "smooth" });
  // });
  // $(".more").click(function () {
  //   $(".target").toggleClass("hide");
  // });
};
