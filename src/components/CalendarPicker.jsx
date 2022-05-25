import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  text-align: center;
  font-weight: bold;
`;

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState([]);
  const format = "MM/DD/YYYY";
  return (
    <Container>
      <Title>Seleccionar fecha en el calendario:</Title>
      <Calendar
        value={startDate}
        onChange={setStartDate}
        format={format}
        plugins={[<DatePanel />]}
        multiple
        sort
      />
    </Container>
  );
};

export default CalendarPicker;
