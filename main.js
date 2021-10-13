let bill;
let people;
let perc;
let totalTip;

function changeInfo() {
  bill = parseInt(document.getElementById("input-bill").value, 10);
  people = parseInt(document.getElementById("input-people").value, 10);
  tipAmount()
  if (bill != 0) {
    document.getElementById("input-bill").style = "color:hsl(183, 100%, 15%)";
  };
  if (people != 0) {
    document.getElementById("input-people").style = "color:hsl(183, 100%, 15%)";
  }
  if (bill && people && perc && typeof perc === "number"){
    document.getElementById("tip-per-person").innerHTML = "$" + (Math.round((totalTip/people)*100) / 100);
    document.getElementById("total-per-person").innerHTML = "$" + (Math.round(((totalTip+bill)/people)*100) / 100);
  } else {
    document.getElementById("tip-per-person").innerHTML = "$0.00";
    document.getElementById("total-per-person").innerHTML = "$0.00";
  }
  document.getElementById("res-butt").style = "opacity:1"
}

function perc5() {
  const button = document.getElementById("button-per-5");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
  reversePercus()
  perc = 5;
  changeInfo()
}

function perc10() {
  const button = document.getElementById("button-per-10");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
  reversePercus()
  perc = 10;
  changeInfo()
}

function perc15() {
  const button = document.getElementById("button-per-15");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
  reversePercus()
  perc = 15;
  changeInfo()
}

function perc25() {
  const button = document.getElementById("button-per-25");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
  reversePercus()
  perc = 25;
  changeInfo()
}

function perc50() {
  const button = document.getElementById("button-per-50");
  button.style = "background-color:hsl(172, 67%, 45%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  reversePercus()
  perc = 50;
  changeInfo()
}

function percus() {
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
  const button = document.getElementById("button-per-cus");
  button.type="number"
  document.getElementById("percent-sign").innerHTML = "%"
  document.getElementById("percent-sign").style = "margin-left:-14%"
  }

function reversePercus() {
  document.getElementById("button-per-cus").type = "text";
  document.getElementById("button-per-cus").value = "Custom";
  document.getElementById("percent-sign").innerHTML = "";
  document.getElementById("percent-sign").style = "margin-left:0px";
}

function tipAmount() {
  if (document.getElementById("button-per-cus").type === "number") {
    perc = parseInt(document.getElementById("button-per-cus").value, 10);
  }
  totalTip = bill * perc / 100;
}

function resetButton() {
  document.getElementById("input-bill").value = "0";
  document.getElementById("input-people").value = "0";
  document.getElementById("button-per-5").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-10").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-15").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-25").style = "background-color:hsl(183, 100%, 15%)";
  document.getElementById("button-per-50").style = "background-color:hsl(183, 100%, 15%)";
  perc = 0;
  totalTip = 0;
  reversePercus()
  changeInfo()
  document.getElementById("input-bill").style = "color:hsl(186, 14%, 43%)";
  document.getElementById("input-people").style = "color:hsl(186, 14%, 43%)";
}

function removeValueBill() {
  document.getElementById("input-bill").value = "";
}

function removeValuePeople() {
  document.getElementById("input-people").value = "";  
}
