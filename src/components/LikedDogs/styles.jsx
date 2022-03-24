import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
`;

export const StyledLiked = styled.div`
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 1em;
  align-content: start;
  padding: 1em;
`;
