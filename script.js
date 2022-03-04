function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.9

    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) section.classList.add('ativo')
        // else section.classList.remove('ativo')
      })
    }
  }
  animaScroll()
  window.addEventListener('scroll', animaScroll)
}
initAnimationScroll()

function lewisHamilton() {
  const accordion = document.getElementById('lh')
  accordion.addEventListener('click', function () {
    const description = document.getElementById('lh-text')
    description.classList.toggle('ativo-driver-open')
  })
}
lewisHamilton()

function georgeRussel() {
  const accordiongr = document.getElementById('gr')
  accordiongr.addEventListener('click', function () {
    const description = document.getElementById('gr-text')
    description.classList.toggle('ativo-driver-close')
  })
}
georgeRussel()

function maxVertappen() {
  const accordionmv = document.getElementById('mv')
  accordionmv.addEventListener('click', function () {
    const description = document.getElementById('mv-text')
    description.classList.toggle('ativo-driver-close')
  })
}
maxVertappen()

function sergioPerez() {
  const accordionch = document.getElementById('ch')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('ch-text')
    description.classList.toggle('ativo-driver-close')
  })
}
sergioPerez()
function charlerLerclerc() {
  const accordionch = document.getElementById('cl')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('cl-text')
    description.classList.toggle('ativo-driver-close')
  })
}
charlerLerclerc()
function carlosSains() {
  const accordionch = document.getElementById('cs')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('cs-text')
    description.classList.toggle('ativo-driver-close')
  })
}
carlosSains()
function landoNorris() {
  const accordionch = document.getElementById('ln')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('ln-text')
    description.classList.toggle('ativo-driver-close')
  })
}
landoNorris()
function danielRicciardo() {
  const accordionch = document.getElementById('dr')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('dr-text')
    description.classList.toggle('ativo-driver-close')
  })
}
danielRicciardo()
function estebanOcon() {
  const accordionch = document.getElementById('oc')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('oc-text')
    description.classList.toggle('ativo-driver-close')
  })
}
estebanOcon()
function fernandoAlonso() {
  const accordionch = document.getElementById('fa')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('fa-text')
    description.classList.toggle('ativo-driver-close')
  })
}
fernandoAlonso()
function pierreGasly() {
  const accordionch = document.getElementById('pg')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('pg-text')
    description.classList.toggle('ativo-driver-close')
  })
}
pierreGasly()
function yukiTsunoda() {
  const accordionch = document.getElementById('yt')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('yt-text')
    description.classList.toggle('ativo-driver-close')
  })
}
yukiTsunoda()
function lanceStroll() {
  const accordionch = document.getElementById('ls')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('ls-text')
    description.classList.toggle('ativo-driver-close')
  })
}
lanceStroll()
function sebastianVettel() {
  const accordionch = document.getElementById('sv')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('sv-text')
    description.classList.toggle('ativo-driver-close')
  })
}
sebastianVettel()
function alexanderAlobon() {
  const accordionch = document.getElementById('al')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('al-text')
    description.classList.toggle('ativo-driver-close')
  })
}
alexanderAlobon()
function nicholasLatifi() {
  const accordionch = document.getElementById('nl')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('nl-text')
    description.classList.toggle('ativo-driver-close')
  })
}
nicholasLatifi()

function valtteriBottas() {
  const accordionch = document.getElementById('vb')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('vb-text')
    description.classList.toggle('ativo-driver-close')
  })
}
valtteriBottas()
function guanyuZhou() {
  const accordionch = document.getElementById('gz')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('gz-text')
    description.classList.toggle('ativo-driver-close')
  })
}
guanyuZhou()
function mickShumacher() {
  const accordionch = document.getElementById('ms')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('ms-text')
    description.classList.toggle('ativo-driver-close')
  })
}
mickShumacher()
function nikitaMazepin() {
  const accordionch = document.getElementById('nm')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('nm-text')
    description.classList.toggle('ativo-driver-close')
  })
}
nikitaMazepin()
