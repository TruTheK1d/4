/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Turmunkh Davaajargal
 *      Student ID: 164138232
 *      Date:       11/02/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
function formatCurrency(cents) {
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(cents / 100);
}

function displayProducts(categoryId) {
  const tbody = document.querySelector("#category-products");
  const selectedCategoryTitle = document.querySelector("#selected-category");

  tbody.innerHTML = "";
  const selectedCategory = categories.find((category) => category.id === categoryId);
  selectedCategoryTitle.innerText = selectedCategory.name;

  const filteredProducts = products.filter(
    (product) => product.categories.includes(categoryId) && !product.discontinued
  );
  filteredProducts.forEach((product) => {
    const tr = document.createElement("tr");
    tr.addEventListener("click", () => {
      console.log(product);
    });

    const titleTd = document.createElement("td");
    titleTd.innerText = product.title;

    const descriptionTd = document.createElement("td");
    descriptionTd.innerText = product.description;

    const priceTd = document.createElement("td");
    priceTd.innerText = formatCurrency(product.price);
    tr.appendChild(titleTd);
    tr.appendChild(descriptionTd);
    tr.appendChild(priceTd);
    tbody.appendChild(tr);
  });
}

function init() {
  const menu = document.querySelector("#menu");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category.name;
    button.addEventListener("click", () => displayProducts(category.id));
    menu.appendChild(button);
  });

  if (categories.length > 0) {
    displayProducts(categories[0].id);
  }
}

window.addEventListener("load", init);
