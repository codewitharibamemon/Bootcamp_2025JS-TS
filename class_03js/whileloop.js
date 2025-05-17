// ik while loop likho jo 1 se lekar 5 tak kay tamam numbers ka sum
//calculate kare or result ek variable sum main store kry
//1+2+3+4+5  = 15 answer

// let sum = 0;  // 0 , intial value 0, sab numbers ka total banana 
// // 1, i loop main har dafa ek number ko represent krega (1 sy 5tak ka safar)
//   let i = 1; 
// //while keyword hai , (condition)
// while (i <=5) {
  // 1 sy lekar
//     sum += i; //sum = sum + i //   0 +1 = 1, jama krny ky liye use hoga value
//     console.log(sum);
//     // 1 
//     // 1+ 2 = 3
//     // 3 + 3 = 6
//     //6 + 4 = 10
//     //10 + 5 =15
//     i++; // i ko 1 sy barhao,value barhany ky liye use hoga
//     //  console.log(i);
// }

// console.log(sum); // 1,2,3,4,5 , 15

//miss agar i 5 say shor or mujay value 15 tak lay kar jani ho to i 5 say shoro hoga


let sum = 0 ;
let i = 5 ;
//5 + 4 + 3 + 2 + 1 = 15
while(i>=1)
{
  sum +=i; // sum = sum + i //   0 +1 = 1, jama krny ky liye use hoga value
  console.log(sum);
  // 0 + 5 = 5
  // 5 + 4 = 9
  // 9 + 3 = 12
  // 12 + 2 = 14
  // 14 + 1 = 15
  i--; // decrement 

}
console.log(sum);
