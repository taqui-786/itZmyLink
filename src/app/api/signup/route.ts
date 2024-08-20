import SupaAuthVerifyEmail from "@/emails";
import supabaseAdmin from "@/lib/supabase/admin";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	// rate limit

	const data = await request.json();
	const supabase = supabaseAdmin();

	const res = await supabase.auth.admin.generateLink({
		type: "signup",
		email: data.email,
		password: data.password,
	});

	if (res.data.properties?.email_otp) {
		// resend email
		const resendRes = await resend.emails.send({
			from: `Acme <onboarding@${process.env.RESEND_DOMAIN}>`,
			to: [data.email],
			subject: "Verify Email",
			react: SupaAuthVerifyEmail({
				verificationCode: res.data.properties?.email_otp,
			}),
		});
		return Response.json(resendRes);
	} else {
		return Response.json({ data: null, error: res.error });
	}
}
