// import { PrismaClient as PrismaClient1 } from '../prisma/first-client';
// import { PrismaClient as PrismaClient2 } from '../prisma/second-client';
import { PrismaClient } from '../prisma/first-client';

// declare let global: { prisma1: PrismaClient1; prisma2: PrismaClient2 };

// // PrismaClient is attached to the `global` object in development to prevent
// // exhausting your database connection limit.
// //
// // Learn more:
// // https://pris.ly/d/help/next-js-best-practices

// let prisma1: PrismaClient1;
// let prisma2: PrismaClient2;

// if (process.env.NODE_ENV === 'production') {
//   prisma1 = new PrismaClient1();
//   prisma2 = new PrismaClient2();
// } else {
//   if (!global.prisma1) {
//     global.prisma1 = new PrismaClient1();
//   }
//   prisma1 = global.prisma1;

//   if (!global.prisma2) {
//     global.prisma2 = new PrismaClient2();
//   }
//   prisma2 = global.prisma2;
// }

// export default { prisma1, prisma2 };

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
