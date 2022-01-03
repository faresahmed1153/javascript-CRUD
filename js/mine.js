var productName = document.getElementById("productName");
var productCategory = document.getElementById("productCategory");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDescription");

if (localStorage.getItem("arr") != null) {
  var products = JSON.parse(localStorage.getItem("arr"));
} else {
  var products = [];
}

displayProduct();

function createProduct() {
  var product = {
    pName: productName.value,
    pCategory: productCategory.value,
    pPrice: productPrice.value,
    pDescription: productDescription.value,
  };

  products.push(product);
  localStorage.setItem("arr", JSON.stringify(products));

  displayProduct();
  clearForm();
}

function displayProduct() {
  var holder = "";

  for (var i = 0; i < products.length; i++) {
    holder += `<tr>
    <td scope="row">${i}</td>
                <td scope="row">${products[i].pName}</td>
            <td scope="row">${products[i].pCategory}</td>
            <td scope="row">${products[i].pPrice}</td>
            <td scope="row">${products[i].pDescription}</td>
            <td scope="row"><button onclick="updateProduct1(${i});"  class="btn btn-warning">
              <i class="fas fa-edit"></i></button>
            </td>
            <td scope="row"><button onclick="deleteProduct(${i});"  class="btn btn-danger">
              <i class="fas fa-trash"></i></button>
            </td>
          </tr>`;
  }
  document.getElementById("tbody").innerHTML = holder;
}

function clearForm() {
  productName.value = "";
  productCategory.value = "";
  productPrice.value = "";
  productDescription.value = "";
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("arr", JSON.stringify(products));
  displayProduct();
}

function updateProduct1(index) {
  document.getElementById("create").style.display = "none";
  productName.value = products[index].pName;
  productCategory.value = products[index].pCategory;
  productPrice.value = products[index].pPrice;
  productDescription.value = products[index].pDescription;
  document.getElementById("update").style.display = "inline-block";
  document.getElementById("update").value = index;
}
function updateProduct2() {
  if (products.length < 1) {
    document.getElementById("create").style.display = "inline-block";
    document.getElementById("update").style.display = "none";
    return;
  }
  index = document.getElementById("update").value;
  if (products[index] == undefined) {
    document.getElementById("create").style.display = "inline-block";
    document.getElementById("update").style.display = "none";
    return;
  }
  products[index].pName = productName.value;
  products[index].pCategory = productCategory.value;
  products[index].pPrice = productPrice.value;
  products[index].pDescription = productDescription.value;
  localStorage.setItem("arr", JSON.stringify(products));

  document.getElementById("create").style.display = "inline-block";
  document.getElementById("update").style.display = "none";
  displayProduct();
  clearForm();
}

function searchProduct() {
  var searchInput = document.getElementById("searchInput").value;
  var holder = "";

  for (var i = 0; i < products.length; i++) {
    if (
      products[i].pName.toUpperCase().includes(searchInput.toUpperCase()) ==
      true
    ) {
      holder += `<tr>
    <td scope="row">${i}</td>
                <td scope="row">${products[i].pName}</td>
            <td scope="row">${products[i].pCategory}</td>
            <td scope="row">${products[i].pPrice}</td>
            <td scope="row">${products[i].pDescription}</td>
            <td scope="row"><button onclick="updateProduct1(${i});"  class="btn btn-warning">
              <i class="fas fa-edit"></i></button>
            </td>
            <td scope="row"><button onclick="deleteProduct(${i});"  class="btn btn-danger">
              <i class="fas fa-trash"></i></button>
            </td>
          </tr>`;
    }
  }
  document.getElementById("tbody").innerHTML = holder;
}
