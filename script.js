  var joueur = document.querySelector(".joueur");
  var ennemi = document.querySelector(".ennemi");
  var healthJoueur = document.querySelector(".health-joueur");
  var healthEnnemi = document.querySelector(".health-ennemi");
  var joueurHealth = 100;
  var ennemiHealth = 100;
  var joueurPosition = 0;
  var ennemiPosition = 250;
  var vitesse = 10;
  var intervalID;
  var startTime;

  function updateHealth() {
    healthJoueur.style.width = joueurHealth + "%";
    healthEnnemi.style.width = ennemiHealth + "%";
  }

  function attaquerPersonnage() {
    joueur.classList.add("attaque");
    ennemi.classList.add("attaque");

    setTimeout(function() {
      joueur.classList.remove("attaque");
      ennemi.classList.remove("attaque");
    }, 300);

    ennemiHealth -= 10; // Modifier la valeur des dégâts si nécessaire
    updateHealth();

    if (ennemiHealth <= 0) {
      alert("Vous avez vaincu l'ennemi !");
    }
  }

  function seDefendrePersonnage() {
    joueurHealth -= 10;
    updateHealth();

    if (joueurHealth <= 0) {
      alert("Vous avez perdu !");
    }
  }

  function attaquerEnnemi() {
    ennemi.classList.add("attaque");
    joueur.classList.add("attaque");

    setTimeout(function() {
      ennemi.classList.remove("attaque");
      joueur.classList.remove("attaque");
    }, 300);
    joueurHealth -= 10;
    updateHealth();

    if (joueurHealth <= 0) {
      alert("Vous avez perdu !");
    }
  }

  function seDefendreEnnemi() {
    ennemiHealth -= 10;
    updateHealth();

    if (ennemiHealth <= 0) {
      alert("Vous avez vaincu l'ennemi !");
    }
  }

  function sauter() {
    joueur.classList.add('animation');
    setTimeout(function() {
      joueur.classList.remove('animation');
    }, 1000);
  }

  function moveLeft() {
    joueurPosition -= vitesse;
    joueur.style.left = joueurPosition + "px";
  }

  function moveRight() {
    joueurPosition += vitesse;
    joueur.style.left = joueurPosition + "px";
  }

  function moveEnnemiRight() {
    ennemiPosition += vitesse;
    ennemi.style.left = ennemiPosition + "px";
  }

  function moveEnnemiLeft() {
    ennemiPosition -= vitesse;
    ennemi.style.left = ennemiPosition + "px";
  }

  function jumpEnnemi() {
    ennemi.classList.add('animation');
    setTimeout(function() {
      ennemi.classList.remove('animation');
    }, 500);
  }
  //
  function startChronometer() {
    startTime = Date.now();
    intervalID = setInterval(updateChronometer, 1000);
  }

  function updateChronometer() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    var formattedTime = formatTime(elapsedTime);
    document.getElementById("chrono").textContent = formattedTime;
  }

  function formatTime(time) {
    var seconds = Math.floor(time / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    seconds = seconds.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');

    return hours + ":" + minutes + ":" + seconds;
  }

  document.getElementById("bouton-jouer").addEventListener("click", function() {
    startChronometer();
  });
  document.getElementById("restartButton").addEventListener("click", function() {
    startChronometer();
  });
  //  
  document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
      console.log(ennemiPosition) ; 
      moveLeft();
    } else if (event.code === "ArrowRight") {
      console.log(ennemiPosition) ; 
      moveRight();
    } else if (event.code === "Space") {
      console.log(ennemiPosition) ; 
      attaquerPersonnage();
    } else if (event.code === "ArrowDown") {
      console.log(ennemiPosition) ; 
      seDefendrePersonnage();
    } else if (event.code === "ArrowUp") {
      console.log(ennemiPosition) ; 
      sauter();
    }
  });

  document.addEventListener("keydown", function(event) {
        if (event.code === "Digit6") {
        moveEnnemiRight();
      } else if (event.code === "Digit4") {
        moveEnnemiLeft(); 
      } else if (event.code === "Digit8") {
        jumpEnnemi();
      } else if (event.code === "Digit5") {
        seDefendreEnnemi();
      } else if (event.code === "Digit0") {
        attaquerEnnemi();
      }
    });


  document.getElementById("restartButton").addEventListener("click", function() {
    restartGame();
  });



  function restartGame() {
    clearInterval(intervalID);
    joueurPosition = 0;
    ennemiPosition = 480;
    joueur.style.left = joueurPosition + "px";
    ennemi.style.left = ennemiPosition + "px";
    joueurHealth = 100;
    ennemiHealth = 100;
    updateHealth();
     startChronometer; 
    document.getElementById("chrono").textContent = "00:00:00";
  }




