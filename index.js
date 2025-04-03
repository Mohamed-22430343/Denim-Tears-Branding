document.addEventListener("DOMContentLoaded", () => {
    fetch("db.json")
        .then(response => response.json())
        .then(data => loadProducts(data.products));

    function loadProducts(products) {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <button class="buy-button">Buy Now</button>
            `;

            productCard.querySelector(".buy-button").addEventListener("click", () => {
                alert(`You have selected: ${product.name}`);
            });

            productList.appendChild(productCard);
        });
    }

    document.getElementById("shop-link").addEventListener("click", () => {
        alert("Welcome to the Shop!");
    });

    document.getElementById("contact-link").addEventListener("click", () => {
        alert("Contact us at denimtears@example.com");
    });
});