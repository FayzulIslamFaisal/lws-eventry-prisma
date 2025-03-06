import Link from "next/link";

const SignInOut = () => {
  return (
    <div>
      <Link
        className="bg-gray-800 px-3 py-1 text-white capitalize font-semibold "
        href="/login"
      >
        Login
      </Link>
    </div>
  );
};

export default SignInOut;
