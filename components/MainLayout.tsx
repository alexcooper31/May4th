import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, ReactElement } from 'react';

import MainContainer, {
  Footer,
  FooterDivider,
  MainContent,
  MainHeader,
} from './styles';

export default function MainLayout({ children }: PropsWithChildren<unknown>): ReactElement {
  return (
    <MainContainer>
      <MainHeader>
        <Link href="/">
          <a>
            <Image src="/icons/star-wars-logo.svg" alt="Star Wars Logo" width={160} height={100} />
          </a>
        </Link>
      </MainHeader>

      <MainContent>
        { children }
      </MainContent>

      <Footer>
        <FooterDivider>
          TM & © Lucasfilm Ltd. All Rights Reserved
        </FooterDivider>
        <FooterDivider style={{ textAlign: 'left' }}>
          <a href="https://www.starwars.com/" target="_blank" rel="noreferrer">Star Wars Official Website</a>
        </FooterDivider>
      </Footer>
    </MainContainer>
  );
}
