function solution(gems) {
  var answer = [0, gems.length - 1];
  const set_g = new Set(gems);
  let start = 0;
  let end = 0;
  let d = {};
  d[gems[0]] = 1;
  dict_len = 1;

  while (end < gems.length && start <= end) {
    if (set_g.size === dict_len) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
      if (end - start === answer[1] - answer[0]) {
        if (start < answer[0]) {
          answer = [start, end];
        }
      }
      if (d.hasOwnProperty(gems[start]) && d[gems[start]] > 1) {
        d[gems[start]] -= 1;
      } else if (d[gems[start]] === 1) {
        delete d[gems[start]];
        dict_len -= 1;
      }
      start += 1;
    } else {
      end += 1;
      if (!d.hasOwnProperty(gems[end])) {
        d[gems[end]] = 1;
        dict_len += 1;
      } else {
        d[gems[end]] += 1;
      }
    }
  }
  return [answer[0] + 1 , answer[1] + 1];
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))