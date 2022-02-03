let white = 'white'
let color = 'blue'

let colorChoice = document.querySelectorAll('.color-choice')
for (let i = 0; i < colorChoice.length; i++)
{
    colorChoice[i].addEventListener('click', function(e){
        color = e.target.id
    })
    
}

var painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = color
})
painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = white   
})

let pixels = document.querySelectorAll('.pixel')

var clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', function(){
    for (let i = 0; i < pixels.length; i++)
    {
        pixels[i].style.backgroundColor = white    
    }
})