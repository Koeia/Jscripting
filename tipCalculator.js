// Write your function here:
function tipCalculator(quality, total) {
  if (quality === "bad") {
    var tipPercent = 5;
  } else if (quality === "ok") {
    var tipPercent = 15;
  } else if (quality === "good") {
    var tipPercent = 20;
  } else if (quality === "excellent") {
    var tipPercent = 30;
  }
  var tipToPercent = tipPercent / 100;
  let tipAmount = total * tipToPercent;
  console.log(tipAmount);
}
tipCalculator("good", 100);

// Uncomment the line below when you're ready to try out your function
// console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
