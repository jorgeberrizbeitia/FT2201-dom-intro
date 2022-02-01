console.log("Hello World de nuevo")

// ! Jorge dijo que esto era importante
// *
// ?
// todo
// //


// console.log(document) // esto es todo el DOM

let myHeaderDOM = document.getElementById("title") // Node
console.log( myHeaderDOM ) // ref 1234
console.log( myHeaderDOM.innerText )

myHeaderDOM.innerText = "MI TITULO EN CASTELLANO"

setTimeout( () => {
  myHeaderDOM.innerText = "TITULO NUEVO EN TIMER"
}, 2000)


//  otros selectores

let myParagsDOM = document.getElementsByClassName("parag")
console.log(myParagsDOM) // esto es un HTML collection

myParagsDOM[0].innerText = "PATATA";

// PODRIAMOS USAR UN LOOP ? SI

// PODRIAMOS USAR UN EACH ? NO! :(

// getElementsByTagName & getElementsByName


// Existed 2 selectores que podemos usar y olvidarnos de todos estos anteriores :)


let myTitleDOM = document.querySelector(".title") // syntax de CSS
console.log(myTitleDOM)

let myParagraphsDOM = document.querySelectorAll(".parag")
console.log(myParagraphsDOM)
myParagraphsDOM[2].innerText = "TOMATE"


myParagraphsDOM.forEach( (eachDOMElement) => {
  eachDOMElement.innerText = "WOOOOHOOOOOO"
} )

// conclusion. Usar querySelector y querySelectorAll. Y saber que los otros existen


// innerText vs value

let myAddressInputDOM = document.querySelector("#my-address input")

console.log(myAddressInputDOM)
// myAddressInputDOM.innerText = "Functionando!"
// inputs son self-closing tag, no tienen elementos internos
myAddressInputDOM.value = "Funcionando!"


// innerHTML y textContent

let footerDOM = document.querySelector("#footer")
console.log(footerDOM.innerText) // solo el texto interno legible por navegador
console.log(footerDOM.innerHTML) // .todo el HTML interno

console.log(footerDOM.textContent) // el texto exacto interno. no es muy usado.

/*
  <footer id="footer">
    <small>    Oh!       footer I am!     </small>
  </footer>
*/


let finalThoughsDOM = document.querySelector("#final-thoughts")
finalThoughsDOM.innerHTML = `<h3>MANIPULACION DE DOM RULEZ</h3>`



// modificar ids y classes


console.log(finalThoughsDOM.id)
finalThoughsDOM.id = "nuevo-id"

// classes

console.log(finalThoughsDOM.className)
// finalThoughsDOM.className = "nueva-clase"

// classList

console.log(finalThoughsDOM.classList)

console.log(finalThoughsDOM.classList.contains("after-footer"))

finalThoughsDOM.classList.add("nueva-clase")
finalThoughsDOM.classList.remove("best-practice")



// EVENTOS

let eventTitleDOM = document.querySelector("#event-title")

let defaultColor = eventTitleDOM.style.color

eventTitleDOM.addEventListener( "mouseenter", () => {
  console.log("mouseenter evento aqui!");
  eventTitleDOM.innerText = "HOVERING!";
  eventTitleDOM.style.color = "red";
  // background-color
  eventTitleDOM.style.backgroundColor = "purple"
} )

eventTitleDOM.addEventListener( "mouseleave", () => {
  eventTitleDOM.innerText = "EVENTS!"
  eventTitleDOM.style.color = defaultColor;
  eventTitleDOM.style.backgroundColor = "green"
} )

