var btn = document.querySelector("button");
var box = document.createElement("main");

btn.addEventListener("click", function() {
   var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256); 
   var p = Math.floor(Math.random() * 256);
   btn.style.backgroundColor = `rgb(${x}, ${y}, ${p})`;
})
