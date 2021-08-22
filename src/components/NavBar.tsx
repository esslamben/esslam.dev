import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex space-x-4">
          <Link href="/">
            <a
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page"
            >
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
