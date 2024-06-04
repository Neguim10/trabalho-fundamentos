fetch('../json/products.json')
  .then(response => response.json())
  .then(cards => {
    const produtosContainer = document.getElementById('produtos'); 

    cards.forEach(card => {
      // Crie os elementos HTML da card
      const divCard = document.createElement('div');
      divCard.classList.add('card'); 

      const imgCard = document.createElement('img');
      imgCard.src = card.imagem;
      imgCard.alt = card.titulo; // Use o título como alt text

      const divContent = document.createElement('div'); 

      const h1Titulo = document.createElement('h1');
      h1Titulo.textContent = card.titulo;

      const h2Descricao = document.createElement('h2');
      h2Descricao.textContent = card.descricao;

      const spanPreco = document.createElement('span');
      spanPreco.textContent = card.preco;

      const buttonVerMais = document.createElement('button');
      buttonVerMais.textContent = card.botao;

      // Adicione os elementos à card
      divContent.appendChild(h1Titulo);
      divContent.appendChild(h2Descricao);
      divContent.appendChild(spanPreco);
      divContent.appendChild(buttonVerMais); 

      divCard.appendChild(imgCard);
      divCard.appendChild(divContent); // Adicione o conteúdo dentro da card

      produtosContainer.appendChild(divCard); 
    });
  })
  .catch(error => {
    console.error('Erro ao carregar cards.json:', error);
  });