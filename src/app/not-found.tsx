import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-6 py-32">
      <h1 className="font-display text-4xl">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
