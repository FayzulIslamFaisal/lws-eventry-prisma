import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto text-center mt-20">
      <h2 className="text-3xl mb-4 font-bold capitalize ">Not Found</h2>
      <p className="text-2xl pb-4">Could not find requested resource</p>
      <Link
        className=" bg-white px-8 py-1 rounded-2xl text-black border-2 text-2xl"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
