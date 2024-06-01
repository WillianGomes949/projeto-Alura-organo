import './TextField.css';

const TextField = (props) => {
  const placehoderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placehoderModificada}
      />
    </div>
  );
};

export default TextField;
