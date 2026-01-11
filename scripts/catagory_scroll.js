function scrollByAmount(scrollAmount, scrollableDivId) {
  let scrollableDiv = document.getElementById(scrollableDivId);
  console.log(scrollableDiv)
  scrollableDiv.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  })
}