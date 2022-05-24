// import { useEffect } from "react";
// import { useAuth } from "../context/auth-context";

// export default function Home() {
//   /*
//   document.body.style.transition = "background-color 1s ease-out";
//   document.body.style.backgroundColor = "white";
//   var color = "#0BBBEF";
//   */
//   const { categories, getCategories } = useAuth();

//   useEffect(() => {
//     getCategories();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div>
//       {categories ? (
//         <>
//           {categories.map((category) => {
//             return (
//               <p>{category.category_name} </p>
//             );
//           })}
//         </>
//       ) : (
//         <div>
//           <h2>Categories not found</h2>
//         </div>
//       )}
//     </div>
//   );
// }
import React from "react";

const Home = () => {
  return <div>home</div>;
};

export default Home;
