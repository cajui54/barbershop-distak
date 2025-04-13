'use server';
import { authOptions } from '@/_libs/auth';
import { getServerSession } from 'next-auth';
interface authSessionDTO {
  user: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
}
export const authSession = async (): Promise<authSessionDTO | null> => {
  return getServerSession(authOptions);
};
