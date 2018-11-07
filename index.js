let initFunction = () => {
  let swatches = document.querySelectorAll('.color-swatch');
  console.log('hello');
  
  let changeThoughtBubble = (e) => {
    for (let swatch of swatches) {
      swatch.classList.remove('selected');
    }
    
    let bubble = document.getElementById('thoughtBubble');
    let targetSwatch = e.target;
    bubble.style.backgroundImage = 'url(./assets/thinking-bubble-' + targetSwatch.id + '.png)';
    targetSwatch.classList.add('selected');
  }
  
  for (let swatch of swatches) {
    swatch.addEventListener('click', changeThoughtBubble);
  }
}