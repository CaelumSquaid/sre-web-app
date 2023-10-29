"use server"

import { FieldValues } from "react-hook-form"
import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (values: FieldValues) => {
    return await resend.emails.send({
        from: "Quotation Request <onboarding@resend.dev>",
        reply_to: values.email,
        to: "questerkreg.dev@gmail.com",
        subject: "Test email",
        text: "test email"
    })
}