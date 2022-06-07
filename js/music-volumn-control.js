let slider = (document.querySelector("#myRange").oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;

  this.style.background =
    "linear-gradient(to right, #666666 0%,#666666 " +
    value +
    "%, #f8f8f8 " +
    value +
    "%, #f8f8f8 100%";
});
