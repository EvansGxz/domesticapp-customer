import { useEffect, useState } from "react";
import { Input } from "../../styles/views/Login";
import { useAuth } from "../../context/auth-context";
import { showCupon } from "../../services/cupon-service";
import { createCuponUser, showCuponUser, showCuponUserName } from "../../services/cupons-services";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer } from "../../styles/containers";

export default function Cupons() {
  const { user } = useAuth();
  const [cupons, setCupons] = useState(null);
  const [showCupons, setShowCupons] = useState(null);
  const [newCupon, setNewCupon] = useState(null);
  useEffect(() => {
    showCuponUser(user.id).then(setCupons);
  }, [user.id]);

  function eventHandleCupon(e) {
    let cuponRef = e.target.value;
    console.log(cuponRef);
    showCupon(cuponRef).then(setNewCupon);
  }

  function eventCompleteCupon() {
    const getCupon = { customer_id: user.id, cupon_id: newCupon.id };
    createCuponUser(getCupon).then(() => {
      window.location.reload();
    });
  }

  function handleCupon(e){
    console.log(e.target.id);
    showCuponUserName(e.target.id.toString()).then(setShowCupons);
  }
  console.log(showCupons);
  if(showCupons){
    showCupons.forEach((c)=>{
        localStorage.setItem("Cupon", c.cupon.discount)
        localStorage.setItem("CuponID", c.cupon.id)
        localStorage.setItem("CuponName", c.cupon.name)
    })
  }

  let x
  if(cupons){
    
    x = cupons.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.cupon.cupon_title === value.cupon.cupon_title
  ))
)
  }
  return (
    <BasicContainer>
      <HeaderViews title="Cupones" />
      {cupons ? (
        <>
          <div>
            <Input
              type="text"
              placeholder="Ingresa tu cupón"
              onChange={(e) => eventHandleCupon(e)}
            />
          </div>
          <button onClick={() => eventCompleteCupon()}>Submit</button>

          <h2>Mis cupones</h2>
          {x ? (
            x.map((cupon) => {
              return (
                <>
                  <ul>
                    <li>{cupon.cupon.cupon_title}</li>
                    <li>{cupon.cupon.discount + "% de descuento"}</li>
                    <li>{"Código: " + cupon.cupon.name}</li>
                    <button id={cupon.cupon.id} onClick={e => handleCupon(e)}>Canjear</button>
                  </ul>{" "}
                  <p>{}</p>
                </>
              );
            })
          ) : (
            <div>no hay datos aún</div>
          )}
        </>
      ) : (
        <div>no hay datos aún</div>
      )}
      <Footer />
    </BasicContainer>
  );
}
