import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
  faKey,
  faAddressCard,
  faCity,
  faMapMarker,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

function Inscricao() {
  const afastamento = { padding: "10px" };

  const [status, setStatus] = useState(true);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const enviar = (e) => {
    e.preventDefault();
    // Validação do nome verificando a presença minima de um caracter
    const nomeValido = nome.length !== 0;
    // Validação do email usando uma expressão regular simples
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // Validação da senha: pelo menos 8 caracteres e pelo menos 1 caractere especial
    const senhaValida = senha.length >= 8 && /[!@#$%^&*]/.test(senha);

    const enderecoValido = endereco.length !== 0;
    const cidadeValido = cidade.length !== 0;
    const EstadoValido = estado.length !== 0;

    let mensagem = "";

    if (!nomeValido) {
      mensagem += "Por favor, insira um nome válido.";
    } else {
      if (!emailValido) {
        mensagem += "Por favor, insira um email válido.";
      } else {
        if (!senhaValida) {
          mensagem +=
            "A senha deve ter pelo menos 8 caracteres e conter pelo menos um caractere especial.";
        } else {
          if (!enderecoValido) {
            mensagem += "Por favor, insira um endereço Válido";
          } else {
            if (!cidadeValido) {
              mensagem += "Por favor, insira um nome de cidade válido";
            } else {
              if (!EstadoValido) {
                mensagem += "Por favor, insira um nome de Estado válido";
              } else {
                setNome("");
                setEmail("");
                setCidade("");
                setSenha("");
                setEndereco("");
                setCidade("");
                setEstado("");
                setStatus(false);
                setTimeout(() => {
                  setStatus(true);
                }, 10000);
              }
            }
          }
        }
      }
    }

    if (mensagem !== "") {
      alert(mensagem);
    }
  };

  return (
    <div>
      {status ? (
        <div id="inscrição">
          <h3 style={afastamento}>Inscrevar-se</h3>
          <Form onSubmit={enviar} style={afastamento}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <FontAwesomeIcon icon={faUserCircle} size={"sm"} />
                  &nbsp;Nome
                </Form.Label>
                <Form.Control
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Digite Seu Nome"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <FontAwesomeIcon icon={faEnvelope} size={"sm"} />
                  &nbsp;Email
                </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite Seu Email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <FontAwesomeIcon icon={faKey} size={"sm"} />
                &nbsp;
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite Sua Senha"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <FontAwesomeIcon icon={faAddressCard} size={"sm"} />
                &nbsp; Endereço
              </Form.Label>
              <Form.Control
                placeholder="Digite Seu Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <FontAwesomeIcon icon={faCity} size={"sm"} />
                &nbsp;
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  placeholder="Digite Sua Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <FontAwesomeIcon icon={faMapMarker} size={"sm"} />
                &nbsp;
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="ac">Acré</option>
                  <option value="ap">Amapá</option>
                  <option value="am">Amazonas</option>
                  <option value="ba">Bahia</option>
                  <option value="ce">Ceará</option>
                  <option value="df">Distrito Federal</option>
                  <option value="es">Espirito Santo</option>
                  <option value="go">Goiás</option>
                  <option value="ma">Maranhão</option>
                  <option value="mt">Mato Grosso</option>
                  <option value="ms">Mato Grosso do Sul</option>
                  <option value="mg">Minas Gerais</option>
                  <option value="pa">Pará</option>
                  <option value="pb">Paraiba</option>
                  <option value="pe">Pernambuco</option>
                  <option value="pi">Piauí</option>
                  <option value="rj">Rio de Janeiro</option>
                  <option value="rn">Rio Grande do Norte</option>
                  <option value="rs">Rio Grande do Sul</option>
                  <option value="ro">Rondônia</option>
                  <option value="sc">Santa Catarina</option>
                  <option value="sp">São Paulo</option>
                  <option value="se">Sergipe</option>
                  <option value="to">Tocantins</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} size={"lg"} />
              &nbsp; ENVIAR
            </Button>
          </Form>
        </div>
      ) : (
        <div id="formularioEnviado">
          <h3>Formulário Enviado</h3>
          <Alert key={"primary"} variant={"primary"}>
            <h3>Cadastro Realizado Verifique Seu Email !</h3>
          </Alert>
        </div>
      )}
    </div>
  );
}

export default Inscricao;
