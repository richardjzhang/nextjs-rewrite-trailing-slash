import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="/" className="mt-2 underline text-sky-400">
        Go back home
      </Link>
    </div>
  );
}
