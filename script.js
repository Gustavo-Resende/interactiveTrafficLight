let img = document.getElementById('img');
let off = document.getElementById('off');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let auto = document.getElementById('auto')

function interruptor() {

    off.addEventListener('click', ()=>{
        img.setAttribute('src', 'assets/desligado.png');
    })

    red.addEventListener('click', ()=>{
        img.setAttribute('src', 'assets/vermelho.png')
    })

    yellow.addEventListener('click', ()=>{
        img.setAttribute('src', 'assets/amarelo.png')
    })

    green.addEventListener('click', ()=>{
        img.setAttribute('src', 'assets/verde.png')
    })

    var i = 0;
    
    auto.addEventListener('click', ()=>{

        var loop = setInterval(()=>{

            setTimeout(() =>{
            img.setAttribute('src', 'assets/vermelho.png');
            }, 100) 
                
            setTimeout(() =>{
            img.setAttribute('src', 'assets/amarelo.png')
            }, 300)
            
            setTimeout(() =>{
            img.setAttribute('src', 'assets/verde.png')
            }, 500);

        }, 1000)

        var looptime = setInterval(() =>{
            i++
            if(i >= 3){
                clearInterval (loop)
                clearInterval (looptime)
            }
        }, 1000)
    })

}

interruptor()