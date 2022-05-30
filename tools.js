let optionsBtn = document.querySelector('.options-btn')
let optionsCont = document.querySelector('.options-cont')
let pencilOptionCont = document.querySelector('.pencil-options-cont')
let eraserOptionCont = document.querySelector('.eraser-options-cont')
let pencilBtn = document.querySelector('.fa-pencil')
let eraserBtn = document.querySelector('.fa-eraser')
let uploadBtn = document.querySelector('.fa-upload')
let addNewBtn = document.querySelector('.fa-plus')
let leftRotBtn = document.querySelector('.fa-rotate-left')
let rightRotBtn = document.querySelector('.fa-rotate-right')

let optionsFlag = false
let pencilOptionsFlag = false
let eraserOptionsFlag = false


pencilOptionCont.style.display = 'none'
eraserOptionCont.style.display = 'none'


optionsBtn.addEventListener('click',()=>{
    optionsFlag = !optionsFlag
    if(optionsFlag){
        optionsCont.classList.remove('options-cont-minimize-anim')
        optionsCont.classList.add('options-cont-maximize-anim')
        optionsCont.style.display = 'flex'
    }
    else{
        optionsCont.classList.remove('options-cont-maximize-anim')
        optionsCont.classList.add('options-cont-minimize-anim')
        setTimeout(() => {
        optionsCont.style.display = 'none'
            
        }, 800);
        pencilOptionCont.style.display = 'none'
        eraserOptionCont.style.display = 'none'
    }

})


pencilBtn.addEventListener('click',()=>{
    pencilOptionsFlag = !pencilOptionsFlag
    pencilOptionCont.style.display = pencilOptionsFlag?'flex':'none'

})

eraserBtn.addEventListener('click',()=>{
    eraserOptionsFlag =! eraserOptionsFlag
    eraserOptionCont.style.display = eraserOptionsFlag?'flex':'none'
})

uploadBtn.addEventListener('click' , ()=>{
    let input = document.createElement('input')
    input.setAttribute('type','file')
    input.click()
    input.addEventListener('change',()=>{
        let file = input.files[0]
        let url = URL.createObjectURL(file)
        let noteCont  = document.createElement('div')
        noteCont.innerHTML = `<div draggable = 'true' class="note">
                                    <div class="note-titlebar">
                                        <div class="note-minimize-btn">
                                            <i class="fa-solid fa-window-minimize"></i>
                                        </div>
                                        <div class="note-delete-btn">
                                        <i class="fa-solid fa-trash-can"></i>
                                        </div>
                                    </div>
                                    <div class = 'note-text-cont'>
                                        <img src = ${url}></img>
                                    </div>
                                </div>`

        let minBtn = noteCont.querySelector('.note-minimize-btn')
        let delBtn = noteCont.querySelector('.note-delete-btn')
    
    
        minBtn.addEventListener('click',()=>{
            let textCont = minBtn.parentElement.parentElement.querySelector('.note-text-cont')
            if(textCont.style.display == 'flex')
                textCont.style.display = 'none'
            else
                textCont.style.display = 'flex'
        })
    
        delBtn.addEventListener('click',()=>{
            delBtn.parentElement.parentElement.parentElement.remove()
        })

        document.body.appendChild(noteCont)
    })
})

addNewBtn.addEventListener('click',()=>{
    let noteCont = document.createElement('div')
    noteCont.innerHTML = `<div draggable = 'true' class="note">
                                <div class="note-titlebar">
                                    <div class="note-minimize-btn">
                                        <i class="fa-solid fa-window-minimize"></i>
                                    </div>
                                    <div class="note-delete-btn">
                                    <i class="fa-solid fa-trash-can"></i>
                                    </div>
                                </div>
                                <div class = 'note-text-cont'>
                                    <textarea></textarea>
                                </div>
                            </div>`

    let minBtn = noteCont.querySelector('.note-minimize-btn')
    let delBtn = noteCont.querySelector('.note-delete-btn')


    minBtn.addEventListener('click',()=>{
       let textCont = minBtn.parentElement.parentElement.querySelector('.note-text-cont')
       if(textCont.style.display == 'flex')
            textCont.style.display = 'none'
       else
            textCont.style.display = 'flex'
    })

    delBtn.addEventListener('click',()=>{
        delBtn.parentElement.parentElement.parentElement.remove()
    })

    document.body.appendChild(noteCont)
})

leftRotBtn.addEventListener('click',()=>{
})

rightRotBtn.addEventListener('click',()=>{
})





