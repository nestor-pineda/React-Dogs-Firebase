import styled from "styled-components";

export const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  & .info-dog__wrapper {
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    padding: 1em;
    & .info-dog__image {
      width: 80%;
      aspect-ratio: 1/1;
      background: #fff center center/cover no-repeat;
      border-radius: 100px;
      justify-self: center;
    }
    & .info-dog__text {
      & .info-dog__title {
        font-size: ${(props) => props.theme.fontSizes.medium};
      }
      & .info-dog__paragraph1 {
        font-size: ${(props) => props.theme.fontSizes.small};
        line-height: 1.4em;
      }
      & .info-dog__paragraph2 {
        font-size: ${(props) => props.theme.fontSizes.xsmall};
        line-height: 1.2em;
      }
      & .button {
        display: inline-block;
        padding: 0.75rem 1.25rem;
        border-radius: 10rem;
        color: ${(props) => props.theme.colors.color2};
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: 0.15rem;
        transition: all 0.3s;
        border: none;
        outline: none;
        margin-top: 10px;
      }
      & .button:hover {
        color: ${(props) => props.theme.colors.color1};
        background-color: ${(props) => props.theme.colors.color2};
      }
    }
  }
  @media (min-width: 600px) {
    & .info-dog__wrapper {
      max-width: 1200px;
      grid-template-columns: 1fr 1fr;
      gap: 2em;
      & .info-dog__image {
        width: 100%;
      }
    }
  }
`;
