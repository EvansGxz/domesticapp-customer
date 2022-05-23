import styled from "@emotion/styled";

const SelectUsers = styled.select`
  width: 200px;
  height: 45px;
  background-color: #0096c2;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  margin-bottom: 30px;
  padding: 0 50px;
`;

export default function DropDownLanguages() {
  return (
    <SelectUsers name="select language" id="select_language">
      <option value="1" defaultValue="selected">
        Colombia
      </option>
      <option value="2">Canada</option>
      <option value="2">España</option>
    </SelectUsers>
  );
}
