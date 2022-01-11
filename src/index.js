module.exports = function toReadable(num) {
    let units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
    };
    const dozens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let number = num.toString();
    let result = "";

    // проверяем числа до 20
    if (num <= 20) {
        for (key in units) {
            if (number == key) {
                result += units[key];
            }
        }
        return result;
    }
    // проверяем от 21 до 99
    else if (number.length == 2 && num > 20) {
        if (number[0]) {
            for (key in dozens) {
                if (number[0] == key) {
                    result += dozens[key];
                }
            }
            //   console.log(result);
        }
        if (number[1] && number[1] != 0) {
            for (key in units) {
                if (number[1] == key) {
                    result += ` ${units[key]}`;
                    //   console.log(result);
                }
            }
        }
    }
    //проверяем целые ДЕСЯТКИ
    else if (number.length == 2 && num > 20 && number[1] == 0) {
        for (key in dozens) {
            if (number[0] == key) {
                result += dozens[key];
            }
        }
    }
    //проверяем целые сотни
    else if (number.length == 3 && number[1] == 0 && number[2] == 0) {
        console.log("проверяем целые сотни");
        for (key in units) {
            if (number[0] == key) {
                result += `${units[key]} hundred`;
            }
        }
    }
    //проверяем сотни и целые десятки больше 10
    else if (number.length == 3 && number[1] != 0 && number[2] == 0) {
        console.log("проверяем сотни и целые десятки  больше 10");
        for (key in units) {
            if (number[0] == key) {
                result += `${units[key]} hundred`;
            }
        }
        for (key in dozens) {
            if (number[1] == key) {
                result += ` ${dozens[key]}`;
            }
        }
    }
    //проверяем сотни и целые десятки кроме чисел менее 20
    else if (number.length == 3 && number[1] != 0 && number[2] == 0) {
        for (key in units) {
            if (number[0] == key) {
                result += `${units[key]} hundred`;
            }
        }
        for (key in dozens) {
            if (number[1] == key) {
                result += ` ${dozens[key]}`;
            }
        }
    }
    //проверяем сотни и числа  до 20
    else if (number.length === 3 && number[1] < 2) {
        console.log("проверяем сотни и числа  до 20");
        for (key in units) {
            if (number[0] == key) {
                result += `${units[key]} hundred`;
            }
        }

        if (number[1] > 0) {
            let dozen = number[1] + number[2];
            //   console.log(dozen);
            for (key in units) {
                if (dozen == key) {
                    result += ` ${units[key]}`;
                }
            }
        }
        if (number[1] == 0) {
            for (key in units) {
                if (number[2] == key) {
                    result += ` ${units[key]}`;
                }
            }
        }
    } else if (number.length == 3 && number[1] != 0 && number[2] != 0) {
        for (key in units) {
            if (number[0] == key) {
                result += `${units[key]} hundred`;
            }
        }
        for (key in dozens) {
            if (number[1] == key) {
                result += ` ${dozens[key]}`;
            }
        }
        for (key in units) {
            if (number[2] == key) {
                result += ` ${units[key]}`;
            }
        }
    }
    return result;
};
