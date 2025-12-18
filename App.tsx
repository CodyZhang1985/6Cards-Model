import React from 'react';
import { CARDS } from './constants';
import { Card } from './components/Card';
import { Geopolitics } from './components/Geopolitics';
import { SpaceRace } from './components/SpaceRace';
import { ChevronDownIcon } from './components/Icons';

export default function App() {
  const scrollToCards = () => {
    const el = document.getElementById('cards-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Hero / Intro Section */}
      <header className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-[fadeIn_1s_ease-out]">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-sm mb-4">
            30秒极速破冰
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            AI 不只是技术 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
              而是一场全球牌局
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AI不是一个技术问题，而是一场“谁牌多、谁牌硬”的全球牌局。真正的玩家必须凑齐 <strong className="text-white">6 张关键牌</strong>。
          </p>

          <button 
            onClick={scrollToCards}
            className="mt-8 group flex items-center gap-2 mx-auto px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105"
          >
            揭秘 6 张关键牌
            <ChevronDownIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* The 6 Cards Model Section */}
      <section id="cards-section" className="py-24 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI 圈的“6张牌”模型</h2>
            <p className="text-slate-400">点击卡片查看详情与 AI 解析</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARDS.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Geopolitics Section */}
      <Geopolitics />

      {/* Space Race Analogy Section */}
      <SpaceRace />

      {/* Footer / Conclusion */}
      <footer className="py-20 px-4 text-center bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Final Thought</p>
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            "AI 的竞争，不是比谁聪明，而是比谁能先凑齐 6 张牌。<br/>
            <span className="text-blue-400">谁凑齐了，谁就能反过来制定规则。</span>"
          </blockquote>
          <p className="text-slate-400 pt-8">
            看懂格局，才能选对站位。
          </p>
          <div className="text-xs text-slate-600 mt-12">
            © 2024 AI 牌局模型可视化
          </div>
        </div>
      </footer>
    </div>
  );
}