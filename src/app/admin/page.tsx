import React from 'react';
import ContainerBooking from './_components/container-booking';

const AdminPage = () => {
  return (
    <main className="p-1">
      <p>Gerenciar Agendamentos:</p>
      <ContainerBooking />
    </main>
  );
};

export default AdminPage;
