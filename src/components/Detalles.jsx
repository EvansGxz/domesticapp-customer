import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "../styles/views/Login";
import { ContainerInput, P, StyleSelect } from "../styles/views/StepServices";
import Labores from "./Labores";

export let Alimento;
const Detalles = () => {
  const [food, setFood] = useState(null);
  const [repetir, setRepetir] = useState(null);
  const { user } = useAuth();
  const [form, setForm] = useState(null);
  
  useEffect(() => {
      setForm({
        email: user.email,
        phone: "",
        cc_nit: user.cc_nit,
        document_id: "",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  Alimento= food;

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }
  return (
    <Form>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder={user.email}
        value={user.email}
        disabled="disable"
        onChange={handleFormChange}
      />
      <Input
        id="cc_nit"
        label="Tipo de identificación"
        type="text"
        disabled="disable"
        placeholder={user.cc_nit}
        value={user.cc_nit}
        onChange={handleFormChange}
      />
      <Input
        id="document_id"
        label="No de documento"
        type="text"
        disabled="disable"
        placeholder="xxxxxxxxx"
        value={user.document_id}
        onChange={handleFormChange}
      />
      <Input
        id="phone"
        label="Ceular"
        type="text"
        disabled="disable"
        placeholder="3123485155"
        value={user.phone}
        onChange={handleFormChange}
      />
      <ContainerInput>
        <P color="gris">Suministrar alimento</P>
        <StyleSelect onChange={e=> setFood(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="SI">SI</option>
          <option value="NO">NO</option>
        </StyleSelect>
      </ContainerInput>
      <ContainerInput>
        <P>Especificar labores</P>
        <StyleSelect onChange={(e) => setRepetir(e.target.value)}>
          <option value="ni">--Especificar labores--</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </StyleSelect>
      </ContainerInput>
      {repetir === "si" ? <Labores /> : null}
    </Form>
      
  );
};

export default Detalles;
