"use-strict";
(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = (name) => {
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);
