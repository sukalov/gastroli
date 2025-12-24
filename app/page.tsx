import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            гастроли по москве
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            проекты оли, феди, матвея и друзей
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="relative max-w-4xl w-full">
          <Image
            src="/images/sovremenniki.jpeg"
            alt="sovremenniki"
            width={1024}
            height={768}
            className="w-full h-auto rounded-lg border border-gray-200 shadow-lg"
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="container mx-auto px-4">
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}