const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementById('jsColors')
const range = document.getElementById('jsRange')

canvas.width = 700
canvas.height = 700

ctx.strokeStyle = '#2c2c2c'
ctx.lineWidth = 2.5

let painting = false

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
  ctx.strokeStyle = event.target.style.backgroundColor
}

const handleRangeChange = event => {
  ctx.lineWidth = event.target.value
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}

colors.addEventListener('click', handleColorClick)

if (range) {
  range.addEventListener('input', handleRangeChange)
}
