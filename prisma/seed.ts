const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const services = [
      {
        name: 'Corte Simples',
        description: 'Corte padrão e pezinho',
        price: 25,
        imageUrl:
          'https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png',
      },
      {
        name: 'Corte Degrade',
        description: 'Corte com sombreado na navalha',
        price: 30,
        imageUrl:
          'https://tbumv1vygb.ufs.sh/f/ixZcKFfru6K5icNYkHfru6K5RNjH1Jv9iz4OxhXlwFU2BM8I',
      },
      {
        name: 'Pezinho',
        description: 'Acabamento nas laterais',
        price: 15,
        imageUrl:
          'https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png',
      },
      {
        name: 'Barba',
        description: 'Acabamento na Barba',
        price: 25.99,
        imageUrl:
          'https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png',
      },
      {
        name: 'Luzes',
        description: 'Atigimento na ponta do cabelo',
        price: 15,
        imageUrl:
          'https://tbumv1vygb.ufs.sh/f/ixZcKFfru6K5zAGIQxlg3LY08H4TNo5FXDpZEjibwSta9h2O',
      },

      {
        name: 'Alizamento',
        description: 'Relaxamento do Cabelo',
        price: 25.99,
        imageUrl:
          'https://tbumv1vygb.ufs.sh/f/ixZcKFfru6K5TZZvxRJd1VhQe0d6gNFc8PUiy9Ot3wHZDb4z',
      },
      {
        name: 'Platinado',
        description: 'Cabelo platinado',
        price: 70.0,
        imageUrl:
          'https://tbumv1vygb.ufs.sh/f/ixZcKFfru6K5zJfZndlg3LY08H4TNo5FXDpZEjibwSta9h2O',
      },
    ];

    for (const service of services) {
      await prisma.barbershopService.create({
        data: {
          name: service.name,
          description: service.description,
          imageUrl: service.imageUrl,
          price: service.price,
        },
      });
      await prisma.$disconnect();
    }
  } catch (error) {
    console.log(`
            Ocorreu um erro no seedDatabase
            ${error}
            `);
  }
}
seedDatabase();
