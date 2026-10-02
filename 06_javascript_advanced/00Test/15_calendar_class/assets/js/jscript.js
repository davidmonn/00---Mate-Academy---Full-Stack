// #region for
/*
class Calendar {
  verifDay = [];
  
  book(start, end) {
    
    if(Number.isInteger(start) && Number.isInteger(end)) {
      for (let day of this.verifDay) {
        const saveDay = day[0];
        const saveEnd = day[1];

        if (start < saveEnd && end > saveDay) {
          return false;
        }
      }
      
      this.verifDay.push([start, end]);
      
      return true;
    }
  }
}
*/
// #endregion for

// #region method some

class Calendar {
  verifDay = [];

  book(start, end) {
    const hasOverlap = this.verifDay.some(day => {
      const oldStart = day[0];
      const oldEnd = day[1];

      return start < oldEnd && end > oldStart;
    });

    if (hasOverlap) {
      return false;
    }

    this.verifDay.push([start, end]);

    return true;
  }
}

// #endregion method some

const calendar = new Calendar();

console.log(
  calendar.book(5, 10) // true
);

console.log(
  calendar.book(7, 25) // false
);

console.log(
  calendar.book(1, 30) // false
);

console.log(
  calendar.book(10, 25) // true
);
