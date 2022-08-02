function solution(n, works) {
  let max_val = 0;
  let d = {};
  for (let work of works) {
    if (d.hasOwnProperty(work)) {
      d[work] += 1;
    } else {
      d[work] = 1;
    }
    max_val = Math.max(work, max_val);
  }

  for (let i = n ; i > 0 ; i--) {
    d[max_val] -= 1;
    if (d[max_val] == 0) {
      delete d[max_val];
      max_val -= 1;
      if (max_val == 0) {
        return 0;
      }
      if (d.hasOwnProperty(max_val)) {
        d[max_val] += 1;
      } else {
        d[max_val] = 1;
      }
    } else {
      if (max_val - 1 == 0) {
        continue;
      }
      if (d.hasOwnProperty(max_val - 1)) {
        d[max_val - 1] += 1;
      } else {
        d[max_val - 1] = 1;
      }
    }
  }
  console.log(d)
  return (Object.keys(d)).reduce((pre, key) => {
    return pre + (key * key * d[key]);
  }, 0);
}

console.log(solution(	3, [1, 1, 1, 1, 7]))