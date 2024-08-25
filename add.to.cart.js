const product=[
    {
        id:0,
        image:"download4.jpg",
        title:"Foldable Mobile",
        price:120
    },
    {
        id:1,
        image:"download3.jpg",
        title:"Air Pod",
        price:300
    },
    {
        id:2,
        image:"download2.jpg",
        title:"Camera-lens",
        price:300
    },
    {
        id:3,
        image:"download.jpg",
        title:"Laptop",
        price:100
    },
];

const categories=[...new Set(product.map((item)=>{
    return item}))];


let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>{
    let {image,title,price}=item;
    return(
        `<div class='box'>

        <div class='img-box'>
        <img src=${image} class='images'></img>
        </div>

        <div class= 'bottom'>
        <p>${title}</p>
        <h2>$.${price}.00</h2>`+
        "<button class='itemDelete' onclick='addToCart("+(i++)+")'>Add to Cart</button>"+
         `</div>

        </div>`
    );
}).join('');

var cart=[];

function addToCart(a){
    cart.push({...categories[a]});
    displayCart();

}
function deleteButton(a){
    cart.splice(a,1);
    displayCart();

}
function displayCart(a){
    let j=0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartitem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML=0 +".00"
    }
    else{
        document.getElementById('cartitem').innerHTML=cart.map((item)=>{
            var{image,title,price}=item;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+ total +".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$${price}.00</h2>`+
                `<button class='del' onclick='deleteButton()'><i class='fa-solid fa-trash'></i><button>`
                +`</div>`
            )
    }).join("")
}
}

