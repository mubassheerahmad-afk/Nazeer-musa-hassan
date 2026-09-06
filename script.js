let cart = JSON.parse(localStorage.getItem("nbcCart")) || [];

function addToCart(name, price) {

    const existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("nbcCart", JSON.stringify(cart));

    alert(name + " has been added to your cart.");
}
