import chat from "../assets/chatSoporte.svg";
import ayuda from "../assets/ayuda.svg";
import duda from "../assets/duda.svg";
import notificacion from "../assets/notificacion.svg";
import daño from "../assets/daño.svg";

export const IconsAyuda = [
  { id: 1, nombre: "Chat de Soporte", img: chat, ruta: "/sup" },
  {
    id: 2,
    nombre: "¿Necesitas ayuda con tu último servicio?",
    img: ayuda,
    ruta: "/sup",
  },
  { id: 3, nombre: "¿Tienes alguna duda?", img: duda, ruta: "/faq" },
  { id: 4, nombre: "Notificaciones", img: notificacion, ruta: "/notifications" },
  {
    id: 5,
    nombre: "Daño en el Servicio o Accidentes Laborales",
    img: daño,
    ruta: "/accidentes",
  },
];
