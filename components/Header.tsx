import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, UserButton, SignedOut } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import { FaBoxOpen } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <FaBoxOpen
            className="text-white w-[45px] h-[45px] p-2"
          />
        </div>
        <h1 className="font-bold text-xl text-[#0160FE] dark:text-white">Stashed</h1>
      </Link>

      <div className="px-5 flex space-x-2 item-center">
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
