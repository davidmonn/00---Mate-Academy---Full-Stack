const ages = [18, 14, 22, 34, 43, 18, 20, 34, 24];

function getAverageAge(ages) {
  let media = 0;

  ages.reduce((total, age) => {
    media = total + age / ages.length;

    return media;
  }, 0);

  return Math.round(media);
};

const result = getAverageAge(ages);
console.log(result);
