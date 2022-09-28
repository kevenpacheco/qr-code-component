import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 286px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 15px;
  background-color: var(--color-white);
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--color-dark-blue);
  font-size: 20px;
`;

export const Description = styled.p`
  text-align: center;
  color: var(--color-grayish-blue);
`;
