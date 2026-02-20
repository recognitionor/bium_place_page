import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 h-16">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-8 h-8 rounded-xl bg-(--color-bium-green) flex items-center justify-center font-bold text-(--color-bium-bg) text-sm">
            B
          </div>
          <span className="font-bold text-xl tracking-tight text-white">비움</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-(--color-bium-text-muted)">
          <Link href="#features" className="hover:text-white transition-colors">주요 기능</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">이용 방법</Link>
          <Link href="#community" className="hover:text-white transition-colors">커뮤니티</Link>
        </nav>

        <a 
          href="#download"
          className="px-5 py-2.5 bg-(--color-bium-bg) border border-white/10 rounded-full text-sm font-semibold hover:border-white/30 transition-all text-white"
        >
          앱 다운로드
        </a>
      </div>
    </header>
  );
}
