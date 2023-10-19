function SectionBackend() {
  const estilo = { padding: "10px", textAlign: " justify" };
  return (
    <section id="backend">
      <h3 style={estilo}>Backend</h3>
      <iframe
        src="https://www.youtube.com/embed/WrLiumS7VPM?si=6gbuovSaWXWeMBqD"
        title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             ></iframe>
      <h4 style={estilo}>O que é um Desenvolvedor Backend</h4>
      <p style={estilo}>
        O back end é a parte de um site ou aplicativo que os usuários não veem.
        É responsável por tudo o que acontece nos bastidores, incluindo o
        processamento de dados, o armazenamento de informações e a conexão com o
        banco de dados. Em termos simples, o back end é o que faz um site ou
        aplicativo funcionar. É responsável por tudo, desde o armazenamento de
        dados até o processamento de solicitações do usuário. O back end é
        geralmente desenvolvido usando linguagens de programação como Python,
        Java, Ruby e PHP. Essas linguagens são usadas para criar o código que
        executa as tarefas do back end.
      </p>
    </section>
  );
}

export default SectionBackend;
