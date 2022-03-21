import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  /* max-width: 300px; */
  aspect-ratio: 2/1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.color1};
  padding: 0.5em;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${props.theme.colors.color3}`};
  border-radius: 5px;
  & .image {
    width: 50%;
    aspect-ratio: 1/1;
    background-color: beige;
    border-radius: 100px;
  }
  & .info {
    width: 50%;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 20px;
    & .info__name {
      font-size: ${(props) => props.theme.fontSizes.small};
      font-weight: ${(props) => props.theme.fontSizes.bold};
      color: ${(props) => props.theme.colors.color2};
      margin: 0px;
    }
    & .info__text {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      font-weight: ${(props) => props.theme.fontSizes.thin};
      color: ${(props) => props.theme.colors.color2};
      margin: 0px;
    }
    & .info__text--link {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      font-weight: ${(props) => props.theme.fontSizes.thin};
      color: ${(props) => props.theme.colors.color2};
      text-decoration: none;
      margin: 10px 0 0 0;
    }
  }
`;
