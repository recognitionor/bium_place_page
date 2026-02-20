export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--color-bium-green) opacity-5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="max-w-xl animate-[fade-in-up_0.8s_ease-out_forwards]">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-(--color-bium-green)/30 bg-(--color-bium-green)/10 text-(--color-bium-green) text-sm font-semibold mb-6">
                        직장인을 위한 익명 소통 공간
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                        오늘도<br />
                        <span className="text-(--color-bium-text-muted)">수고하셨습니다.</span>
                    </h1>
                    <p className="text-lg text-(--color-bium-text-muted) leading-relaxed mb-10">
                        직장 생활의 스트레스, 참지 말고 비워내세요.<br />
                        비움은 오직 직장인들만을 위한 따뜻한 모바일 해우소 공간입니다.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#download"
                            className="px-8 py-4 bg-(--color-bium-green) text-(--color-bium-bg) rounded-2xl font-bold text-lg hover:bg-(--color-bium-green-hover) hover:-translate-y-1 transition-all duration-300 shadow-[0_0_30px_rgba(187,234,58,0.3)]"
                        >
                            앱 스토어 다운로드
                        </a>
                        <a
                            href="#features"
                            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            기능 둘러보기
                        </a>
                    </div>
                </div>

                {/* Device Mockup */}
                <div className="relative mx-auto w-full max-w-[320px] md:max-w-[380px] animate-[float_6s_ease-in-out_infinite]">
                    {/* Phone Frame */}
                    <div className="relative rounded-[48px] border-[8px] border-(--color-bium-surface) bg-(--color-bium-bg) aspect-[1/2.1] shadow-2xl overflow-hidden glass-panel">
                        {/* Mock Screen Content */}
                        <div className="absolute inset-0 bg-gradient-to-b from-(--color-bium-surface) to-(--color-bium-bg) p-6">
                            <div className="w-1/3 h-6 bg-white/10 rounded-full mb-8 mt-4"></div>

                            <div className="space-y-4">
                                {/* Mock Card 1 */}
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="w-full h-4 bg-white/20 rounded-full mb-3"></div>
                                    <div className="w-2/3 h-4 bg-white/10 rounded-full mb-6"></div>
                                    <div className="flex gap-2">
                                        <div className="w-16 h-8 bg-(--color-bium-green)/20 rounded-full"></div>
                                        <div className="w-16 h-8 bg-white/5 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Mock Card 2 */}
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="w-3/4 h-4 bg-white/20 rounded-full mb-3"></div>
                                    <div className="w-1/2 h-4 bg-white/10 rounded-full mb-6"></div>
                                    <div className="flex gap-2">
                                        <div className="w-16 h-8 bg-(--color-bium-green)/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Fake bottom nav */}
                            <div className="absolute bottom-6 left-6 right-6 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-around px-4 border border-white/5">
                                <div className="w-6 h-6 rounded-full bg-(--color-bium-green)"></div>
                                <div className="w-6 h-6 rounded-full bg-white/30"></div>
                                <div className="w-6 h-6 rounded-full bg-white/30"></div>
                            </div>
                        </div>

                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-(--color-bium-surface) rounded-b-3xl"></div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -z-10 -right-12 top-20 w-32 h-32 bg-(--color-bium-green) rounded-full blur-[60px] opacity-20"></div>
                </div>

            </div>
        </section>
    );
}
