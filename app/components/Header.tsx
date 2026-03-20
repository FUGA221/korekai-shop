"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warmBrown/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-serif font-bold text-darkBrown tracking-wide group-hover:text-terracotta transition-colors">
            コレ買い！
          </span>
          <span className="hidden sm:inline text-xs text-warmBrown/70 font-sans border-l border-warmBrown/20 pl-3">
            地域の「いいもの」セレクトショップ
          </span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">トップ</NavLink>
          <NavLink href="/products">工房アプリコ</NavLink>
          <NavLink href="/contact">お問い合わせ</NavLink>
        </nav>

        {/* ハンバーガー */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <span
            className={`w-6 h-0.5 bg-darkBrown transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-darkBrown transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-darkBrown transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-warmBrown/10 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              トップ
            </MobileNavLink>
            <MobileNavLink href="/products" onClick={() => setIsOpen(false)}>
              工房アプリコ
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
              お問い合わせ
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-sans font-medium text-darkBrown/80 hover:text-terracotta transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-sans text-darkBrown/80 hover:text-terracotta transition-colors py-1"
    >
      {children}
    </Link>
  );
}
