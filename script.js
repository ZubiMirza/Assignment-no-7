// 1. Write a js program to find maximum between two numbers.


// var abc = 5 ;
// var xyz = 6 ;
// if (abc > xyz)
//  console.log("abc is maximum"); 
//  else
//  console.log("xyz is maximum");

 



// 2. Write a js program to find maximum between three numbers.

// var a = 5 ;
// var b= 6 ;
// var c = 3 ;

// if (a > b)
//  console.log("a is maximum"); 
// else if (b > c)
//  console.log("b is maximum");
// else
//  console.log("c is maximum");





//3. Write a js program to check whether a number is negative, positive or zero.


// var number = prompt("Enter a number");

// if(number > 0 )
// console.log(" number is positive ");
// else if(number < 0 )
// console.log(" number is negative ");
// if(number == 0 )
// console.log(" number is zero ");








//4. Write a js program to check whether a number is divisible by 5 and 11 or not.


// var number =+ prompt("Enter Number");
// if ( number % 5 == 0 )
// console.log("number is divisible by 5");
// else if( number % 11 == 0 )
// console.log("number is divisible by 11");
// else 
// console.log("number is not divisible by 5 or 11");




//5. Write a js program to check whether a number is even or odd.


// var number =+ prompt("Enter Number");
// if ( number % 2 == 0 )
// console.log("number is even");
// else
// console.log("number is odd");



//6. Write a js program to check whether a year is leap year or not.



// var number =+ prompt("Enter year");
// if ( number % 4 == 0 )
// console.log("This is leap year");
// else
// console.log("This is common year");


//7. Write a js program to check whether a character is alphabet or not.
// var char = prompt("Enter your character");
// if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
//  console.log("Character is Alphabet");
// else
//  console.log("character is not alphabet");



//8. Write a js program to input any alphabet and check whether it is vowel or consonant.


// var Alpha = prompt("Enter Alphabet");
// if ( Alpha === 'a' || Alpha === 'e' || Alpha === 'i' || Alpha === 'o' || Alpha === 'u' || Alpha === 'A' || Alpha === 'E' || Alpha === 'I' || Alpha === 'O' || Alpha === 'U' )
// console.log("Alphabet is vowel");
// else
// console.log("Alphabet is consonant");



// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// var char = prompt("Enter your character");
// if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))
//  console.log("Character is Alphabet");
// else if (char <= 0 || char >= 0 )
//  console.log("Character is digit");
// else 
// console.log("character is special character");



// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// var char = prompt("Enter your character");
// if (char >= 'A' && char <= 'Z') 
//  console.log("Character is Uppercase Alphabet");
// else if(char >= 'a' && char <= 'z')
//  console.log("Character is Lowercase Alphabet");
// else 
// console.log("Something Wrong");


// 11. Write a js program to input week number and print week day.



// var weekNumber =+ prompt("Enter day number");
// if (weekNumber == 1 )
// console.log("Sunday");
// else if (weekNumber == 2 )
// console.log("Monday");
// else if (weekNumber == 3 )
// console.log("Tuesday");
// else if (weekNumber == 4 )
// console.log("Wednesday");
// else if (weekNumber == 5 )
// console.log("Thursday");
// else if (weekNumber == 6 )
// console.log("Friday");
// else    
// console.log("Saturday");






// 12. Write a js program to input month number and print number of days in that month.
 

// var monthNumber =+ prompt("Enter number of month");
// if ( monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12 ) 
// console.log("This month is Of 31 days");
// else if ( monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11 )
// console.log("This month is of 30 days");
// else 
// console.log("This month is of 28 days in 'common year' and 29 days in 'Leap year'");



// 13. Write a js program to count total number of notes in given amount.



// var givenAmount =+ prompt("Enter Amount ");

// if ( givenAmount % 10 == 0 ) 
// console.log("Total notes of 10 rupees is in given amount", givenAmount/10 );
// else 
// console.log("Pleae Enter Amount which is divisible by 10");




// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

// var angle1 = prompt("Enter First Angle");
// var angle2 = prompt("Enter Second Angle");
// var angle3 = prompt("Enter Third Angle");
// var sum = angle1 + angle2 + angle3; 
// if ( angle1 <= 90 && angle2 < 90 && angle3 < 90 )
// console.log("This is a triangle");








// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.



// var side1 = prompt("Enter side 1: ");
// var side2 = prompt("Enter side 2: ");
// var side3 = prompt("Enter side 3: ");

// if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
//   console.log("Triangle is valid.");
// } else {
//   console.log("Triangle is not valid.");
// }




// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// var side1 = prompt("Enter the length of side 1: ");
// var side2 = prompt("Enter the length of side 2: ");
// var side3 = prompt("Enter the length of side 3: ");

// if (side1 === side2 && side2 === side3) {
//   console.log("The triangle is equilateral.");
// } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//   console.log("The triangle is isosceles.");
// } else {
//   console.log("The triangle is scalene.");
// }






// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________


// 17. Write a js program to find all roots of a quadratic equation.








// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________

// 18. Write a js program to calculate profit or loss.


// var sellingPrice = prompt("Enter Your Sellig price");
// var costPrice = prompt("Enter Your cost price");

// var profit,loss;


// if  (sellingPrice > costPrice) {
//   profit = sellingPrice - costPrice;
//   console.log("Profit: " + profit);
// }

// else if(sellingPrice < costPrice) {
//   loss = costPrice - sellingPrice;
//   console.log("Loss: " + loss);
// }
 
// else {
//   console.log("No Profit, No Loss");
// }

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var Physics = + prompt("Enter thr marks of Physics:");
// var Chemistry = + prompt("Enter thr marks of Chemistry:");
// var Biology = + prompt("Enter thr marks of Biology:");
// var Mathmatics = + prompt("Enter thr marks of Mathmatics:");
// var Computer = + prompt("Enter thr marks of Computer:");

// var sum = (Physics + Chemistry + Biology + Mathmatics + Computer);
// var percentage = ((sum * 100) / 500);

// if (percentage >= 90) {
//     console.log(percentage + "%" + " and Grade A");
// }
// else if (percentage >= 80) {
//     console.log(percentage + "%" + " and Grade B");
// }
// else if (percentage >= 70) {
//     console.log(percentage + "%" + " and Grade C");
// }
// else if (percentage >= 60) {
//     console.log(percentage + "%" + " and Grade D");
// }
// else if (percentage >= 40) {
//     console.log(percentage + "%" + " and Grade E");
// }
// else if (percentage < 40) {
//     console.log(percentage + "%" + " and Grade F");
// }
// else {
//  console.log ("Invalid Input!");
// }













// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________

// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%



// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________
// _______________________________________________________________________________________________________________________________























// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// var billAmount=prompt("Enter electricity Units")
// if (billAmount<=50){
//     var amount = billAmount * 0.50;
//     var Amount = amount * (20/100)
//     var totalAmount = amount + Amount;
//     console.log("Your Bill Amount is:" , totalAmount );
// }
// else if (billAmount<=150){
//     var amount = billAmount * 0.75;
//     var Amount = amount * (20/100)
//     var totalAmount = amount + Amount;
//     console.log("Your Bill Amount is:" , totalAmount );
// }
// else if (billAmount<=250){
//     var amount = billAmount * 1.20;
//     var Amount = amount * (20/100)
//     var totalAmount = amount + Amount;
//     console.log("Your Bill Amount is:" , totalAmount );
// }
// else {
//     var amount = billAmount * 1.50;
//     var Amount = amount * (20/100)
//     var totalAmount = amount + Amount;
//     console.log("Your Bill Amount is:" , totalAmount );
// }
