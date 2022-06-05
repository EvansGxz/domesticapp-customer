import { useEffect, useState } from "react";
import { showOrderDetail } from "../services/order-details-services";
import { useAuth } from "../context/auth-context";
import { NewLink } from "../styles/views/Profesions";
import { BasicContainer, SubContainer } from "../styles/containers";
import HeaderViews from "../components/HeaderViews";
import Footer from "../components/Footer";
import styled from "styled-components";
import { azul } from "../styles/colors";

const ContainerUser = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const InfoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${azul} 1px solid;
  margin: 1rem 0;
  padding: 0 1rem;
`;
const Photo = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
`;

const NameUser = styled.p`
  font-size: 2.5rem;
  color: black;
  font-weight: bold;
`;

function Equipo() {
  const [serviceDetail, setServiceDetail] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    showOrderDetail(user.id).then(setServiceDetail);
  }, [user.id]);

  let x;
  if (serviceDetail) {
    x = serviceDetail.filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.employee.full_name === value.employee.full_name)
    );
  }

  return (
    <BasicContainer>
      <HeaderViews title="Mi Equipo" />
      <SubContainer>
        {x ? (
          x.map((service) => (
            <ContainerUser key={service.id}>
              {service.active && (
                <InfoUser>
                  <Photo alt="employee" src={service.employee.image_url} />
                  <NewLink
                    to={`/employee_profile/?id=${service.employee.user_id}`}
                  >
                    <NameUser>{service.employee.full_name}</NameUser>
                  </NewLink>
                </InfoUser>
              )}
            </ContainerUser>
          ))
        ) : (
          <div>no hay datos aún</div>
        )}
      </SubContainer>
      <Footer />
    </BasicContainer>
  );
}

export default Equipo;
