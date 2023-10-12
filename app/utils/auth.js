import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  //.....bu kısım isAdmin i tanıtmak için session token ı

  /* ..... */
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  //ve bu kısım isAdmin i tanıtmak için,orders da müşteriyse kendi eskı sıparişleri
  //değilszde dukkan sahgibi olarak tüm verilwn sipar,işlert i göztermwk için
};

export const getAuthSession = () => getServerSession(authOptions);
