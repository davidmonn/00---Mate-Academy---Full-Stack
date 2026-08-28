function getFirstBadVersion(checkVersion, currentVersion) {
  for (let i = 1; i <= currentVersion; i++) {
    if (checkVersion(i)) {
      return i;
    }
  }
  
  return false;
}

function checkVersion(version) {
  return version > 134;
}

const test = getFirstBadVersion(checkVersion, 130); // 30
const test02 = getFirstBadVersion(checkVersion, 145);

console.log(test);
console.log(test02);
