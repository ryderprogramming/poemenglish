let poem = `
Oh, library;
Your books are like the red, tender apples of a tree;
The vast collection so long in books, not all I can see
Oh library, teach us something useful, please;
`
poem = poem.split(";");
let num = 0;

$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};

const tick = () => {
  let cow = $(`<div>${poem[num]}</div>`);
  cow.css({bottom: "-200px", opacity: "0.0", left: ((Math.floor(Math.random() * $(window).width()) / 2 + $(window).width() / 4).toString()+"px"), position: "absolute", writingMode: "vertical-lr", textOrientation: "sideways"});
  console.log("Cow")
  $(document.body).append(cow);
  cow.animateRotate(Math.floor(Math.random() * 40)-20, {
    duration: 400,
    easing: 'swing',
    complete: function () {
      cow.animate({opacity: "1.0"}, 1000)
    },
    step: function () {}
  });
  cow.animate({top: (-16 * poem[num].length).toString() + "px"}, Math.floor(500 * Math.random()) + 9750);
  num += 1;
  if(num == poem.length - 1){
    num = 0;
  }
};


$(document).ready(function(){
  setInterval(() => tick(), 1250);
});
