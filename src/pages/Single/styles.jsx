import styled from "styled-components";

export const StyledSingle = styled.div`
  width: 100%;
  min-height: calc(100vh - (248px));
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 1em;
  align-content: start;
  padding: 1em;
`;
