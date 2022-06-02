import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export let fecha
function CalendarPick() {
  const [value, onChange] = useState(new Date());
  

  fecha = value;

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarPick