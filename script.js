let body = document.querySelector('body')
let nav = document.querySelector('nav')
let logo = document.querySelector('#logo img')
let kopekKulubesi = document.querySelector('#kopekKulubesi')
let kediKulubesi = document.querySelector('#kediKulubesi')
let kulube = document.querySelector('#Kulube')
let hakkimizda = document.querySelector('#hakkimizda')
const goUpButton = document.querySelector('#goUpButton')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(event) {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    if (document.documentElement.scrollTop > 500) {
        nav.style.position = 'fixed'
        nav.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        logo.style.height ="100px"
        nav.style.width = "100%"
        goUpButton.style.opacity = '1'
    } else {
        nav.style.position = ''
        logo.style.height ="150px"
        nav.style.boxShadow = ''
        goUpButton.style.opacity = '0'
    }
})

goUpButton.addEventListener('click', function (event) {
    window.scrollTo({top: 0,left: 0, behavior: 'smooth'})
})

kopekKulubesi.addEventListener('click', function (event) {
    window.scrollTo({top: sections[1].offsetTop - 104,left: 0, behavior: 'smooth'})
})
kediKulubesi.addEventListener('click', function (event) {
    window.scrollTo({top: sections[5].offsetTop - 104,left: 0, behavior: 'smooth'})
})
// kulube.addEventListener('click', function (event) {
//     window.scrollTo(0,sections[3].offsetTop)
// })
kulube.addEventListener('click', function (event) {
    window.scrollTo({top: sections[7].offsetTop - 104,left: 0, behavior: 'smooth'})
})
hakkimizda.addEventListener('click', function (event) {
    window.scrollTo({top: sections[8].offsetTop - 104,left: 0, behavior: 'smooth'})
})

function goToInstagram () {
    let link = document.getElementById('insta');
    link.href = "https://www.instagram.com/patiemlakk/?utm_medium=copy_link"
    link.click()
}

function goToFacebook () {
    let link = document.getElementById('face');
    link.href = `https://www.facebook.com/pati.emlak/`
    link.click()
}

function goToWp () {
    let link = document.getElementById('wp');
    // link.href = `https://www.facebook.com/pati.emlak/`
    link.click()
}