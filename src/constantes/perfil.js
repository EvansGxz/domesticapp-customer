import Auth from "../assets/Auth.svg";
import Cupons from "../assets/Cupons.svg";
import Direccion from "../assets/Direccion.svg";
import Editar from "../assets/Editar.svg";
import Historial from "../assets/Historial.svg";
import News from "../assets/News.svg";
import Notificaciones from "../assets/Notificaciones.svg";
import Politica from "../assets/Politica.svg";
import Terminos from "../assets/Terminos.svg";
import Trabaja from "../assets/Trabaja.svg";
import Support from "../assets/support.svg";

export const IconsPerfil = [
  { id: 1, nombre: "Editar Mi Perfil", img: Editar, ruta: "/editar" },
  {
    id: 2,
    nombre: "Mi Historial de Servicios",
    img: Historial,
    ruta: "/history",
  },
  { id: 3, nombre: "Chat de Soporte", img: Support, ruta: "/" },
  { id: 4, nombre: "Cupones", img: Cupons, ruta: "/cupons", titulo: "Mi Cuenta" },
  {
    id: 5,
    nombre: "Direcciones",
    img: Direccion,
    ruta: "/address",
  },
  {
    id: 6,
    nombre: "Notificaciones",
    img: Notificaciones,
    ruta: "/notification",
  },
  {
    id: 7,
    nombre: "Trabaja con Domesticapp",
    img: Trabaja,
    ruta: "/",
    titulo: "Información"
  },
  {
    id: 8,
    nombre: "Teminos y condiciones",
    img: Terminos,
    ruta: "/terminos",
  },
  {
    id: 9,
    nombre: "Politica de Privacidad",
    img: Politica,
    ruta: "/politicas",
  },
  {
    id: 10,
    nombre: "Autorización y tratamientos",
    img: Auth,
    ruta: "/tratamientos",
  },
  {
    id: 11,
    nombre: "NewsLetter",
    img: News,
    ruta: "/",
    titulo: "Labor Social"
  },
];
