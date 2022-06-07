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
  let calendar =  localStorage.getItem("Calendar");
  calendar = new Date(calendar);
  let year = calendar.getFullYear()+"-"+calendar.getMonth()+"-"+calendar.getDay();
  let time = calendar.getHours()+":"+calendar.getMinutes();
  const CategoryID =  localStorage.getItem("Category");
  const jornada =  localStorage.getItem("Jornada");
  const alimento =  localStorage.getItem("Alimento");
  const employee = localStorage.getItem("Empleado");
  const cuponID = localStorage.getItem("CuponID");
  const cupName =  localStorage.getItem("CuponName");
  const catName = localStorage.getItem('category_name');
  const getOrder = { category_id: CategoryID, employee_id: employee, customer_id: user.id, workday: jornada, discount: cupName,
                     address: address, start_date: year, supply_food: alimento, service_time: time };
                    
  createOrderDetail(getOrder).then(() =>{
    createNotification({name: "Servicio agendado",
    body: `Su servicio de ${catName} ya está en tu calendario!`,
    customer_id: user.id})
    if(cuponID){
      DeleteCuponUser(cuponID);
    }
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