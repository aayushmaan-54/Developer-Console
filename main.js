'use strict';

const console_input = document.querySelector('.console-input');
const history_container = document.querySelector('.console-history');
const container = document.getElementsByTagName('main')

function addResult(inputString, output) {
    const outputString = output instanceof Array ? `[${output.join(', ')}]` : output.toString();
    const inputLogEle = document.createElement("div");
    const outputLogEle = document.createElement("div");

    inputLogEle.classList.add("console-log-input");
    outputLogEle.classList.add("console-log-output");

    inputLogEle.textContent = `> ${inputString}`;
    outputLogEle.textContent = outputString;

    history_container.append(inputLogEle, outputLogEle);
}

console_input.addEventListener("keyup", e => {
    const code = console_input.value.trim();

    if(code.length === 0) {
        return;
    }

    if(e.key === "Enter") {
        try {
            addResult(code, eval(code));
        } catch(err) {
            addResult(code, err);
        }

        console_input.value = "";
        container.scrollTop = container.scrollHeight;
    }
})