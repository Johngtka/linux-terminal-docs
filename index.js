window.onload = () => {
    timer()
    setInterval(date, 1000)
    date()
}
// Globalny uchwyt do elementu w którym mają się pojawić elementy
const opt_container = document.querySelector('#menu')
const main = document.querySelector('#main')
// funkcja renderująca(tworząca) elementy z odpowiednimi parametrami (jak klasa i id(które jest sterowane za pomocą pętli)) do opt_container
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

// Funkcja która przypisuje przekonwertowany text jako (CAPS LOCK) z lokalnej tablicy do elementu opt1. Dodatkowo dodaje do elementów opt1 zdażenie onclick ustawione na inną, niezależną funkcję
function option() {
    const tab = ["listing commands", "directory commands", "system commands", "hardware commands", "files commands", "software commands"];
    for (let i = 0; i <= opt1.length; i++) {
        opt1[i].setAttribute('onClick', 'eventclicker()')
        opt1[i].innerHTML = '<p>' + tab[i].toUpperCase() + '</p>'
    }
}
option()

// Funkcja dopisana jako zdarzenie podczas procesu funkcji option(), wykonująca metode słuchacza zdarzeniowego który otworzy odpowiedni plik z podfolderu /subpages na tej samej karcie przeglądarki
function eventclicker() {
    const sub = ["ls.html", "dir.html", "os.html", "hw.html", "fil.html", "soft.html"]
    for (let i = 0; i <= opt1.length; i++) {
        opt1[i].addEventListener("click", () => { window.open(sub[i], "_self") })
    }
}

function timer() {
    const timer = document.createElement('div')
    timer.setAttribute('id', 'clock')
    timer.style.clear = "both"
    timer.style.display = "block"
    main.appendChild(timer)
}
// funkcja do obsługi daty
function date() {
    // inicjalizacja zmiennej time przechowującej obiekt
    const time = new Date()
    // zmienna przechowująca metode dnia zmiennej globalnej time 
    let day = time.getDate()
    // zmienna przechowująca metode miesiąca zmiennej globalnej time
    let mon = time.getMonth() + 1
    // zmienna przechowująca metode roku zmiennej globalnej time
    let year = time.getFullYear()
    let h = time.getHours()
    // warunek obsługi 1 cyfrowego wyświetlania
    if (h < 10) h = "0" + h
    // zmienna przechowywująca metodę minut zmiennej globalnej time
    let m = time.getMinutes()
    // warunek obsługi 1 cyfrowego wyświetlania
    if (m < 10) m = "0" + m
    // zmienna przechowywująca metodę sekund zmiennej globalnej time
    let s = time.getSeconds()
    // warunek obsługi 1 cyfrowego wyświetlania
    if (s < 10) s = "0" + s
    // żarcik
    // if (time.getHours() === 21 && time.getMinutes() === 37) {
    //     console.log("kremówki")
    // }
    const clock = document.querySelector('#clock')
    clock.innerHTML = day + "." + mon + "." + year + h + ":" + m + ":" + s
}
