import TextField from '../TextField/TextField';
import './Form.css';

const Form = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
