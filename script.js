function createSquares(n) {
    const container = document.getElementById('container');
    container.style.setProperty('--n', n);
  
    for (let i = 0; i < n * n; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }
  
  // Create an n*n grid of squares

  // for each div, let us change the background color:

  //prompt message and button handling:

  function prompt_msg(){
    
    const n = window.prompt("Enter the number of squares to create your own grid");
    createSquares(n);
      const hover = document.querySelectorAll(".square");

  hover.forEach((square) => {
    square.addEventListener("mouseover", ()=>
    {
      square.setAttribute("style", "background-color: black;")
    });
  });
  }

  const btn = document.querySelector("#button");
  btn.addEventListener("click", prompt_msg);

  

