const image = document.querySelector('img')

image.addEventListener('mousemove', () => {
  console.log('test')

  const height = parseInt(image.style.height.split('px')[0])
  image.style.height = `${height - 1}px`
  const width = parseInt(image.style.width.split('px')[0])
  image.style.width = `${width + 5}px`
  console.log(height)
})

// height + 'px'
