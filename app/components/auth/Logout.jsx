"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
      className="btn-primary"
      type="button"
    >
      Sign Out
    </button>
  );
}
