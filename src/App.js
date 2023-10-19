import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Spash from "./componentes/Spash";
import Footer from "./componentes/Footer";
import VLibras from "@djpfs/react-vlibras";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return (
    <div>
      <VLibras forceOnload={true} />
      {isLoading ? (
        <Spash />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}
