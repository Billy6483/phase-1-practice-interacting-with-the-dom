//let counter = 0;
//let like = 0;
function run(){
    const counter = document.getElementById('counter')
    auto = counter.innerText
    auto +=1
    const plus = document.getElementById('plus').addEventListener('click',()=>{
        plus = counter.innerText += 1
    })
    const minus = document.getElementById('minus').addEventListener('click',()=>{
        minus = counter.innerText -= 1
    })
    const like = document.getElementById('heart').addEventListener('click',()=>{
        like = addLike +=1
        document.getElementsByClassName('likes').innerText = addLike
    })
    const form = document.getElementById('comment-form')
    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        const comment = form.getElementById('display')
        comment.innerText = handleDisplay
        handleDisplay(e.target.comment-input.value)
    })
}

function handleDisplay(){
    //console.log(handleDisplay)
    return handleDisplay
}

document.addEventListener('DOMContentLoaded', run)