function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.78

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

function mercedes() {
  const accordionch = document.getElementById('mer')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('mer-info')
    description.classList.toggle('ativo-driver-open')
  })
}
mercedes()
function redbull() {
  const accordionch = document.getElementById('redbull')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('red')
    description.classList.toggle('ativo-driver-close')
  })
}
redbull()
function ferrari() {
  const accordionch = document.getElementById('fer')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('fer-info')
    description.classList.toggle('ativo-driver-close')
  })
}
ferrari()
function mclaren() {
  const accordionch = document.getElementById('mc')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('mc-info')
    description.classList.toggle('ativo-driver-close')
  })
}
mclaren()
function astonmartin() {
  const accordionch = document.getElementById('at')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('at-info')
    description.classList.toggle('ativo-driver-close')
  })
}
astonmartin()
function alpine() {
  const accordionch = document.getElementById('al')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('al-info')
    description.classList.toggle('ativo-driver-close')
  })
}
alpine()
function alphatauri() {
  const accordionch = document.getElementById('alpha')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('alpha-info')
    description.classList.toggle('ativo-driver-close')
  })
}
alphatauri()
function alfaromeo() {
  const accordionch = document.getElementById('alfa')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('alfa-info')
    description.classList.toggle('ativo-driver-close')
  })
}
alfaromeo()
function williams() {
  const accordionch = document.getElementById('will')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('will-info')
    description.classList.toggle('ativo-driver-close')
  })
}
williams()
function hass() {
  const accordionch = document.getElementById('hass')
  accordionch.addEventListener('click', function () {
    const description = document.getElementById('hass-info')
    description.classList.toggle('ativo-driver-close')
  })
}
hass()
