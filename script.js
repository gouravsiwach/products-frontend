document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list-items");
  const addProductForm = document.getElementById("add-product-form");

  // Fetch and display products from the server
  fetch("/products")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const item = document.createElement("li");
        item.textContent = `Name: ${product.name}, Price: $${product.price}`;
        productList.appendChild(item);
      });
    });

  // Handle form submission
  addProductForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const featured = document.getElementById("featured").checked;
    const rating = parseFloat(document.getElementById("rating").value);
    const createdAt = document.getElementById("createdAt").value;
    const company = document.getElementById("company").value;

    // Validate input (You can add more detailed validation)
    if (!name || isNaN(price) || !createdAt || !company) {
      alert("Please fill in required fields.");
      return;
    }

    // Create a product object
    const product = {
      name,
      price,
      featured,
      rating,
      createdAt,
      company,
    };

    // Send the product to the server
    fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((newProduct) => {
        // Display the new product in the list
        const item = document.createElement("li");
        item.textContent = `Name: ${newProduct.name}, Price: $${newProduct.price}`;
        productList.appendChild(item);

        // Reset the form
        addProductForm.reset();
      });
  });
});

// Fetch product data from the backend
fetch("/products")
  .then((response) => response.json())
  .then((products) => {
    // Handle the product data (e.g., display it on the page)
  })
  .catch((error) => console.error("Error fetching products:", error));

// Add a new product to the backend
const newProduct = {
  name: "Sample Product",
  price: 19.99,
  // Include other product properties here
};

fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newProduct),
})
  .then((response) => response.json())
  .then((addedProduct) => {
    // Handle the response (e.g., display the added product)
  })
  .catch((error) => console.error("Error adding product:", error));

// User authentication (e.g., login)
const userCredentials = {
  email: "user@example.com",
  password: "password123",
};

fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userCredentials),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response (e.g., store the token or redirect the user)
  })
  .catch((error) => console.error("Error logging in:", error));
