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
  padding: 30px 0;
`;

const MainContent = styled.div`
  max-width: 1280px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100vw;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  user-select: none;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const FooterDivider = styled.div`
  text-align: right;
  width: 45%;

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
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
