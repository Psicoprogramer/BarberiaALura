// Zona de constantes.

const faroMenu = document.getElementById("faro-menu");
const menuDesplegable = document.querySelector(".section-mobile");
const product = [];
const contenedorMain = document.querySelector(".main-container");

// Zona uso de la variables

faroMenu.addEventListener("click", openMenu);

// zona de funciones

function openMenu() {
  menuDesplegable.classList.toggle("disable");
}
// agregga un elemento a un array
function aggProduct(arr, logo, name, description, value) {
  arr.push({
    logos: logo,
    names: name,
    descriptions: description,
    values: value,
  });
}
// crea un div con la clase info o cualquier otro elemento html
function upElement(element = "div", className = "none") {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  return newElement;
}
//funcion para crear un contenedor de productos
function drawElement(arr) {
  
    for (const articule of arr) {
    const mainContainer = upElement("div", "main-container_product");
    // agregando el nombre
    const nameProduct = upElement("p", "container-name");
    nameProduct.innerText = articule.names;

    // agregando el logo
    const logo = upElement("img", "logo");
    // const logoImg = articule.logos;
    logo.setAttribute("src", articule.logos);

    const valueProduct = upElement("p", "valueProduct");
    valueProduct.innerText = " $ " + articule.values;

    const description = upElement('p', 'valueDescription');
    description.innerText = articule.descriptions
    
    mainContainer.append(nameProduct, valueProduct,logo,description);
    contenedorMain.appendChild(mainContainer)
    

  }
}
const barbaCabell0 = aggProduct(product,'./imagenes/cabello+barba.jpg','Barba + cabello',
' Este corte de barba premium con cabello incluido ',' 14 USD ');

const barba = aggProduct(product,'./imagenes/barba.jpg','barba','Marravillo corte de barba expres','5 usd');

const cabello = aggProduct(product,'./imagenes/cabello.jpg','cabello','Espectacular corte de cabello realizado por los expertos de nuestra barberia', '10 USD')

drawElement(product);


//prueba 
// console.log(product);