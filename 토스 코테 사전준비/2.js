function isRight(want_basket, future) {
    for (let key of Object.keys(want_basket)) {
        if (!future.hasOwnProperty(key) || future[key] < want_basket[key]) {
            return false;
        }
    }
    return true;
}

function solution(want, number, discount) {
    let answer = 0;
    let future = {};
    let want_basket = {};
    for (let i = 0; i < 10; i++) {
        if (future.hasOwnProperty(discount[i])) {
            future[discount[i]] += 1;
        } else {
            future[discount[i]] = 1;
        }
    }
    for (let [index, item] of number.entries()) {
        want_basket[want[index]] = item;
    }

    answer += isRight(want_basket, future) ? 1 : 0;

    for (let i = 10; i < discount.length; i++) {
        future[discount[i-10]] -= 1;
        if (future.hasOwnProperty(discount[i])) {
            future[discount[i]] += 1;
        } else {
            future[discount[i]] = 1;
        }
        answer += isRight(want_basket, future) ? 1 : 0;
    }
    return answer;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]));