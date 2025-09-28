Q1

let arryQ1 = [2, 3, 4, 5, 6, 7, 8];
for(let i =0; i < arryQ1.length; i++){
    console.log(arryQ1[i]);
}

Q2

let arryQ2 = [2, 3, 4, 5, 6, 7, 8];
for(let i = arryQ2.length -1; i  >= 0; i-- ){
    console.log(arryQ2[i]);
}

Q3

let arryQ3 = [2, 3, 4, 5, 6, 7, 8];
let sum = 0;

for(let i = 0; i < arryQ3.length; i++){
    sum = sum + arryQ3[i];
}

console.log(sum);

Q4

let arryQ4 = [2, 3, 4, 5, 6, 7, 8];
let add = 0;

for(let i = 0; i < arryQ4.length; i++){
    add = add + arryQ4[i];
}

console.log(add);

let average = add / arryQ4.length;

console.log(average);

Q5 (for of loop)

let arryQ5 = [2, 3, 4, 5, 6, 7, 8];
let count = 0;

for (let i of arryQ5){
    console.log(i)
    count++;
}

console.log('count + ', count );

Q6

let evenNum = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i=0; i < evenNum.length; i++){
    if(evenNum[i] % 2 === 0){
        console.log(evenNum[i]);
    }
}

Q7

let oddNum = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i=0; i < oddNum.length; i++){
    if(oddNum[i] % 2 === 1){
        console.log(oddNum[i]);
    }
}


Q8

let doubleNum = [2, 3, 4, 5];
let double;

for(let i = 0; i < doubleNum.length; i++){
 double = 2 * doubleNum[i];
console.log(double);    
}

Q9

let squarNum = [2, 3, 4, 5];

 for(let i = 0; i < squarNum.length; i++){
 let squar = squarNum[i] * squarNum[i];
 console.log(squar);    
 }

 Q10

let greaterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for(let i = 0; i <greaterNum.length; i++){
    if(greaterNum[i] > 5 )
        console.log(greaterNum[i]);
}

Level 2

Q1

let largestNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let findNum = largestNum[0];

for (let i = 0; i < largestNum.length; i++ ){

if(largestNum[i] > findNum){
    findNum =largestNum[i];
}
};
console.log(findNum)

Q2

let smallestNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let smallNum = smallestNum[0];

for (let i = 0; i < smallestNum.length; i++ ){

if(smallestNum[i] < smallNum){
    smallNum =smallestNum[i];
}
};
console.log(smallNum)


Q3

let multiNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let lNum = multiNum[0]; 
let sNum = multiNum[0];

for(let i = 0; i < multiNum.length; i++){
if(lNum < multiNum[i]){
lNum = multiNum[i]

    if(sNum > multiNum){
sNum = multiNum[i]
    }
}
}

console.log(lNum);
console.log(sNum);


Q4

let checkNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ];

let oddNum = 0;
let evenNum = 0;

for(let i = 0; i < checkNum.length; i++){
if(checkNum[i] % 2 === 0){
    evenNum++;
}else{
    oddNum++
}
};

console.log(evenNum);
console.log(oddNum);

Q5

let findNum = [1, 2, 3, 2, 3, 4, 5, 3, 6];
let target = 4;
let result = 0;

for(let i = 0; i < findNum.length; i++ ){
    if (findNum[i] === target ){
        result++;
    }
}

console.log(result);

Q6

let firstEven = [1, 3, 5, 8, 7, 2];

for (let i=0; i < firstEven.length; i++)
    if (firstEven[i] % 2 === 0){
    console.log(firstEven[i]);
    break;    
    }


Q7
    let arr = [1, 3, 4, 7, 8, 2, 9];
let lastEven = null;  
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        lastEven = arr[i];  
    }
}

console.log(lastEven);  


Q8
     let checkNum = [1, 3, 4, 7, 8, 2, 9];
     let inputNUm = +prompt('enter a num');
     let result = false; 
for (let i = 0 ; i < checkNum.length; i++){
          if (checkNum[i] === inputNUm){
            result = true;
            break;
          }
    }

    console.log(result);


Q9

let indexNum = [1, 3, 4, 7, 8, 2, 9];
let indexSearch = +prompt('enter a num');

for (let i = 0; i < indexNum.length; i++){
    if(indexNum[i] === indexSearch){
        console.log(i);  // ← Direct print index
        break;
    }    
}

Q10

let countNum = [10, 9, 3, 11, 12, 15, 8, 20, 6]
let resultNum = 0
for(let i = 0; i < countNum.length; i++){
    if (countNum[i] >= 10){
      resultNum++;
    }
}

console.log(resultNum);