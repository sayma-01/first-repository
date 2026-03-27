let products = [
    {name: 'cushion chair', headline: 'comfortable for all', price: 20000, img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJzfGVufDB8fDB8fHww'},
    {name: 'office chair', headline: 'suitable of office works', price: 35000, img: 'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXJzfGVufDB8fDB8fHww'},
    {name: 'latest chair', headline: 'aesthetic touch in your home', price: 38000, img: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60'},
]
let popular = [
    {name: 'modern chair' , headline: 'stylish and modern' , price: '75000' , img:'https://images.unsplash.com/photo-1600093328589-39ed150b382b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'traditional chair' , headline: 'old and memorable' , price: '70000' , img:'https://images.unsplash.com/photo-1519345177444-c0381c7098a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'king chair' , headline: 'royal look' , price: '750000' , img:'https://media.istockphoto.com/id/1188830565/photo/ornate-ivory-and-gold-sofa.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cd0TSysbjTLJRlFm1wzHJxEZQa5d6vfXb-TGeFz_GBo='},


]

function addProduct(){
    var clutter = '';
    products.forEach(function(product,index){
        clutter += `<div class="product">
                <div class="image">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="data">
                    <h1>${product.name}</h1>
                    <div class="product-footer">
                        <div class="price-info">
                            <h3>${product.headline}</h3>
                            <h4><i class="ri-money-rupee-circle-line"></i>${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add-btn"><i class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
    })
    
    // Add this line to insert the HTML into the page
    document.querySelector('.products').innerHTML = clutter;
}

function addPopular(){
    var clutter = '';
    popular.forEach(function(product){
        clutter += `<div class="popular">
                    <div class="popular-image">
                    <img src="${product.img}" alt="${product.name}"> 
                    </div>
                    <div class="popular-data">
                        <h1>"${product.name}"</h1>
                        <h4>"${product.headline}"</h4>
                        <h4 class="price"><i class="ri-money-rupee-circle-line"></i>"${product.price}"</h4>
                    </div>
                </div>`
    })
    document.querySelector('.populars').innerHTML = clutter;
}

function addtoCart(){
    let pr = document.querySelector('.products')
    pr.addEventListener('click',function(details){
        if(details.target.classList.contains('add-btn')){
            cart.push(products[details.target.dataset.index])
        }

    })
}

function showCart(){
    document.querySelector('.carticon').addEventListener('click',function(){
        document.querySelector('.cartexpnd').style.display = 'block';
        var clutter = '';
        cart.forEach(function(product){
            clutter += `<div class="cartproduct">
                <div class="cartimage">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="cartdata">
                    <h1>${product.name}</h1>
                    <h4><i class="ri-money-rupee-circle-line"></i>${product.price}</h4>
                </div>
            </div>`
        })
        document.querySelector('.cartexpnd').innerHTML = clutter;
    })
}

addProduct();
addPopular();
addtoCart();
showCart();