import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
`;
const Title = styled.p`
  text-align: center;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const CalendarPicker = () => {
  //const [startDate, setStartDate] = useState([]);
  //const format="MM/DD/YYYY HH:mm:ss"
  const [values, setValues] = useState(
    [1, 2, 3].map((number) =>
      new DateObject().set({
        day: number,
        hour: number,
        minute: number,
        second: number,
      })
    )
    
  );
  const date = [new Date(2022, 6, 1), new Date(2022, 6, 5), new Date(2022, 6, 3)]
  return (
    <Container>
      <Title>Seleccionar fecha en el calendario:</Title>
      <DatePicker
        value={date}
        onChange={setValues}
        format="MM/DD/YYYY HH:mm:ss"
        multiple
        plugins={[
    <TimePicker position="bottom" />,
    <DatePanel markFocused />
  ]}
      />
    </Container>
  );
};

export default CalendarPicker;
