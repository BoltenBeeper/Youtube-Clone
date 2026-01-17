function scrollByAmount(scrollAmount, scrollableDivId) {
  let scrollableDiv = document.getElementById(scrollableDivId);
  scrollableDiv.scrollBy({left: scrollAmount, behavior: "smooth"})
  leftArrow = document.getElementById("left-arrow-icon");
  rightArrow = document.getElementById("right-arrow-icon");

  // Shows and hide the scroll buttons when reaching the end of the scrolling container
  if (scrollAmount < 0 && scrollableDiv.scrollLeft <= Math.abs(scrollAmount)) { // If scrolling left and scrolling a greater amount than there is left to scroll
    leftArrow.classList.add("hidden");
  } else {
    leftArrow.classList.remove("hidden");
  }

  const maxScrollWidth = scrollableDiv.scrollWidth - scrollableDiv.clientWidth;
  if (scrollAmount > 0 && scrollableDiv.scrollLeft >= (maxScrollWidth - Math.abs(scrollAmount))) { // If scrolling right and scrolling a greater amount than there is left to scroll
    rightArrow.classList.add("hidden");
  } else {
    rightArrow.classList.remove("hidden");
  }
};

function unhighlightAllElements(elementClass) {
  elementList = document.querySelectorAll(elementClass);
  elementList.forEach(element => {
    element.classList.remove("selected")
  });
};

function highlightElement(element) {
  unhighlightAllElements(".catagory")
  element.classList.add("selected")
};

catagoryButtons = document.querySelectorAll(".catagory");
catagoryButtons.forEach(catagoryButton => {
  catagoryButton.addEventListener("mousedown", (event) => {
    event.preventDefault();
    highlightElement(catagoryButton);
  });
});