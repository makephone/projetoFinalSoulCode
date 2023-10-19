import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from "mdb-react-ui-kit";
import tnt from "../assets/tnt.jpeg";
import serMais from "../assets/serMais.jpeg";
import eletroMidia from "../assets/eletroMidia.png";
export default function App() {
  const estilo = { color: "black", marginTop: "10px" };
  return (
    <div>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#caced1" }}
      >
        <h3 style={estilo}>Patrocinadores</h3>

        <div className="patrocinadores">
          <img id="p1" src={tnt} />

          <img id="p2" src={eletroMidia} />

          <img id="p3" src={serMais} />
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright&nbsp;:
          <a className="text-white" href="https://mdbootstrap.com/">
            &nbsp; Sandro,&nbsp;Jerson,&nbsp;Romulo e Tiago
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
