import "./styleFaseQuatro.css";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
function CadastroFaseQuatro() {

  const [tagSelecionadas, setTagSelecionadas] = useState([]);
  const [textoSelecao, setTextoSelecao] = useState('');
  const [novaTag, setNovaTag] = useState('');

  const tags = [
    'Drinks', 'Não Alcóolicas', 'Cerveja', 'Shows', 'Japonesa', 'Fast-food', 'Petiscos', 'Raggae', 'Feijoada', 'Pizza', 'Trap'
  ];

  const handleTagClick = (tag) => {
    if (tagSelecionadas.includes(tag)) {
      setTagSelecionadas(tagSelecionadas.filter(f => f !== tag));
    } else {
      if (tagSelecionadas.length) {  
        setTagSelecionadas([...tagSelecionadas, tag]);
      }
    }
  };

  const handleTextoChange = (event) => {
    setTextoSelecao(event.target.value);
  };

  const handleNovaTagChange = (event) => {
    setNovaTag(event.target.value);
  };

  const handleAdicionarTag = () => {
    if (novaTag.trim() !== '' && !tags.includes(novaTag)) {
      setTagSelecionadas([...tagSelecionadas, novaTag]);
      setNovaTag('');
    }
  };

  const handleConfirmarClick = () => {
    // Fazer algo com as frutas selecionadas e texto de seleção
    console.log('Frutas selecionadas:', tagSelecionadas);
    console.log('Texto de seleção:', textoSelecao);
  };


  return (
    <div className="body">
      <div className="inputs-cadastro">
        <h2 className="titulos">Cadastre seu estabelecimento</h2>
        <span className="subtitulo0"><p className="numero-pg"> 4 - 4 </p> </span>
        <div className="textos">
          <h3>TAGS</h3>
          <div>
            <div className="frutas">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="button-27"
                  id={`fruta ${tagSelecionadas.includes(tag) ? 'selecionada' : ''}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}

              {tagSelecionadas.length < 3 && (
                <div className="nova-fruta">
                  <input
                  className="campoTextoCadastro-cadastro"
                    type="text"
                    placeholder="Digite a nova tag"
                    value={novaTag}
                    onChange={handleNovaTagChange}
                  />
                  <button className="button-29" onClick={handleAdicionarTag}>Adicionar Tag</button>
                </div>
              )}
            </div>


          </div>
          <br></br>
          <button className="button-28">Proximo</button>
          <br></br>
        </div>
      </div>
    </div>

  );
};

export default CadastroFaseQuatro;