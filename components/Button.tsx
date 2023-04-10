"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export function SignOut({ image }: any) {
  return (
    <div className="flex flex-col items-center gap-y-1">
        <Image src={image} alt="google acount" width={30} height={30} priority className="rounded-full" />
        <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

export function SignIn() {
  return <button className="px-5 py-2 border border-neutral-200 rounded-md font-semibold transition-all hover:bg-neutral-200 hover:text-[#1a1d29]" onClick={() => signIn("google")}>LOGIN</button>;
}
