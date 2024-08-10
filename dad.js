function closeFirst() {
  roller = document.getElementById("roll");
  cover = document.getElementById("cover");
  other = document.getElementById("cover2");
  coverr1 = document.getElementById("coverr1");

  roll.innerHTML = "Out of spins!";
  cover.style.display = "block";
  other.style.display = "none";
  coverr1.style.display = "none";
}

function closeSecond() {
  roller2 = document.getElementById("roll2");
  cover2 = document.getElementById("cover2");
  other2 = document.getElementById("cover3");
  coverr2 = document.getElementById("coverr2");

  roller2.innerHTML = "Out of spins!";
  cover2.style.display = "block";
  other2.style.display = "none";
  coverr2.style.display = "none";
}

function closeThird() {
  roller3 = document.getElementById("roll3");
  cover3 = document.getElementById("cover3");

  roller3.innerHTML = "Out of spins!";
  cover3.style.display = "block";
}

function rollEr() {
  var textArray = [
    "Islands",
    "Red Robin",
    "North Park",
    "NPBC Bankers" + "<br>" + "Hill",
    "In-N-Out",
    "Dukes Onion" + "<br>" + "Burgers",
    "At Home",
    "Chili's",
    "BJ's",
    "Panda",
    "Panda Chef",
    "Otay Mandarin",
    "The Friendly",
    "Vougue",
    "Five Guys",
    "Slaters 50/50",
    "Sonic",
    "Texas Road" + "<br>" + "House",
    "Cheesecake" + "<br>" + "Factory",
    "Broady's" + "<br>" + "Burgers",
    "Annie's" + "<br>" + "Burgers",
    "Burger Deck",
    "Sushi Deli 3",
    "Eureka!",
    "Taco Bell",
  ];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("result1").innerHTML = textArray[randomNumber];
  setInterval(show, 200);
}

function rollEr2() {
  var textArray = [
    "Islands",
    "Red Robin",
    "North Park",
    "NPBC Bankers" + "<br>" + "Hill",
    "In-N-Out",
    "Dukes Onion" + "<br>" + "Burgers",
    "At Home",
    "Chili's",
    "BJ's",
    "Panda",
    "Panda Chef",
    "Otay Mandarin",
    "The Friendly",
    "Vougue",
    "Five Guys",
    "Slaters 50/50",
    "Sonic",
    "Texas Road" + "<br>" + "House",
    "Cheesecake" + "<br>" + "Factory",
    "Broady's" + "<br>" + "Burgers",
    "Annie's" + "<br>" + "Burgers",
    "Burger Deck",
    "Sushi Deli 3",
    "Eureka!",
    "Taco Bell",
  ];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("result2").innerHTML = textArray[randomNumber];
  setInterval(show2, 200);
}

function rollEr3() {
  var textArray = [
    "Islands",
    "Red Robin",
    "North Park",
    "NPBC Bankers" + "<br>" + "Hill",
    "In-N-Out",
    "Dukes Onion" + "<br>" + "Burgers",
    "At Home",
    "Chili's",
    "BJ's",
    "Panda",
    "Panda Chef",
    "Otay" + "<br>" + "Mandarin",
    "The Friendly",
    "Vougue",
    "Five Guys",
    "Slaters 50/50",
    "Sonic",
    "Texas Road" + "<br>" + "House",
    "Cheesecake" + "<br>" + "Factory",
    "Broady's" + "<br>" + "Burgers",
    "Annie's" + "<br>" + "Burgers",
    "Burger Deck",
    "Sushi Deli 3",
    "Eureka!",
    "Taco Bell",
  ];
  var randomNumber = Math.floor(Math.random() * textArray.length);
  document.getElementById("result3").innerHTML = textArray[randomNumber];
  setInterval(show3, 200);
}

var opacity = 0;
var intervalID = 0;

function show() {
  var body = document.getElementById("result1");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
} 

function show2() {
  var body = document.getElementById("result2");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
} 

function show3() {
  var body = document.getElementById("result3");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
} 