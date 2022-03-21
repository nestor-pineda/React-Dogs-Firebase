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
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.color1};
    margin: 0px;
  }
  & .footer-copy {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.color1};
    margin: 10px;
  }
`;
