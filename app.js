const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementById('jsColors')
const range = document.getElementById('jsRange')
const mode = document.getElementById('jsMode')
const saveBtn = document.getElementById('jsSave')

const INITIAL_COLOR = '#2c2c2c'
const CANVAS_SIZE = 700

canvas.width = CANVAS_SIZE
canvas.height = CANVAS_SIZE

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 2.5

let painting = false
let filling = false

const stopPainting = () => (painting = false)

const startPainting = () => (painting = true)

const onMouseMove = event => {
  const { offsetX, offsetY } = event

  if (!painting) {
    ctx.beginPath()
    ctx.moveTo(offsetX, offsetY)
  } else {
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()
  }
}

const handleColorClick = event => {
  const color = event.target.style.backgroundColor
  ctx.strokeStyle = color
  ctx.fillStyle = color
}

const handleRangeChange = event => {
  ctx.lineWidth = event.target.value
}

const handleModeClick = () => {
  if (filling) mode.innerText = 'Fill'
  else mode.innerText = 'Paint'

  filling = !filling
}

const handleCanvasClick = () => {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}

// 우클릭 방지
const handleRigthClick = event => {
  event.preventDefault()
}

const handleSaveBtnClick = event => {
  const link = document.createElement('a')
  link.href = canvas.toDataURL()
  link.download = 'PaintJS[🖌]'
  link.click()
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click', handleCanvasClick)
  canvas.addEventListener('contextmenu', handleRigthClick)
}

colors.addEventListener('click', handleColorClick)

if (range) {
  range.addEventListener('input', handleRangeChange)
}

if (mode) {
  mode.addEventListener('click', handleModeClick)
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveBtnClick)
}
