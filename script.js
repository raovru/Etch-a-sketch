function createSquares(n) {
    const container = document.getElementById('container');
    container.style.setProperty('--n', n);
  
    for (let i = 0; i < n * n; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }
  
  // Create a 16x16 grid of squares
  createSquares(8);
  