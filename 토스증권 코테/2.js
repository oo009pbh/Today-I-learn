function createQueryString(object) {
    let answer = (Object.keys(object)).reduce((pre, item)=> {
        if (object[item] === null || object[item] === undefined) {
            return pre + "";
        } else {
            let temp = "";
            if (Array.isArray(object[item])) {
                for (let i of object[item]) {
                    if (temp) {
                        temp += "&" + item + "=" + encodeURIComponent(i);
                    } else {
                        temp = item + "=" + encodeURIComponent(i);
                    }
                }
            } else {
                temp = item + "=" + encodeURIComponent(object[item]);
            }
            return pre === "?" ? pre + temp : pre + "&" + temp;
        }
    }, "?")

    return answer === "?" ? "" : answer;
}

function solution(input) {
    var object = JSON.parse(input);
    var answer = createQueryString(object);
    return answer;
}

console.log(solution(
    "{\"foo\":\"bar\",\"baz\":null}"))