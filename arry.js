// // Q1

// let arryQ1 = [2, 3, 4, 5, 6, 7, 8];
// for(let i =0; i < arryQ1.length; i++){
//     console.log(arryQ1[i]);
// }

// // Q2

// let arryQ2 = [2, 3, 4, 5, 6, 7, 8];
// for(let i = arryQ2.length -1; i  >= 0; i-- ){
//     console.log(arryQ2[i]);
// }

// // Q3

// let arryQ3 = [2, 3, 4, 5, 6, 7, 8];
// let sum = 0;

// for(let i = 0; i < arryQ3.length; i++){
//     sum = sum + arryQ3[i];
// }

// console.log(sum);

// // Q4

// let arryQ4 = [2, 3, 4, 5, 6, 7, 8];
// let add = 0;

// for(let i = 0; i < arryQ4.length; i++){
//     add = add + arryQ4[i];
// }

// console.log(add);

// let average = add / arryQ4.length;

// console.log(average);

// // Q5 (for of loop)

// let arryQ5 = [2, 3, 4, 5, 6, 7, 8];
// let count = 0;

// for (let i of arryQ5){
//     console.log(i)
//     count++;
// }

// console.log('count + ', count );

// // Q6

// let evenNum = [1, 2, 3, 4, 5, 6, 7, 8];

// for(let i=0; i < evenNum.length; i++){
//     if(evenNum[i] % 2 === 0){
//         console.log(evenNum[i]);
//     }
// }

// // Q7

// let oddNum = [1, 2, 3, 4, 5, 6, 7, 8];

// for(let i=0; i < oddNum.length; i++){
//     if(oddNum[i] % 2 === 1){
//         console.log(oddNum[i]);
//     }
// }


// // Q8

// let doubleNum = [2, 3, 4, 5];
// let double;

// for(let i = 0; i < doubleNum.length; i++){
//  double = 2 * doubleNum[i];
// console.log(double);    
// }

// // Q9

// let squarNum = [2, 3, 4, 5];

//  for(let i = 0; i < squarNum.length; i++){
//  let squar = squarNum[i] * squarNum[i];
//  console.log(squar);    
//  }

// //  Q10

// let greaterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// for(let i = 0; i <greaterNum.length; i++){
//     if(greaterNum[i] > 5 )
//         console.log(greaterNum[i]);
// }

// // Level 2

// // Q1

// let largestNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// let findNum = largestNum[0];

// for (let i = 0; i < largestNum.length; i++ ){

// if(largestNum[i] > findNum){
//     findNum =largestNum[i];
// }
// };
// console.log(findNum)

// // Q2

// let smallestNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// let smallNum = smallestNum[0];

// for (let i = 0; i < smallestNum.length; i++ ){

// if(smallestNum[i] < smallNum){
//     smallNum =smallestNum[i];
// }
// };
// console.log(smallNum)


// // Q3

// let multiNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// let lNum = multiNum[0]; 
// let sNum = multiNum[0];

// for(let i = 0; i < multiNum.length; i++){
// if(lNum < multiNum[i]){
// lNum = multiNum[i]

//     if(sNum > multiNum){
// sNum = multiNum[i]
//     }
// }
// }

// console.log(lNum);
// console.log(sNum);


// // Q4

// let checkNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ];

// let oddNum1 = 0;
// let evenNum1 = 0;

// for(let i = 0; i < checkNum.length; i++){
// if(checkNum[i] % 2 === 0){
//     evenNum1++;
// }else{
//     oddNum1++
// }
// };

// console.log(evenNum1);
// console.log(oddNum1);

// // Q5

// let fNum = [1, 2, 3, 2, 3, 4, 5, 3, 6];
// let target = 4;
// let result = 0;

// for(let i = 0; i < fNum.length; i++ ){
//     if (fNum[i] === target ){
//         result++;
//     }
// }

// console.log(result);

// // Q6

// let firstEven = [1, 3, 5, 8, 7, 2];

// for (let i=0; i < firstEven.length; i++)
//     if (firstEven[i] % 2 === 0){
//     console.log(firstEven[i]);
//     break;    
//     }


// // Q7
//     let arr = [1, 3, 4, 7, 8, 2, 9];
// let lastEven = null;  
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 1){
//         lastEven = arr[i];  
//     }
// }

// console.log(lastEven);  


// // Q8
//      let checkNum2 = [1, 3, 4, 7, 8, 2, 9];
//      let inputNum = +prompt('enter a num');
//      let result2 = false; 
// for (let i = 0 ; i < checkNum2.length; i++){
//           if (checkNum2[i] === inputNum){
//             result2 = true;
//             break;
//           }
//     }

//     console.log(result2);


// // Q9

// let indexNum = [1, 3, 4, 7, 8, 2, 9];
// let indexSearch = +prompt('enter a num');

// for (let i = 0; i < indexNum.length; i++){
//     if(indexNum[i] === indexSearch){
//         console.log(i);  // ← Direct print index
//         break;
//     }    
// }

// // Q10

// let countNum = [10, 9, 3, 11, 12, 15, 8, 20, 6]
// let resultNum = 0
// for(let i = 0; i < countNum.length; i++){
//     if (countNum[i] >= 10){
//       resultNum++;
//     }
// }

// console.log(resultNum);

// Level3

// Q1

// for(let i = 0; i < .length;i++)

let evenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNew = [];
for(let i = 0; i < evenArray.length;i++){
if(evenArray[i] % 2 === 0){
    evenNew.push(evenArray[i])
}
}

console.log(evenNew);

// Q2

let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNew = [];
for(let i = 0; i < oddArray.length;i++){
if(oddArray[i] % 2 !== 0){
    oddNew.push(oddArray[i])
}
}

console.log(oddNew);


// Q3

let increaseArray = [2, 4, 5, 6, 7,];
let  increaseArray1 = [];
 for(let i = 0; i < increaseArray.length;i++){
increaseArray1.push(increaseArray[i] +1);
 }

 console.log(increaseArray1);

 // Q4

let multyArray = [2, 4, 5, 6, 7,];
let  multyArray1 = [];
 for(let i = 0; i < multyArray.length;i++){
multyArray1.push(multyArray[i] * 5);
 }

 console.log(multyArray1);

//  Q5

let reverseArray =  [2, 4, 5, 6, 7,];

let reverseArray2 = [];

for( let i = reverseArray.length - 1; i >= 0; i--){
reverseArray2.push(reverseArray[i]);
}
console.log(reverseArray2)

// Q6

let duplicatArry = [2, 4, 5, 6, 7,];

let duplicatArry2 = [];


for(let i = 0; i < duplicatArry.length;i++){
    duplicatArry2.push(duplicatArry[i]);
}

console.log(duplicatArry2);

// Q7

let mergedArray1 = [1, 2, 3, 4];
let mergedArray2 = [5, 6, 7, 8];
let mergedArray3 = [];

for(let i = 0; i < mergedArray1.length;i++){
    mergedArray3.push(mergedArray1[i]);
};


for(let i = 0; i < mergedArray2.length;i++){
    mergedArray3.push(mergedArray2[i]);
};

console.log(mergedArray3);


// Q8

let sumEven = [10, 7, 4, 15, 8, 3, 12];
let sum2 = 0;
for(let i = 0; i < sumEven.length;i++){
    if (sumEven[i] % 2 === 0){
        sum2 = sum2 + sumEven[i];
    }
}

console.log(sum2);


// Q8

let sumOdd = [10, 7, 4, 15, 8, 3, 12];
let odd2 = 0;
for(let i = 0; i < sumOdd.length;i++){
    if (sumOdd[i] % 2 !== 0){
        odd2 = odd2 + sumOdd[i];
    }
}
console.log(odd2);

// Q10

let negativNum =  [5, -3, 8, -7, 0, -2, 10];

for(let i = 0; i < negativNum.length; i++){

if(negativNum[i] < 0){
    negativNum[i] = 0;
}   
};

console.log(negativNum);

// Level 4

// Q1

let number = [5, -3, 8, -7, 0, -2, 10, 4];

let positiveNum = 0;
let negativeNum = 0;

for(let i = 0; i < number.length; i++){
    if(number[i] > 0){
        positiveNum++;
    }
if(number[i] < 0){
        negativeNum++;
    }

}

console.log(negativeNum)
console.log(positiveNum)

// Q2

let divNum = [10, 9, 15, 7, 6, 21, 5];

let divisible = 0;

for (let i = 0; i < divNum.length; i++) {
    if(divNum[i] % 3 === 0){
        divisible++;
    }
};

console.log(divisible);

// Q3 

// Q4 serch second smallestNum 

let srhNum = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < srhNum.length; i++){

    for(let j = i + 1; j < srhNum.length; j++ ){
        if (srhNum[i] < srhNum[j] ){
            let swap = srhNum[i];
            srhNum[i] = srhNum[j];
            srhNum[j] = swap;
        }
    }
};
console.log(srhNum[1]);

// Q5

let diffNum = [10, 20, 30, 40, 50, 60, 70, 80];
 
let largeNum = diffNum[0];
let smallNum = diffNum[0];

for (let i = 0; i < diffNum.length; i++) {
    
    if(diffNum[i] > largeNum){
        largeNum = diffNum[i]
    }
    if (diffNum[i] < smallNum) {
        smallNum = diffNum[i]
    }
};

let difference = largeNum - smallNum;
console.log(difference);

// Q6

let numReverce = [10, 20, 30, 40, 50, 60, 70, 80];
for (let i = 0; i < numReverce.length - 1; i++) {
}

console.log(numReverce);