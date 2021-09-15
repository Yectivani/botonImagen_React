import React, { useState } from "react";
import Imagen from "./components/Imagen";

function App() {
  const [imagen, SetImagen] = useState(null);

  const cambiarImagen = (evt) => {
    SetImagen(evt.target.value);
  };
  return (
    <>
      <div class="row justify-content-md-center">
        <div class="col">
          <button type="button" class="btn btn-warning" value="oso" onClick={cambiarImagen}>Oso</button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-warning" value="perro" onClick={cambiarImagen}>Perro</button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-warning" value="aguila" onClick={cambiarImagen}>Aguila</button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-warning" value="leon" onClick={cambiarImagen}>Leon</button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-warning" value="mono" onClick={cambiarImagen}>Mono</button>
        </div>

      </div>

      <hr class="border-5 border-top border-dark"></hr>

      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <Imagen nombreImagen={imagen}></Imagen>
        </div>
      </div>
    </>
  );
}

export default App;
