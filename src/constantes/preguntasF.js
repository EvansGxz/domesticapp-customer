import servicio from "../assets/servicios.svg";
import cuenta from "../assets/cuenta.svg";
import empleados from "../assets/empleados.svg";
import pagos from "../assets/pagos.svg";
import covid from "../assets/covid.svg";
import dotacion from "../assets/dotacion.svg";

export const Preguntas = [
  { id: 1, nombre: "Mis servicios", img: servicio, ruta: "/preguntas" },
  { id: 2, nombre: "Mi cuenta", img: cuenta, ruta: "/preguntas" },
  { id: 3, nombre: "Empleados", img: empleados, ruta: "/preguntas" },
  { id: 4, nombre: "Pagos", img: pagos, ruta: "/preguntas" },
  { id: 5, nombre: "COVID-19", img: covid, ruta: "/preguntas" },
  { id: 6, nombre: "Mi Dotación", img: dotacion, ruta: "/preguntas" },
];

export const CategoriasPreguntas = [
  {
    id: 1,
    title: "PQR Servicios",
    legend: "1.1 FAQS RELACIONADO CON MIS SERVICIOS",
    preguntas: [
      {
        id: 1,
        pregunta:
          "1.1.1 ¿Cómo puedo programar/cancelar o reagendar un servicio en Domesticapp?",
        respuesta:
          "Descarga el aplicativo móvil de Domesticapp para Colombia, España y Canadá y accede al manejo de tus servicios en tiempo real. Conoce a tus asistentes, califícalos y goza de múltiples beneficios.",
      },
      {
        id: 2,
        pregunta:
          "1.1.2 ¿Qué garantías tengo cuando contrato un servicio con Domesticapp?",
        respuesta:
          "TODOS tus servicios están protegidos por daños a terceros con el fin de evitar cualquier altercado, además, todos nuestros asistentes cuentan con certificaciones especializadas para sus labores.",
      },
    ],
  },
];
