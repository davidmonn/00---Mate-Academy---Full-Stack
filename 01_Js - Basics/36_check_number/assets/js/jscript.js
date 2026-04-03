function checkNumber(n) {
  let result = [];
    if(n > 0) {
      result.push(true);
    } else {
      result.push(false);
    }
    if(n % 2 == 0) {
      result.push(true);
    } else {
      result.push(false);
    }
    if(n % 10 == 0) {
      result.push(true);
    } else {
      result.push(false);
    }
    return result
}