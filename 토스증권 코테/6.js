function solution(pin) {
    var answer = true;
    let p = new Set(pin);
    if (p.size === 1) {
        return false;
    }
    if (parseInt(pin[0]) + 1 === parseInt(pin[1]) && parseInt(pin[1]) + 1 === parseInt(pin[2])) {
        return false;
    }
    if (parseInt(pin[1]) + 1 === parseInt(pin[2]) && parseInt(pin[2]) + 1 === parseInt(pin[3])) {
        return false;
    }
    if (parseInt(pin[0]) - 1 === parseInt(pin[1]) && parseInt(pin[1]) - 1 === parseInt(pin[2])) {
        return false;
    }
    if (parseInt(pin[1]) - 1 === parseInt(pin[2]) && parseInt(pin[2]) - 1 === parseInt(pin[3])) {
        return false;
    }

    return answer;
}

console.log(solution("9878"))