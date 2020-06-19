import styled from "styled-components";

export const Container = styled.div`
  background: #ECF0F1;
  border-bottom: 2px solid ${'#000000'};
  width: 100%;
  height: 75px;
  align-items: center;

  header {
    display: flex;
    align-items: center;
  }

  img {
    margin-left: 5px;
    width: 75px;
    height: 75px;
    align-items: center;
  }
  h1 {
    color: #9B59B6;

    small{
      color: #1ABC9C;
    }
  }

  @media (max-width: 1120px) {
    padding: 0px;
  }
`;