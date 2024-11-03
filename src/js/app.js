const { products, categories } = window;

window.onload = function () {
  const menuElement = document.getElementById("menu");

  // Create "All Products" button
  const allProductsButton = document.createElement("button");
  allProductsButton.innerHTML = "All Products";
  allProductsButton.addEventListener("click", showAllProducts);
  menuElement.appendChild(allProductsButton);

  // Create category buttons
  categories.forEach(category => {
    const menuButton = document.createElement("button");
    menuButton.id = category.id;
    menuButton.className = "btn";
    menuButton.type = "button";
    menuButton.innerHTML = category.name;
    menuButton.addEventListener("click", () => display(category));
    menuElement.appendChild(menuButton);
  });

  // Display products for the first category by default
  display(categories[0]);
};

function showAllProducts() {
  const tableHeading = document.getElementById("selected-category");
  tableHeading.textContent = "All Products";

  const tableBody = document.getElementById("category-products");
  tableBody.innerHTML = ""; // Clear existing rows

  // Show all products
  products.forEach(product => {
    if (!product.discontinued) {
      const tableRow = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = product.title;

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = product.description;

      const priceCell = document.createElement("td");
      priceCell.textContent = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(product.price / 100);

      tableRow.append(titleCell, descriptionCell, priceCell);
      tableBody.appendChild(tableRow);
    }
  });
}

function display(catObj) {
  const tableHeading = document.getElementById("selected-category");
  tableHeading.textContent = "Genre: " + catObj.name;

  const tableBody = document.getElementById("category-products");
  tableBody.innerHTML = ""; // Clear existing rows

  const filteredProducts = products.filter(product =>
    product.categories.includes(catObj.id) && !product.discontinued
  );

  filteredProducts.forEach(product => {
    const tableRow = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = product.title;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = product.description;

    const priceCell = document.createElement("td");
    priceCell.textContent = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(product.price / 100);

    tableRow.append(titleCell, descriptionCell, priceCell);
    tableBody.appendChild(tableRow);
  });
}

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");




