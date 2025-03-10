import { v4 as uuid } from "uuid";
import { getVerificationTokenbyEmail } from "./user";
import { db } from "./db";

export async function generateVerificationToken(email: string) {
  const token = uuid();
  const expire = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVerificationTokenbyEmail(email);

  if (existingToken) {
    db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = db.verificationToken.create({
    data: {
      email,
      token,
      expire,
    },
  });

  return verificationToken;
}
