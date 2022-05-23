import styled from "@emotion/styled";
import { useState } from "react";

const SelectUsers = styled.select`
  width: 250px;
  height: 45px;
  background-color: #0096c2;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  margin: 30px 0;
  padding: 0 65px;
`;

export default function DropDownUsers() {
  const [userType] = useState();

  return (
    <SelectUsers
      value={userType}
      onChange={(e) => localStorage.setItem("User_Type", e.target.value)}
    >
      <option value="1" defaultValue="selected">
        Continue as
      </option>

      <option value="2">Employee</option>
      <option value="3">Customer</option>
    </SelectUsers>
  );
}
