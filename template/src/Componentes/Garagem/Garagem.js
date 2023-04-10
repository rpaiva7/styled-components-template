import { Carro } from "../Carro/Carro";
import { BotaoGaragem, ContainerGaragem, EstacionamentoGrid } from "./style" /* Sempre que eu importo um componente export const de um outro arquivo, principalmente de arquivos de estilização, eu uso chaves, e posso adicionar mais de um componente no mesmo import, desde que estejam dentro do mesmo arquivo, separando-os por vírgula dentro das chaves */

export function Garagem(props) {
  return (
    <ContainerGaragem>
      <h1>Garagem da {props.nome}</h1>
      <BotaoGaragem onClick={props.mensagemAprentacao}>Mensagem</BotaoGaragem>
      <EstacionamentoGrid>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}  />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </EstacionamentoGrid>
    </ContainerGaragem>
  );
}
