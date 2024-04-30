import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-8">
      <Link href="/docs" className="mt-2 underline text-sky-400">
        Go to Docs without slash
      </Link>
      <Link href="/blog" className="mt-2 underline text-sky-400">
        Go to Blog without slash
      </Link>
      <Link href="/posts" className="mt-2 underline text-sky-400">
        Go to Posts without slash
      </Link>
      <Link href="/docs/" className="mt-2 underline text-sky-400">
        Go to Docs with slash
      </Link>
      <Link href="/blog/" className="mt-2 underline text-sky-400">
        Go to Blog with slash
      </Link>
      <Link href="/posts/" className="mt-2 underline text-sky-400">
        Go to Posts with slash
      </Link>
    </main>
  );
}
