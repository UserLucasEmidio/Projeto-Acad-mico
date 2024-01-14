//Funções de clique na pagina About-Us

// Funçao mostrar ISO9001
function show2() {
      for (var i = 1; i <= 8; i++) {
          var text = document.getElementById('toggleText' + i);
          if (text.style.display === "none" || text.style.display === "") {
              text.style.display = "block";
          } else {
              text.style.display = "none";
          }
      }
  }
// função Mostrar ODS
  function show1() {
      var elementsToToggle = [
          "toggleText01",
          "objective",
          "objectiveText",
          "ethics",
          "ethicsText",
          "policy",
          "policyText",
          "security",
          "securityText",
          "privacy",
          "privacyText"
      ];
  
      for (var i = 0; i < elementsToToggle.length; i++) {
          var element = document.getElementById(elementsToToggle[i]);
          if (element.style.display === "none" || element.style.display === "") {
              element.style.display = "block";
          } else {
              element.style.display = "none";
          }
      }
  }

