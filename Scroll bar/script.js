
let img = [{name:'shadow',img:'https://plus.unsplash.com/premium_photo-1764546930278-737f17268e92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', cap:'brings light to life'},
    {name:'friends',img:'https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8', cap:'zindagi na milegi dobara'},
    {name:'dog',img:'https://images.unsplash.com/photo-1763718170991-baa67106743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8', cap:'if there is a will there is a way'},
    {name:'nature',img:'https://plus.unsplash.com/premium_photo-1764684530239-21ef385b5e36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D', cap:'dont use shortcuts in life'},
    {name:'3d',img:'https://plus.unsplash.com/premium_photo-1764491465854-892fbe15b7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D', cap:'bla bla bla '},
    {name:'knot',img:'https://images.unsplash.com/photo-1767173079032-c0290f60b8ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D', cap:'when you are outing with friends'},
    {name:'diwali',img:'https://images.unsplash.com/photo-1767464949351-0fc591e59b78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D', cap:'food is the first love'},
    {name:'cool',img:'https://plus.unsplash.com/premium_photo-1673375651830-3e9a83284a21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D', cap:'dating a google guy'},
    {name:'bird',img:'https://images.unsplash.com/photo-1767288832044-c522467b24e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D', cap:'best whether : snow fall'},
    {name:'snow',img:'https://plus.unsplash.com/premium_photo-1737912827908-9c83e58c7dd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D', cap:'roads without traffic '},
    {name:'breakfast',img:'https://images.unsplash.com/photo-1767277672167-18105701959b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D', cap:'an apple a day keeps the doctor away'},
    {name:'sunset',img:'https://images.unsplash.com/photo-1767277672167-18105701959b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D', cap:'swag se swagat'},
    {name:'mountain',img:'https://plus.unsplash.com/premium_photo-1673375651830-3e9a83284a21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D', cap:'diwali festival hits different'},
    {name:'river',img:'https://images.unsplash.com/photo-1767464949351-0fc591e59b78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D', cap:'exam days'},
    {name:'forest',img:'https://images.unsplash.com/photo-1767173079032-c0290f60b8ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D', cap:'studying is a habit'},
    {name:'city',img:'https://plus.unsplash.com/premium_photo-1764491465854-892fbe15b7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D', cap:'dog lovers'},
    {name: "Petals of roses", img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'clear sky'},
    {name: "Animals of town", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'greener areas' },
    {name: "the crowd of city", img: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'oranges with vitamin c' },
    {name: "fruits of planet", img: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'roses are red...' },
    {name: "orange peeled", img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'sparrow are going to extinct'},
    {name: "web design", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'coding journey'},
    {name: "apple juice", img: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", cap:'a for apple'}]

function cards(){
    let clutter = ''
    img.forEach(function(obj){
        clutter += `<div class="box">
        <img src="${obj.img}" alt="">
        <div class="caption">${obj.cap}</div>
        </div>`
    })
    let contain = document.querySelector('.container')
    contain.innerHTML = clutter;
}
function search(){
    let input = document.querySelector('#searchinput')
    input.addEventListener('focus',function(){
        document.querySelector('.overlay').style.display = 'block'
    })
     input.addEventListener('blur',function(){
        document.querySelector('.overlay').style.display = 'none'
    })
    // const inputField = document.querySelector('input');

input.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase().trim();
  
  const filteredArray = img.filter(obj => 
    obj.name.toLowerCase().startsWith(searchValue)
  );
  displayResults(filteredArray);
    });

  function displayResults(results) {
    dropdown.innerHTML = '';

    if (results.length === 0) {
      dropdown.innerHTML = '<div class="no-results">No results found</div>';
      dropdown.classList.add('show');
      dropdown.style.display = 'block';
      return;
    }

    results.forEach(img => {
      const div = document.createElement('div');
      div.className = 'dropdown-item';
      div.innerHTML = `
         <i class="ri-search-line"></i>
        <span>${img.name}</span>
      `;

      
      // Handle click on item
      div.addEventListener('click', () => {
        searchInput.value = img.name;
        dropdown.classList.remove('show');
        console.log('Selected:', img);
    });
    
    dropdown.appendChild(div);
});

dropdown.classList.add('show');
dropdown.style.display = 'block';


  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.searchcontainer')) {
      dropdown.classList.remove('show');
        dropdown.style.display = 'none';
    }
  });
}   
}

// Use filteredArray for your needs
    // input.addEventListener('input',function(){
    //     let value = img.filter(obj => obj.name.toLowerCase().includes(input.value.toLowerCase()));
    //     let clutter = ''
    //     value.forEach(function(obj){
    //         clutter += `<div class='sing'>
    //         <i class="ri-search-line"></i>
    //         <h3>${img.name}</h3></div>`
    //     })
    //     document.querySelector('.searchdata').innerHTML = clutter;
    // })

search();
cards();




let down = document.querySelector('button')
let percent = document.querySelector('h1')
let bar = document.querySelector('#bar')

let grow = 0; 
down.addEventListener('click',function(){
    down.style.pointerEvents = 'none'
    var time = Math.floor(Math.random()*50)+40
    let set = setInterval(function(){
        grow++;
        percent.innerHTML = grow + '%';
        bar.style.width = grow + '%';
       if(grow === 100){
        clearInterval(set)
       }
    },time);

    setTimeout(function(){
        clearInterval(set)
        down.style.opacity = 0.5
        down.innerHTML = 'downloaded'
},time*100);
console.log(time);
console.log('downloaded in',time/10,'seconds')
})

let main = document.querySelector('main')
let element = document.querySelector('button')
let quote =['Click Me','Press Me','Hit Me','Tap Me','Push Me','Activate Me','Engage Me','Select Me','Choose Me','Go Ahead','Do It','Make It Happen','Get Started','Begin Here','Start Now','Jump In','Take Action','Seize The Day','Make A Move','Step Forward','Rise Up']
element.addEventListener('click',function(){
    let div = document.createElement('h1')
   let q =  quote[Math.floor(Math.random()*quote.length)]
    div.innerHTML = q
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    let r = Math.floor(Math.random()*360)
    let s = Math.floor(Math.random()*3)

    div.style.position = 'absolute'
    div.style.left = x +'%'
    div.style.top = y +'%'
    div.style.rotate = r + 'deg'
    div.style.color = `rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})
element.addEventListener('click',function(){
    let div = document.createElement('div')
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    let r = Math.floor(Math.random()*360)

    div.style.height = '100px'
    div.style.width = '100px'
    div.style.position = 'absolute'
    div.style.left = x +'%'
    div.style.top = y +'%'
    div.style.rotate = r + 'deg'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    main.appendChild(div)
})
let win = document.querySelector('button')
let box = document.querySelector('#box')
let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')
let body = document.querySelector('body')

win.addEventListener('click',function(){
    let ipl = teams[Math.floor(Math.random()*teams.length)]
    // var a1 = Math.floor(Math.random()*256)
    // var a2 = Math.floor(Math.random()*256)
    // var a3 = Math.floor(Math.random()*256)
    box.style.backgroundColor = ipl.secondary
    h1.innerHTML = ipl.Team
    h4.innerHTML = ipl.fullname
    h2.innerHTML = ipl.captain
    h3.innerHTML = 'trophies:' + ipl.trophies
    body.style.backgroundColor = ipl.primary
})
// let arr = ['alice','bob','charlie','david','eve','frank','grace','heidi','ivan','judy','karen','leo','mike','nancy','oscar','peggy','quinn','rachel','sam','trudy','uma','victor','wendy','xander','yvonne','zack'];
// let a = Math.floor(Math.random()*arr.length)
// console.log(arr[a]);

let teams = [
    {Team:'MI',
     primary:'blue',
     secondary:'gold',
     fullname:'Mumbai Indians',
     trophies:5,
     captain:'Rohit Sharma',
    },
    {Team:'CSK',
     primary:'yellow',
     secondary:'blue',
     fullname:'Chennai Super Kings',
     trophies:4,
     captain:'MS Dhoni',
    },
    {Team:'RCB',
     primary:'red',
     secondary:'black',
    fullname:'Royal Challengers Bangalore',
    trophies:1,
    captain:'Faf du Plessis',
},
    {Team:'DC',
     primary:'purple',
     secondary:'red',
    fullname:'Delhi Capitals',
    trophies:0,
    captain:'Rishabh Pant',
},
    { Team:'GT',
    primary:'pink',
     secondary:'blue',
     fullname:'Gujarat Titans',
     trophies:1,
     captain:'Shubman Gill',
    },
    {Team:'KKR',
     primary:'purple',
     secondary:'gold',
     fullname:'Kolkata Knight Riders',
     trophies:2,
     captain:'Shreyas Iyer',
    },
   {Team:'SRH',
    primary:'orange',
    secondary:'black',
    fullname:'Sunrisers Hyderabad',
    trophies:1,
    captain:'Aiden Markram',
   },
   {Team:'PBKS',
    primary:'red',
    secondary:'silver',
    fullname:'Punjab Kings',
    trophies:0,
    captain:'Shikhar Dhawan',
   },
   {Team:'RR',
    primary:'pink',
    secondary:'blue',
    fullname:'Rajasthan Royals',
    trophies:1,
    captain:'Sanju Samson',
},
   {Team:'LSG',
    primary:'yellow',
    secondary:'royalblue',
    fullname:'Lucknow Super Giants',
    trophies:0,
    captain:'KL Rahul',
   }
]

// let e = document.createElement('h1')
// e.innerText = 'Hello World'
// console.log(e);
let stories = [
    {dp:"https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1566759996874-04d713cc224a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D"}
    ,{dp:"https://plus.unsplash.com/premium_photo-1687118731563-ce48ca657778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1747851576628-02ab6241dff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1766764904687-8ef86d2248ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1766947910765-54441e548491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1764546983128-48223ebc0330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",story:"https://plus.unsplash.com/premium_photo-1766341850234-9ea648889fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1566759996874-04d713cc224a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D"}
    ,{dp:"https://plus.unsplash.com/premium_photo-1687118731563-ce48ca657778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1747851576628-02ab6241dff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1766764904687-8ef86d2248ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1766947910765-54441e548491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D"},
]

let clutter = ""
stories.forEach(function(elem,idx){
    clutter += `<div id="user">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

var learn = document.querySelector('#stories')
let full = document.querySelector('#full')
learn.innerHTML = clutter

learn.addEventListener('click',function(dets){
    full.style.display = 'block'
    full.style.backgroundImage = `url(${stories[dets.target.id].story})`

    setTimeout(function(){
        full.style.display = 'none'
    },2000)
})

let elem = document.querySelectorAll('.elem')
elem.forEach(function(val){
     let img = val.childNodes[3];
    val.addEventListener('mousemove',function(dets){
         let rect = val.getBoundingClientRect();
        let x = dets.clientX - rect.left;
        let y = dets.clientY - rect.top;
        img.style.left = x + "px"
        img.style.top = y + "px"
    })
    
    val.addEventListener('mouseenter',function(){
        val.childNodes[3].style.opacity = 0.8
    })
    
    val.addEventListener('mouseleave',function(){
        val.childNodes[3].style.opacity = 0
    })
    var h1 = document.querySelector('h1');
    let box = document.querySelector('#box');
    let decre = document.querySelector('#d');
    let bulb = document.querySelector('#bulb');
    var button = document.querySelector('#on button');
    let body = document.querySelector('main');
    let crsr = document.querySelector('.cursor');
})
body.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.pageX + "px"
    crsr.style.top = dets.pageY + "px"
    
})


let counter = 0;
box.addEventListener('click', function() {
    counter++;
    h1.innerHTML = counter
    h1.style.color = 'royalblue'
    h1.style.fontSize = '3rem'
    h1.style.fontFamily = 'helvetica'
    h1.style.fontWeight = '600'
})

decre.addEventListener('click', function() {
    counter--;
    h1.innerHTML = counter
    h1.style.color = 'orange'
    h1.style.fontSize = '3rem'
    h1.style.fontFamily = 'helvetica'
    h1.style.fontWeight = '600'
})

let flag = true;
button.addEventListener('click', function() {
    if(flag === true){
         bulb.style.backgroundColor = 'yellow'
         flag = false
    } else {
        bulb.style.backgroundColor = 'transparent'
        flag = true
    }
   
})

let page = 0;
let olivia = document.querySelector('h1');
let h2 = document.querySelector('h2');
let add = document.querySelector('#shorts button');
let lobe = document.querySelector('i');
add.addEventListener('click',function(){
    if (page === 0){ 
         h2.innerHTML = 'Friends'
         h2.style.color = 'green'
         add.innerHTML = 'Remove Friend'
         page = 1
}else{
    h2.innerHTML = 'Stranger'
    h2.style.color = 'red'
    add.innerHTML = 'Add Friend'
    page = 0
}  
})  
lobe.addEventListener('dblclick',function(){
    lobe.style.opacity = 0.9
    console.log = 'please'
setTimeout(function(){
    lobe.style.opacity = 0;
} ,1000);    
})




