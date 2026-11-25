// 2. Small Shop Inventory Management System

const products=["Rice", "Suger", "Cooking Oil", "Flour", "Milk"]
// console.log(products)
// console.log(products.length)
const newProduct= products.push("Cooking Salt")
// console.log(products)
const newArrival= products.unshift("Fresh", "Bread")
// const newArrival2= products.unshift("Bread")
console.log(products)

products.pop()
console.log(products)
products.shift()
console.log(products)

console.log(`All available products : ${products}`)
console.log(`The first Product : ${products[0]}`)
console.log(`The third Product : ${products[2]}`)
console.log(`Total number of products : ${products.length}`)
// console.log("the inventory still has products")


if (products.length>1){
    console.log("the inventory still has products")
}else{
    console.log("The inventory is empty")
}



// 1. Task List Manager

// let tasks = [
//     "Study JavaScript",
//     "Practise coding",
//     "Read documentation"
// ];

// tasks.push("Make Exercise")

// tasks.unshift("visit your sick freind")
// tasks.pop()
// tasks.shift()
// // console.log(tasks[0])
// // console.log(tasks[2])
// console.log(tasks.length)