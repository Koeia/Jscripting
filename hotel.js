const totalCost = (hotelOne, hotelTwo) => {
  const gasPrice = (mpg, ppg, totalMiles) => {
    let roundTrip = totalMiles * 2;
    let totalGallons = roundTrip / mpg;
    let priceOfGas = totalGallons * ppg;
    console.log(
      `this trip will require ${Math.round(totalGallons * 100) / 100} gallons of gas and cost $${Math.round(priceOfGas * 100) / 100}`,
    );
  };
  gasPrice(36, 3.71, 307);
  let myCost = (hotelOne + hotelTwo) / 2;
  let herCost = (hotelOne + hotelTwo) / 2;
  console.log(`Sarah owes $${herCost}, Chason owes $${myCost}`);
};

totalCost(200, 150);
