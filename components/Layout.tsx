import React, { useState } from 'react';
import { PageView } from '../types';
import { ShoppingCart, Menu, X, HeartPulse, MapPin, Store, MessageSquareHeart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  cartCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate, cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: PageView.HOME, label: '首页', icon: <HeartPulse className="w-4 h-4 mr-1" /> },
    { id: PageView.SHOP, label: '线上优选', icon: <ShoppingCart className="w-4 h-4 mr-1" /> },
    { id: PageView.SERVICES, label: '门店服务', icon: <Store className="w-4 h-4 mr-1" /> },
    { id: PageView.AI_CONSULT, label: 'AI健康顾问', icon: <MessageSquareHeart className="w-4 h-4 mr-1" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onNavigate(PageView.HOME)}
            >
              <div className="bg-brand-600 text-white p-1.5 rounded-lg mr-2">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-900">国善达<span className="text-brand-600">健康</span></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activePage === item.id
                      ? 'text-brand-600 bg-brand-50 rounded-md'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative cursor-pointer hover:text-brand-600 transition-colors">
                <ShoppingCart className="w-6 h-6 text-slate-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-slate-600 hover:text-brand-600 focus:outline-none"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activePage === item.id
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon}
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-white text-lg font-bold flex items-center">
                <HeartPulse className="w-5 h-5 mr-2 text-brand-500" /> 国善达健康
              </h3>
              <p className="text-sm text-slate-400">
                致力于为中国家庭提供全生命周期的健康管理服务，让健康触手可及。
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate(PageView.SHOP)} className="hover:text-brand-400">线上商城</button></li>
                <li><button onClick={() => onNavigate(PageView.SERVICES)} className="hover:text-brand-400">门店预约</button></li>
                <li><button onClick={() => onNavigate(PageView.AI_CONSULT)} className="hover:text-brand-400">健康百科</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 北京市朝阳区国善大厦A座</li>
                <li className="flex items-center"><Store className="w-4 h-4 mr-2" /> 全国门店 50+</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">
                  <span className="font-bold">微信</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">
                   <span className="font-bold">微博</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
            &copy; 2024 国善达健康管理有限公司 版权所有
          </div>
        </div>
      </footer>
    </div>
  );
};