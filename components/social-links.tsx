"use client";

import Link from "next/link";
import * as Icons from "@phosphor-icons/react";

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-8">
      <Link
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
      >
        <Icons.TelegramLogo size={24} />
        <span className="sr-only">telegram</span>
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
      >
        <Icons.InstagramLogo size={24} />
        <span className="sr-only">instagram</span>
      </Link>
    </div>
  );
}