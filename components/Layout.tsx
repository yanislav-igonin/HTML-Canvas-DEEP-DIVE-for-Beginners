import { TopBar } from './TopBar';

type Props = { children: React.ReactNode };

export const Layout = ({ children }: Props) => {
  return <div>
    <TopBar />
    {children}
  </div>;
};
