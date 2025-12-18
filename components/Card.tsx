import React, { useState } from 'react';
import { CardData } from '../types';
import { ZapIcon, CpuIcon, NetworkIcon, DatabaseIcon, UsersIcon, ShoppingBagIcon, SparklesIcon, InfoIcon } from './Icons';
import { analyzeCardWithGemini } from '../services/geminiService';

interface CardProps {
  data: CardData;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleGeminiAnalysis = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip
    if (analysis) return; // Already analyzed

    setIsAnalyzing(true);
    const result = await analyzeCardWithGemini(data);
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  const getIcon = () => {
    switch(data.iconName) {
      case 'zap': return <ZapIcon className="w-12 h-12 text-white" />;
      case 'cpu': return <CpuIcon className="w-12 h-12 text-white" />;
      case 'network': return <NetworkIcon className="w-12 h-12 text-white" />;
      case 'database': return <DatabaseIcon className="w-12 h-12 text-white" />;
      case 'users': return <UsersIcon className="w-12 h-12 text-white" />;
      case 'shopping-bag': return <ShoppingBagIcon className="w-12 h-12 text-white" />;
      default: return <InfoIcon className="w-12 h-12 text-white" />;
    }
  };

  return (
    <div 
      className="group h-[420px] w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front of Card */}
        <div className={`absolute h-full w-full rounded-2xl shadow-xl ${data.color} p-1 backface-hidden flex flex-col`}>
          <div className="h-full w-full border-2 border-white/20 rounded-xl bg-gradient-to-br from-black/10 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
              {getIcon()}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{data.title}</h3>
            <p className="text-white/90 text-lg font-medium">{data.subtitle}</p>
            <div className="mt-8 text-white/70 text-sm font-mono animate-pulse">
              点击翻转
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className={`absolute h-full w-full rounded-2xl shadow-xl bg-slate-800 border border-slate-700 p-6 backface-hidden rotate-y-180 flex flex-col overflow-y-auto`}>
           <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
             <div className={`p-2 rounded-lg ${data.color}`}>
               {getIcon()}
             </div>
             <h3 className="text-xl font-bold text-white">{data.title}</h3>
           </div>
           
           <p className="text-slate-300 mb-4 text-sm leading-relaxed tracking-wide">
             {data.description}
           </p>

           <ul className="space-y-2 mb-6">
             {data.bulletPoints.map((point, idx) => (
               <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                 <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${data.color.replace('bg-', 'text-bg-')}`} />
                 <span>{point}</span>
               </li>
             ))}
           </ul>

           <div className={`mt-auto p-3 rounded-lg bg-slate-900/50 border-l-4 ${data.color.replace('bg-', 'border-')} mb-4`}>
             <p className="text-xs text-slate-300 italic">" {data.insight} "</p>
           </div>

           {/* Gemini Interaction Area */}
           <div className="mt-2 pt-2 border-t border-slate-700">
             {!analysis ? (
               <button 
                 onClick={handleGeminiAnalysis}
                 className="w-full py-2 px-3 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold text-white transition-colors"
               >
                 {isAnalyzing ? (
                   <>正在思考...</>
                 ) : (
                   <>
                     <SparklesIcon className="w-3 h-3" />
                     AI 深度解析：为什么这张牌很关键？
                   </>
                 )}
               </button>
             ) : (
               <div className="bg-slate-900 rounded-lg p-3 text-xs text-slate-300 border border-slate-700">
                 <div className="flex items-center gap-2 mb-1 text-emerald-400 font-bold">
                   <SparklesIcon className="w-3 h-3" />
                   <span>AI 洞察</span>
                 </div>
                 {analysis}
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};