import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto text-center mt-20">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className=" bg-red-600 px-4 py-1 rounded-2xl text-white border-2"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
