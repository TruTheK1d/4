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

// Log the products and categories data
console.log({ products, categories }, "Store Data");

// Function to format price in Canadian currency
function formatCurrency(cents) {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(cents / 100);
}

// Function to display products based on the selected category
function displayProducts(categoryId) {
    const tbody = document.querySelector('#category-products');
    const selectedCategoryTitle = document.querySelector('#selected-category');
    
    // Clear current rows
    tbody.innerHTML = '';
    
    // Update selected category title
    const selectedCategory = categories.find(category => category.id === categoryId);
    selectedCategoryTitle.innerText = selectedCategory.name;

    // Filter products based on category and discontinued status
    const filteredProducts = products.filter(product => 
        product.categories.includes(categoryId) && product.discontinued
    );

    // Loop through filtered products and create table rows
    filteredProducts.forEach(product => {
        const tr = document.createElement('tr');
        tr.addEventListener('click', () => {
            console.log(product);
        });

        const titleTd = document.createElement('td');
        titleTd.innerText = product.title;

        const descriptionTd = document.createElement('td');
        descriptionTd.innerText = product.description;

        const priceTd = document.createElement('td');
        priceTd.innerText = formatCurrency(product.price);

        // Append td elements to tr
        tr.appendChild(titleTd);
        tr.appendChild(descriptionTd);
        tr.appendChild(priceTd);
        
        // Append tr to tbody
        tbody.appendChild(tr);
    });
}

// Event handler for page load
function init() {
    // Create category buttons
    const menu = document.querySelector('#menu');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category.name;
        button.addEventListener('click', () => displayProducts(category.id));
        menu.appendChild(button);
    });

    // Display products for the first category by default
    if (categories.length > 0) {
        displayProducts(categories[0].id);
    }
}

// Run init function when the page loads
window.addEventListener('load', init);




