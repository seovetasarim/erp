import { NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/commerce/repository";
import { hashPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      password?: string;
    };

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim().replace(/\s+/g, "");
    const password = String(body.password || "");

    if (!name || !email || !phone || !password) {
      return NextResponse.json({ error: "Tüm alanlar zorunludur." }, { status: 400 });
    }

    if (!/^05[0-9]{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "Geçerli bir cep telefonu girin (05XXXXXXXXX)." },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Şifre en az 6 karakter olmalı." },
        { status: 400 },
      );
    }

    if (await findUserByEmail(email)) {
      return NextResponse.json(
        { error: "Bu e-posta ile kayıtlı hesap var." },
        { status: 409 },
      );
    }

    const passwordHash = await hashPassword(password);
    const user = await createUser({ email, phone, passwordHash, name });
    await createSession(user);

    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        customerCode: user.customer_code,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kayıt başarısız." },
      { status: 500 },
    );
  }
}
