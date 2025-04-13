import { signOut } from 'next-auth/react';

export const signOutUser = async () => {
  signOut({ callbackUrl: '/' });
};
