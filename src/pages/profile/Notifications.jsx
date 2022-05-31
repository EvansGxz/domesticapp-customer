import { useEffect, useState } from "react";
import { ContactUs } from "../../components/Emails";
import { useAuth } from "../../context/auth-context";
import { showNotification } from "../../services/notifications-service";

export default function Notification() {
  const { user } = useAuth();
  const [notification, setNotification] = useState(null);
  useEffect(() => {
    showNotification(user.id).then(setNotification);
  }, [user.id]);
  
  return notification ? (
    <>
      
      {notification ? (
        notification.map((not) => {
          console.log(not);
          return (
            <>

              <ul>
                <li>{not.name}</li>
                <li>{not.body}</li>
              </ul> 
              <ContactUs />
            </>
          );
        })
      ) : (
        <div>no hay datos aún</div>
      )}
    </>
  ) : (
    <div>no hay datos aún</div>
  );
}
