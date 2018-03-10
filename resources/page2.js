let clickEvent1 = document.getElementById('myPicture2')
  clickEvent1.addEventListener('click', function(){
    fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

    let apiData1 = myJson.results[0].title;
      let mydiv = document.getElementById('album_container2')
      let newdiv= document.createElement("div")
      newdiv.innerHTML = apiData1;
      mydiv.appendChild(newdiv);
  })
});
let clickEvent2 = document.getElementById('myPicture1')
  clickEvent2.addEventListener('click', function(){
    fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

    let apiData2 = myJson.results[4].title;
      let mydiv2 = document.getElementById('album_container2')
      let newdiv2= document.createElement("div")
      newdiv2.innerHTML = apiData2;
      mydiv2.appendChild(newdiv2);
  })
});
let clickEvent3 = document.getElementById('myPicture3')
  clickEvent3.addEventListener('click', function(){
    fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

    let apiData3 = myJson.results[2].title;
      let mydiv3 = document.getElementById('album_container2')
      let newdiv3= document.createElement("div")
      newdiv3.innerHTML = apiData3;
      mydiv3.appendChild(newdiv3);
  })
});
let clickEvent4 = document.getElementById('myPicture4')
  clickEvent4.addEventListener('click', function(){
    fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

    let apiData4 = myJson.results[3].title;
      let mydiv4 = document.getElementById('album_container2')
      let newdiv4= document.createElement("div")
      newdiv4.innerHTML = apiData4;
      mydiv4.appendChild(newdiv4);
  })
});
let clickEvent5 = document.getElementById('myPicture5')
  clickEvent5.addEventListener('click', function(){
    fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

    let apiData5 = myJson.results[1].title;
      let mydiv5 = document.getElementById('album_container2')
      let newdiv5= document.createElement("div")
      newdiv5.innerHTML = apiData5;
      mydiv5.appendChild(newdiv5);
  })
});

let clearEvent = document.getElementById('button-clear')
  clearEvent.addEventListener('click', function(){
  document.getElementById('album_container2').innerHTML = "";
})
