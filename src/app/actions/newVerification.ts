"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { getVerificationTokenbyToken } from "@/lib/user";

export async function verifyToken(token: string) {
  try {
    const tokenObject = await getVerificationTokenbyToken(token);
    if (!tokenObject) return { error: "Token does not exits." };
    const hasExpired = new Date(tokenObject.expire) < new Date();
    if (hasExpired) return { error: "Token has expired!" };
    const existingUser = await getUserByEmail(tokenObject.email);
    if (!existingUser) return { error: "Email does not Exit!" };
    await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        emailVerified: new Date(),
        email: tokenObject.email,
      },
    });
    await db.verificationToken.delete({where: {
      id: tokenObject.id
    }})

    return {seccess: "Email Verified!"}
  } catch (error) {
    return {error: "Don't know what happend "}
  }
}
