import Image from "next/image";
import Link from "next/link";
import { FaSun, FaMoon } from 'react-icons/fa'
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
	return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" alt="Ninja List" width={128} height={77} />
      </div>
      <span onClick={handleMode}>
        {!darkTheme ? (
          <FaSun size="24" className="top-navigation-icon" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon" />
        )}
      </span>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Me</Link>
    </nav>
  );
}

export default Navbar;