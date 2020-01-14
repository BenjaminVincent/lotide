

const countOnly = function (allItems, itemToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemToCount[item]) { // Checking truth
      if (results[item]) {
        results[item] ++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;