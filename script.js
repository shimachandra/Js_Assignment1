/*

//Question:1   Program that asks the user for two numbers and print their sum

var num1 = parseInt(prompt('Enter the First Number: '));
var num2 = parseInt(prompt('Enter the Second Number: '));

var sum = num1 + num2;
console.log('Sum of given numbers is ',+sum);



//------------------------------------------------------------------------------------------------
//Question: 2    Program that calculates the area of a rectangle using given length & width

let length =40, width=20;

let area = length * width;
console.log('Area of Rectangle is ',+area);



//------------------------------------------------------------------------------------------------
//Question: 3   Program that asks user for their Age and determines if they are eligible to vote.

var Age=17;

if(Age>=18){
    console.log('You are eligible for voting..')
}

else{
    console.log('Sorry, You are not eligible to vote!!')
}



//------------------------------------------------------------------------------------------------
//Question:5    Program to check whether entered number is Positive, Negative or Zero.

var num=parseInt(prompt('Enter a number'));

if(num<0){
    console.log('Entered number is Negative');
}
else if(num>0){
    console.log('Entered number is Positive');
}
else{
    console.log('you have entered Zero');
}



//------------------------------------------------------------------------------------------------------
//Question:6    Program to take user's age & check if they are a child, teenager, adult, senior or above

var u_age=parseInt(prompt('Enter your Age:: '));

if(u_age>=60){
    console.log('You are a Senior Citizen');
}

else if(u_age>=20){
    console.log('You are an Adult');
}

else if(u_age>=13){
    console.log('You are a Teenager');
}

else{
    console.log('You are a child');
}



//---------------------------------------------------------------------------------------------------
//Question:7    Program to find the Square of each number in an array=[1,3,9,12,15,18,21] using loop

var i;
let arr=['1','3','9','12','15','18','21'];
console.log('Square of the numbers in the given array are : ')
for(i=0;i<7;i++){
 
    arr[i]=arr[i]*arr[i];

    console.log(arr[i]);

}


//--------------------------------------------------------------------------------------------------
//Question:8    Program to find the sum of all the odd numbers for a given limit.


var limit=25,sum=0;

for(let i=0;i<limit;i++){
    if(i%2!=0){
        sum=sum+i;
    }
}
console.log('Sum of all the ODD numbers is : ',sum);




*/

//------------------------------------------------------------------------------------------------
//Question:4    write a script that takes a user's grade as input & whether they passed or failed.

 
var grade=parseInt(prompt('Enter your Grade (A,B,C or D):: '));

switch(grade){
        case 'A':
        console.log('Congrats.. You have passed the exam');
        break;

        case 'B':
        console.log('Congrats.. You have passed the exam');
        break;
    
        case 'C':
        console.log('Congrats.. You have passed the exam');
        break;
    
        case 'D':
        console.log('Congrats.. You have passed the exam');
        break;
    
        default:
        console.log('Sorry!! You Failed');
        break; 
    
}



//--------------------Not getting the correct answer FOR QUESTION NO: 4--------------------







