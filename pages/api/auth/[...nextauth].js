import NextAuth from "next-auth"
import Adapters from "next-auth/adapters"
import Providers from "next-auth/providers"
import prisma from "../../../lib/prisma";

export default NextAuth({
  adapter: Adapters.Prisma.Adapter({ prisma }),
  providers: [
    Providers.Email({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      })
  ]
})