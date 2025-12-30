import { Button } from "@/components/ui/button";
import { ExternalLink, Send, Users, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="YiHe Logo"
              className="w-10 h-10 rounded-full gold-glow"
            />
            <span className="text-2xl font-bold text-accent">YiHe</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-accent transition">
              关于
            </a>
            <a href="#tokenomics" className="hover:text-accent transition">
              代币信息
            </a>
            <a href="#fair-launch" className="hover:text-accent transition">
              公平发射
            </a>
            <a href="#community" className="hover:text-accent transition">
              社区
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/hero-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="float-up">
              <h1 className="text-accent mb-4">YiHe</h1>
              <p className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                基于 BNB Smart Chain 的 Meme 代币
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                YiHe —— 社区驱动的公平发射 Meme 代币。无预售，无私募，完全由社区推动。加入我们，成为 YiHe 生态的一部分。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://t.me/Yiheportal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-gold w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    加入 Telegram
                  </Button>
                </a>
                <a
                  href="https://x.com/YiHeonBsc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    关注 Twitter
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src="/images/logo.png"
                  alt="YiHe Logo"
                  className="w-full h-full rounded-full gold-glow object-cover border-4 border-accent/30"
                />
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-center text-accent mb-12">关于 YiHe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Meme 代币</h3>
              <p className="text-muted-foreground">
                YiHe 是一个真正的 Meme 代币，由社区驱动，充满乐趣和能量。我们相信加密货币应该是有趣的、包容的，并由社区推动。
              </p>
            </div>
            <div className="cyber-card">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">社区驱动</h3>
              <p className="text-muted-foreground">
                YiHe 的成功完全取决于社区的支持和参与。没有团队预留，没有特殊权限。每个人都是平等的。
              </p>
            </div>
            <div className="cyber-card">
              <ExternalLink className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">公平发射</h3>
              <p className="text-muted-foreground">
                YiHe 通过 four.meme 平台进行公平发射。无预售，无私募，无团队优势。所有人都有相同的机会。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container">
          <h2 className="text-center text-accent mb-12">代币信息</h2>
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg font-semibold">代币名称</span>
                  <span className="text-accent font-bold">YiHe</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg font-semibold">代币符号</span>
                  <span className="text-accent font-bold">YiHe</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg font-semibold">区块链网络</span>
                  <span className="text-accent font-bold">BNB Smart Chain</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg font-semibold">发行方式</span>
                  <span className="text-accent font-bold">公平发射</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">发射平台</span>
                  <span className="text-accent font-bold">four.meme</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground text-center">
                  YiHe 致力于透明度和社区优先的原则。所有代币信息都是公开的，没有隐藏的条款或特殊权限。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Launch Section */}
      <section id="fair-launch" className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-center text-accent mb-12">公平发射</h2>
          <div className="max-w-3xl mx-auto">
            <div className="cyber-card">
              <h3 className="text-2xl font-bold mb-6 text-accent">
                什么是公平发射？
              </h3>
              <div className="space-y-6 text-foreground">
                <p>
                  YiHe 通过 four.meme 平台进行公平发射。这意味着：
                </p>
                <ul className="space-y-4 ml-6">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>
                      <strong>无预售：</strong>
                      没有提前购买机会。所有人同时开始。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>
                      <strong>无私募：</strong>
                      没有机构投资者获得特殊待遇。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>
                      <strong>无团队优势：</strong>
                      开发团队没有特殊的代币分配。
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>
                      <strong>平等机会：</strong>
                      每个人都有相同的机会购买和参与。
                    </span>
                  </li>
                </ul>
                <p className="pt-4">
                  这就是我们所说的真正的公平发射。YiHe 相信所有参与者都应该被平等对待，没有例外。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container">
          <h2 className="text-center text-accent mb-12">加入社区</h2>
          <div
            className="relative rounded-lg overflow-hidden mb-12"
            style={{
              backgroundImage: "url('/images/community-section.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "400px",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
                  加入 YiHe 社区
                </h3>
                <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
                  YiHe 的力量来自于社区。加入我们的 Telegram 和 Twitter，与志同道合的人交流，分享想法，一起成长。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="http://t.me/Yiheportal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-gold">
                      <Send className="w-4 h-4 mr-2" />
                      Telegram 社区
                    </Button>
                  </a>
                  <a
                    href="https://x.com/YiHeonBsc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-gold">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Twitter 官方
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-4 text-accent">Telegram</h3>
              <p className="text-muted-foreground mb-6">
                加入我们的 Telegram 社区，与其他 YiHe 持有者交流，获取最新信息，参与讨论。
              </p>
              <a
                href="http://t.me/Yiheportal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold w-full">
                  <Send className="w-4 h-4 mr-2" />
                  加入 Telegram
                </Button>
              </a>
            </div>
            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-4 text-accent">Twitter</h3>
              <p className="text-muted-foreground mb-6">
                关注我们的 Twitter，获取最新的项目更新、公告和社区活动信息。
              </p>
              <a
                href="https://x.com/YiHeonBsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  关注 Twitter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/50 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="YiHe Logo"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl font-bold text-accent">YiHe</span>
            </div>
            <div className="text-center md:text-right text-muted-foreground">
              <p>YiHe - 社区驱动的公平发射 Meme 代币</p>
              <p className="text-sm mt-2">
                © 2024 YiHe. 所有权利保留。
              </p>
            </div>
          </div>
          <div className="gold-divider" />
          <div className="text-center text-muted-foreground text-sm">
            <p>
              YiHe 是一个 Meme 代币项目。投资加密货币存在风险。请自行研究并谨慎投资。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
