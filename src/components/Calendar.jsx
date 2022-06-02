import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export let fecha
function CalendarPick() {
  const [value, onChange] = useState(new Date());
  

 fecha = value;
  console.log(fecha);
  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarPick