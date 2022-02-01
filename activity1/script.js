// ITERATION 1: Get the node element with the main title and console.log it

// ... your code here


// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// ITERATION 2: Console.log the main title text

// ... your code here


// => Fruits and veggies
// ----------------------------------------------

// ITERATION 3: Get all the nodes with the fruit items into a NodeList. Console.log the NodeList

// ... your code here


// => NodeList(5) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// ITERATION 4: Get all the veggie items. Console log the text of each one
// think about loops, innerText vs innerHTML

// ... your code here
let myVeggiesDOM = documet.querySelectorAll(".veggie-item")

myVeggiesDOM.forEach( (eachVeggiesDOM) => {
  console.log(eachVeggiesDOM.innerText)
} )


// Broccoli 
// Potato 
// Avocado 
// Spinach
// Tomato
// ----------------------------------------------

// ITERATION 5: Add a class 'best-fruit' to all the fruits with an Odd index. 1 & 3
// think about loops, ways to add classes to an element

// ... your code here


// => <li class="fruit-item best-fruit">Grapes</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// ITERATION 6: Remove class 'veggie-item' from all veggies that start with the letter "A" or "T".

// ... your code here


// => ... <li>Avocado</li>
// => ... <li>Tomato</li>