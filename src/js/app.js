/**
 * app.js
 * WEB222 – Assignment 04
 *
 * This file contains the JavaScript to dynamically create buttons and display products
 * based on category selection. Product details are displayed in a table and clicking on a product
 * row logs the product details to the console.
 */

// Use local references to products and categories
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Set up references to HTML elements
const menu = document.querySelector('#menu');
const tbody = document.querySelector('tbody');
const selectedCategoryTitle = document.querySelector('#selected-category');

// Function to display products in a category
function displayProducts(categoryId) {
  // Find the category object
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return;

  // Update the selected category title
  selectedCategoryTitle.textContent = category.name;

  // Clear existing rows in the table body
  tbody.innerHTML = '';

  // Filter products by the selected category and check if not discontinued
  const filteredProducts = products.filter(
    product => product.categories.includes(categoryId) && !product.discontinued
  );

  // Loop through each filtered product and create table rows dynamically
  filteredProducts.forEach(product => {
    const tr = document.createElement('tr');

    // Add click event to log product details
    tr.addEventListener('click', () => console.log(product));

    // Create and append table cells for title, description, and price
    const titleTd = document.createElement('td');
    titleTd.textContent = product.title;
    tr.appendChild(titleTd);

    const descTd = document.createElement('td');
    descTd.textContent = product.description;
    tr.appendChild(descTd);

    const priceTd = document.createElement('td');
    // Convert price to Canadian currency format
    priceTd.textContent = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(product.price);
    tr.appendChild(priceTd);

    // Append the row to the table body
    tbody.appendChild(tr);
  });
}

// Function to create category buttons and set up event listeners
function createCategoryButtons() {
  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category.name;
    button.addEventListener('click', () => displayProducts(category.id));
    menu.appendChild(button);
  });
}

// Initial setup: create category buttons and display the first category's products
window.addEventListener('DOMContentLoaded', () => {
  createCategoryButtons();
  if (categories.length > 0) {
    displayProducts(categories[0].id);
  }
});
0
