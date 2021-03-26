function wyslij() {
    const imie = document.getElementById('imie').value
    const nazwisko = document.getElementById('nazwisko').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const wiad = document.getElementById('wiad').value
    console.log('imie:', imie,'nazwisko:', nazwisko,'email:', email,'telefon:', tel,'wiadomosc:', wiad)
}

function pobieranie(val){
    console.log(val)
}

// Reguły walidacji imię nie krótsze niż 3 Nazwisko nie krótsze niż 5 znaków email - czy jest @ 
// telefon - same numery 
// wiadomości do sprzedającego - nie krótszan nież 20 znaków 


function klik() {
    const imie = document.getElementById('imie').value
    if(imie.length < 3) {
        alert ("za krótkie imię")
    }
    const nazwisko = document.getElementById('nazwisko').value
    if(nazwisko.length < 5) {
        alert ("za krótkie nazwisko")
    }
    const email = document.getElementById('email').value

    const tel = document.getElementById('tel').value
    const wiad = document.getElementById('wiad').value
    console.log(imie, nazwisko, email, tel, wiad)
}

function walidacjaEmail(val) {
    let xd = val.split(' ')
    console.log(xd)
    const isEmail = xd.some(item => item === '@')
    console.log(isEmail)
}

function changeTelefon(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
            alert(${'"' + item + '"'} To nie jest cyfra )
            return
        }
}   )
