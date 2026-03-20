import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBrown text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 繝悶Λ繝ｳ繝・+ SNS */}
          <div>
            <h3 className="font-serif text-xl font-bold text-cream mb-3">
              繧ｳ繝ｬ雋ｷ縺・ｼ・            </h3>
            <p className="text-sm leading-relaxed text-cream/60 mb-4">
              蝨ｰ蝓溘↓逵繧九後＞縺・ｂ縺ｮ縲阪ｒ逋ｺ謗倥＠縲・              <br />
              縺昴・萓｡蛟､繧貞ｱ翫￠繧句ｭｦ逕溽匱繝励Ο繧ｸ繧ｧ繧ｯ繝医・            </p>
            {/* SNS 繧｢繧､繧ｳ繝ｳ */}
            <div className="flex gap-3">
              
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* 繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-3 text-sm tracking-wider">
              繝壹・繧ｸ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-terracotta transition-colors"
                >
                  繝医ャ繝・                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-terracotta transition-colors"
                >
                  蟾･謌ｿ繧｢繝励Μ繧ｳ
                </Link>
              </li>
              <li>
                <Link
                  href="/activity"
                  className="hover:text-terracotta transition-colors"
                >
                  豢ｻ蜍募ｱ蜻・                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-terracotta transition-colors"
                >
                  縺雁撫縺・粋繧上○
                </Link>
              </li>
            </ul>
          </div>

          {/* 繝励Ο繧ｸ繧ｧ繧ｯ繝域ュ蝣ｱ */}
          <div>
            <h4 className="font-sans font-semibold text-cream mb-3 text-sm tracking-wider">
              繝励Ο繧ｸ繧ｧ繧ｯ繝域ュ蝣ｱ
            </h4>
            <p className="text-sm text-cream/60 leading-relaxed">
              諷ｶ諛臥ｾｩ蝪ｾ螟ｧ蟄ｦ逋ｺ 蟄ｦ逕溘・繝ｭ繧ｸ繧ｧ繧ｯ繝・              <br />
              蝨ｰ蝓溽肇蜩√・雋ｩ螢ｲ繝ｻ繧ｳ繝ｳ繧ｵ繝ｫ繝・ぅ繝ｳ繧ｰ
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} 繧ｳ繝ｬ雋ｷ縺・ｼ・All rights reserved.
        </div>
      </div>
    </footer>
  );
}