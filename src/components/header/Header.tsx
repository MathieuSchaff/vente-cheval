import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">
          Mon Site de Vente de Chevaux
        </Link>
        <NavBar />
      </div>
    </header>
  );
}

function NavBar() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <SignUpButton />
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  );
}

function SignUpButton() {
  return (
    <Link
      href="/signup"
      className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold"
    >
      S'inscrire
    </Link>
  );
}

function LoginButton() {
  return (
    <Link
      href="/login"
      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded font-bold"
    >
      Se connecter
    </Link>
  );
}

export default Header;
