//randomize videos
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let source = document.createElement("source");
//lefthand person's thing
let text = document.getElementById("description");
let fullML = document.getElementById("full_des");
let addtext = document.createElement("p");
let credit = document.getElementById("credit");
let addcredit = document.createElement("p");
//the actual name of place/sound/object
let description = document.getElementById("sentence");
let adddes = document.createElement("p");
let isMuted;

// let sources = [
//   "Assets/Black Excellence Elder_History.mp4",
//   "Assets/Bud Bilken Parade_History.mp4",
//   "Assets/Mandrake Park2_Place.mp4",
//   "Assets/Sip Savor2_Place.mp4",
//   "Assets/Uncle Js_Smells.mp4",
// ];

let glenance = {
  text: "glenance's place",
  src: "Assets/Sip Savor2_Place.mp4",
  des: "Sip & Savor",
  credit: "Credit: Toya Miller",
};

let azurii = {
  text: "azurii's place",
  des: "Mandrake Park",
  src: "Assets/Mandrake Park2_Place.mp4",
  credit: "Credit: Pastor Michael Neal",
};

let susan = {
  text: "susan's little known history fact",
  des: "Black Excellence",
  src: "Assets/Black Excellence Elder_History.mp4",
  credit: "Credit: Kathy Chaney",
};

let jarred = {
  text: "jarred's smells",
  des: "Uncle J's Bar B Que",
  src: "Assets/Uncle Js_Smells.mp4",
  credit: "Credit: Uncle J's Bar B Que",
};

let ezinwa = {
  text: "ezinwa's little known history fact",
  des: "Bud Billiken Parade",
  src: "Assets/Bud Bilken Parade_History.mp4",
  credit: "Credit: James Harris",
};

let franklin = {
  text: "franklin's sounds",
  des: "Kids playing",
  src: "Assets/Sounds/franklin.wav",
  credit: "",
};

let marcellus = {
  text: "marcellus' sounds",
  des: "People conversing over coffee and tea",
  src: "Assets/Sounds/marshall.wav",
  credit: "",
};

let newsources = [glenance, azurii, susan, jarred, ezinwa, franklin, marcellus];

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
  // console.log(addtext.innerHTML);
  text.appendChild(addtext);

  adddes.innerHTML = newsources[randomNumber].des;
  description.appendChild(adddes);

  addcredit.innerHTML = newsources[randomNumber].credit;
  credit.appendChild(addcredit);

  text.addEventListener("mouseover", () => {
    console.log("hello");
    fullML.style.zIndex = 9;
    fullML.style.opacity = 1;
  });

  let stringSource = JSON.stringify(source.src);
  // console.log(stringSource.includes("wav"));

  if (stringSource.includes("mp4")) {
    // renderer.setSize(0, 0);
    // document.body.style.backgroundColor = "black";
  } else if (stringSource.includes("wav")) {
    // renderer.setSize(window.innerWidth, window.innerHeight);
  }

  dragElement(document.getElementById("full_des"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});

let reloadButton = document.getElementById("random-button");
let lastPick = 0;
// let getRandom = function () {
//   let newRandom = Math.floor(Math.random() * newsources.length);

//   if (newRandom != lastPick) {
//     lastPick = newRandom;
//   } else {
//     getRandom();
//   }
// };
reloadButton.addEventListener("click", () => {
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

  adddes.innerHTML = newsources[newRandom].des;
  description.appendChild(adddes);

  addcredit.innerHTML = newsources[newRandom].credit;
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
