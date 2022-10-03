
window.addEventListener('load',function(){
    let link=document.querySelector('link')
    document
    .querySelector('button:first-child')
    .addEventListener('click',function(){
        link.href=""
    })

    document
    .querySelector('button:nth-child(3)')
    .addEventListener('click',function(){
        link.href="./styles/phone.css"
    })
    document
    .querySelector('button:nth-child(2)')
    .addEventListener('click',function(){
        link.href="./styles/classic.css"
    })
})      