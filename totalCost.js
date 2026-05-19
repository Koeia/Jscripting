const gasPrice = (mpg, ppg, totalMiles) => {
  let roundTrip = totalMiles * 2;
  let totalGallons = roundTrip / mpg;
  let priceOfGas = totalGallons * ppg;
  console.log(`this trip will be a total of ${roundTrip} miles, round trip`);
  console.log(
    `this trip will require ${Math.round(totalGallons * 100) / 100} gallons of gas which will cost $${Math.round(priceOfGas * 100) / 100}`,
  );
};
gasPrice(29, 4.3, 22.5);
// 41 miles sarahs -> HCC
// 55 miles lydias to hcc
// 11 miles lydias to sarahs
// 3 miles ootw
