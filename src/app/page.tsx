import TechStackGenerateContainer from "@/components/TechStackGenerateContainer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="p-2 sm:p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
            TechStackGenerator
          </h1>
          <a
            href="https://github.com/okano-t-ww/tech-stack-generator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="hover:text-white hover:bg-black rounded-full"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TechStackGenerateContainer />
      </main>
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 pt-2 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Source:</span>
            <a
              className="ml-2 text-sm text-gray-600 hover:text-gray-900 hover:underline"
              href="https://skillicons.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Skill Icons website"
            >
              Skill Icons
            </a>
          </div>
          <div className="py-4 text-center text-sm text-gray-500">
            © 2024 okano-t-ww(Tatsuya Okano)
          </div>
        </div>
      </footer>
    </div>
  );
}
