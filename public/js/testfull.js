//randomize videos
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let source = document.createElement("source");
let text = document.getElementById("description");
let addtext = document.createElement("p");
let credit = document.getElementById("credit");
let addcredit = document.createElement("p");
let isMuted;

// let sources = [
//   "Assets/Black Excellence Elder_History.mp4",
//   "Assets/Bud Bilken Parade_History.mp4",
//   "Assets/Mandrake Park2_Place.mp4",
//   "Assets/Sip Savor2_Place.mp4",
//   "Assets/Uncle Js_Smells.mp4",
// ];

let marcellus = {
  text: "marcellus' place",
  src: "Assets/Sip Savor2_Place.mp4",
  credit: "Credit: Toya Miller",
};

let susan = {
  text: "susan's place",
  src: "Assets/Mandrake Park2_Place.mp4",
  credit: "Credit: Pastor Michael Neal",
};

let doug = {
  text: "doug's little known history fact",
  src: "Assets/Black Excellence Elder_History.mp4",
  credit: "Credit: Kathy Chaney",
};

let jarred = {
  text: "jarred's smells",
  src: "Assets/Uncle Js_Smells.mp4",
  credit: "Credit: Uncle J's Bar B Que",
};

let rena = {
  text: "rena's little known history fact",
  src: "Assets/Bud Bilken Parade_History.mp4",
  credit: "Credit: James Harris",
};

let franklin = {
  text: "franklin's sounds",
  src: "Assets/Sounds/franklin.wav",
  credit: "",
};

let marshall = {
  text: "marshall's sounds",
  src: "Assets/Sounds/marshall.wav",
  credit: "",
};

let newsources = [marcellus, susan, doug, jarred, rena, franklin, marshall];

let randomNumber = Math.floor(Math.random() * newsources.length);

window.addEventListener("load", () => {
  // console.log(video.autoplay);

  // video.width = innerWidth;
  // video.height = innerHeight;

  source.setAttribute("src", newsources[randomNumber].src);
  // console.log(randomNumber);

  video.appendChild(source);
  video.load();

  addtext.innerHTML = newsources[randomNumber].text;
  console.log(addtext.innerHTML);
  text.appendChild(addtext);

  addcredit.innerHTML = newsources[randomNumber].credit;
  credit.appendChild(addcredit);

  let stringSource = JSON.stringify(source.src);
  // console.log(stringSource.includes("wav"));

  if (stringSource.includes("mp4")) {
    // renderer.setSize(0, 0);
    // document.body.style.backgroundColor = "black";
  } else if (stringSource.includes("wav")) {
    // renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // let cloudScript = document.querySelector('script[src*="js/cloud.js"]');
});

let reloadButton = document.getElementById("random-button");
let lastPick = 0;
let getRandom = function () {
  let newRandom = Math.floor(Math.random() * newsources.length);

  if (newRandom != lastPick) {
    lastPick = newRandom;
  } else {
    getRandom();
  }
};
reloadButton.addEventListener("click", () => {
  let last = 0;

  let newRandom = Math.floor(Math.random() * newsources.length);

  if (newRandom != lastPick) {
    lastPick = newRandom;
  } else {
    newRandom = Math.floor(Math.random() * newsources.length);
  }

  source.setAttribute("src", newsources[newRandom].src);
  video.appendChild(source);
  video.load();

  addtext.innerHTML = newsources[newRandom].text;
  console.log(addtext.innerHTML);
  text.appendChild(addtext);

  addcredit.innerHTML = newsources[randomNumber].credit;
  credit.appendChild(addcredit);

  let stringSource = JSON.stringify(source.src);
  // console.log(stringSource.includes("mp4"));

  if (stringSource.includes("mp4")) {
    renderer.setSize(0, 0);
    context.fillStyle = "#000000";
    // document.body.style.backgroundColor = "black";
  } else if (stringSource.includes("wav")) {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
});

let unmuteButton = document.getElementById("unmute");
let muteImage = document.getElementById("mute-image");

unmuteButton.addEventListener("click", () => {
  isMuted = !isMuted;

  console.log(isMuted);
  if (isMuted) {
    video.muted = false;
    muteImage.src = "Images/unmuted_black.png";
  } else {
    video.muted = true;
    muteImage.src = "Images/muted_black.png";
  }
});

unmuteButton.addEventListener("mouseenter", () => {
  console.log("mouse hover");

  if (isMuted) {
    muteImage.src = "Images/unmuted_black.png";
  } else {
    muteImage.src = "Images/muted_black.png";
  }
});

unmuteButton.addEventListener("mouseleave", () => {
  console.log("mouse left");

  if (isMuted) {
    muteImage.src = "Images/unmuted.png";
  } else {
    muteImage.src = "Images/muted.png";
  }
});
