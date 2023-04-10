import Link from "next/link";
import React from "react";
import { SignIn, SignOut } from "./Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NavMenu from "./NavMenu";

type Props = {};

export default function Header({}: Props) {

const {data: session, status} = useSession()

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1a1d29] z-30">
      <nav className="px-5 flex justify-between container mx-auto items-center">
        <Link href="/">
          <Image
            src="/images/disney-logo.svg"
            alt="logo"
            width={80}
            height={10}
            priority
          />
        </Link>

        {session?.user && <NavMenu />}

        {session?.user ? <SignOut image={session.user.image} /> : <SignIn />}
      </nav>
    </header>
  );
}
