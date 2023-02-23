import React, { useState } from "react";
import "./Formulary.css"; // Importamos el archivo CSS para estilizar el formulario
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [detalles, setDetalles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <label>
        Documento:
        <input
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
        />
      </label>
      <label>
        Ciudad:
        <input
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
      </label>
      <label>
        Detalles:
        <input
          type="text"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
        />
      </label>
      <div>
        <button type="submit" onClick={handleUploadFotos}>
          UploadFotos
        </button>
        <button type="submit" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </form>
  );
}


export default Formulario;
