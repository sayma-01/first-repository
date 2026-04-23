// const para = document.querySelector('p');
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
// const text = para.innerText

// para.addEventListener('mouseenter', ()=> {

//     setInterval(() => {
        
//         const str = text.split('').map((char, index) => {
//             return characters.split('')[Math.floor(Math.random() * 53) ]
//         }).join('')

//         para.innerText = str
//     }, 50);
// })


// class User {
//     constructor(name, email, color) {
//         this.name = name;
//         this.email = email;
//         this.color = color;
//     }
    
//     loggedin() {
//         console.log('logged in');
//     }

//     erase() {
//         let a = document.querySelectorAll('h3');
//         a.forEach((elem) => {
//             if(elem.style.color === this.color){
//                 elem.remove();
//             }
//         })
//     }

    
// }

// User.prototype.write = function (text) {
//         let a = document.createElement('h3');
//             a.textContent = text;
//             a.style.color = this.color;
//             document.body.appendChild(a);
//         };
    



// let userss = new User('Nischay Malhan', 'nischay.malhan@example.com', 'red');
// let use= new User('Ruchika Malhan', 'ruchika.malhanrathore@example.com', 'blue');
// let us = new User('Prerna Malhan', 'prerna.malhansharma@ee.com', 'green');
// let urs = new User('Abhishek Malhan', 'abhishek.malhan@12.com', 'yellow');
// let sers = new User('Dimple Malhan', 'dimple.malhan@kitchens.com', 'purple');


// let user = {
//     name: 'Shakshi Sharma',
//     email: 'shakshi.sharma@example.com',
//     login: function() {
//         console.log('logged in');
//     },
// };
// user.login();

// let user2 = {
//     name: 'Shakshi Sharma',
//     email: 'shakshi.sharma@example.com',
//     login: function() {
//         console.log('logged in2');
//     },
// };
// user2.login();

// let user3 = {
//     name: 'Shakshi Sharma',
//     email: 'shakshi.sharma@example.com',
//     login: function() {
//         console.log('logged in');
//     },
// };
// user3.login();

// let user4 = {
//     name: 'Shakshi Sharma',
//     email: 'shakshi.sharma@example.com',
//     login: function() {
//         console.log('logged in');
//     },
// };
// user4.login();

// let user5 = {
//     name: 'Shakshi Sharma',
//     email: 'shakshi.sharma@example.com',
//     login: function() {
//         console.log('logged in');
//     },
// };
// user5.login();



// class Books {
//     constructor(name, author, price, rating) {
//         this.name = name;
//         this.author = author;
//         this.price = price;
//         this.rating = rating;
//     }

   
// }

// let n1 = new Books('Shimla affair', 'Shakshi Sharma', '1000', '4.3stars' ) ;
// let n2 = new Books('HarryPotter', 'J.K Rowling', '1800', '4.8stars');
// let n3 = new Books('Me & Thee', 'Thirakthin Kian Arseny', '2500', '4.9stars');

// let product = {
//     name: 'IPHONE 14 PRO MAX',
//     price: 129900,
//     discount: function() {
//         return this.price * 0.96;
//     }
// }

// console.log(product.discount());

// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand + " - " + this.speed;
//     }
// }

// let c1 = new Car('BMW', 200);
// let c2 = new Car('Audi', 220);

// class Student{
//     constructor(name, rollno) {
//         name = name;
//         this.rollno = rollno;
//     }

//     introduce() {
//         return(this.name + " - " + this.rollno);
//     }
// }

// let s1 = new Student('Varun Dhawan', 12);
// s1.introduce();

// let obj = {
//     normal: function() {
//         console.log(this);
//     },
//     arrow: () => {
//         console.log(this);
//     }

// }
// obj.normal();
// obj.arrow();

// function Animal(){
//     this.type = 'Animal';
// }

// Animal.prototype.login = function(){
//     console.log('Animal logged in');
// }


// let a1 = new Animal();
// a1.login();

// function abcd(){
//     console.log(this.name);
// }
// let objs = {
//     name: 'prablin dhillon'
// }

// abcd.call(objs)

// function sync(fnc){
//     setTimeout(fnc, Math.floor(Math.random() * 10)*1000);
// }

// sync(function() {
//     console.log('Hello');
// });

// function profile(username, cb) {
//     console.log('Fetching profile...');
//     setTimeout(() => {
//         cb({_id: 23243, username});
//     }, 2000);
// }

// function post(id, cb){
//     console.log('Fetching posts...');
//     setTimeout(() => {
//         cb({_id: id, posts: ['post1', 'post2', 'post3']});
//     }, 3500);
// }

// function savedPosts(id,cb){
//     console.log('Fetching saved posts...');
//     setTimeout(() => {
//         cb({_id: id, saved: ['saved1', 'saved2', 'saved3']}

//         )
//     },4500)
// }

// profile('Vandana Wagle', function(data){
//     console.log(data);
//     post(data._id,function(posts){
//         console.log(posts);
//         savedPosts(data._id, function(saved){
//             console.log(saved);
//         })
//     })
// });

// let pr = new Promise(function(res, rej) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random()* 10);
//         if(rn < 5)
//             res('resolved with ' + rn);
//         else rej('rejected with ' +  rn)
//     }, 2000);
// });

// async function abdc(){
//     try{
//        let val = await pr;
//          console.log(val);
//     }catch(err) {
//         console.log(err);
//     };
    
// }

// abdc();

fetch('https://randomuser.me/api/?results=10')
.then((rawdata) => rawdata.json()) 
  
.then((data) => {
    data.results.forEach (function(user) {
    // console.log(user.picture.large);
    // Create card container
const card = document.createElement("div");
card.className = "card";

// Create image wrapper
const imgDiv = document.createElement("div");
imgDiv.className = "img";

// Create image element
const img = document.createElement("img");
img.src = user.picture.large;
img.alt = "Profile picture";

// Append image to wrapper
imgDiv.appendChild(img);

// Create text wrapper
const textDiv = document.createElement("div");
textDiv.className = "text";

// Create heading
const h2 = document.createElement("h2");
h2.textContent = user.name.first + " " + user.name.last;

// Create paragraph
const p = document.createElement("p");
p.textContent = user.email;

// Create button
const button = document.createElement("button");
button.textContent = "Active";

// Append text elements to text wrapper
textDiv.appendChild(h2);
textDiv.appendChild(p);
textDiv.appendChild(button);

// Append image and text sections to card
card.appendChild(imgDiv);
card.appendChild(textDiv);

// Finally, append card to body
document.querySelector('.cardu').appendChild(card);
  

    });
});   

// .catch((err) => {
//     console.error(err);
// })

function afterDelay(time, cb) {
    setTimeout(function() {
        cb();
    }, time);
}

afterDelay(2000, function() {
    console.log('Hello after 2 seconds');
})

function getUser(username, cb) {
    console.log('Fetching username...');
    setTimeout(function(){
        cb({id:122, username: username});
    }, 1000)
} 

function getUserPosts(id, cb){
    console.log('Fetching posts...');
    setTimeout(() => {
        cb({posts: ['post1', 'post2', 'post3']});
    }, 2000)
};

getUser('Haruka Sakura', function(data){
    getUserPosts(data.id, function(posts){
        console.log(data.username, posts);
    })
})


function instagram(username, cb) {
    setTimeout(() => {
        cb({uniquenum: 4566, username: username});
    }, 2000);
}

function meta(uniquenum ,cb){
    setTimeout(() => {
        cb(['img1', 'img2', 'img3']);
    }, 4000)
}

instagram('Action Kamen', function(data){
    meta('uniquenum', function(images){
        console.log(images, data.username);
    });
})

const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
});

prm
  .then(function() {
    console.log('resolved');
  })
  .catch(function() {
    console.log('resolved');
  });

  function getNum () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10);
            if(num < 5){
                resolve(num);
            } else reject(num);
        }, 2000);
    });
  }

  async function number() {
    let result = await getNum();
    console.log(result);
  }

  number();



// }
// setInterval(randomText, 30)









































