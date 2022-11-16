const getMathResult = expression => {

    if (expression === undefined || expression.length < 3)
        return alert("Ошибка");

    //Фильтрую по числам и допустимым знакам
    expression = expression
        .filter(i => !isNaN(Number(i))
            || [">", "<", "=", "+", "-", "*", "/"]
                .indexOf(i) !== -1);

    //Проверяю соблюдение условий задачи:
    //Массив из трех элеменов, математический знак в центре.
    if (expression.length !== 3 || !isNaN(Number(expression[1])))
        return alert("Ошибка");

    //Калькулятор
    switch (expression[1]) {
        case ">":
            return alert(Number(expression[0]) > Number(expression[2]));
        case "<":
            return alert(Number(expression[0]) < Number(expression[2]));
        case "=":
            return alert(Number(expression[0]) === Number(expression[2]));
        case "+":
            return alert(Number(expression[0]) + Number(expression[2]));
        case "-":
            return alert(Number(expression[0]) - Number(expression[2]));
        case "*":
            return alert(Number(expression[0]) * Number(expression[2]));
        case "/":
            return alert(Number(expression[0]) / Number(expression[2]));
        default:
            return alert("Ошибка");
    }
}

//Спецификация
getMathResult(["100", "hello", "javascript", "help200", "+", 4]); //104
getMathResult(["200", "+", 300]); // 500
getMathResult(["20", "-", "5"]); // 15
getMathResult([100, "/", 100]); // 1
getMathResult([2, "-", 2]); // 0
getMathResult(["5", ">", "10"]); // false
getMathResult(["5", "<", "10"]); // true
getMathResult(["1", "=", 1]); // true
getMathResult(["1", "**", 1]); // "Ошибка"
getMathResult(["+", "100", 10]); // "Ошибка"
getMathResult(["2", "+", "1.5"]); // 3.5
getMathResult([]); //Ошибка
getMathResult(); //Ошибка
