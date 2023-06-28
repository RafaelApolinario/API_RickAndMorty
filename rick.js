const apiRick =  async (pagina)=>{
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data =  await api.json();

    console.log(data);
    function detalhesPersonagem(idPersonagem) {
        console.log(idPersonagem);
        localStorage.setItem('personagemId',idPersonagem)
        document.location.href ='./personagem.html'

    };

    const divRes = document.querySelector("#resultado");
    divRes.innerHTML = "";
    data.results.map(item => {
        divItem = document.createElement("div");
        divItem.classList.add("col-4");
        divItem.onclick = () => detalhesPersonagem(item.id);
        divItem.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;"> 
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${item.image}" class="img-fluid h-100 rounded-start card-imagem " alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Estatus: ${item.status}</p>
                    <p class="card-text">Espécie: ${item.species}</p>
                    <p class="card-text">Género: ${item.gender}</p>
                </div>
                </div>
            </div>
            </div>
        `
        divRes.appendChild(divItem)
    })
}

apiRick(1)