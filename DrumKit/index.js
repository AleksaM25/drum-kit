// document.addEventListener("keydown", (event) => {
//   if (event.key === "k") {
//     console.log("Play kick");
//     const kick = document.getElementById("kick");
//     kick.currentTime = 0;
//     kick.play();
//   } else if (event.key === "c") {
//     const crash = document.getElementById("crash");
//     crash.currentTime = 0;
//     crash.play();
//   } else if (event.key === "h") {
//     const hiHat = document.getElementById("hihat");
//     hiHat.currentTime = 0;
//     hiHat.play();
//   } else if (event.key === "t") {
//     const tom = document.getElementById("tom");
//     tom.currentTime = 0;
//     tom.play();
//   } else if (event.key === "s") {
//     const snare = document.getElementById("snare");
//     snare.currentTime = 0;
//     snare.play();
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const pads = document.querySelectorAll(".drum-pad");

  function playSound(key) {
    const soundMap = {
      a: document.getElementById("kick"),
      s: document.getElementById("snare"),
      d: document.getElementById("crash"),
    };

    const sound = soundMap[key];
    const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);

    if (sound) {
      sound.currentTime = 0;
      sound.play();
      pad.classList.add("pressed");

      setTimeout(() => pad.classList.remove("pressed"), 150);
    }
  }

  // Keyboard Event Listener
  document.addEventListener("keydown", (event) => {
    playSound(event.key.toLowerCase());
  });

  // Click Event Listener
  pads.forEach((pad) => {
    pad.addEventListener("click", () => {
      const key = pad.getAttribute("data-key");
      playSound(key);
    });
  });
});
