import { useAuth } from '../../context/auth-context'; 

export default function ProfileCustomer(){
    const { user } = useAuth();
    return(
        <>
          <div>
            <div>
              <img alt="user cover" src={user.cover}/>
            </div>
            <div >
            <p>{user.full_name}</p></div>
          </div>
            <div id="Profile">
  
              <h1>Editar mi perfil</h1>
              <h1>Soporte</h1>
              <h1>Historial</h1>
            
            </div>
            <div id="Account">
              <h1>Cupones</h1>
              <h1>Directions</h1>
              <h1>Notifications</h1>
            
            </div>
            <div id="Info">
              <h1>Trabaja con Domesticapp</h1>
              <h1>Terminos y Condiciones</h1>
              <h1>Politica de Privacidad</h1>
              <h1>Autorización y Tratamendo de Datos</h1>
            </div>
            <div id="Labor">
            <h1>NewsLetter</h1>
            </div>
            
        </>
    );

};
