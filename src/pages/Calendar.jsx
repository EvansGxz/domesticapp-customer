import React from "react";
import CalendarPicker from "../components/CalendarPicker";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import { BasicContainer } from "../styles/containers";

const Calendar = () => {
  return(
    <BasicContainer>
      <HeaderViews title="apuntalo en mi agenda" />
      <CalendarPicker />
      <Footer />
    </BasicContainer>
  )
};

export default Calendar;
