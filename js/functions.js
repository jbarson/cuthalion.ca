const bodyEle = document.querySelector('body')
const anchorList = document.querySelectorAll('.slownav')
anchorList.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault()
    const targetEle = document.querySelector(e.target.attributes.href.nodeValue)
    targetEle.scrollIntoView({top: 300, behavior: 'smooth'})
  })
})