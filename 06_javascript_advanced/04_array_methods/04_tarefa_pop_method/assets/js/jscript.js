numbers = [1,2,3,4,5];

numbers.pop = function() {
  if (this.length === 0) {
    return;
  }

  const n = this[this.length - 1];

  this.length = this.length - 1;

  return n;
};


const removeElement = numbers.pop();
console.log(removeElement);
console.log(numbers);


