import React from 'react';
import { RocketIcon, ZapIcon, ShoppingBagIcon, DatabaseIcon } from './Icons';

export const SpaceRace: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-[#0B1120] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-full mb-6">
            <RocketIcon className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI ≈ 新一轮“太空竞赛”
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            但 AI 比太空竞赛更狠。太空技术溢出很慢，而 AI 的技术溢出，是“实时反哺所有行业”。
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            
            {/* Analogy 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="w-full md:w-5/12 text-center md:text-right">
                <h3 className="text-xl font-bold text-slate-200">当年目标</h3>
                <p className="text-slate-500 text-sm mt-2">历史：把人送上月球</p>
              </div>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-purple-500 transition-colors">
                <span className="text-lg">🎯</span>
              </div>
              <div className="w-full md:w-5/12 text-center md:text-left">
                <h3 className="text-xl font-bold text-purple-400">AI 时代目标</h3>
                <p className="text-slate-500 text-sm mt-2">重置全球生产力基线</p>
              </div>
            </div>

             {/* Analogy 2 */}
             <div className="flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="w-full md:w-5/12 text-center md:text-right">
                <h3 className="text-xl font-bold text-slate-200">当年赢家</h3>
                <p className="text-slate-500 text-sm mt-2">赢得了科技与工业霸权</p>
              </div>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-purple-500 transition-colors">
                <span className="text-lg">👑</span>
              </div>
              <div className="w-full md:w-5/12 text-center md:text-left">
                <h3 className="text-xl font-bold text-purple-400">未来赢家</h3>
                <p className="text-slate-500 text-sm mt-2">制定下一个百年的规则</p>
              </div>
            </div>

             {/* Spillover Visual */}
             <div className="mt-20 bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
                <h3 className="text-center text-white font-semibold mb-8">技术溢出效应：重塑所有行业</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: ZapIcon, label: "制造业" },
                    { icon: ShoppingBagIcon, label: "零售/服务" },
                    { icon: DatabaseIcon, label: "金融" },
                    { icon: RocketIcon, label: "商业管理" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors border border-slate-800 hover:border-purple-500/30">
                      <item.icon className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-slate-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};