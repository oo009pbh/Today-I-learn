const strToInt = (str) => {
    let [year, month, day] = str.split('.').map(item => parseInt(item));
    return year * 12 * 28 + month * 28 + day
}

function solution(today, terms, privacies) {
    let answer = [];
    let parse_today = strToInt(today);
    let d = {}
    for (let term of terms) {
        let [key, value] = term.split(" ");
        d[key] = parseInt(value) * 28;
    }
    for (let [index, privacy] of privacies.entries()) {
        let [str, key] = privacy.split(" ");
        let number = strToInt(str);

        if (d[key] + number <= parse_today) {
            answer.push(index + 1);
        }
    }
    return answer;
}

console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))