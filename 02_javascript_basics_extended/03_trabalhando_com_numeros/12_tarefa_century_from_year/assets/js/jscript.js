function getCentury(year) {

  if(year === 0) {
    return 1
  } else {
    return Math.ceil(year / 100);
  }

}