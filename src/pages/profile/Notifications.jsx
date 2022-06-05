import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { showNotification } from "../../services/notifications-service";
import { SubContainer } from "../../styles/containers";
import noti from "../../assets/notifi.svg";
import trash from "../../assets/trash.svg";
import styled from "styled-components";

const ContainerNoti = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 1rem auto;
  border-radius: 1rem;
  background-color: #f0fcff;
  padding: 1rem;
`;

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin: 0.5rem 0;
  }
`;
const Borrar = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  span {
    color: gray;
  }
`;

export default function Notification() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(null);
  useEffect(() => {
    showNotification(user.id).then(setNotifications);
  }, [user.id]);

  return notifications ? (
    <SubContainer>
      {notifications.map((notification) => (
        <ContainerNoti key={notification.id}>
          <img src={noti} alt="icon-notification" />
          <Info>
            <h3>{notification.name}</h3>
            <p>{notification.body}</p>
            <Borrar>
              <span>{notification.updated_at.substr(0, 10)}</span>
              <img src={trash} alt="icon-trash" />
            </Borrar>
          </Info>
        </ContainerNoti>
      ))}
    </SubContainer>
  ) : (
    <div>No hay ninguna notificación por el momento.</div>
  );
}
