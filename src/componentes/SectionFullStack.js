function SectionFullStack() {
  const estilo = { padding: "10px", textAlign: " justify" };
  return (
    <section id="fullStack">
      <h3 style={estilo}>Full Stack</h3>
      <iframe
        src="https://www.youtube.com/embed/U-iJK2QZiZ4?si=EV5VYQIrg5qPirdS"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h4 style={estilo}>O que é um Desenvolvedor FullStack</h4>
      <p style={estilo}>
        Um desenvolvedor full stack é um profissional que possui as habilidades
        e conhecimentos necessários para desenvolver um site ou aplicativo
        completo, desde o front end até o back end. Em termos simples, um
        desenvolvedor full stack é um desenvolvedor que pode fazer tudo. Os
        desenvolvedores full stack geralmente são proficientes em linguagens de
        programação front end e back end, bem como em bancos de dados,
        frameworks e bibliotecas. Eles também devem ter um bom entendimento de
        arquitetura de software e design de sistemas.
      </p>
    </section>
  );
}

export default SectionFullStack;
