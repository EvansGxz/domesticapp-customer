import styled from "styled-components";

export const Info = styled.div`
  width: 90%;
  margin: 1rem auto;
`;

export const Aptitudes = styled.div`
  margin: 1.5rem 0;
  ul {
    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
  }
`;

export const DatosPersonales = styled.div`
  margin: 1.5rem 0;

  p {
    margin: 0.5rem 0;

    a {
      color: black;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const Reseñas = styled.div`
  margin: 1.5rem 0;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin: 1rem 0;
  }
`;
