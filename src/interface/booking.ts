import { User, BarbershopService } from '@prisma/client';
export interface BookingProps {
  id: string;
  date: Date;
  userId: string;
  user: User;
  services: BarbershopService[];
  createdAt: Date;
  updateAt: Date;
}
