import { Product, Service, Store } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '深海鱼油软胶囊',
    price: 299,
    category: '营养补充',
    image: 'https://picsum.photos/400/400?random=1',
    description: '高纯度欧米伽-3，辅助调节血脂，呵护心脑血管健康。',
    tags: ['心脑血管', '进口']
  },
  {
    id: 'p2',
    name: '智能血压计 Pro',
    price: 459,
    category: '医疗器械',
    image: 'https://picsum.photos/400/400?random=2',
    description: '全自动上臂式，语音播报，数据蓝牙同步APP。',
    tags: ['智能设备', '家用']
  },
  {
    id: 'p3',
    name: '有机蛋白粉',
    price: 328,
    category: '营养补充',
    image: 'https://picsum.photos/400/400?random=3',
    description: '非转基因大豆提取，增强免疫力，术后恢复首选。',
    tags: ['增强免疫', '有机']
  },
  {
    id: 'p4',
    name: '颈椎按摩仪',
    price: 199,
    category: '康复理疗',
    image: 'https://picsum.photos/400/400?random=4',
    description: 'TENS脉冲技术，恒温热敷，缓解颈椎疲劳。',
    tags: ['理疗', '便携']
  },
  {
    id: 'p5',
    name: '益生菌冻干粉',
    price: 168,
    category: '肠胃健康',
    image: 'https://picsum.photos/400/400?random=5',
    description: '调节肠道菌群，改善消化吸收，每袋含500亿活菌。',
    tags: ['肠胃', '全家适用']
  },
  {
    id: 'p6',
    name: '天然维生素C',
    price: 89,
    category: '维生素',
    image: 'https://picsum.photos/400/400?random=6',
    description: '针叶樱桃提取，美白抗氧化，每日一片活力满满。',
    tags: ['美颜', '基础营养']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: '中医体质辨识与调理',
    duration: '60分钟',
    price: 398,
    image: 'https://picsum.photos/600/400?random=10',
    description: '资深中医师一对一问诊，通过望闻问切判断体质，提供个性化调理方案。',
    locationType: 'store'
  },
  {
    id: 's2',
    title: '全身经络疏通SPA',
    duration: '90分钟',
    price: 588,
    image: 'https://picsum.photos/600/400?random=11',
    description: '结合传统推拿与现代精油SPA，深度放松肌肉，缓解疲劳。',
    locationType: 'store'
  },
  {
    id: 's3',
    title: '产后康复指导',
    duration: '45分钟',
    price: 298,
    image: 'https://picsum.photos/600/400?random=12',
    description: '针对产后盆底肌修复、腹直肌分离等问题提供专业评估与训练指导。',
    locationType: 'store'
  },
  {
    id: 's4',
    title: '老年人健康陪诊',
    duration: '按次计费',
    price: 200,
    image: 'https://picsum.photos/600/400?random=13',
    description: '专业护士全程陪同就医，协助挂号、取药、解读报告，省心省力。',
    locationType: 'home'
  }
];

export const STORES: Store[] = [
  { id: 'st1', name: '国善达·朝阳旗舰店', address: '北京市朝阳区建国路88号', phone: '010-12345678' },
  { id: 'st2', name: '国善达·海淀康养中心', address: '北京市海淀区中关村大街1号', phone: '010-87654321' },
  { id: 'st3', name: '国善达·上海静安店', address: '上海市静安区南京西路100号', phone: '021-12345678' },
];