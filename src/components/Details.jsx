import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import Input from "./input";
import { useAuth } from "../context/auth-context";
import GoogleMapp from "../components/google-map"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 258px;
`;

const Container = styled.div`
`

export default function Details() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    console.log(user);
      setForm({
        email: user.email,
        phone: "",
        cc_nit: user.cc_nit,
        document_id: "",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/select_servie4");
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }
  let labores
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder={user.email}
        value={user.email}
        onChange={handleFormChange}
      />
      <Input
        id="cc_nit"
        label="CC/IT"
        type="text"
        placeholder={user.cc_nit}
        value={user.cc_nit}
        onChange={handleFormChange}
      />
      <Input
        id="document_id"
        label="No de documento"
        type="text"
        placeholder="xxxxxxxxx"
        value={user.document_id}
        onChange={handleFormChange}
      />
      <Input
        id="phone"
        label="Ceular"
        type="text"
        placeholder="3123485155"
        value={user.phone}
        onChange={handleFormChange}
      />
      <select id="food" onChange={e=>localStorage.setItem("Sum_Alimento", e.target.value)}>
        <option value="ni">--Suministrar Alimento--</option>
        <option value="si">Si</option>
        <option value="no">No</option>
      </select>
      <select id="labores" value={user.labores} onChange={e=>labores = e.target.value }>
        <option value="ni">--Especificar labores--</option>
        <option value="si">Si</option>
        <option value="no">No</option>
      </select>
      {labores === "si" ? (<h2>Labore</h2>) : ""}
      <Container >
        <GoogleMapp />
      </Container>
      <Button isFullWidth type="primary">
      Siguiente
      </Button>
    </StyledForm>
  );
}
