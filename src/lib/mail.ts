import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Your Email",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background-color: #f9f9f9; text-align: center; border: 1px solid #ddd;">
        <h2 style="color: #333;">Welcome to Our Platform!</h2>
        <p style="font-size: 16px; color: #555;">
          Click the button below to verify your email and complete your registration.
        </p>
        <a href="${confirmLink}" 
           style="display: inline-block; padding: 12px 20px; font-size: 16px; font-weight: bold; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-top: 15px;">
          Verify Email
        </a>
        <p style="font-size: 14px; color: #777; margin-top: 20px;">
          If you didn't request this, please ignore this email.
        </p>
        <hr style="border: none; height: 1px; background-color: #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">
          &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    `,
  });
}
