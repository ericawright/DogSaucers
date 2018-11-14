let initFunction = () => {
  let swatches = document.querySelectorAll('.color-swatch');
  
  let changeThoughtBubble = (e) => {
    for (let swatch of swatches) {
      swatch.classList.remove('selected');
    }
    
    let bubble = document.getElementById('thoughtBubble');
    let targetSwatch = e.target;
    bubble.className = '';
    bubble.classList.add(targetSwatch.id);
    targetSwatch.classList.add('selected');
  }
  
  for (let swatch of swatches) {
    swatch.addEventListener('click', changeThoughtBubble);
  }
}