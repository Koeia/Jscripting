/* const totalCost = (hotelOne, hotelTwo) => {
  const gasPrice = (mpg, ppg, totalMiles) => {
    let roundTrip = totalMiles * 2;
    let totalGallons = roundTrip / mpg;
    let priceOfGas = totalGallons * ppg;
    console.log(
      `this trip will require ${Math.round(totalGallons * 100) / 100} gallons of gas and cost $${Math.round(priceOfGas * 100) / 100}`,
    );
  };
  gasPrice(36, 3.71, 307);
  let myCost = (hotelOne + hotelTwo) / 2 ;
  let herCost = (hotelOne + hotelTwo) / 2;
  console.log(`Sarah owes $${herCost}, Chason owes $${myCost}`);
};

totalCost(200, 150);
*/

// refactor nesting function into single function

const totalCost = (hotelOne, hotelTwo, mpg, ppg, totalMiles) => {
  let roundTrip = totalMiles * 2;
  let totalGallons = roundTrip / mpg;
  let priceOfGas = totalGallons * ppg;
  console.log(
    `this trip will require ${Math.round(totalGallons * 100) / 100} gallons of gas which will cost $${Math.round(priceOfGas * 100) / 100}`,
  );
  let myCost = (hotelOne + hotelTwo) / 2 + priceOfGas;
  let herCost = (hotelOne + hotelTwo) / 2;
  let grandTotal = hotelOne + hotelTwo + priceOfGas;
  console.log(
    `the total cost of this trip will be $${Math.round(grandTotal * 100) / 100}. Sarah will pay $${Math.round(herCost * 100) / 100}, Chason will pay $${Math.round(myCost * 100) / 100}`,
  );
  console.log(
    `the cost for just the hotels per person will be $${Math.round(((hotelOne + hotelTwo) / 2) * 100) / 100}`,
  );
};

totalCost(214.04, 97.29, 36, 3.71, 307);
