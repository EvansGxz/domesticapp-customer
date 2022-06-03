import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export let fecha
function CalendarPick() {
  const [value, onChange] = useState(new Date());
  

  fecha = value;
  const date = [new Date(2022, 6, 1), new Date(2022, 6, 5), new Date(2022, 6, 3)]
  return (
    <div>
      <DateTimePicker onChange={onChange} value={date} />
    </div>
  );
}

export default CalendarPick