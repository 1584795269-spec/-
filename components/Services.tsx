import React, { useState } from 'react';
import { Service, Store } from '../types';
import { SERVICES, STORES } from '../constants';
import { MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    storeId: STORES[0].id
  });

  const handleBookClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setBookingStatus('idle');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setBookingStatus('success');
      // Reset form after 2 seconds
      setTimeout(() => {
        handleCloseModal();
        setFormData({ name: '', phone: '', date: '', storeId: STORES[0].id });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">线下门店服务</h2>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          专业的理疗团队，舒适的服务环境。请提前在线预约，我们将为您预留专属服务时段。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row">
            <div className="sm:w-2/5 relative h-48 sm:h-auto">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${service.locationType === 'store' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                    {service.locationType === 'store' ? '门店服务' : '上门服务'}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" /> {service.duration}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xl font-bold text-brand-600">¥{service.price}</span>
                <button 
                  onClick={() => handleBookClick(service)}
                  className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
                >
                  立即预约
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in-up">
            
            {bookingStatus === 'success' ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">预约成功!</h3>
                <p className="text-slate-600">
                  您已成功预约 {selectedService.title}。<br/>
                  我们的客服人员将稍后联系您确认具体细节。
                </p>
              </div>
            ) : (
              <>
                <div className="bg-brand-600 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">预约服务</h3>
                  <button onClick={handleCloseModal} className="text-white/80 hover:text-white">
                    <span className="text-2xl">&times;</span>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg mb-4">
                    <p className="font-medium text-slate-900">{selectedService.title}</p>
                    <p className="text-sm text-slate-500 flex items-center mt-1">
                      <span className="mr-3 text-brand-600 font-bold">¥{selectedService.price}</span>
                      <Clock className="w-3 h-3 mr-1" /> {selectedService.duration}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="请输入您的姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">联系电话</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="请输入手机号码"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">预约门店</label>
                    <div className="relative">
                      <select 
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        value={formData.storeId}
                        onChange={(e) => setFormData({...formData, storeId: e.target.value})}
                      >
                        {STORES.map(store => (
                          <option key={store.id} value={store.id}>{store.name}</option>
                        ))}
                      </select>
                      <MapPin className="absolute right-3 top-2.5 text-slate-400 w-5 h-5 pointer-events-none" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-1">
                      地址: {STORES.find(s => s.id === formData.storeId)?.address}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">期望日期</label>
                    <div className="relative">
                      <input 
                        required
                        type="date" 
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                      <Calendar className="absolute right-3 top-2.5 text-slate-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={bookingStatus === 'submitting'}
                    className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {bookingStatus === 'submitting' ? '提交中...' : '确认预约'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};