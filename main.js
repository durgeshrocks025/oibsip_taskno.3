var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var sp = document.createElement("SPAN");
  var todo = document.createTextNode("\u00D7");
  sp.className = "close";
  sp.appendChild(todo);
  myNodelist[i].appendChild(sp);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inp").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylist").appendChild(li);
  }
  document.getElementById("inp").value = "";

  var sp = document.createElement("SPAN");
  var todo = document.createTextNode("\u00D7");
  sp.className = "close";
  sp.appendChild(todo);
  li.appendChild(sp);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}