import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.color1};
  padding: 1em;
  box-sizing: border-box;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.color3}`};
  & .link {
    text-decoration: none;

    & .header-logo {
      font-size: ${(props) => props.theme.fontSizes.Large};
      color: ${(props) => props.theme.colors.color2};
      text-align: center;
      margin: 0px;
      text-transform: uppercase;
    }
  }
`;
