const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')

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

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
