import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.color2};
  padding: 1em;
  box-sizing: border-box;
  & .footer-logo {
    font-size: ${(props) => props.theme.fontSizes.Large};
    color: ${(props) => props.theme.colors.color1};
    margin: 0px;
    text-transform: uppercase;
    text-align: center;
  }

  & .footer-copy {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.colors.color1};
    margin: 10px;
    text-align: center;
  }
`;
