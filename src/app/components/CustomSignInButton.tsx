"use client";
import { signIn } from "next-auth/react";

export default function CustomSignInButton() {
  return (
    <button onClick={() => signIn()}>
      <svg>...</svg>{" "}
      Log in with GitHub
    </button>
  );
}