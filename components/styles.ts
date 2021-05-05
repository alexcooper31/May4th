import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 60px 0 50px;

  @media (max-width: 768px) {
    padding: 30px 0 20px;
    /* margin: 0px; */
  }
`;

const MainContent = styled.div`
  max-width: 1280px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100vw;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  user-select: none;
  color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
  }
`;

const FooterDivider = styled.div`
  text-align: right;
  width: 45%;

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center !important;
    padding: 10px 0;
  }
`;

export {
  MainContainer,
  MainHeader,
  MainContent,
  Footer,
  FooterDivider,
};

// Next won't build the app with a file without a default export on "pages" folder root.
export default MainContainer;
