window.addEventListener("load", () => {
  //fetch info from maplibs db
  document.getElementById("fetch-data").addEventListener("click", () => {
    fetch("/getmaplibs")
      .then((resp) => resp.json())
      .then((data) => {
        document.getElementById("submitted-answers").innerHTML = "";
        console.log(data.data);

        for (let i = 0; i < data.data.length; i++) {
          let string =
            "Name: " +
            data.data[i].name +
            ", " +
            "neighborhood: " +
            data.data[i].neighborhood +
            ", " +
            "place: " +
            data.data[i].place +
            ", " +
            "sound: " +
            data.data[i].sound +
            ", " +
            "smell: " +
            data.data[i].smell +
            ", " +
            "event: " +
            data.data[i].event +
            ", " +
            "object: " +
            data.data[i].object;

          let element = document.createElement("p");
          element.innerHTML = string;
          document.getElementById("submitted-answers").appendChild(element);
        }
      });
  });
});
