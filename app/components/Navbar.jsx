import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu = true }) => {
  // const session = await getSession();
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Stay Swift Logo"
          className="logo"
          width={300}
          height={300}
        />
      </Link>
      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {session?.user ? (
              <div className="space-x-2">
                <span>Hi, {session?.user?.name}</span>
                <span>|</span>
                <Logout />
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
