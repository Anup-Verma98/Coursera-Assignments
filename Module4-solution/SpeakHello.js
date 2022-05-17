"use-strict";
(function (window) {
  var speakWord = "Hello";
  var helloSpeaker = (name) => {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
