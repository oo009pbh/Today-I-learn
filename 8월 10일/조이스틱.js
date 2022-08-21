function solution(name) {
  name = Array.from(name);
  let answer = 0;
  let min_move = name.length - 1;
  let next = 0

  while (name[min_move] === 'A' && min_move > 0) {
    min_move -= 1
  }
  if (min_move < 0) {
    return answer
  }
  for (let [index, item] of name.entries()) {
    answer += Math.min(item.charCodeAt(0) - 'A'.charCodeAt(0), 26 - (item.charCodeAt(0) - 'A'.charCodeAt(0)));
    next = index + 1
    while (next < name.length && name[next] === 'A'){
      next += 1
    }

    min_move = Math.min(min_move, index + (index + name.length) - next)
  }
  return answer + min_move;
}

console.log(solution("A"));