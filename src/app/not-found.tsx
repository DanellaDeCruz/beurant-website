import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl sm:text-6xl">Page not found.</h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/projects" className="btn btn-primary">
          View Projects
        </Link>
        <Link href="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
