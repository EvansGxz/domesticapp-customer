import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 150px;
  border-radius: 30px;
  position: relative;
  background-color: ${colors.white};
  align-items: center;
  margin-top: 40px;
  Radius: 9px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.15);
  font-weight: ${typography.semibold.lg};
`;



const CuponName = styled.p`
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.black};
`;

const CuponDesc = styled.p`
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3D4451BF;
`;

export default function CuponComponent({ desc, name, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <CuponName>{name}</CuponName>
      <CuponDesc>{desc}</CuponDesc>
    </Wrapper>
  );
}
