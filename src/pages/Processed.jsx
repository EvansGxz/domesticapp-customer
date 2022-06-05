import { useAuth } from "../context/auth-context";
import { createOrderDetail } from "../services/order-details-services";
import { ButtonStandard } from "../styles/buttons";
import { useNavigate } from "react-router-dom";

function Process(){
  const { user } = useAuth();
  const navigate = useNavigate();
  const address =  localStorage.getItem("Address")
  const calendar =  localStorage.getItem("Calendar")
  const CategoryID =  localStorage.getItem("Category")
  const jornada =  localStorage.getItem("Jornada")
  const alimento =  localStorage.getItem("Alimento")
  const employee = localStorage.getItem("Empleado")
  const getOrder = { category_id: CategoryID, employee_id: employee, customer_id: user.id, workday: jornada,
                     address: address, start_date: calendar, supply_food: alimento };
  createOrderDetail(getOrder).then(() =>{
    localStorage.clear();
  });
  
  return (
    <>
       <ButtonStandard
        marginT="2"
        color="azul"
        onClick={() => navigate("/mi_calendario")}
      >
        Ver Calendario
      </ButtonStandard>
      <ButtonStandard
        marginT="2"
        color="azul"
        onClick={() => navigate("/home")}
      >
        Inicio
      </ButtonStandard>
    </>
  )
}

export default Process;