import Link from "next/link";

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <Link href="/" className="mt-2 underline text-sky-400">
        Go back home
      </Link>
    </div>
  );
}
