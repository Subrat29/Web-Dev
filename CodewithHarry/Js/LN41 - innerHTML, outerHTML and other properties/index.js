let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// first.innerHTML
// 'Hey <b>whatsup</b> i am span'
// first.outerHTML
// '<span id="first">Hey <b>whatsup</b> i am span</span>'
// first.outerHTML = "<p> i change it heeeeee </p>""

// console.log()
// document.body.firstChild
// document.body.firstChild.data
// document.body.firstChild.nodeValue

console.log(document.body.textContent)
document.body.firstChild.data

// first.hidden = false

