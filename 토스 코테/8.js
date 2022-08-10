function parse(route, path) {
    let result = {
        matches: false,
        params: {}
    };
    let p = path.split('/');
    let r = route.split('/');

    for (let [index, item] of r.entries()) {
        let p_item = "";
        if (p[index][0] === "[" && p[index][p[index].length - 1] === "]" ) {
            p_item = p[index].substr(0, p[index].length - 1);
            result.params[p_item] = item;
        } else {
            p_item = p[index];
            if (p_item !== item) {
                return {
                    matches: false,
                };
            }
        }
    }

    return result;
}

function solution(route, path) {
    var result = parse(route, path);
    return JSON.stringify(result);
}

console.log(solution(
    [
        [0, 1, 0, 0, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0]],
    [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]]))