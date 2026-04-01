function finalGrade(grade1, grade2, grade3) {
  if (
    (grade1 > 100) |
    (grade1 < 0) |
    (grade2 > 100) |
    (grade2 < 0) |
    (grade3 > 100) |
    (grade3 < 0)
  ) {
    return "You have entered an invalid grade.";
  } else {
    let total = (grade1 + grade2 + grade3) / 3;
    console.log(total);
    if ((total >= 0) & (total <= 59)) {
      return "F";
    } else if ((total >= 60) & (total <= 69)) {
      return "D";
    } else if ((total >= 70) & (total <= 79)) {
      return "C";
    } else if ((total >= 80) & (total <= 89)) {
      return "B";
    } else if ((total >= 90) & (total <= 100)) {
      return "A";
    }
  }
}

console.log(finalGrade(100, 85, 50));
