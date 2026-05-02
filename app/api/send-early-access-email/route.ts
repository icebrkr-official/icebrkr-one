import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  name: string;
  email: string;
};

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const host = requireEnv("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT || "587");
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const from = process.env.SMTP_FROM || user;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://icebrkr.one";
    const logoUrl = `${siteUrl}/maillogo.webp`;

    if (!body?.name || !body?.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const signupDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    await transporter.sendMail({
      from,
      to: body.email,
      subject: "Welcome to icebrkr Early Access!",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
        <body style="margin:0;padding:0;background-color:#F9FAFB;font-family:'Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;padding:32px 16px">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

                  <!-- HEADER with Logo -->
                  <tr>
                    <td style="background-color:#0F1923;border-radius:16px 16px 0 0;padding:28px 32px;text-align:center">
                      <img src="${logoUrl}" alt="icebrkr" width="160" style="display:block;margin:0 auto;max-width:160px;height:auto" />
                    </td>
                  </tr>

                  <!-- Accent bar (brand tricolor) -->
                  <tr>
                    <td style="font-size:0;line-height:0;height:4px;padding:0">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                        <tr>
                          <td style="width:33.33%;background-color:#E8302A;height:4px"></td>
                          <td style="width:33.33%;background-color:#F5A623;height:4px"></td>
                          <td style="width:33.34%;background-color:#27AE60;height:4px"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- BODY -->
                  <tr>
                    <td style="background-color:#FFFFFF;padding:36px 32px 28px;border-left:1px solid #E5E7EB;border-right:1px solid #E5E7EB">
                      <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#E8302A">
                        Early Access
                      </p>
                      <h1 style="margin:0 0 8px;font-size:26px;line-height:1.2;color:#0F1923;font-weight:800">
                        You're on the list, ${body.name}!
                      </h1>
                      <p style="margin:0 0 24px;font-size:14px;color:#6B7280">
                        Signed up on ${signupDate}
                      </p>

                      <div style="background-color:#F0F4F8;border-radius:12px;padding:20px 24px;margin:0 0 24px">
                        <p style="margin:0;font-size:15px;line-height:1.7;color:#1C2B3A">
                          Thank you for signing up for early access to <strong style="color:#0F1923">icebrkr</strong>.
                          We're building something special - a smarter way to connect, communicate and collaborate.
                          You'll be among the first to experience it.
                        </p>
                      </div>

                      <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:#6B7280">
                        We'll reach out as soon as early access is available. In the meantime, feel free to explore what we're building.
                      </p>

                      <!-- CTA Button -->
                      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto">
                        <tr>
                          <td style="border-radius:8px;background-color:#0F1923">
                            <a href="${siteUrl}" target="_blank" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;letter-spacing:.3px">
                              Visit icebrkr &rarr;
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="background-color:#1C2B3A;border-radius:0 0 16px 16px;padding:24px 32px;text-align:center">
                      <p style="margin:0 0 6px;font-size:13px;color:#8aa0ad">
                        &copy; ${new Date().getFullYear()} icebrkr &mdash; Break the ice, build the bond.
                      </p>
                      <p style="margin:0;font-size:12px;color:#5e7682">
                        You received this email because you signed up for early access at
                        <a href="${siteUrl}" style="color:#F5A623;text-decoration:none">icebrkr.one</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to send early access email.",
      },
      { status: 500 }
    );
  }
}
