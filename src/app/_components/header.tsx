import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ChildrenProps } from '@/interface/react-node';

export const Header = ({ children }: ChildrenProps) => {
  return (
    <header className="header">
      <Link href="/client">
        <Image
          src="/logo-destak.ico"
          alt="logo destak barbearia"
          width={50}
          height={50}
        />
      </Link>
      {children}
    </header>
  );
};

export default Header;
