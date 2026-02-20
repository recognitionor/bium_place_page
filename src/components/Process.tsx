export default function Process() {
    const steps = [
        { num: "01", title: "가입하기", desc: "회사 인증 없이, 누구나 익명으로 쉽고 간편하게 시작." },
        { num: "02", title: "감정 비우기", desc: "오늘의 감정과 고민을 피드에 솔직하게 털어놓기." },
        { num: "03", title: "위로 받기", desc: "나와 같은 상황의 사람들과 안전하게 온기를 나누기." }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-(--color-bium-surface) relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        사용은 <span className="text-(--color-bium-green)">아주 간단</span>합니다
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-[40px] left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-(--color-bium-green)/20 to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex-1 relative z-10 w-full text-center">
                            <div className="w-20 h-20 mx-auto rounded-full bg-(--color-bium-bg) border-2 border-(--color-bium-green) flex items-center justify-center text-2xl font-bold text-(--color-bium-green) mb-6 shadow-[0_0_20px_rgba(187,234,58,0.2)]">
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-(--color-bium-text-muted)">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
