function SectionFrontend() {
  const estilo = { padding: "10px", textAlign: " justify" };
  return (
    <section id="frontend">
      <h3 style={estilo}>Frontend</h3>
      <iframe
        src="https://www.youtube.com/embed/U-iJK2QZiZ4?si=G3wxnagV0fMXa2IS"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h4 style={estilo}>O que é um Desenvolvedor Frontend</h4>
      <p style={estilo}>
        O front end é a parte de um site ou aplicativo que os usuários veem e
        interagem. É responsável por criar a interface do usuário (UI), que é a
        maneira como o site ou aplicativo se parece e funciona. Em termos
        simples, o front end é o que os usuários veem e tocam quando usam um
        site ou aplicativo. É responsável por tudo, desde o layout e o design
        até a funcionalidade e a interação. O front end é geralmente
        desenvolvido usando linguagens de programação como HTML, CSS e
        JavaScript. Essas linguagens são usadas para criar a estrutura básica do
        site ou aplicativo, o estilo visual e a funcionalidade.
      </p>
    </section>
  );
}

export default SectionFrontend;
