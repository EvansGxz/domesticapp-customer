import perfilAuto from "../assets/perfilAuto.svg";
import perfilChat from "../assets/perfilChat.svg";
import perfilCupones from "../assets/perfilCupones.svg";
import perfilDirec from "../assets/perfilDirec.svg";
import perfilEditar from "../assets/perfilEditar.svg";
import perfilHistorialS from "../assets/perfilHistorialS.svg";
import perfilNewsLetter from "../assets/perfilNewsLetter.svg";
import perfilNotifi from "../assets/perfilNotifi.svg";
import perfilPoliticaPri from "../assets/perfilPoliticaPri.svg";
import perfilTerminosCond from "../assets/perfilTerminosCond.svg";
import perfilTrabajaDomes from "../assets/perfilTrabajaDomes.svg";

export const CategoryLinks = [
  {
    id: 1,
    title: "",
    links: [
      {
        id: 1,
        icon: perfilEditar,
        nombre: "Editar Mi Perfil",
        ruta: "/editar",
      },
      {
        id: 2,
        icon: perfilHistorialS,
        nombre: "Mi Historial de Servicios",
        ruta: "/history",
      },
      { id: 3, icon: perfilChat, nombre: "Chat de Soporte", ruta: "/sup" },
    ],
  },
  {
    id: 2,
    title: "Mi Cuenta",
    links: [
      { id: 1, icon: perfilCupones, nombre: "Cupones", ruta: "/cupons" },
      {
        id: 2,
        icon: perfilDirec,
        nombre: "Direcciones",
        ruta: "/address",
      },
      {
        id: 3,
        icon: perfilNotifi,
        nombre: "Notificaciones",
        ruta: "/notifications",
      },
    ],
  },
  {
    id: 3,
    title: "Información",
    links: [
      {
        id: 1,
        icon: perfilTrabajaDomes,
        nombre: "Trabaja con Domesticapp",
        ruta: "/",
      },
      {
        id: 2,
        icon: perfilTerminosCond,
        nombre: "Terminos y Condiciones",
        ruta: "/terminos",
      },
      {
        id: 3,
        icon: perfilPoliticaPri,
        nombre: "Politica de Privacidad",
        ruta: "/politicas",
      },
      {
        id: 4,
        icon: perfilAuto,
        nombre: "Autorización y Tratamientos",
        ruta: "/tratamientos",
      },
    ],
  },
  {
    id: 4,
    title: "Labor Social",
    links: [
      {
        id: 1,
        icon: perfilNewsLetter,
        nombre: "NewsLetter",
        ruta: "/",
      },
    ],
  },
];
