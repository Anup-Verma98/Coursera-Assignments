"use-strict";

(function () {
  console.log("Code written by Anup Verma!");

  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  names.forEach((names) => {
    var firstLetter = names.charAt(0).toLowerCase();
    firstLetter === "j" ? byeSpeaker(names) : helloSpeaker(names);
  });
})();
