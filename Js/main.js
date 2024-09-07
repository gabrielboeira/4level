document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('sidebar').style.width = '200px';
    });
  
    function closeNav() {
        document.getElementById('sidebar').style.width = '0';
    }
  
    // Fechar o menu ao clicar fora do menu
    /*document.addEventListener('click', function(event) {
        var sidebar = document.getElementById('sidebar');
        var menuToggle = document.getElementById('menu-toggle');
  
        // Verifica se o clique não foi dentro do menu ou no botão de toggle
        if (event.target !== sidebar && event.target !== menuToggle && !sidebar.contains(event.target)) {
            closeNav(); // Fecha o menu
        }
    });
  });
  
  /*function getProjects() {

    const urlGitHub = 'https://api.github.com/users/gabrielboeira/repos'
    var loadingElement = document.getElementById('loading')
  
    fetch (urlGitHub, {
      method: 'GET',
    })
  
    .then((Response) => Response.json ())
    .then((Response) => {
      loadingElement.style.display = 'none'
      showProjects(Response)
    })
    .catch((e) => {
      console.log(e)
    })
  }
*/
  /*function showProjects(data) {
    var listElement = document.getElementById('my-projects-list')
  
    for(let i = 0; i < data.length; i++)
      {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
      }
  
  }/*
  
  /*getProjects()
  
  document.addEventListener("DOMContentLoaded", () => {
    const themeIcon = document.getElementById("theme-icon");*/

  });

  
  