const Controller = document.getElementsByClassName("controller")[0];
const resultScreen = document.getElementsByClassName("formula")[0];
console.log("this is controller " + Controller.className)
// Controller.onclick = ()=> {
//     console.log("now you click "+ event.target.class)
// }

function ButtonClick() {
    console.log("now you click "+ event.target.className)
    if (event.target.className == "equals") {
        console.log("final formula is " + resultScreen.textContent)
        let result = eval(resultScreen.textContent);
        console.log("result = " + result)
        resultScreen.textContent = result;
    }
    else if (event.target.className == "AC") {
        resultScreen.textContent = "0";
    }
    else if (event.target.className == "negation") {
        if (resultScreen.textContent.charAt(0) != "-") {
            resultScreen.textContent = "-" + resultScreen.textContent;
        }
        else {
            console.log("should be here")
            resultScreen.textContent=resultScreen.textContent.substring(1);
        }
    }
    else if (event.target.className == "divide") {
        resultScreen.textContent = resultScreen.textContent + "/";
    }
    else if (event.target.className == "times") {
        resultScreen.textContent = resultScreen.textContent + "x";
    }
    else if (event.target.className == "minus") {
        resultScreen.textContent = resultScreen.textContent + "-";
    }
    else if (event.target.className == "plus") {
        resultScreen.textContent = resultScreen.textContent + "+";
    }
    else {
        if (resultScreen.textContent == "0") {
            resultScreen.textContent = `${event.target.className}`;
        }
        else if (resultScreen.textContent == "-0") {
            resultScreen.textContent = `-${event.target.className}`;
        }
        else {
            resultScreen.textContent = resultScreen.textContent + `${event.target.className}`;
        }
    }
}

Controller.addEventListener('click', ButtonClick)