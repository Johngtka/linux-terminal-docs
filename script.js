// Globalny uchwyt do elementu w którym mają się pojawić elementy
const opt_container = document.querySelector('#menu')

// funkcja renderująca(tworząca) elementy z odpowiednimi parametrami ( jak klasa i id(jest sterowane za pomocą pętli)) do opt_container
function render() {
    for (let i = 1; i <= 6; i++) {
        const opt = document.createElement('div')
        opt.classList.add('option')
        opt.setAttribute('id', 'option' + i)
        opt_container.appendChild(opt)
    }
}
render()

// Globalna tablica z uchwytami do utworzonych elementów tworzonych w funkcji render()
const opt1 = [document.querySelector('#option1'), document.querySelector('#option2'), document.querySelector('#option3'), document.querySelector('#option4'), document.querySelector('#option5'), document.querySelector('#option6')]

// Funkcja która przypisuje przekonwertowany text do(CAPS LOCK) jako wartość z lokalnej tablicy do elementu opt1. Datkowo dodająca do elementów opt1 zdarzenie onclick ustawione na inną funkcję
function option() {
    const tab = ["listing commands", "directory commands", "system commands", "hardware commands", "files commands", "software commands"]
    for (let i = 0; i <= 6; i++) {
        opt1[i].setAttribute('onClick', eventclicker())
        opt1[i].innerHTML = '<p>' + tab[i].toUpperCase() + '</p>'
    }
}
option()
// Funkcja dopisana jako zdarzenie podczas procesu funkcji option(), wykonująca metode słuchacza zdarzeniowego który otworzy ospowiedni plik z pod folderu /subpages na tej samej karcie przeglądarki
function eventclicker() {
    const sub = ["/subpages/ls.html", "/subpages/dir.html"]
    for (let i = 0; i <= 3; i++) {
        opt1[i].addEventListener("click", () => { window.open(sub[i], "_self") })
    }
}
