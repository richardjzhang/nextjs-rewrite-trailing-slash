import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-8">
      <Link href="/docs">Docs</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/posts">Posts</Link>
    </main>
  );
}
