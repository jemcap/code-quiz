let scores = [];
let highscores = document.querySelector("#highscores");
let clearBtn = document.querySelector('#clear');

// If data in the array exists, parse each of those elements.
if (localStorage.getItem('scores')) {
    scores = JSON.parse(localStorage.getItem('scores'))
  }
  
  renderHiScore();
  
  function renderHiScore() {
    highscores.innerHTML = "";
  
    // Render a new li for each new high-score submission
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
      var li = document.createElement("li");
      li.setAttribute("data-index", i);
      li.textContent = score;
      highscores.appendChild(li);
    }
  }

  // When the Clear Highscores button is clicked, run a function that clears the localStorage and content of the webpage

  clearBtn.addEventListener('click', function() {
    highscores.innerHTML = "";
    localStorage.clear();

  }) 
    