import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: "RESEND_API_KEY not set" },
                { status: 500 }
            )
        }

        const resend = new Resend(process.env.RESEND_API_KEY)

        const { name, email, message } = await request.json()

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "achmad.whildan@gmail.com",
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${message}</p>
        </div>
      `,
        })

        if (result.error) {
            return NextResponse.json(
                { error: result.error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        )
    }
}
