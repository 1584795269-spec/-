import React from 'react';
import { PageView } from '../types';
import { ArrowRight, ShieldCheck, Truck, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-brand-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Health Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              您的私人<span className="text-brand-400">全周期</span><br/>健康管家
            </h1>
            <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-2xl">
              国善达整合全球优质营养资源与传统中医智慧，为您提供从日常保健到专业康复的一站式健康解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate(PageView.SERVICES)}
                className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                预约线下服务 <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate(PageView.SHOP)}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold rounded-lg transition-all"
              >
                浏览线上商城
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">为什么选择国善达？</h2>
            <p className="mt-4 text-slate-500">三大核心优势，守护您和家人的健康</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">严选品质</h3>
              <p className="text-slate-600">所有线上商品均经过严格的质量检测与溯源，确保每一份营养都安全可靠。</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">专业团队</h3>
              <p className="text-slate-600">线下门店拥有资深中医师、理疗师及营养师团队，提供一对一专业服务。</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">服务到家</h3>
              <p className="text-slate-600">除了门店服务，我们还提供陪诊、上门护理等贴心服务，让健康更便捷。</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">有健康疑问？</h2>
            <p className="text-slate-600">我们的AI健康顾问全天候在线，为您解答基础健康问题。</p>
          </div>
          <button 
            onClick={() => onNavigate(PageView.AI_CONSULT)}
            className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg shadow hover:bg-brand-700 transition-colors"
          >
            立即咨询 AI 顾问
          </button>
        </div>
      </div>
    </div>
  );
};