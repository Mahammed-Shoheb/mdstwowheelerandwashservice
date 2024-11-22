import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[calc(100vh-3.5rem)] grid place-items-center">
      <div className="text-center">
        <h2 className="text-3xl sm:text-6xl capitalize mb-8">
          oops! page not found
        </h2>
        <Link
          href={"/"}
          className="text-white bg-blue-500 px-4 py-2 rounded-md capitalize font-semibold mx-auto inline-block"
        >
          return home
        </Link>
      </div>
    </main>
  );
}
