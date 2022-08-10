function solution(a, b) {
  return a.reduce((pre, item, index) => pre + a[index] * b[index],0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));