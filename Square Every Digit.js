/** @format */
function squareDigits(num){
    if(typeof num === "number"){
          
    const nums = num.toString().split("");
    const nm = nums.map(Number)
 
  return Number(nm.map((n) => n**2).join(""));
  }
    else{
        return num;
    }
}
console.log(squareDigits("0"));
