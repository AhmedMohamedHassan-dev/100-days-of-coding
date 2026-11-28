const products= [
    {id: 101, name:"Laptop", category:"Computers",	price:800, stock:5, sold:12},
    {id: 102, name:"Smartphone", category:"Phones",	price:500, stock:8, sold:20},
    {id: 103, name:"Headphones", category:"Accessories", price:80, stock:3, sold:35},
    {id: 104, name:"Keyboard", category:"Accessories", price:45, stock:15, sold:18},
    {id: 105, name:"Monitor", category:"Computers", price:250, stock:2, sold:10},
    {id: 106, name:"Mouse", category:"Accessories", price:25, stock:20, sold:40},
    {id: 107, name:"Tablet", category:"Phones", price:350, stock:6, sold:9},
    {id: 108, name:"Webcam", category:"Accessories", price:60, stock:4, sold:15}
]

// console.log(products)



const getProductName=products.map(nam=>{
    return nam.name
})
const productName= getProductName
console.log(`Product: ${productName}`)

const getOriginalPrice=products.map((pri)=>{
    return pri.price
})
const originalPrice= getOriginalPrice
console.log(`Original Price: $${originalPrice}`)


const getDiscAmount= products.map((dis)=>{
  
    return (dis.price*0.10).toFixed()

})
const discAmount=getDiscAmount
console.log(`Discount: $${discAmount}`)

 let newOriginalPrice= originalPrice
 let newDiscAmount= discAmount
 let newProductName= productName

const getDiscountedPrice =function(){
   
    return newOriginalPrice-newDiscAmount
}
const discountedPrice=getDiscountedPrice()
console.log(`Discounted Price: $${discountedPrice}`)

// Step3 
const getLowStock=products.filter(low=>{
    return low.stock<=5
})
console.log(getLowStock)

// Step 4

const getTotalInventory=products.reduce((acc,all)=>{
    let price=all.price
    let stock=all.stock
    return acc+(price*stock)
},0)
console.log(`TOTAL INVENTORY VALUE: ${getTotalInventory}`)

// // step 5


const SalesRevenue= products.reduce((acc,reve)=>{
      let price=reve.price
      let sold= reve.sold
    return acc+(price*sold)
},0)
console.log(`TOTAL SALES REVENUE: ${SalesRevenue}`)

// step 6


const getBestselling= products.filter(best=>{
    return best.sold>15
})
console.log(getBestselling)

// step 7
const storeReport={
    totalProducts: products.length,
    inventoryValue: getTotalInventory,
    totalRevenue: SalesRevenue,
    lowStockProducts: getLowStock,
    bestSellingProducts: getBestselling
}
console.log(`Total Products: ${storeReport.totalProducts}`)
console.log(`Inventory Value: $${storeReport.inventoryValue}`)
console.log(`Total Sales Revenue: $${storeReport.totalRevenue}`)
console.log(`LOW STOCK PRODUCTS: $${storeReport.lowStockProducts}`)
console.log(`BEST SELLING PRODUCTS: $${storeReport.bestSellingProducts}`)