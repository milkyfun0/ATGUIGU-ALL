function getRandomInt(Max, Min) {
    let Range = Max - Min;
    let Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

function getRandomArray(length, Max, Min) {
    let array = Array(length)
    for (let i = 0; i < length; i++) {
        array[i] = getRandomInt(Max, Min)
    }
    return array.sort(function (a, b) {
        return a - b
    })
}

function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    return arr1.map((value, index) => [value, arr2[index]]);
}

function get_filter_type() {
    return {
        'text': 'text',
        'scope': 'scope',
        'date': 'date',
        'select': 'select'
    }
}

function legal_judge(type: string, condition: { value_start: any; value_end: any; }) {
    if (type === 'text') {
        return true
    }
    let value_start = condition.value_start;
    let value_end = condition.value_end;
    if (type === 'scope') {
        value_start = Number(value_start)
        if (isNaN(value_start) || value_start == "") {
            return false
        }
        value_end = Number(value_end)
        if (isNaN(value_end) || value_end == "") {
            return false
        }
        if (value_start > value_end) {
            return false
        }
    }
    if (type === 'date') {
        if (value_start === "") {
            return false
        }
        // @ts-ignore
        value_start = Date.parse(value_start)
        if (value_end === "") {
            return false
        }
        // @ts-ignore
        value_end = Date.parse(value_end)
        if (value_start > value_end) {
            return false
        }
    }
    return true
}

export {getRandomArray, zip, get_filter_type, legal_judge}