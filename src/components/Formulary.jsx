import React, { useState } from "react";
import "./Formulary.css"; // Importamos el archivo CSS para estilizar el formulario

function Formulary() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dni, setDni] = useState("");
  const [city, setCity] = useState("");
  const [surface, setSurface] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [description, setDescription] = useState("");
  const [nameproperty, setNameproperty] = useState("");
  const [onsale, setOnsale] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar el formulario
  };

  return (
    <div className="content">
      <form className="formulary" onSubmit={handleSubmit}>
        <h3 className="titulo">TU ANUNCIO</h3>
        <>
          <label>
            <input
              className="input"
              type="text"
              value={name}
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={lastname}
              placeholder="Apellido"
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={dni}
              placeholder="Documento"
              onChange={(e) => setDni(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={city}
              placeholder="Ciudad"
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={surface}
              placeholder="superficie"
              onChange={(e) => setSurface(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={bedroom}
              placeholder="habitaciones"
              onChange={(e) => setBedroom(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={bathroom}
              placeholder="baños"
              onChange={(e) => setBathroom(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={description}
              placeholder="descripción"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={nameproperty}
              placeholder="nombre de la propiedad"
              onChange={(e) => setNameproperty(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={onsale}
              placeholder="en venta"
              onChange={(e) => setOnsale(e.target.value)}
            />
          </label>
          <label>
            <input
              className="input"
              type="text"
              value={price}
              placeholder="precio"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </>

        <div className="containerbutons">
          <button
            className="botoncontainer"
            type="submit"
            onClick={() => console.log("Hiciste clic en UploadFotos")}
          >
            UploadFotos
          </button>
          <button
            className="botoncontainer"
            type="submit"
            onClick={() => console.log("Hiciste clic en Upload")}
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulary;
