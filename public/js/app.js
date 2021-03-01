let neighborhood = document.getElementById("neighborhood");
let place = document.getElementById("place");
let sound = document.getElementById("sound");
let smell = document.getElementById("smell");
let event = document.getElementById("event");
let object = document.getElementById("object");
let name = document.getElementById("name");
let email = document.getElementById("email");

let nvalues = ["Bushwick", "Bronzeville", "Aurora"];
let pvalues = ["Maria Hernandez", "Sip & Savor", "Mandrake Park"];
let svalues = ["pigeons", "Kids playing", "conversations over coffee"];
let smvalues = ["popeyes", "bbq", "Uncle J's Smells"];
let evalues = ["Bud Bilken Parade", "Black Excellence", "BK mutual aid"];
let ovalues = ["community fridge", "mental health check-ins", "fresh flowers"];

window.addEventListener("load", () => {
  //posts answers from submit button
  document.getElementById("submit").addEventListener("click", () => {
    console.log(
      neighborhood.value +
        " " +
        place.value +
        " " +
        sound.value +
        " " +
        smell.value +
        " " +
        event.value +
        " " +
        object.value +
        " " +
        name.value
    );

    let obj = {
      name: name.value,
      email: email.value,
      neighborhood: neighborhood.value,
      place: place.value,
      sound: sound.value,
      smell: smell.value,
      event: event.value,
      object: object.value,
    };

    //stringify the data so the server can convert to string
    let jsonData = JSON.stringify(obj);

    //make POST fetch request to sent input to server
    fetch("/maplibs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
});

let maplibsdoc = document.getElementById("maplibspdf");
let bronzeville = document.getElementById("bronzeville");
let navbar = document.getElementById("nav");
let mainbody = document.getElementById("mainbody");

//change transparency based on scroll value
//mapLib pdf goes to 0
//home page of bronzeville goes to 100
window.addEventListener("scroll", function () {
  //how far a user has scrolled from the top of the page
  var lastScrollTop = 0;

  let currentY2 = window.scrollY;
  let scrollFromTop = window.pageYOffset;

  let totalHeight = window.innerHeight;

  let currentH = Math.round(100 - (currentY2 / totalHeight) * 100) + "%";
  let fullH = Math.round((currentY2 / totalHeight) * 100) + "%";

  if (currentY2 > 0 && lastScrollTop <= currentY2) {
    lastScrollTop = currentY2;
    // console.log("scrolling down");
  } else {
    // console.log("scrolling up");
  }
  lastScrollTop = currentY2;
  // console.log(window.scrollY, totalHeight, currentH);

  maplibsdoc.style.opacity = currentH;

  if (currentY2 > 900) {
    // bronzeville.style.opacity = fullH;
    navbar.style.opacity = fullH;
    mainbody.style.opacity = fullH;
    navbar.style.zIndex = 1;
    mainbody.style.zIndex = 1;
  } else {
    navbar.style.opacity = 0;
    mainbody.style.opacity = 0;
    navbar.style.zIndex = 0;
    mainbody.style.zIndex = 0;
  }

  // let index = [];
  // for (let i = 0; i < totalHeight; i += totalHeight / 3) {
  //   index.push(i);
  //   for (let i = 0; i < index.length; i++) {
  //     neighborhood.value = nvalues[i];
  //     place.value = pvalues[i];
  //     sound.value = svalues[i];
  //     smell.value = smvalues[i];
  //     event.value = evalues[i];
  //     object.value = ovalues[i];
  //   }
  // }

  if (currentY2 > 200 && currentY2 < 300) {
    neighborhood.value = nvalues[0];
    place.value = pvalues[0];
    sound.value = svalues[0];
    smell.value = smvalues[0];
    event.value = evalues[0];
    object.value = ovalues[0];
  } else if (currentY2 > 300 && currentY2 < 400) {
    neighborhood.value = nvalues[1];
    place.value = pvalues[1];
    sound.value = svalues[1];
    smell.value = smvalues[1];
    event.value = evalues[1];
    object.value = ovalues[1];
  } else if (currentY2 > 400 && currentY2 < 600) {
    neighborhood.value = nvalues[2];
    place.value = pvalues[2];
    sound.value = svalues[2];
    smell.value = smvalues[2];
    event.value = evalues[2];
    object.value = ovalues[2];
  } else {
    neighborhood.value = "A NEIGHBORHOOD";
    place.value = "A PLACE";
    sound.value = "A SOUND";
    smell.value = "A SMELL";
    event.value = "AN EVENT";
    object.value = "AN OBJECT";
  }
});
