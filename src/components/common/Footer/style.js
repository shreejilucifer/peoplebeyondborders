import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 40px;
  background-image: url(/images/footer-bg.png);
  height: 580px;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 425px) {
    height: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Brand = styled.div`
  height: 100px;
  // width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  & > img {
    height: 100%;
  }

  /* Mobile */
  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
`;

export const Routes = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
  /* Tablet */
  width: 95%;
  /* Mobile */
  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--black);

  font-family: "Muli";

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }

  /* Mobile */
  @media (max-width: 425px) {
    font-size: 15px;
    margin-bottom: 20px;
    width: 50%;

    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-bottom: 70px;
  /* Mobile */
  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const Icons = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0 10px;
  & > img {
    height: 100%;
  }
`;

export const Copyright = styled.div`
  margin-bottom: 30px;
  font-family: "Muli";
  text-align: center;
  opacity: 0.8;
  color: var(--black);
`;
