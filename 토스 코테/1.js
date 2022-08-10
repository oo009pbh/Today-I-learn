function safelyGet(object, path) {
    for (let p of path.split('.')) {
        if (object.hasOwnProperty(p)) {
            object = object[p];
        } else {
            object = undefined;
        }
    }
    return object;
}

function solution(input, path) {
    const result = safelyGet(JSON.parse(input), path);

    if (result === undefined) {
        return "undefined";
    }

    return JSON.stringify(result);
}

const object2 = {
    repository: {
        readme: undefined,
    },
};

console.log(solution("{\"repository\": { \"readme\": { \"extension\": \"md\" } } }", "repository.readme"))