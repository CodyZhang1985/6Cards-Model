import React, { useState } from 'react';
import { GEOPOLITICS, CARDS } from '../constants.ts';
import { GlobeIcon } from './Icons.tsx';

export const Geopolitics: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState(GEOPOLITICS[0].region);

  const activeData = GEOPOLITICS.find(g => g.region === activeRegion) || GEOPOLITICS[0];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            牌局现状：谁在 All In？
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          全球只有两家真正 "All in"。谁凑齐了，谁就能反过来制定规则。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {GEOPOLITICS.map((geo) => (
            <button
              key={geo.region}
              onClick={() => setActiveRegion(geo.region)}
              className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group
                ${activeRegion === geo.region 
                  ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/10' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
            >
              <div>
                <h3 className={`text-xl font-bold mb-1 ${activeRegion === geo.region ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                  {geo.region}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  {geo.region === '美国' || geo.region === '中国' ? '第一梯队' : '第二梯队'}
                </p>
              </div>
              {activeRegion === geo.region && (
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <GlobeIcon className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">{activeData.region} 局势分析</h3>
            </div>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed border-l-2 border-slate-700 pl-4">
              {activeData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">核心优势（手牌）</h4>
                <div className="space-y-3">
                  {activeData.strengths.length > 0 ? (
                    activeData.strengths.map(strengthId => {
                      const card = CARDS.find(c => c.id === strengthId);
                      return (
                        <div key={strengthId} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                          <div className={`w-2 h-8 rounded-full ${card?.color || 'bg-gray-500'}`}></div>
                          <span className="text-white font-medium">{card?.title}</span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-4 bg-slate-800/30 rounded-lg text-slate-500 italic text-sm">
                      暂无绝对优势手牌
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">关键短板</h4>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    </div>
                    <div>
                      <h5 className="text-red-400 font-bold text-sm mb-1">瓶颈</h5>
                      <p className="text-red-200/80 text-sm">
                        {activeData.bottleneck}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};