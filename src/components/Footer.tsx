export default function Footer() {
    return (
        <footer className="bg-[#121417] py-12 border-t border-white/5 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-(--color-bium-green) flex items-center justify-center font-bold text-(--color-bium-bg) text-xs">
                                B
                            </div>
                            <span className="font-bold text-lg tracking-tight text-white">비움</span>
                        </div>
                        <p className="text-sm text-(--color-bium-text-muted) text-center md:text-left">
                            직장인의 감정 해우소<br />
                            오늘도 수고 많으셨습니다.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-(--color-bium-text-muted)">
                        <a href="#" className="hover:text-white transition-colors">이용약관</a>
                        <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                        <a href="#" className="hover:text-white transition-colors">고객센터</a>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-(--color-bium-text-muted)/50">
                    © {new Date().getFullYear()} Bium Community. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
