const heading1 = document.getElementById("flush-headingOne");
const collapse1 = document.getElementById("flush-collapseOne");
const heading2 = document.getElementById("flush-headingTwo");
const collapse2 = document.getElementById("flush-collapseTwo");
const heading3 = document.getElementById("flush-headingThree");
const collapse3 = document.getElementById("flush-collapseThree");
const heading4 = document.getElementById("flush-headingFour");
const collapse4 = document.getElementById("flush-collapseFour");
const heading5 = document.getElementById("flush-headingFive");
const collapse5 = document.getElementById("flush-collapseFive");

heading1.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  collapse1.classList.toggle("hidden");
  collapse2.classList.add("hidden");
  collapse3.classList.add("hidden");
  collapse4.classList.add("hidden");
  collapse5.classList.add("hidden");
  heading2.classList.remove("font-bold");
  heading3.classList.remove("font-bold");
  heading4.classList.remove("font-bold");
  heading5.classList.remove("font-bold");
  this.classList.toggle("font-bold");
});

heading2.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  collapse2.classList.toggle("hidden");
  collapse1.classList.add("hidden");
  collapse3.classList.add("hidden");
  collapse4.classList.add("hidden");
  collapse5.classList.add("hidden");
  heading1.classList.remove("font-bold");
  heading3.classList.remove("font-bold");
  heading4.classList.remove("font-bold");
  heading5.classList.remove("font-bold");
  this.classList.toggle("font-bold");
});

heading3.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  collapse3.classList.toggle("hidden");
  collapse1.classList.add("hidden");
  collapse2.classList.add("hidden");
  collapse4.classList.add("hidden");
  collapse5.classList.add("hidden");
  heading1.classList.remove("font-bold");
  heading2.classList.remove("font-bold");
  heading4.classList.remove("font-bold");
  heading5.classList.remove("font-bold");
  this.classList.toggle("font-bold");
});

heading4.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  collapse4.classList.toggle("hidden");
  collapse1.classList.add("hidden");
  collapse2.classList.add("hidden");
  collapse3.classList.add("hidden");
  collapse5.classList.add("hidden");
  heading1.classList.remove("font-bold");
  heading2.classList.remove("font-bold");
  heading3.classList.remove("font-bold");
  heading5.classList.remove("font-bold");
  this.classList.toggle("font-bold");
});

heading5.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  collapse5.classList.toggle("hidden");
  collapse1.classList.add("hidden");
  collapse2.classList.add("hidden");
  collapse3.classList.add("hidden");
  collapse4.classList.add("hidden");
  heading1.classList.remove("font-bold");
  heading2.classList.remove("font-bold");
  heading3.classList.remove("font-bold");
  heading4.classList.remove("font-bold");
  this.classList.toggle("font-bold");
});
