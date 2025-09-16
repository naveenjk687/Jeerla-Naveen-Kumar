

function calculate(distance) {
  let price = 0;

  if (distance <= 4) {
    price = 30;
  } else {
    price = 30;
    distance -= 4;

    if (distance <= 5) {
      price += distance * 10;
      return price;
    } else {
      price += 5 * 10;
      distance -= 5;
    }

    if (distance <= 10) {
      price += distance * 15;
      return price;
    } else {
      price += 10 * 15;
      distance -= 10;
    }

    price += distance * 20;
  }

  return price;
}

let travelled = 19.5;
console.log("Total Price for " + travelled + " km: " + calculate(travelled));


//while 
let i=0;
while(i<20){
    console.log(i);
    i++;

}

//table by using while loop

//while 
let i=1;
while(i<=20){
    console.log("5*$(i)=$(5*i)");
    i++;

}