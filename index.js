const product = [
    { id: 0, image: "/download4.jpg", title: "Foldable Mobile", price: 120 },
    { id: 1, image: "/download3.jpg", title: "Air Pod", price: 300 },
    { id: 2, image: "/download2.jpg", title: "Camera-lens", price: 300 },
    { id: 3, image: "/download.jpg", title: "Laptop", price: 100 },
];

// Ensure unique products (if needed)
const categories = [...new Set(product.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

let cart = [];

document.getElementById('root').innerHTML = categories.map((item, index) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img src='${image}' class='images' alt='${title}'>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$${price}.00</h2>
                <button class='itemDelete' onclick='addToCart(${index})'>Add to Cart</button>
            </div>
        </div>`;
}).join('');

function addToCart(index) {
    cart.push({ ...categories[index] });
    displayCart();
}

function deleteButton(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$0.00";
    } else {
        document.getElementById('cartitem').innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = `$${total}.00`;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}' alt='${title}'>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$${price}.00</h2>
                    <button class='del' onclick='deleteButton(${index})'><i class='fa-solid fa-trash'></i></button>
                </div>`;
        }).join("");
    }
}
