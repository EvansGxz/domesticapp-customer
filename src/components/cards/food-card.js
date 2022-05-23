import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { colors } from "../../styles/colors";
// import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 180px;
  border-radius: 30px;
  position: relative;
  background-color: ${colors.white};
  align-items: center;
  margin-top: 40px;

  font-weight: ${typography.semibold.lg};
`;

const Image = styled.img`
  border-radius: 50%;
  width: 8.125rem;
  height: 8.125rem;
`;

const NameDish = styled.p`
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.black};
`;


export default function FoodCard({ src, name, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Image src={src} />
      <NameDish>{name}</NameDish>
    </Wrapper>
  );
}

// FoodCard.propTypes = {
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   color: PropTypes.string,
//   Icon: PropTypes.func,
//   inverted: PropTypes.bool,
// };
