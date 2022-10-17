

let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4and5 = [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let quizl = 32; 

let sum1 = lab1[0]+lab1[1]+lab1[2]+lab1[3]+lab1[4]+lab1[5];
let sum2 = lab2[0]+lab2[1]+lab2[2]+lab2[3]+lab2[4]+lab2[5]+lab2[6];
let sum3 = lab3[0]+lab3[1]+lab3[2]+lab3[3];
let sum4and5 = lab4and5[0]+lab4and5[1]+lab4and5[2]+lab4and5[3]+lab4and5[4]+lab4and5[5]+lab4and5[6]+lab4and5[7]+lab4and5[8]+lab4and5[9]+lab4and5[10];
let sum6 = lab6[0]+lab6[1]+lab6[2]+lab6[3]+lab6[4]+lab6[5];

let sums = [sum1+sum2+sum3+sum4and5+sum6];
let avg_labs_score = sums/6;

let total_score =0.6*avg_labs_score+0.4*quizl;

const results = {
lab1: [5, 5, 5, 5, 10, 10], 
lab2: [5, 5, 5, 5, 5, 5, 10],
lab3: [5, 10, 10, 15], 
lab4and5: [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5], 
lab6: [5, 5, 10, 5, 5, 10], 
quiz1: 32, 
sums: sums, 
avg_labs_score: avg_labs_score,
total_score:total_score, 
}

console.log (results);