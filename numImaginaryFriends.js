function numImaginaryFriends(totalFriends) {
  let imaginaryFriends = Math.ceil(totalFriends * 0.25);
  return imaginaryFriends;
}
console.log(numImaginaryFriends(1));
