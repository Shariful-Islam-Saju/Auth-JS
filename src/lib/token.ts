import { v4 as uuid } from "uuid";
import { getVerificationTokenbyEmail } from "./user";
import { db } from "./db";

export async function generateVerificationToken(email: string) {
  const token = uuid();
  const expire = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVerificationTokenbyEmail(email);
  console.log(existingToken);
  if (existingToken) {
    await db.verificationToken.deleteMany({
      where: {
        email,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expire,
    },
  });

  return verificationToken;
}
