// document.addEventListener("DOMContentLoaded",() => {
//     const personagemId = localStorage.getItem('personagemId');
//     console.log({ personagemId });
// })

// const apiRickPersonagem =  async (personagemId)=>{
//     let url = "https://rickandmortyapi.com/api/character/"+personagemId;
//     const api = await fetch(url);
//     const data =  await api.json();
// }

document.addEventListener("DOMContentLoaded", () => {
    const personagemId = localStorage.getItem('personagemId');
  
    apiRickPersonagem(personagemId); // Chamar a função com o valor de personagemId
  });
  
  const apiRickPersonagem = async (personagemId) => {
    let url = "https://rickandmortyapi.com/api/character/" + personagemId;
    const api = await fetch(url);
    const data = await api.json();
  
    console.log(data);
    // Resto do código para exibir os detalhes do personagem
    const divRes = document.querySelector("#divPersonagem");
    divRes.innerHTML = "";
    const item = data; // Acessar diretamente o objeto retornado pela API
    divItem = document.createElement("div");
    divItem.classList.add("col-4");
    divItem.onclick = () => detalhesPersonagem(personagemId); // Passar personagemId em vez de item.id
    divItem.innerHTML = `
    <div class="card mb-5">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">Status: ${item.status}</p>
      <p class="card-text">Espécie: ${item.species}</p>
      <p class="card-text">Gênero: ${item.gender}</p>
    </div>
  </div>
`;
        divRes.appendChild(divItem)
  };

