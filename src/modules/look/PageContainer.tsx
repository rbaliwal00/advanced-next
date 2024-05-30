import React, { ReactNode } from 'react';
import { Header } from '@components/header';


interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="pt-16 pb-16">{children}</div>
      <Footer />
    </div>
  );
};



const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 h-16">
      {/* Your footer content here */}
    </footer>
  );
};

export default PageContainer;
