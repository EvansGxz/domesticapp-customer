import { useEffect, useState } from "react";
import { ButtonStandard } from "../../styles/buttons";
import Input, { Form } from "../../styles/views/Login";
import { useAuth } from "../context/auth-context";
import { getUser } from "../services/users-service";

export default function ProfileForm() {
  const { update } = useAuth();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getUser().then((user) => {
      setForm({
        client_type: user.client_type,
        phone: user.phone,
        document_id: user.document_id,
        birth_date: user.birth_date,
        region: user.region,
        cod_refer: user.cod_refer,
        country: user.country,
        document_type: user.document_type,
        document_string: user.document_string,
        full_name: user.full_name,
        cc_nit: user.cc_nit,
      });
    });
  }, []);

  const [errors, setErrors] = useState({
    client_type: "",
    phone: "",
    document_id: "",
    birth_date: "",
    region: "",
    cod_refer: "",
    country: "",
    document_type: "",
    document_string: "",
    full_name: "",
    cc_nit: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    update(form).catch((error) => {
      console.log(error);
      const newErrors = JSON.parse(error.message);
      setErrors({ ...errors, ...newErrors });
    });
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <>
      {form ? (
        <Form onSubmit={handleSubmit}>
          <Input
            id="full_name"
            label="Full Name"
            placeholder="xxxxx"
            type="text"
            value={form.full_name}
            onChange={handleFormChange}
            error={errors.full_name}
          />
          <Input
            id="phone"
            label="Celular"
            placeholder="3493339343"
            type="text"
            value={form.phone}
            onChange={handleFormChange}
            error={errors.phone}
          />
          <Input
            id="document_id"
            label="Document ID"
            placeholder="xxxxxxxxx"
            type="text"
            value={form.document_id}
            onChange={handleFormChange}
            error={errors.document_id}
          />
          <Input
            id="client_type"
            label="Client Type"
            placeholder="N.Peron / Company"
            type="text"
            value={form.client_type}
            onChange={handleFormChange}
            error={errors.client_type}
          />
          <Input
            id="birth_date"
            label="Birth Date"
            placeholder=""
            type="date"
            value={form.birth_date}
            onChange={handleFormChange}
            error={errors.birth_date}
          />

          <Input
            id="region"
            label="Region"
            placeholder="Colombia"
            value={form.region}
            onChange={handleFormChange}
            error={errors.region}
          />

          <Input
            id="cod_refer"
            label="Refer Code"
            placeholder="xxxxx"
            type="text"
            value={form.cod_refer}
            onChange={handleFormChange}
            error={errors.cod_refer}
          />
          <Input
            id="country"
            label="Country"
            placeholder="Colombia"
            type="text"
            value={form.country}
            onChange={handleFormChange}
            error={errors.country}
          />
          <Input
            id="document_type"
            label="Document Type"
            placeholder="xxxxx"
            type="text"
            value={form.document_type}
            onChange={handleFormChange}
            error={errors.document_type}
          />
          <Input
            id="document_string"
            label="Document String"
            placeholder="xxxxx"
            type="text"
            value={form.document_string}
            onChange={handleFormChange}
            error={errors.document_string}
          />
          <Input
            id="cc_nit"
            label="CC/NIT"
            placeholder="xxxxx"
            type="text"
            value={form.cc_nit}
            onChange={handleFormChange}
            error={errors.cc_nit}
          />

          <ButtonStandard color="azul">Update</ButtonStandard>
        </Form>
      ) : (
        <div>Cargando....</div>
      )}
    </>
  );
}
