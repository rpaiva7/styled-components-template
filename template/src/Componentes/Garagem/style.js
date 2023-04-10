import styled from "styled-components";

export const BotaoGaragem = styled.button`
     color: white;
     background-color: teal;
     height: 27px;
     width: 115px;
     border: 2px solid black;
     border-radius: 8px;
     margin-left: 5px;
   
`;

export const ContainerGaragem = styled.main` 
display: flex;
flex-direction: column;
align-items: center;

`; /* Esse ContainerGaragem substitui a div na Garagem, é o elemento pai */

export const EstacionamentoGrid = styled.section`
display: grid;
grid-template-columns: 1fr 1fr; /* ou então repeat(2, 1fr); */
gap: 50px;
`; /* Esse EstacionamentoGrid foi adicionado como uma section na garagem, dentro de ContainerGaragem, e todos os carros foram colocados dentro dele*/