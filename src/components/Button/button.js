import PropTypes from "prop-types";
import styled from "@emotion/styled";
//import { colors, typography } from "../../styles";

function typeStyles() {
  return `
    background-color: red;
    color: white;
    &:hover {
      background-color: red;
      opacity: 0.6;
    }
  `;
}

function sizeStyles() {
  return `
    padding: 0.75rem 1rem;
    line-height: 1em;
  `;
}

const StyledButton = styled.button`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem ${({ rounded }) => (rounded ? "0.75rem" : "1rem")};
  background-color: gray;
  border-radius: 1.875rem;
  color: red;
  border: none;

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

function Button({ children, ...props }) {
  return (
    <StyledButton {...props} onClick={console.log("adasdada")}>
      {children}
    </StyledButton>
  ); 
}

Button.propTypes = {
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  children: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;
