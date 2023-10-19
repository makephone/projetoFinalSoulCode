import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import gabriel from "../assets/gabriel.jpeg";
import renan from "../assets/renan.jpeg";
import adriano from "../assets/adriano.jpeg";
import {
  faClock,
  faUsers,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
function AllCollapseExample() {
  const estilo = { padding: "10px" };

  return (
    <Accordion id="saibaMais" style={{ zIndex: "-1!important" }}>
      <h3 style={estilo}>Saiba Mais</h3>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <FontAwesomeIcon icon={faGraduationCap} size={"1x"} />
          &nbsp;&nbsp;Pré-Requisitos
        </Accordion.Header>
        <Accordion.Body>
          <u> Pré-requisitos para cursos de desenvolvimento web Front-end</u>{" "}
          Conhecimento básico de HTML, CSS e JavaScript Interesse em design e
          usabilidade Capacidade de aprender novos conceitos rapidamente:
          <br />
          <b>Explicação:</b> Os pré-requisitos para os cursos de desenvolvimento
          web são projetados para garantir que os alunos tenham as habilidades e
          conhecimentos necessários para ter sucesso no curso. Para o curso de
          front-end, os alunos devem ter um conhecimento básico de HTML, CSS e
          JavaScript. Esses são os principais fundamentos do desenvolvimento web
          front-end. Os alunos também devem ter um interesse em design e
          usabilidade, pois esses são aspectos importantes do desenvolvimento
          web front-end.
          <br />
          <hr />
          <u>Pré-requisitos para cursos de desenvolvimento Backend</u>
          <br />
          Conhecimento básico de lógica de programação Conhecimento de uma
          linguagem de programação back-end, como Python, Java ou PHP Capacidade
          de resolver problemas lógicos
          <br />
          <b>Explicação:</b> Para o curso de back-end, os alunos devem ter um
          conhecimento básico de lógica de programação. Isso é essencial para
          entender como os programas funcionam. Os alunos também devem ter
          conhecimento de uma linguagem de programação back-end, como Python,
          Java ou PHP. Essas são as principais linguagens de programação usadas
          para desenvolvimento web back-end.
          <hr />
          <u>Pré-requisitos para cursos de desenvolvimento FullStack</u>
          <br />
          Capacidade de trabalhar de forma independente e em equipe Capacidade
          de aprender rapidamente novas tecnologias
          <br />
          <b>Explicação: </b>
          Para o curso de full-stack, os alunos devem ter conhecimento dos
          pré-requisitos para front-end e back-end. Isso significa que eles
          devem ter um conhecimento básico de HTML, CSS, JavaScript, lógica de
          programação e uma linguagem de programação back-end. Além disso, os
          alunos devem ter a capacidade de trabalhar de forma independente e em
          equipe, bem como a capacidade de aprender rapidamente novas
          tecnologias.
          <hr />
          <b>Observações :</b> É importante ressaltar que esses pré-requisitos
          são apenas uma recomendação. Os alunos que não atendem a todos os
          pré-requisitos ainda podem ser bem-sucedidos no curso. No entanto,
          eles podem precisar trabalhar mais duro para acompanhar os alunos que
          já possuem os pré-requisitos. Os alunos que não atendem a todos os
          pré-requisitos podem considerar fazer cursos online ou tutoriais para
          aprender os conceitos necessários. Eles também podem considerar
          trabalhar em projetos pessoais para desenvolver suas habilidades.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <FontAwesomeIcon icon={faClock} size={"1x"} />
          &nbsp;&nbsp;Tempo de Duração{" "}
        </Accordion.Header>
        <Accordion.Body>
          O curso tem duração de 6 meses, divididos em 3 módulos de 2 meses
          cada. Cada módulo inclui uma avaliação teórica e uma prática. O curso
          tem aulas semanais de 2 horas, com avaliações teóricas ao final de
          cada módulo e avaliações práticas ao final do curso.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <FontAwesomeIcon icon={faUsers} size={"1x"} />
          &nbsp;&nbsp;Quais os Professores
        </Accordion.Header>
        <Accordion.Body>
          <div id="professores">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={renan} />
              <Card.Body>
                <Card.Title>Renan Mussato</Card.Title>
                <Card.Text>
                  Atualmente atuo com desenvolvimento e suporte à aplicações,
                  faço análise de requisitos, modelagem de processos de negócio,
                  realizando atendimento de casos de primeiro e segundo nível.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={gabriel} />
              <Card.Body>
                <Card.Title>Gabriel Braga</Card.Title>
                <Card.Text>
                  Programador com experiência prática em linguagens como Java ,
                  JavaScript , Spring, Angular e React. Além disso familiarizado
                  com banco de dado relacionail e técnicas de desenvolvimento
                  ágil.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={adriano} />
              <Card.Body>
                <Card.Title>Adriano Gomes</Card.Title>
                <Card.Text>
                  Experiente DBA sênior com histórico comprovado de trabalho no
                  setor de tecnologia da informação e serviços. Hábil em banco
                  de dados Oracle, análise de sistemas e gerenciamento de
                  serviços de TI.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
