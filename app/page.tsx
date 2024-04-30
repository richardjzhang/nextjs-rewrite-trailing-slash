import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-8">
      <Link href="/docs" className="mt-2 underline text-sky-400">
        Go to docs
      </Link>
      <Link href="/blog" className="mt-2 underline text-sky-400">
        Go to blog
      </Link>
      <Link href="/posts" className="mt-2 underline text-sky-400">
        Go to posts
      </Link>
    </main>
  );
}
