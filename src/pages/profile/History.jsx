import { useEffect, useState } from "react";
import styled from "styled-components";
import { showOrderDetail } from "../../services/order-details-services";
import { useAuth } from "../../context/auth-context";
import HeaderViews from "../../components/HeaderViews";
import Footer from "../../components/Footer";
import { azul } from "../../styles/colors";
import { Link } from "react-router-dom";

function History() {
  const [serviceDetail, setServiceDetail] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    showOrderDetail(user.id).then(setServiceDetail);
  }, [user.id]);

  const Title = styled.h3`
    color: #3d4451;
    margin: 3rem auto;
  `;
  const Text = styled.p`
    color: #3d4451;
    margin: 3rem auto;
  `;
  const Photo = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    margin-bottom: 1.25rem;
  `;

  const Container = styled.div`
    max-width: 90%;
    margin: 0 auto 17% auto;
  `;

  const Info = styled.span`
    margin-left: 1rem;
    color: #3d4451;
    font-size: 16px;
  `;

  const ContainerText = styled.div`
    display: ruby;
    margin-left: 10px;
    padding-top: 20px;
  `;
  const Active = styled.div`
    align-items: center;
    width: 50%;
    text-align: right;
    padding-top: 13%;
  `;
  const NewLink = styled(Link)`
    text-decoration: none;
    display: flex;
    width: 80%;
  `;

  const ContainerIcon = styled.div`
    display: flex;
    border-bottom: 1px solid ${azul};
    margin: 1.5rem 0;
    padding-bottom: 1.5rem;
  `;
  let x;
  if (serviceDetail) {
    x = serviceDetail.filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.employee.full_name === value.employee.full_name)
    );
  }

  return (
    <>
      <HeaderViews title="Tus Ultimos Servicios" />
      <Container>
        <Text>
          Tus últimos Servicios se mostrarán aquí, así como tu Servicio Activo.
        </Text>
        <div>
          <Title>Servicios en Curso</Title>
          {x ? (
            x.map((service) => {
              return (
                <>
                  {service.active ? (
                    <>
                      <ContainerIcon>
                        <NewLink
                          to={`/employee_profile/?id=${service.employee.user_id}`}
                        >
                          <Photo
                            alt="employee"
                            src={service.employee.image_url}
                          />
                          <ContainerText>
                            <Info>{service.employee.full_name}</Info>
                          </ContainerText>
                        </NewLink>
                        <Active>Activo</Active>
                      </ContainerIcon>
                    </>
                  ) : (
                    ""
                  )}
                </>
              );
            })
          ) : (
            <div>no hay datos aún</div>
          )}
          <br />
          <Title>Ultimos Servicios</Title>
          {x ? (
            x.map((service) => {
              console.log(service);
              return (
                <>
                  {!service.active ? (
                    <>
                      <ContainerIcon>
                        <NewLink
                          to={`/employee_profile/?id=${service.employee.user_id}`}
                        >
                          <Photo
                            alt="employee"
                            src={service.employee.image_url}
                          />
                          <ContainerText>
                            <Info>{service.employee.full_name}</Info>
                          </ContainerText>
                        </NewLink>
                        <Active>Activo</Active>
                      </ContainerIcon>
                    </>
                  ) : (
                    ""
                  )}
                </>
              );
            })
          ) : (
            <div>no hay datos aún</div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default History;
