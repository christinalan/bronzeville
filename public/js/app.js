window.addEventListener("load", () => {
  //posts answers from submit button
  document.getElementById("submit").addEventListener("click", () => {
    let neighborhood = document.getElementById("neighborhood").value;
    let place = document.getElementById("place").value;
    let sound = document.getElementById("sound").value;
    let smell = document.getElementById("smell").value;
    let event = document.getElementById("event").value;
    let object = document.getElementById("object").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    console.log(
      neighborhood +
        " " +
        place +
        " " +
        sound +
        " " +
        smell +
        " " +
        event +
        " " +
        object +
        " " +
        name
    );

    let obj = {
      name: name,
      email: email,
      neighborhood: neighborhood,
      place: place,
      sound: sound,
      smell: smell,
      event: event,
      object: object,
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
