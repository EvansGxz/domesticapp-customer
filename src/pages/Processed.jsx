import { useAuth } from "../context/auth-context";
import { createOrderDetail } from "../services/order-details-services";
import { ButtonStandard } from "../styles/buttons";
import { useNavigate } from "react-router-dom";
import { createNotification } from "../services/notifications-service";
import { DeleteCuponUser } from "../services/cupons-services";

function Process(){
  const { user } = useAuth();
  const navigate = useNavigate();
  const address =  localStorage.getItem("Address");
  const calendar =  localStorage.getItem("Calendar");
  const CategoryID =  localStorage.getItem("Category");
  const jornada =  localStorage.getItem("Jornada");
  const alimento =  localStorage.getItem("Alimento");
  const employee = localStorage.getItem("Empleado");
  const cuponID = localStorage.getItem("CuponID");
  const cupName =  localStorage.getItem("CuponName")
  const getOrder = { category_id: CategoryID, employee_id: employee, customer_id: user.id, workday: jornada, discount: cupName,
                     address: address, start_date: calendar.toString(), supply_food: alimento, service_time: calendar.split(" ")[1].toString() };
  createOrderDetail(getOrder).then(() =>{
    localStorage.clear();
    createNotification({name: "Servicio agendado",
    body: "Notificacion de prueba",
    customer_id: user.id})
    DeleteCuponUser(cuponID);
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