let canvas = document.querySelector('canvas')
let tool = canvas.getContext('2d')
let pencilColorCont = document.querySelector('.pencil-color-cont')
let pencilSize = document.querySelector('.pencil-size-range')
let eraserSize = document.querySelector('.eraser-size-range')
let downloadBtn = document.querySelector('.fa-download')
let undoBtn = document.querySelector('.undo')
let redoBtn = document.querySelector('.redo')

let mouseDownFlag = false
let pencilSelected = false
let eraserSelected = false

let pencilColor = 'red'

canvas.width = window.innerWidth
canvas.height = window.innerHeight
tool.fillStyle = 'white'
tool.fillRect(0,0,canvas.width,canvas.height)
tool.strokeStyle = pencilColor    
tool.lineWidth = '1'

canvas.addEventListener('mousedown',(e)=>{
    tool.beginPath()
    tool.moveTo(e.clientX,e.clientY)
    mouseDownFlag = true
})

canvas.addEventListener('mousemove',(e)=>{
    if(mouseDownFlag && pencilSelected){
        tool.lineTo(e.clientX,e.clientY)
        tool.stroke()
    }
})

canvas.addEventListener('mouseup',()=>{
    mouseDownFlag = false
})


pencilColorCont.querySelectorAll('div').forEach(x=>{
    x.addEventListener('click', e=>{
        pencilColor = x.id
        tool.strokeStyle = pencilColor
        console.log(pencilColor);
    })
})

pencilSize.addEventListener('change' , ()=>{
    tool.lineWidth = `${pencilSize.value}`
})

eraserOptionCont.addEventListener('change' , ()=>{
    tool.lineWidth = `${eraserSize.value}`
})

pencilBtn.addEventListener('click',()=>{
    pencilSelected = !pencilSelected
    pencilBtn.style.color = pencilSelected?'red':'black'
    eraserBtn.style.color = 'black'
    tool.strokeStyle = pencilColor
})

eraserBtn.addEventListener('click',()=>{
    eraserSelected = !eraserSelected
    eraserBtn.style.color = eraserSelected?'red':'black'
    tool.strokeStyle = 'white'
    pencilBtn.style.color = 'black'
})

downloadBtn.addEventListener('click',()=>{
    let a = document.createElement('a')
    a.href = canvas.toDataURL()
    a.download = 'new.jpg'
    a.click()
})


//RedoUndo Functionality

let RedoUndoData = []
RedoUndoData.push(canvas.toDataURL())
let currentDataPointer = 0
let maxDataPointer = 0


canvas.addEventListener('mouseup',()=>{
    if(pencilSelected || eraserSelected)
        {
            RedoUndoData.push(canvas.toDataURL())
            currentDataPointer++;
            maxDataPointer++
        }

})

undoBtn.addEventListener('click',()=>{

    if(currentDataPointer>0)
            currentDataPointer--
    let image = document.createElement('img')
    image.src = RedoUndoData[currentDataPointer]
    image.onload = ()=>{
        tool.drawImage(image , 0,0)
    }
})

redoBtn.addEventListener('click',()=>{

    if(currentDataPointer<maxDataPointer)
            currentDataPointer++
    let image = document.createElement('img')
    image.src = RedoUndoData[currentDataPointer]
    image.onload = ()=>{
        tool.drawImage(image , 0,0)
    }
        
})



