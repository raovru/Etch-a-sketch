function createSquares(n) {
    const container = document.getElementById('container');
    container.style.setProperty('--n', n);
  
    for (let i = 0; i < n * n; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }

  function prompt_msg(){
    
    //prompt
    const n = window.prompt("Enter the number of squares to create your own grid");
    createSquares(n);
  };
    // hovering
    function hovering(){
      const hover = document.querySelectorAll(".square");

      hover.forEach((square) => {
      square.addEventListener("mouseover", ()=>
      {
        square.setAttribute("style", "background-color: black;")
      });
    });
    };



  const btn = document.querySelector("#button");
  btn.addEventListener("click", prompt_msg);
  btn.addEventListener("click", hovering);





  

