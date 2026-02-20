export default function Features() {
    const features = [
        {
            title: "익명 커뮤니티",
            desc: "누구인지 모르는 가장 안전한 곳에서, 직장 생활의 스트레스를 솔직하게 털어놓으세요.",
            icon: "💬"
        },
        {
            title: "감정 기록과 비움",
            desc: "오늘 하루 쌓인 부정적인 감정들을 글로 적어내며 스스로를 위로하고 비워내는 시간.",
            icon: "📝"
        },
        {
            title: "공감과 위로",
            desc: "나와 비슷한 고민을 가진 동료 직장인들과 익명으로 따뜻한 위로와 조언을 주고받으세요.",
            icon: "🤝"
        }
    ];

    return (
        <section id="features" className="py-24 bg-(--color-bium-bg) border-t border-white/5 relative">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16 animate-[fade-in-up_0.8s_ease-out_forwards]">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        왜 <span className="text-(--color-bium-green)">비움</span>이 필요한가요?
                    </h2>
                    <p className="text-xl text-(--color-bium-text-muted) max-w-2xl mx-auto">
                        업무 스트레스, 인간관계의 피로함. 혼자 앓지 말고 비움에서 건강하게 해소하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-3xl bg-(--color-bium-surface) border border-white/5 hover:border-(--color-bium-green)/50 transition-colors duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-(--color-bium-bg) flex items-center justify-center text-3xl mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-(--color-bium-text-muted) leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
