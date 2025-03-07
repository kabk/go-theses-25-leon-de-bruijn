


// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   

function menuToggle() {
  var x = document.getElementById("menuList");
  var y = document.getElementById("header");
  console.log("hey")

  if (x.classList == "hide") {
    x.classList = "show";
    y.classList = "headerLong";

  } else {
    x.classList = "hide";
    y.classList = "headerShort";

  }

}


docReady(function() {
});




