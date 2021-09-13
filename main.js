let bill = document.getElementById("input-bill");

let people = document.getElementById("input-people");

let perc

function perc5() {
  const button = document.getElementById("button-per-5");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
}

function perc10() {
  const button = document.getElementById("button-per-10");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
}

function perc15() {
  const button = document.getElementById("button-per-15");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
}

function perc25() {
  const button = document.getElementById("button-per-25");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
}

function perc50() {
  const button = document.getElementById("button-per-50");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
}
