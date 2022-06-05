import { useEffect, useState } from "react";
import { Input } from "../../styles/views/Login";
import { useAuth } from "../../context/auth-context";
import { showCupon } from "../../services/cupon-service";
import {
  createCuponUser,
  showCuponUser,
  showCuponUserName,
} from "../../services/cupons-services";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { BasicContainer, SubContainer } from "../../styles/containers";
import { ButtonStandard } from "../../styles/buttons";
import styled from "styled-components";

const UseCupons = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const ContainerCupons = styled.div`
  width: 95%;
  margin: 1.5rem auto;
  box-shadow: 0px 10px 20px -6px black;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const InfoCupon = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  margin: 0.5rem 0;

  span {
    font-weight: bold;
  }
`;

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

  function handleCupon(e) {
    console.log(e.target.id);
    showCuponUserName(e.target.id.toString()).then(setShowCupons);
  }
  console.log(showCupons);
  if (showCupons) {
    showCupons.forEach((c) => {
      localStorage.setItem("Cupon", c.cupon.discount);
      localStorage.setItem("CuponID", c.cupon.id);
      localStorage.setItem("CuponName", c.cupon.name);
    });
  }

  let x;
  if (cupons) {
    x = cupons.filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.cupon.cupon_title === value.cupon.cupon_title)
    );
  }
  return (
    <BasicContainer>
      <HeaderViews title="Cupones" />
      <SubContainer>
        {cupons ? (
          <>
            <UseCupons>
              <Input
                type="text"
                placeholder="Ingresa tu cupón"
                onChange={(e) => eventHandleCupon(e)}
              />
              <ButtonStandard color="azul" onClick={() => eventCompleteCupon()}>
                Submit
              </ButtonStandard>
            </UseCupons>

            <Title>Mis cupones</Title>
            {cupons ? (
              cupons.map((cupon) => {
                console.log(cupon);
                return (
                  <ContainerCupons key={cupon.cupon.id}>
                    <InfoCupon>
                      <h3>{cupon.cupon.cupon_title}</h3>
                      <P>{cupon.cupon.discount + "% de descuento"}</P>
                      <P>
                        Código: <span>{cupon.cupon.name}</span>
                      </P>
                    </InfoCupon>
                    <ButtonStandard color="azul" width="50%">
                      Usar cupón
                    </ButtonStandard>
                  </ContainerCupons>
                );
              })
            ) : (
              <div>no hay datos aún</div>
            )}
          </>
        ) : (
          <div>no hay datos aún</div>
        )}
      </SubContainer>

      <Footer />
    </BasicContainer>
  );
}
