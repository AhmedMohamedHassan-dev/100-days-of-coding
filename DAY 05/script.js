let monthlyBudget= 500
let month= "November"

console.log("===== MONTHLY BUDGET TRACKER =====")
console.log(`Month: ${month}`)
console.log(`MonthlyBudget: $${monthlyBudget}`)

const expenses=[120,45, 30,80, 35, 25]
const newExpens= expenses.push(40)
console.log(expenses)
console.log(expenses.length)
console.log(`Monthly Budget: ${monthlyBudget}`)
function calculateTotalExpenses(expenses){
    let total=0;
    for(let i=0; i<expenses.length;i++){
        total= total+expenses[i]
    }
    return total;
}
const totalExpenses = calculateTotalExpenses(expenses);
console.log(`Total Expenses: $${totalExpenses}`);

function calculateRemainingBudget(monthlyBudget){
    
    return monthlyBudget - totalExpenses

}
const getRemainingBalance=calculateRemainingBudget(monthlyBudget)
console.log(`Remaining Balance: ${getRemainingBalance}`)

function getstatus(){
    if (getRemainingBalance>0){
    return "Within Budget"
}else if(getRemainingBalance===0){
    return "Budget Fully Used"
}else{
    return "Over Budget"
}
}
const budgetStatus=getstatus()
console.log(`Status: ${budgetStatus}`)

const budgetReport={
    month: month,
    "monthly Budget": monthlyBudget,
    "total Expenses": totalExpenses,
    "getRemaining Balance": getRemainingBalance,
    "budget Status":budgetStatus
}
console.log("===== MONTHLY FINANCIAL REPORT =====")
console.log(`Month: ${budgetReport.month}`)
console.log(`Monthly Budget: ${budgetReport["monthly Budget"]}`)
console.log(`Total Expenses: ${budgetReport["total Expenses"]}`)
console.log(`Remaining Balance: ${budgetReport["getRemaining Balance"]}`)
console.log(`Budget Status: ${budgetReport["budget Status"]}`)
