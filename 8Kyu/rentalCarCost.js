


/*Write a code that gives out the total amount for different days(d).*/



function rentalCarCost(d) {
  // Your solution here
  let cost = d * 40;
  
  if(d >= 3 && d < 7)  cost -= 20;
  else if(d >= 7) cost-= 50;
  return cost
}
