import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-glow-radial" />
      <div className="container-site relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-7xl font-bold text-neon-400">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
