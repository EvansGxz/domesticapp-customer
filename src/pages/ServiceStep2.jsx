import { useNavigate } from "react-router-dom";
import HeaderViews from "../components/HeaderViews";
import { BasicContainer } from "../styles/containers";
import { ButtonStandard } from "../styles/buttons";
import Footer from "../components/Footer";
import { fecha } from "../components/Calendar";
import { cart } from "./ServiceStep1";
import CalendarPicker from "../components/CalendarPicker";


const ServiceStep2 = () => {
  const navigate = useNavigate();
  //const [value, onChange] = useState('10:00');
  cart.splice(2, 1);
  function setDate(){
    cart.push(fecha)
    navigate("/select_service3")
  }

  return (
    <BasicContainer>
      <HeaderViews title="apuntalo en mi agenda" />
      <CalendarPicker />
      <ButtonStandard
        color="azul"
        marginB="5"
        onClick={() => setDate()}
      >
        Continuar
      </ButtonStandard>
      <Footer />
    </BasicContainer>
  );
};

export default ServiceStep2;
