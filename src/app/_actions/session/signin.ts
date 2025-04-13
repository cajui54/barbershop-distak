'use server';

import { authSession } from '@/app/_data-access/auth-session';
import { redirect } from 'next/navigation';

export const signInSession = async () => {
  const session = await authSession();

  if (!session) {
    redirect('/access-not-allowed');
  }

  return session;
};
