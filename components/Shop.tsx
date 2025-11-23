import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Plus } from 'lucide-react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">线上优选商城</h2>
          <p className="mt-2 text-slate-500">为您精选全球优质健康产品</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <select className="bg-white border border-slate-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option>所有分类</option>
            <option>营养补充</option>
            <option>医疗器械</option>
            <option>康复理疗</option>
          </select>
          <select className="bg-white border border-slate-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option>默认排序</option>
            <option>价格从低到高</option>
            <option>销量优先</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col">
              <div className="text-xs text-brand-600 font-semibold mb-1">{product.category}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-2xl font-bold text-red-600">
                  <span className="text-sm font-normal align-top">¥</span>{product.price}
                </span>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="p-2 bg-brand-50 text-brand-600 rounded-full hover:bg-brand-500 hover:text-white transition-colors active:scale-95"
                  title="加入购物车"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};