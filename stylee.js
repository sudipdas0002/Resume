(function() {
  var skillsProgItems = document.querySelectorAll(".skills-prog li .skills-bar");

  skillsProgItems.forEach(function(item, i) {
    var bar = item.querySelector(".bar");
    var dataPercent = item.parentElement.getAttribute("data-percent");

    setTimeout(function() {
      bar.style.width = dataPercent + "%";
      bar.style.transitionDuration = ".5s";
    }, i * 150);
  });

  var skillsSoftItems = document.querySelectorAll(".expertise li svg");

  skillsSoftItems.forEach(function(item, i) {
    var circle = item.querySelector(".cbar");
    var r = circle.getAttribute("r");
    var c = Math.PI * (r * 2);
    var percent = item.parentElement.dataset.percent;
    var cbar = (100 - percent) / 100 * c;

    circle.style.strokeDashoffset = c;
    circle.style.strokeDasharray = c;

    setTimeout(function() {
      circle.style.strokeDashoffset = cbar;
      circle.style.transitionDuration = ".3s";
    }, i * 150);

    var counterElement = item.nextElementSibling;
    var counter = 0;

    setTimeout(function() {
      var counterInterval = setInterval(function() {
        if (counter >= percent) {
          clearInterval(counterInterval);
        } else {
          counter++;
        }
      }, 10);
    }, i * 150);
  });
})();
