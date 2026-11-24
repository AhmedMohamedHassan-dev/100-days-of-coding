// const displayStudents = function(studentName, score){
//     console.log(`Student: ${studentName}`)
//     console.log(`Score: ${score}`)
// }
// console.log(displayStudents("Ahmed", 85))
// console.log(displayStudents("Mohamed", 45))
// console.log(displayStudents("Fatima", 92))
// console.log(displayStudents("Abdi", 35))
// console.log(displayStudents("Amina", 70))

const checkIfPassOrFail= function(studentName, score){
    
    console.log(`Student: ${studentName}`)
    console.log(`Score: ${score}`)
    if ( score<50){
        console.log(`Result: FAIL`)
    }else {
        console.log(`Result: PASS`)
    }
    
}
console.log(checkIfPassOrFail("Ahmed", 85))
console.log(checkIfPassOrFail("Mohamed", 45))
console.log(checkIfPassOrFail("Fatima", 92))
console.log(checkIfPassOrFail("Abdi", 35))
console.log(checkIfPassOrFail("Amina", 70))

const averageScore= function(score1,score2,score3,score4,score5){

    return `Average Score : ${(score1+score2+score3+score4+score5)/5}`
}
console.log(averageScore(85, 45, 92, 35,70))
const scores = [80, 72, 65, 50, 60, 76]; 
const passingMark = 60;

let passed = 0;
let failed = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];

  if (scores[i] >= passingMark) {
    passed++;
  } else {
    failed++;
  }
}
const classAverage = (totalScore / scores.length).toFixed(1);
console.log("========== CLASS REPORT ==========");
console.log(`Total Students: ${scores.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Class Average: ${classAverage}`);




