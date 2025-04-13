'use server';

const admins = ['cajui54@gmail.com'];
export const isAdmin = async (email: string): Promise<Boolean> => {
  return admins.includes(email);
};
