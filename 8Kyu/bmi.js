/*Write function bmi that calculates body mass index (bmi = weight / height2).*/

/*if bmi <= 18.5 return "Underweight"*/

/*if bmi <= 25.0 return "Normal"*/

/*if bmi <= 30.0 return "Overweight"*/

/*if bmi > 30 return "Obese"*/



function bmi(weight, height) {
  let bmi = weight/(height**2)
  console.log(bmi)
  if(bmi > 30) return "Obese" 
   else if(bmi <= 30.0 && bmi > 25) return "Overweight"
    else if(bmi <= 25.0 && bmi > 18.5) return "Normal"
    else if(bmi <= 18.5) return "Underweight"
 

  return "";
}
