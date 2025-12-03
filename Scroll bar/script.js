var btn = document.querySelector("button");
var box = document.createElement("main");

btn.addEventListener("click", function() {
   var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256); 
   var p = Math.floor(Math.random() * 256);
   btn.style.backgroundColor = `rgb(${x}, ${y}, ${p})`;
})

const people = [
  {
    fullName: "Aarav Mehta",
    profession: "Web Developer",
    age: 22,
    tag: "frontend"
  },
  {
    fullName: "Sanya Kapoor",
    profession: "Graphic Designer",
    age: 25,
    tag: "creative"
  },
  {
    fullName: "Rohan Sharma",
    profession: "Data Analyst",
    age: 28,
    tag: "analytics"
  },
  {
    fullName: "Priya Nair",
    profession: "Content Writer",
    age: 24,
    tag: "writing"
  },
  {
    fullName: "Kabir Joshi",
    profession: "Mobile App Developer",
    age: 26,
    tag: "android"
  }
];