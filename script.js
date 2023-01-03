// Globalny uchwyt do elementu w którym mają się pojawić elementy
const opt_container = document.querySelector('#menu')
// funkcja renderująca(tworząca) elementy z odpowiednimi parametrami (jak klasa i id(które jest sterowane za pomocą pętli)) do opt_container
function render() {
    for (let i = 1; i <= 6; i++) {
        console.clear()
        const opt = document.createElement('div')
        opt.classList.add('option')
        opt.setAttribute('id', 'option' + i)
        opt_container.appendChild(opt)
    }
}
render()

// Globalna tablica z uchwytami do utworzonych elementów tworzonych w funkcji render()
const opt1 = [document.querySelector('#option1'), document.querySelector('#option2'), document.querySelector('#option3'), document.querySelector('#option4'), document.querySelector('#option5'), document.querySelector('#option6')]

// Funkcja która przypisuje przekonwertowany text jako (CAPS LOCK) z lokalnej tablicy do elementu opt1. Dodatkowo dodaje do elementów opt1 zdażenie onclick ustawione na inną, niezależną funkcję
function option() {
    const tab = ["listing commands", "directory commands", "system commands", "hardware commands", "files commands", "software commands"];
    for (let i = 0; i <= opt1.length; i++) {
        console.clear()
        opt1[i].setAttribute('onClick', 'eventclicker()')
        opt1[i].innerHTML = '<p>' + tab[i].toUpperCase() + '</p>'
    }
}
option()

// Funkcja dopisana jako zdarzenie podczas procesu funkcji option(), wykonująca metode słuchacza zdarzeniowego który otworzy odpowiedni plik z podfolderu /subpages na tej samej karcie przeglądarki
function eventclicker() {
    const sub = ["ls.html", "dir.html", "os.html", "hw.html", "fil.html", "soft.html"]
    for (let i = 0; i <= opt1.length; i++) {
        console.clear()
        opt1[i].addEventListener("click", () => { window.open(sub[i], "_self") })
    }
    // opt1[0].addEventListener("click", () => { window.open(sub[0], "_self") })
    // opt1[1].addEventListener("click", () => { window.open(sub[1], "_self") })
    // opt1[2].addEventListener("click", () => { window.open(sub[2], "_self") })
    // opt1[3].addEventListener("click", () => { window.open(sub[3], "_self") })
    // opt1[4].addEventListener("click", () => { window.open(sub[4], "_self") })
    // opt1[5].addEventListener("click", () => { window.open(sub[5], "_self") })
}
