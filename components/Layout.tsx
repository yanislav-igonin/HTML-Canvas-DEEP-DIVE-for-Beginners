import Head from 'next/head';
import { TopBar } from './TopBar';

type Props = { children: React.ReactNode };

export const Layout = ({ children }: Props) => {
  return <div>
    <Head>
      <title>HTML Canvas DEEP DIVE for Beginners</title>
    </Head>
    
    <TopBar />
    {children}
  </div>;
};
