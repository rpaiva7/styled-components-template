import { Garagem } from "./Componentes/Garagem/Garagem";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
      <GlobalStyle />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </>
);
}

    /* <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div> */

    /* Styled Components é uma lib (abreviação de library, ou como chamamos aqui, biblioteca) que garante que o CSS de cada componente seja totalmente restrito àquele componente. O Styled permite criarmos uma variável com o estilo CSS guardado dentro e para utilizar basta colocar o nome da variável no lugar do nome da tag. Para instalar, rode: npm install styled-components 
    
   
# Boas práticas com styled-components

### **Não usar classes com styled-components**

Quando estamos estilizando os nossos componentes  usando o styled-component não devemos usar o className, o ideal é não misturar os dois, pois, o código fica confuso e quando surge um problema na estilização se torna mais difícil de resolver já que as configurações de estilo vão estar espalhados.

**Evitar** ❌

const FormLogin = styled.form`...`;

.send{
	...
}

<FormLogin>
    <button className="send">Enviar</button>
</FormLogin>

**Boa prática** ✔️ 

const Button = styled.button`...`;
const FormLogin = styled.form`...`;

<FormLogin>
    <Button>Enviar</Button>
</FormLogin>

### **Evitar aninhar com seletores**

Você já deve ter visto/feito um componente com vários elementos dentro de outro elemento dentro de outro elemento e assim por diante. O styled-components permite que, para manter toda a estilização dentro do `styled` do componente, que façamos o **aninhamento** dos seletores, isto é, permite criar todos os seletores que vamos estilizar dentro de uma mesma string de style.

No entanto, isso acaba gerando uma grande “tripa” de código, que é difícil de ler, de entender e de fazer manutenção. Um exemplo a ser evitado abaixo.

**Evitar** ❌

export const section = styled.section`
 background-color: #fff;
 display: flex;
 justify-content: center;
 
 &.about {
  background: #aaa;
  padding: 20px;
  .content {
   background-color: #aaa;
   .card {
    .card-header {
     h1 {
      span {
       color: #32b437;
      }
     }
    }
   }
  }
 } 
`

Ao invés de fazer um componente com muitos elementos internos, classes e subclasses, quebre esse componente em diversos outros componentes. Assim você irá construir um código organizado, onde cada componente faz sentido. 

**Boa prática** ✔️ 

export const About = styled(Section)`
  background: #aaa;
  padding: 20px;
`
export const Content = styled.div`
 ...
`
export const Card = styled.div`
 ...
`
export const CardHeader = styled.div`
 ...
`

### **Sobrescrever CSS**

Eventualmente, especialmente quando trabalharmos com bibliotecas de terceiros (o que veremos mais à frente no curso), será necessário alterar um componente que já possui um estilo próprio dentro de alguma página do nosso site.

No geral importamos o componente que queremos alterar e criamos outro a partir dele.

A função styled(componente) nos permite importar todo o estilo de algum elemento e aplicar no componente que estamos criando.

export const About = styled(Section)`
  background: #aaa;
  padding: 20px;
`

Outra possibilidade é importar dentro do componente “pai” o componente “filho” que desejamos alterar. No exemplo abaixo, o nosso componente Button apenas terá color: red; dentro do componente About.

export const About = styled.section`
 ${Button} {
  color: red;
 }
`

### **Bons nomes para componentes estilizados**

É importante escolher bons nomes para os styled-components que nós criamos. Podemos usar por exemplo, nomes que façam referência ao uso daquele determinado componente.

Não é uma boa prática, por exemplo, usar nomes de elementos HTML como nomes de componentes.

**Evitar** ❌

export const P = styled.p`
  background: #aaa;
  padding: 20px;
	font-size: 16px;
`

**Boa prática** ✔️ 

export const PrimaryText = styled.p`
  background: #aaa;
  padding: 20px;
	font-size: 16px;
`

### ****Crie estilos isolados****

Isso significa criar uma pagina de estilo para cada componente e page sempre que possível, dessa forma cada arquivo do seu site vai ter acessar os seus componentes de forma mais direta e a manutenção é facilitado, isto é se você precisar fazer uma alteração nos botões, você pode ir no arquivo de estilos referentes a ele, sem se preocupar em procurar onde estão estariam essas configurações e/ou fazer alterações em diversas partes do site.


### **Crie um estilo global**

As tags html, por definição possuem algumas configurações padrões de estilos (margin, padding, etc), esses estilos muitas vezes nos atrapalham na hora de posicionar os nossos elementos. Para resolver esse problema, nós podemos criar uma regra de estilização que vai “zerar” essas informações.

Em um arquivo separado chamado de GlobalStyled.js, se cria o GlobaStyled, com o createGlobalStyle do styled-components.

import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

No App.js, esse componente é usando da seguinte maneira,
*Lembrando que o local onde ele é adicionado no App é irrelevante, podendo ficar dentro/fora de estados globais, rotas, etc*

<GlobalStyled />


### ****Crie estilos semânticos****

No momento de criar os componentes caímos na tentação de utilizar sempre `div` como tag de agrupamento. Ignorar as tags semânticas nesse momento é um erro, uma vez que o papel das tags não é apenas estruturar documentos para a web, mas também descrever o significado do conteúdo presente nesses documentos. Podemos acessar todas as outras tags como propriedades do styled, como styled.header styled.nav styled.section
styled.article styled.aside styled.footer, dentre outras.

**Evitar** ❌

const Footer = styled.div`...`;

<Footer>
	<p>Aqui está o rodapé do site, construido dentro de uma div.</p>
</Footer>

**Boa prática** ✔️

const Footer = styled.footer`...`;

<Footer>
	<p>Aqui está o rodapé do site, construido dentro da tag semantica para rodapés</p>
</Footer>

*/ 
 
/* Procedimento que tive que fazer porque estava dando erro: 

   1º - rm -rf node_modules  -  Exclui a pasta node-modules
   2º - npm i  - instala o react e uma nova pasta node
   3º - npm run start ou só npm start  - abre a visualização do react em nova guia
   4º - npm install styled-components  - instala o styled-components no template da aula*/