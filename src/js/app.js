// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

const { products, categories } = window;
window.onload = function () {
  var menuElement = document.getElementById("menu");
  var categories = window.categories;
  for (let i = 0; i < categories.length; i++) {
    var menuButton = document.createElement("button");
    menuButton.setAttribute("id", categories[i].id);
    menuButton.setAttribute("class", "btn");
    menuButton.type = "button";
    menuButton.innerHTML = categories[i].name;
    menuElement.appendChild(menuButton);
  }
  var defaultTable = window.categories[0];
  display(defaultTable);
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((node, index) => {
    node.addEventListener("click", function () {
      display(categories[index]);
    });
  });

  const tableRows = document.querySelectorAll("tr");
  tableRows.forEach((node) => {
    node.addEventListener("click", function () {
      console.log(this);
    });
  });
};
function display(catObj) {
  var tableHeading = document.getElementById("selected-category");
  var heading = document.createTextNode("Genre: " + catObj.name);
  tableHeading.setAttribute("class", "heading");
  tableHeading.innerHTML = "";
  tableHeading.appendChild(heading);
  var tableBody = document.getElementById("category-products");
  var rows = document.getElementById("category-products").rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML = " ";
  }
  var arrProducts = window.products;
  var filteredArray = [];
  filteredArray = arrProducts.filter((products) => {
    return products.categories.includes(catObj.id) && products.discontinued === false;
  });
  filteredArray.forEach(function displayArr(arrPassed) {
    var tableRow = document.createElement("tr");
    var TitleData = document.createElement("td");
    var Descdata = document.createElement("td");
    var PriceData = document.createElement("td");

    var Title = document.createTextNode(arrPassed.title);
    var Description = document.createTextNode(arrPassed.description);
    var Price = document.createTextNode(
      new Intl.NumberFormat("je-JY", { style: "currency", currency: "CAD" }).format(arrPassed.price)
    );

    TitleData.appendChild(Title);
    Descdata.appendChild(Description);
    PriceData.appendChild(Price);
    tableRow.append(TitleData, Descdata, PriceData);
    tableBody.appendChild(tableRow);
  });
}
// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");


