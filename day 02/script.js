// Project 1 Emplooyee Tax Amount Tracker
const calculateTax= function(){
    if (data.monthlySalary<300){
        return 0
    }else if(data.monthlySalary>=300 && data.monthlySalary<=599){
        return 0.05
    }else if(data.monthlySalary>=600 && data.monthlySalary<=999){
        return 0.10
    }else{
        return 0.15
    }
}
const getTaxAmount=function(){
    return data.monthlySalary*taxRate
}
const getNetSalary= function(){
    return data.monthlySalary-taxAmount
}
const getGrosSalary= function(){
    return data.monthlySalary
}
const data={
    employeeName: "Fatima", department: "HR", monthlySalary: 750
}
let grossSalary=getGrosSalary()
let taxRate= calculateTax()
let taxAmount= getTaxAmount()
let netSalary=getNetSalary()

console.log(`Employee Name: ${data.employeeName}`)
console.log(`Dapartment: ${data.department}`)
console.log(`Gross Salary: ${grossSalary}`)
console.log(`Tax Rate: ${taxRate}`)
console.log(`Tax Amount: ${taxAmount}`)
console.log(`Net Salary : ${netSalary}`)




// project BMI Calculator


const calculateBMI= function(weight, height){
    let bmi= weight/(height * height)
    return bmi.toFixed(2)

}

const getCategory= function(bim){
    if (bim<18.5){
        return "Underweight"
    }else if(bim>18.5&&bim<=24.9){
        return "Normal weight"
    }else if(bim>=25 && bim<=29.9){
        return "Overweight"
    }else {
        return "Obesity"
    }

}

const name = "Ahmed";
const weight = 75; // kg
const height = 1.75; // metres


let bim= calculateBMI(weight,height)
let category= getCategory(bim)

console.log(`Name: ${name}`)
console.log(`BMI: ${bim}`)
console.log(`Category: ${category}`)
