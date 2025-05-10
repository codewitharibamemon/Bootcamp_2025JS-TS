// ik while loop likho jo 1 se lekar 5 tak kay tamam numbers ka sum
//calculate kare or result ek variable sum main store kry
//1+2+3+4+5  = 15 answer

let sum = 0;  // 0 , intial value 0, sab numbers ka total banana 
// 1, i loop main har dafa ek number ko represent krega (1 sy 5tak ka safar)
  let i = 1; 
//while keyword hai , (condition)
while (i <=5) {
  
    sum += i; //sum = sum + i //   0 +1 = 1, jama krny ky liye use hoga value
    console.log(i);
    i++; // i ko 1 sy barhao,value barhany ky liye use hoga
    //  console.log(i);
}

console.log(sum); // 1

//miss agar i 5 say shor or mujay value 15 tak lay kar jani ho to i 5 say shoro hoga