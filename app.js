// Close Button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDFA9");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click close to delete list items
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Adds a checkmark when user selects any item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create new list item when clicking add
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var noInput = document.getElementById("myInput").value;
  var x = document.getElementById("myInput").autofocus;

  li.appendChild(t);
  if (inputValue === "" || noInput === "") {
    // alert("You must write something!");
    document.getElementById("noInput").innerHTML =
      "Please write your item before adding!";
    document.getElementById("noInput").style.color = "red";
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("noInput").innerHTML = "";
  }
  document.getElementById("myInput").value = "";
  document.getElementById("noInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDFA9");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

$(document).ready(function () {
  $("#noInput").click(function () {
    $("p").hide();
  });
  $("#noInput").click(function () {
    $("p").show();
  });
});
