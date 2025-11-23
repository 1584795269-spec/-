import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Services } from './components/Services';
import { AIConsultant } from './components/AIConsultant';
import { PageView, Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    alert(`已将 ${product.name} 加入购物车！`);
  };

  const renderContent = () => {
    switch (currentPage) {
      case PageView.HOME:
        return <Home onNavigate={handleNavigate} />;
      case PageView.SHOP:
        return <Shop onAddToCart={addToCart} />;
      case PageView.SERVICES:
        return <Services />;
      case PageView.AI_CONSULT:
        return <AIConsultant />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout 
      activePage={currentPage} 
      onNavigate={handleNavigate} 
      cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;