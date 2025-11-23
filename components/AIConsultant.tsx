import React, { useState, useRef, useEffect } from 'react';
import { getHealthAdvice } from '../services/geminiService';
import { MessageSquareHeart, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: '您好！我是国善达的AI健康顾问。无论是营养搭配、亚健康调理还是我们的服务咨询，我都可以为您解答。请问有什么可以帮您？',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getHealthAdvice(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "抱歉，连接超时，请稍后再试。",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 h-[calc(100vh-80px)]">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-brand-600 p-4 flex items-center shadow-sm">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <Bot className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">AI 智能健康顾问</h2>
            <p className="text-brand-100 text-xs">Based on Gemini Tech · 24小时在线</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-brand-100 ml-3' : 'bg-blue-100 mr-3'
                }`}>
                  {msg.role === 'user' ? <User className="w-6 h-6 text-brand-700" /> : <MessageSquareHeart className="w-6 h-6 text-blue-600" />}
                </div>

                {/* Bubble */}
                <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="flex items-center ml-14 bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                <Loader2 className="w-5 h-5 text-brand-500 animate-spin mr-2" />
                <span className="text-slate-500 text-sm">正在思考中...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="请描述您的健康问题或需求..."
              className="w-full bg-slate-100 rounded-xl border-none pl-4 pr-14 py-3 focus:ring-2 focus:ring-brand-500 resize-none h-14 md:h-16 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 bottom-2 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 text-white p-2 rounded-lg transition-colors flex items-center justify-center aspect-square"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-xs text-slate-400 mt-2">
            * AI建议仅供参考，不可替代专业医疗诊断。如有严重不适请及时就医。
          </p>
        </div>
      </div>
    </div>
  );
};