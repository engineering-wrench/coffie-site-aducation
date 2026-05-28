const descriprion = document.getElementById ("description")
const lag_text1 = document.getElementById ("lag")
const lag_text2 = document.getElementById ("title")
const button = document.getElementById ("button-cofie")
const says = [
    'А кстати... КОФЕ - помогает от альцгеймера',
    'НО КОФЕ помогает от.... Альцгеймера!',
    'Не помню о чем мы говорили',
    'Я вспомнил! Кофе помогает от Альцгеймера!'
]
let string_option = 0
let cursor_anim = 0
const symbols = [
    "|",
    "/",
    "-",
    "|",
    "\\"
]

for (let i = 0; i<says.length - 1; i++) {
    says[i] = " " + says[i] + " "
}

function coffffie(i) {
    descriprion.innerHTML = descriprion.innerHTML.slice (0, -1) + says[string_option].charAt(i) + symbols[cursor_anim]
    cursor_anim = (cursor_anim + 1) % symbols.length
    return i + 1
}
let i = 0

const cycle = setInterval(
    function() {
        i = coffffie (i) 
        if (i > says[string_option].length - 1) {
            i = 0;
            string_option = Math.floor (Math.random () * says.length)
            if (descriprion.innerHTML.length > 2000) {
                descriprion.innerHTML += " [КОФЕ ЗАКОНЧИЛСЯ]"
                clearInterval (cycle)
            }
        }
}, 100);
