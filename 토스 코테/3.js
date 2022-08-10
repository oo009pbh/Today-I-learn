function solution(paths) {
    let answer = [];

    while (paths.length > 0) {
        let item = paths.shift();

        for (let i of item.split('/')) {
            if (!i || i === ".") {
                continue
            } else if (i === "..") {
                if (answer) {
                    answer.pop();
                }
            } else if (i === "...") {
                if (answer) {
                    answer.pop();
                }
                if (answer) {
                    answer.pop();
                }
            } else {
                answer.push(i);
            }
        }
    }
    return (answer).reduce((pre, item )=> pre === "/" ? pre + item : pre + '/' + item, '/');
}

console.log(solution(["/foo", "bar", "baz/asdf", "q", ".."]));