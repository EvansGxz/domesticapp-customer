import { ReactComponent as Home } from "../Icons/home_icon.svg";
import { ReactComponent as AddService } from "../Icons/add_service_icon.svg";
import { ReactComponent as Calendar } from "../Icons/calendar_icon.svg";
import { ReactComponent as SupportIcon } from "../Icons/support_icon.svg";
import { ReactComponent as Profile } from "../Icons/profile_icon.svg";
import { useNavigate } from "react-router-dom";

export default function MenuCustomer(props) {
  const navigate = useNavigate();
  return (
    <div style={sticky}>
      <nav style={style}>
        <Home onClick={() => navigate("/home")} style={{ fill: props.home }} />
        <AddService
          onClick={() => navigate("/addService")}
          style={{ fill: props.addService }}
        />
        <Calendar
          onClick={() => navigate("/calendar")}
          style={{ fill: props.calendar }}
        />
        <SupportIcon
          onClick={() => navigate("/support")}
          style={{ fill: props.support }}
        />
        <Profile
          onClick={() => navigate("/profile")}
          style={{ fill: props.profile }}
        />
      </nav>
    </div>
  );
}

let style = {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto auto",
  backgroundColor: "white",
  padding: "11px",
  justifyItems: "center",
  boxShadow: "0px 8px 54px rgba(0, 0, 0, 0.25)",
};

let sticky = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};
