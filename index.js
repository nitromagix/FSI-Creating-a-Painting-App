let color = 'blue'

let colorChoice = document.querySelectorAll('.color-choice')

for (let i = 0; i < colorChoice.length; i++)
{
    colorChoice[i].addEventListener('click', function(e){
        color = e.target.id
        console.log(color)
    })
    
}

/* let red = document.querySelector('#red')
red.addEventListener('click', function(e){
    console.log(e.target.id)
})

let green = document.querySelector('#green')
green.addEventListener('click', function(e){
    console.log(e.target.id)
})

let yellow = document.querySelector('#yellow')
yellow.addEventListener('click', function(e){
    console.log(e.target.id)
})
 */
var painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = color
})
painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'   
})

/* var pixels = document.querySelector('pixel')
for (let i = 0; i < pixels.length; i++)
{
    pixels[i].addEventListener('cli')
} */