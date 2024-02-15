

var toggleItems = document.querySelectorAll(".elementor-toggle-item");
toggleItems.forEach(function (item) {
  item.addEventListener("click", function () {
    toggleItems.forEach(function (innerItem) {
      var isClickedItem = innerItem === item;
      if (!isClickedItem) {
        var tabTitle = innerItem.querySelector(".elementor-tab-title");
        tabTitle.setAttribute("aria-expanded", "false");
        tabTitle.setAttribute("aria-selected", "false");
        tabTitle.setAttribute("tabindex", "-1");
        tabTitle.classList.remove("elementor-active");
        innerItem.querySelector(".elementor-tab-content").style.display =
          "none";
        innerItem
          .querySelector(".elementor-tab-content")
          .classList.remove("elementor-active");
      }
    });
  });
});
