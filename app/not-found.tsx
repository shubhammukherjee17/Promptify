import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">404</h1>
        <p className="text-lg text-neutral-600 mb-8">Page not found</p>
        <Link 
          href="/" 
          className="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 