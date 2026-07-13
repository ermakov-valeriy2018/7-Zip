import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Lock, Download, Moon, Sun, Trash2, Plus, 
  ChevronDown, Settings, FileSpreadsheet, CheckSquare, 
  Share2, Monitor, Upload, FileText, X, Truck, Clock, 
  RefreshCw, Check
} from 'lucide-react';

/**
 * ПРЕМИАЛЬНЫЙ SVG-ЛОГОТИП "PIXEL" (Адаптивный)
 * Воссоздан на основе исходного изображения:
 * Металлические буквы и объемный светящийся зеленый кристалл "X"
 */
const PixelPremiumLogo = ({ isDark, size = "100%" }) => (
  <svg viewBox="0 0 400 120" width={size} style={{ maxHeight: '60px', filter: isDark ? 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.2))' : 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' }}>
    <defs>
      {/* Градиенты для металлических букв */}
      <linearGradient id="metal-main" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={isDark ? "#f0f0f0" : "#ffffff"} />
        <stop offset="40%" stopColor={isDark ? "#a0a0a0" : "#d0d0d0"} />
        <stop offset="50%" stopColor={isDark ? "#505050" : "#808080"} />
        <stop offset="60%" stopColor={isDark ? "#808080" : "#b0b0b0"} />
        <stop offset="100%" stopColor={isDark ? "#d0d0d0" : "#f0f0f0"} />
      </linearGradient>
      <linearGradient id="metal-edge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#808080" />
        <stop offset="100%" stopColor="#303030" />
      </linearGradient>

      {/* Градиенты для граней кристалла "X" */}
      <linearGradient id="crystal-top" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
      <linearGradient id="crystal-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      <linearGradient id="crystal-left" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
      <linearGradient id="crystal-right" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#15803d" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
      <radialGradient id="crystal-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
      </radialGradient>
    </defs>

    <g style={{ transform: 'translate(0, 10px)' }}>
      {/* Свечение кристалла */}
      {isDark && <circle cx="200" cy="50" r="60" fill="url(#crystal-glow)" />}

      {/* Буква P */}
      <path d="M 20 20 L 70 20 C 90 20 100 30 100 45 C 100 60 90 70 70 70 L 45 70 L 45 100 L 20 100 Z M 45 40 L 45 50 L 65 50 C 70 50 75 48 75 45 C 75 42 70 40 65 40 Z" fill="url(#metal-main)" stroke="url(#metal-edge)" strokeWidth="1.5" />
      
      {/* Буква I */}
      <path d="M 115 20 L 140 20 L 140 100 L 115 100 Z" fill="url(#metal-main)" stroke="url(#metal-edge)" strokeWidth="1.5" />

      {/* Кристалл X (Центр: x=200, y=50) */}
      <g stroke={isDark ? "#bbf7d0" : "#4ade80"} strokeWidth="0.5" strokeLinejoin="round">
        {/* Верхняя часть */}
        <polygon points="200,50 160,10 180,5 200,25" fill="url(#crystal-top)" />
        <polygon points="200,50 240,10 220,5 200,25" fill="url(#crystal-top)" />
        <polygon points="200,25 180,5 220,5" fill="#bbf7d0" />
        {/* Нижняя часть */}
        <polygon points="200,50 160,110 180,115 200,95" fill="url(#crystal-bottom)" />
        <polygon points="200,50 240,110 220,115 200,95" fill="url(#crystal-bottom)" />
        <polygon points="200,95 180,115 220,115" fill="#14532d" />
        {/* Боковые части */}
        <polygon points="200,50 160,10 145,30 160,50" fill="url(#crystal-left)" />
        <polygon points="200,50 160,110 145,90 160,50" fill="url(#crystal-left)" />
        <polygon points="200,50 240,10 255,30 240,50" fill="url(#crystal-right)" />
        <polygon points="200,50 240,110 255,90 240,50" fill="url(#crystal-right)" />
        {/* Центральная звезда/блик */}
        <polygon points="200,45 205,50 200,55 195,50" fill="#ffffff" />
      </g>

      {/* Буква E */}
      <path d="M 260 20 L 320 20 L 320 40 L 285 40 L 285 50 L 315 50 L 315 70 L 285 70 L 285 80 L 320 80 L 320 100 L 260 100 Z" fill="url(#metal-main)" stroke="url(#metal-edge)" strokeWidth="1.5" />

      {/* Буква L */}
      <path d="M 335 20 L 360 20 L 360 80 L 395 80 L 395 100 L 335 100 Z" fill="url(#metal-main)" stroke="url(#metal-edge)" strokeWidth="1.5" />
    </g>
  </svg>
);

const PremiumIcon3D = ({ type, size = 24, active = false, isDark = true }) => {
  const schemes = {
    phones: ["#60A5FA", "#2563EB"], accessories: ["#F472B6", "#DB2777"],
    consoles: ["#A78BFA", "#7C3AED"], games: ["#F87171", "#DC2626"],
    laptops: ["#34D399", "#059669"], bt: ["#FBBF24", "#D97706"],
    wallet: ["#10B981", "#059669"], bank: ["#60A5FA", "#3B82F6"]
  };
  const [c1, c2] = schemes[type] || ["#94A3B8", "#475569"];
  const filterId = `clay-${type}-${isDark ? 'dark' : 'light'}`;

  return (
    <div className={`relative transition-transform duration-500 ${active ? 'scale-110' : 'scale-100'}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" className={isDark ? "drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" : "drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"}>
        <defs>
          <linearGradient id={`grad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={c1} /><stop offset="100%" stopColor={c2} />
          </linearGradient>
          <filter id={filterId}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
            <feOffset in="blur" dx="0" dy="1.5" result="offsetBlur" />
            <feSpecularLighting in="blur" surfaceScale="3" specularConstant=".8" specularExponent="30" lightingColor="#ffffff" result="specOut">
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>
        <rect x="2" y="4" width="20" height="16" rx="4" filter={`url(#${filterId})`} fill={`url(#grad-${type})`} opacity="0.1" />
        <g filter={`url(#${filterId})`} fill={`url(#grad-${type})`}>
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
           <circle cx="12" cy="12" r="4" />
        </g>
      </svg>
    </div>
  );
};

const CATEGORIES = [
  { id: 'phones', name: 'Смартфоны', rate: 0.06 }, { id: 'accessories', name: 'Аксессуары', rate: 0.15 },
  { id: 'consoles', name: 'Консоли', rate: 0.10 }, { id: 'laptops', name: 'Ноутбуки', rate: 0.07 },
  { id: 'bt', name: 'Бытовая техника', rate: 0.12 },
];

const DEFAULT_DELIVERY = [
  { id: 'pickup', name: 'Самовывоз', cost: 0, time: '0 дней', type: 'self' },
  { id: 'courier_crimea', name: 'Курьер Крым', cost: 450, time: '1-2 дня', type: 'courier' },
  { id: 'tk_russia', name: 'ТК РФ (СДЭК/ПР)', cost: 900, time: '3-7 дней', type: 'postal' },
];

const SECRET_SALT = "pixel_v6_ultimate_sys";
const encryptData = (data) => btoa(unescape(encodeURIComponent(JSON.stringify(data) + "|" + SECRET_SALT)));
const decryptData = (cipher) => {
  try {
    const [data, salt] = decodeURIComponent(escape(atob(cipher))).split("|");
    return salt === SECRET_SALT ? JSON.parse(data) : null;
  } catch (e) { return null; }
};
const formatMoney = (v) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(v);

export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState("");
  const [themeMode, setThemeMode] = useState('auto'); // auto, dark, light
  const [systemDark, setSystemDark] = useState(true);
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [notification, setNotification] = useState(null);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showDeliverySettings, setShowDeliverySettings] = useState(false);
  
  const fileInputRef = useRef(null);

  // Состояние данных
  const [deliveryMethods, setDeliveryMethods] = useState(() => {
    const saved = localStorage.getItem('pixel_v6_delivery');
    return saved ? JSON.parse(saved) : DEFAULT_DELIVERY;
  });

  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem('pixel_v6_data');
    return saved ? decryptData(saved) || [] : [
      { id: '1', name: 'iPhone 15 Pro Max 256GB', category: 'phones', baseCost: 112000, desiredProfit: 15000, deliveryId: 'pickup', date: new Date().toISOString() }
    ];
  });

  const [settings, setSettings] = useState({ acquiringRate: 0.025, serviceRate: 0.015, taxRate: 0.06 });

  // Определение текущей темы
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemDark(mediaQuery.matches);
    const handler = (e) => setSystemDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const isDark = themeMode === 'dark' || (themeMode === 'auto' && systemDark);

  // Кэширование
  useEffect(() => {
    if (!isLocked) {
      localStorage.setItem('pixel_v6_data', encryptData(rows));
      localStorage.setItem('pixel_v6_delivery', JSON.stringify(deliveryMethods));
      localStorage.setItem('pixel_v6_theme', themeMode);
    }
  }, [rows, deliveryMethods, isLocked, themeMode]);

  useEffect(() => {
    const t = localStorage.getItem('pixel_v6_theme');
    if (t) setThemeMode(t);
  }, []);

  const showNotif = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const calculatedData = useMemo(() => {
    return rows.map(row => {
      const category = CATEGORIES.find(c => c.id === row.category) || CATEGORIES[0];
      const delivery = deliveryMethods.find(d => d.id === row.deliveryId) || deliveryMethods[0] || { cost: 0 };
      const totalLoad = category.rate + settings.acquiringRate + settings.serviceRate + settings.taxRate;
      const recPrice = Math.ceil((row.baseCost + row.desiredProfit + delivery.cost) / (1 - totalLoad));
      const marketFees = recPrice * (category.rate + settings.serviceRate);
      const bankFees = recPrice * settings.acquiringRate;
      const taxes = recPrice * settings.taxRate;
      const payout = recPrice - marketFees - bankFees;
      const profit = payout - delivery.cost - taxes - row.baseCost;
      return { 
        ...row, recPrice, payout, profit, 
        fees: { marketFees, bankFees, taxes, delivery: delivery.cost },
        categoryInfo: category, deliveryInfo: delivery,
        margin: recPrice > 0 ? (profit / recPrice) * 100 : 0
      };
    });
  }, [rows, settings, deliveryMethods]);

  const totalStats = useMemo(() => {
    const items = selectedIds.length > 0 ? calculatedData.filter(r => selectedIds.includes(r.id)) : calculatedData;
    return {
      count: items.length,
      revenue: items.reduce((a, b) => a + b.recPrice, 0),
      profit: items.reduce((a, b) => a + b.profit, 0),
    };
  }, [calculatedData, selectedIds]);

  // Функции Экспорта и Импорта
  const exportCSV = () => {
    const items = selectedIds.length > 0 ? calculatedData.filter(r => selectedIds.includes(r.id)) : calculatedData;
    const headers = ['ID', 'Товар', 'Категория', 'Закупка (RUB)', 'Маржа %', 'Доставка', 'Цена продажи (RUB)', 'Прибыль (RUB)'];
    const csvContent = "\uFEFF" + [
      headers.join(';'),
      ...items.map(i => [
        i.id, `"${i.name}"`, i.categoryInfo.name, i.baseCost, i.margin.toFixed(1), i.deliveryInfo.name, i.recPrice, i.profit
      ].join(';'))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = `pixel_export_${new Date().toLocaleDateString()}.csv`;
    link.click();
    showNotif(`Экспортировано ${items.length} позиций в CSV`);
    setShowExportMenu(false);
  };

  const printPDF = () => {
    window.print();
    setShowExportMenu(false);
  };

  const importCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target.result;
        const lines = text.split('\n').slice(1); // skip headers
        const newRows = lines.filter(l => l.trim()).map(line => {
          const parts = line.split(';');
          return {
            id: Math.random().toString(36).substr(2, 9),
            name: parts[1].replace(/"/g, '') || 'Импортированный товар',
            category: 'phones', // default fallback
            baseCost: Number(parts[3]) || 0,
            desiredProfit: Number(parts[7]) || 1000,
            deliveryId: deliveryMethods[0]?.id || 'pickup',
            date: new Date().toISOString()
          };
        });
        setRows([...newRows, ...rows]);
        showNotif(`Успешно импортировано ${newRows.length} позиций`);
      } catch (err) {
        showNotif('Ошибка импорта CSV формата');
      }
    };
    reader.readAsText(file);
    setShowExportMenu(false);
  };

  const shareApp = async () => {
    const shareData = {
      title: 'Pixel Finance Pro',
      text: `Сводка: Оборот ${formatMoney(totalStats.revenue)}, Прибыль ${formatMoney(totalStats.profit)}`,
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`);
        showNotif('Данные скопированы в буфер обмена');
      }
    } catch (err) {
      console.log('Share canceled');
    }
  };

  const themeClasses = {
    bgApp: isDark ? 'bg-[#020408]' : 'bg-[#f4f6f8]',
    bgCard: isDark ? 'bg-[#0A0D14]' : 'bg-white',
    bgInput: isDark ? 'bg-black/40' : 'bg-slate-50',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    borderHover: isDark ? 'hover:border-white/20' : 'hover:border-slate-300',
    textMain: isDark ? 'text-white' : 'text-slate-900',
    textMuted: isDark ? 'text-slate-500' : 'text-slate-400',
    textAccent: 'text-emerald-500'
  };

  if (isLocked) {
    return (
      <div className={`min-h-screen ${themeClasses.bgApp} flex items-center justify-center p-6 select-none font-['Roboto_Flex'] transition-colors duration-500`}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');`}</style>
        <div className={`w-full max-w-md ${themeClasses.bgCard} border ${themeClasses.border} p-12 rounded-[48px] text-center shadow-2xl relative overflow-hidden backdrop-blur-xl`}>
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent"></div>
          <div className="mb-8 flex justify-center">
            <PixelPremiumLogo isDark={isDark} />
          </div>
          <p className={`text-[11px] uppercase font-black tracking-[0.4em] ${themeClasses.textMuted} mb-10`}>Secure Terminal Access</p>
          <input 
            type="password" value={pin} onChange={e => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) setPin(val);
              if (val === "1111") setIsLocked(false);
            }}
            className={`w-full ${themeClasses.bgInput} border ${themeClasses.border} rounded-3xl py-6 text-center text-4xl font-black tracking-[0.8em] ${themeClasses.textMain} focus:border-emerald-500/50 outline-none transition-all placeholder:text-slate-400`}
            placeholder="••••" maxLength={4} autoFocus
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${themeClasses.bgApp} text-slate-300 font-['Roboto_Flex'] selection:bg-emerald-500 selection:text-white transition-colors duration-500 print:bg-white print:text-black`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
        .font-v-bold { font-variation-settings: 'wght' 800, 'opsz' 14; }
        .font-v-black { font-variation-settings: 'wght' 1000, 'opsz' 18; }
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .print-table th { background: #f8fafc !important; color: #000 !important; -webkit-print-color-adjust: exact; }
          .print-table td { border-bottom: 1px solid #e2e8f0; color: #000 !important; }
        }
      `}</style>

      {/* Уведомления */}
      {notification && (
        <div className="no-print fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-8 py-4 rounded-full font-v-bold text-xs uppercase tracking-widest shadow-[0_10px_40px_rgba(16,185,129,0.3)] animate-in slide-in-from-top-4">
          {notification}
        </div>
      )}

      {/* Меню Настроек Доставки */}
      {showDeliverySettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm no-print">
          <div className={`${themeClasses.bgCard} border ${themeClasses.border} rounded-[32px] p-8 w-full max-w-2xl shadow-2xl relative`}>
            <button onClick={()=>setShowDeliverySettings(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><X size={24}/></button>
            <h3 className={`text-2xl font-v-black italic ${themeClasses.textMain} mb-6`}>Маршрутизация и Логистика</h3>
            <div className="space-y-4 mb-8">
              {deliveryMethods.map(method => (
                <div key={method.id} className={`flex items-center gap-4 p-4 rounded-2xl border ${themeClasses.border} ${themeClasses.bgInput}`}>
                  <Truck size={20} className="text-emerald-500" />
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <input value={method.name} onChange={e=>setDeliveryMethods(deliveryMethods.map(m=>m.id===method.id?{...m,name:e.target.value}:m))} className={`bg-transparent outline-none font-v-bold ${themeClasses.textMain}`} placeholder="Название"/>
                    <input type="number" value={method.cost} onChange={e=>setDeliveryMethods(deliveryMethods.map(m=>m.id===method.id?{...m,cost:Number(e.target.value)}:m))} className={`bg-transparent outline-none font-v-bold text-center ${themeClasses.textMain}`} placeholder="Стоимость"/>
                    <input value={method.time} onChange={e=>setDeliveryMethods(deliveryMethods.map(m=>m.id===method.id?{...m,time:e.target.value}:m))} className={`bg-transparent outline-none font-v-bold text-right ${themeClasses.textMain}`} placeholder="Сроки"/>
                  </div>
                  <button onClick={()=>setDeliveryMethods(deliveryMethods.filter(m=>m.id!==method.id))} className="text-slate-500 hover:text-red-500"><Trash2 size={18}/></button>
                </div>
              ))}
            </div>
            <button onClick={()=>setDeliveryMethods([...deliveryMethods, {id: Math.random().toString(), name:'Новый маршрут', cost:0, time:'1 день', type:'custom'}])} className="w-full py-4 border-2 border-dashed border-emerald-500/30 text-emerald-500 rounded-2xl font-v-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-colors flex items-center justify-center gap-2">
              <Plus size={18}/> Добавить метод доставки
            </button>
          </div>
        </div>
      )}

      {/* Навигация */}
      <nav className={`no-print sticky top-0 z-40 ${isDark ? 'bg-[#020408]/80' : 'bg-white/80'} backdrop-blur-3xl border-b ${themeClasses.border} px-6`}>
        <div className="max-w-7xl mx-auto h-24 flex items-center justify-between">
           <div className="flex items-center gap-5 w-48">
              <PixelPremiumLogo isDark={isDark} />
           </div>
           
           <div className="flex items-center gap-2">
              <div className={`flex items-center p-1 rounded-2xl border ${themeClasses.border} ${themeClasses.bgInput}`}>
                <button onClick={()=>setThemeMode('light')} className={`p-3 rounded-xl transition-all ${themeMode==='light'?'bg-white text-black shadow-sm':themeClasses.textMuted}`}><Sun size={18}/></button>
                <button onClick={()=>setThemeMode('auto')} className={`p-3 rounded-xl transition-all ${themeMode==='auto'?(isDark?'bg-slate-800 text-white':'bg-white text-black shadow-sm'):themeClasses.textMuted}`}><Monitor size={18}/></button>
                <button onClick={()=>setThemeMode('dark')} className={`p-3 rounded-xl transition-all ${themeMode==='dark'?'bg-slate-800 text-white shadow-sm':themeClasses.textMuted}`}><Moon size={18}/></button>
              </div>
              
              <div className="relative">
                <button onClick={()=>setShowExportMenu(!showExportMenu)} className={`p-4 ${themeClasses.bgInput} border ${themeClasses.border} rounded-2xl hover:border-emerald-500/50 ${themeClasses.textMain} transition-all flex items-center gap-2`}>
                   <FileSpreadsheet size={20} /> <ChevronDown size={14} className={showExportMenu?'rotate-180':''}/>
                </button>
                {showExportMenu && (
                  <div className={`absolute right-0 top-full mt-2 w-56 ${themeClasses.bgCard} border ${themeClasses.border} rounded-2xl shadow-2xl p-2 flex flex-col gap-1`}>
                    <button onClick={exportCSV} className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 ${themeClasses.textMain} hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors font-v-bold text-sm`}><Download size={16}/> Экспорт CSV</button>
                    <button onClick={printPDF} className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 ${themeClasses.textMain} hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors font-v-bold text-sm`}><FileText size={16}/> Экспорт PDF</button>
                    <div className={`h-[1px] ${themeClasses.border} my-1`}></div>
                    <button onClick={()=>fileInputRef.current?.click()} className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 ${themeClasses.textMain} hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors font-v-bold text-sm`}><Upload size={16}/> Импорт Каталога</button>
                    <input type="file" accept=".csv" ref={fileInputRef} onChange={importCSV} className="hidden" />
                  </div>
                )}
              </div>

              <button onClick={shareApp} className={`p-4 ${themeClasses.bgInput} border ${themeClasses.border} rounded-2xl hover:border-emerald-500/50 ${themeClasses.textMain} transition-all`}>
                 <Share2 size={20} />
              </button>
              <button onClick={() => setIsLocked(true)} className={`p-4 ${themeClasses.bgInput} border ${themeClasses.border} rounded-2xl hover:bg-red-500/10 ${themeClasses.textMuted} hover:text-red-500 transition-all ml-2`}>
                 <Lock size={20} />
              </button>
           </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 pb-48 no-print">
        {/* Панель статистики */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <StatCard label={selectedIds.length ? "Оборот (выбрано)" : "Общий Оборот"} value={formatMoney(totalStats.revenue)} type="bt" isDark={isDark} themeClasses={themeClasses} />
           <StatCard label="Выбрано позиций" value={`${totalStats.count} шт.`} type="bank" color="text-indigo-500" isDark={isDark} themeClasses={themeClasses} />
           <StatCard label={selectedIds.length ? "Прибыль (выбрано)" : "Итоговая Прибыль"} value={formatMoney(totalStats.profit)} type="wallet" color="text-emerald-500" isDark={isDark} themeClasses={themeClasses} />
        </div>

        {/* Панель управления */}
        <div className="flex flex-col xl:flex-row gap-6 mb-12 items-stretch">
           <div className={`flex-1 ${themeClasses.bgCard} border ${themeClasses.border} p-3 rounded-[32px] flex flex-wrap items-center gap-6 shadow-xl`}>
              <div className={`px-8 py-3 border-r ${themeClasses.border} flex items-center gap-4 shrink-0`}>
                 <div>
                    <p className={`text-[9px] font-bold uppercase ${themeClasses.textMuted} mb-1 tracking-widest`}>Налог системы</p>
                    <div className={`flex items-center gap-2 ${themeClasses.textMain} font-v-black italic text-lg`}>
                       <input type="number" className={`bg-transparent w-10 outline-none border-b ${themeClasses.border} focus:border-emerald-500`} value={settings.taxRate*100} onChange={e=>setSettings({...settings, taxRate: e.target.value/100})} />
                       <span className="text-[12px] opacity-30">%</span>
                    </div>
                 </div>
              </div>
              <button onClick={()=>setShowDeliverySettings(true)} className={`px-6 py-4 rounded-2xl text-[11px] font-v-bold uppercase tracking-widest transition-all border ${themeClasses.border} ${themeClasses.bgInput} hover:border-emerald-500/50 flex items-center gap-2 ${themeClasses.textMain}`}>
                 <Truck size={16} className="text-emerald-500"/> Настроить логистику
              </button>
              <button onClick={()=>{
                localStorage.removeItem('pixel_v6_data');
                setRows([]);
                showNotif('Кэш успешно очищен');
              }} className={`px-6 py-4 rounded-2xl text-[11px] font-v-bold uppercase tracking-widest transition-all border ${themeClasses.border} ${themeClasses.bgInput} hover:border-red-500/50 hover:text-red-500 flex items-center gap-2 ${themeClasses.textMuted} ml-auto`}>
                 <RefreshCw size={16}/> Сброс кэша
              </button>
           </div>
           
           <button 
             onClick={()=>setRows([{ id: Math.random().toString(), name: 'Новая позиция', category: 'phones', baseCost: 10000, desiredProfit: 2000, deliveryId: deliveryMethods[0]?.id, date: new Date().toISOString() }, ...rows])} 
             className="bg-emerald-500 hover:bg-emerald-400 text-black px-12 py-5 rounded-[32px] font-v-black text-[13px] uppercase tracking-widest shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-4 transition-all active:scale-95 group shrink-0"
           >
              <Plus size={22} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-500"/> Добавить лот
           </button>
        </div>

        {/* Таблица */}
        <div className={`${themeClasses.bgCard} border ${themeClasses.border} rounded-[48px] overflow-hidden shadow-2xl`}>
           <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[900px]">
                 <thead>
                    <tr className={`bg-black/5 text-[11px] font-v-bold uppercase tracking-[0.3em] ${themeClasses.textMuted}`}>
                       <th className="p-8 w-24">
                         <button onClick={()=>setSelectedIds(selectedIds.length === rows.length ? [] : rows.map(r=>r.id))} className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${selectedIds.length === rows.length && rows.length > 0 ? 'bg-emerald-500 border-emerald-500 text-white' : `border-slate-400 ${themeClasses.borderHover}`}`}>
                           {selectedIds.length === rows.length && rows.length > 0 && <Check size={14} strokeWidth={4}/>}
                         </button>
                       </th>
                       <th className="p-8">Продукт и спецификация</th>
                       <th className="p-8">Логистика</th>
                       <th className="p-8 text-center">ROI</th>
                       <th className="p-8">Продажа</th>
                       <th className="p-8 text-right">Прибыль</th>
                    </tr>
                 </thead>
                 <tbody className={`divide-y ${themeClasses.border}`}>
                    {calculatedData.map(item => (
                       <React.Fragment key={item.id}>
                          <tr className={`group transition-all ${selectedIds.includes(item.id) ? (isDark ? 'bg-emerald-500/10' : 'bg-emerald-50') : `hover:${isDark ? 'bg-white/[0.02]' : 'bg-slate-50'}`}`}>
                             <td className="p-8">
                                <button 
                                  onClick={()=>setSelectedIds(prev => prev.includes(item.id) ? prev.filter(id => id !== item.id) : [...prev, item.id])} 
                                  className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${selectedIds.includes(item.id) ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30' : `border-slate-300 ${themeClasses.borderHover}`}`}
                                >
                                   {selectedIds.includes(item.id) && <CheckSquare size={18} strokeWidth={3}/>}
                                </button>
                             </td>
                             <td className="p-8 cursor-pointer" onClick={()=>setExpandedRowId(expandedRowId === item.id ? null : item.id)}>
                                <div className="flex items-center gap-6">
                                   <div className={`p-4 ${themeClasses.bgInput} rounded-[24px] border ${themeClasses.border} transition-colors`}>
                                      <PremiumIcon3D type={item.categoryInfo.type || item.categoryInfo.id} size={32} isDark={isDark} />
                                   </div>
                                   <div>
                                      <div className={`${themeClasses.textMain} font-v-bold text-xl italic tracking-tight group-hover:text-emerald-500 transition-colors`}>{item.name}</div>
                                      <div className={`text-[11px] font-bold uppercase ${themeClasses.textMuted} tracking-widest mt-2`}>{item.categoryInfo.name}</div>
                                   </div>
                                </div>
                             </td>
                             <td className="p-8">
                                <div className={`flex items-center gap-2 ${themeClasses.textMain} font-v-bold text-sm`}>
                                  <Truck size={16} className="text-emerald-500"/> {item.deliveryInfo.name}
                                </div>
                                <div className={`flex items-center gap-1 ${themeClasses.textMuted} text-xs mt-1 font-bold`}><Clock size={12}/> {item.deliveryInfo.time}</div>
                             </td>
                             <td className="p-8 text-center">
                                <div className={`text-[13px] font-v-black italic px-4 py-2 rounded-2xl inline-block ${item.margin > 18 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'} border ${themeClasses.border}`}>
                                   {((item.profit/item.baseCost)*100).toFixed(0)}%
                                </div>
                             </td>
                             <td className="p-8">
                                <div className={`${themeClasses.textMain} font-v-black text-2xl tracking-tighter`}>{formatMoney(item.recPrice)}</div>
                             </td>
                             <td className="p-8 text-right">
                                <div className="flex items-center justify-end gap-6">
                                   <div className="text-3xl font-v-black text-emerald-500 italic tracking-tighter drop-shadow-sm">{formatMoney(item.profit)}</div>
                                   <button 
                                     onClick={()=>setExpandedRowId(expandedRowId === item.id ? null : item.id)} 
                                     className={`p-3 rounded-2xl border transition-all ${expandedRowId === item.id ? 'bg-emerald-500 border-emerald-500 text-white rotate-180' : `${themeClasses.border} ${themeClasses.textMuted}`}`}
                                   >
                                      <ChevronDown size={20} strokeWidth={3}/>
                                   </button>
                                </div>
                             </td>
                          </tr>
                          {expandedRowId === item.id && (
                             <tr className={isDark ? "bg-black/40" : "bg-slate-100"}>
                                <td colSpan="6" className="p-12 animate-in fade-in duration-300">
                                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                      <div className="space-y-8">
                                         <div className={`flex items-center gap-4 ${themeClasses.textMain}`}>
                                            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500"><Settings size={20} /></div>
                                            <h4 className="text-[11px] font-v-bold uppercase tracking-widest">Конфигурация лота</h4>
                                         </div>
                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <EditBlock label="Закупка" value={item.baseCost} onChange={v=>setRows(rows.map(r=>r.id===item.id?{...r,baseCost:v}:r))} isDark={isDark} themeClasses={themeClasses}/>
                                            <EditBlock label="Желаемая маржа" value={item.desiredProfit} onChange={v=>setRows(rows.map(r=>r.id===item.id?{...r,desiredProfit:v}:r))} color="text-emerald-500" isDark={isDark} themeClasses={themeClasses}/>
                                            <SelectBlock label="Группа" value={item.category} onChange={v=>setRows(rows.map(r=>r.id===item.id?{...r,category:v}:r))} options={CATEGORIES} isDark={isDark} themeClasses={themeClasses}/>
                                            <SelectBlock label="Доставка" value={item.deliveryId} onChange={v=>setRows(rows.map(r=>r.id===item.id?{...r,deliveryId:v}:r))} options={deliveryMethods} isDark={isDark} themeClasses={themeClasses}/>
                                         </div>
                                         <button onClick={()=>setRows(rows.filter(r=>r.id!==item.id))} className="w-full py-5 bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] font-v-bold uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all">
                                           Удалить позицию
                                         </button>
                                      </div>
                                      <div className={`${isDark ? 'bg-[#050608]' : 'bg-white'} border ${themeClasses.border} p-10 rounded-[40px] space-y-6 shadow-inner`}>
                                         <SummaryLine label="Рекомендованная цена" value={item.recPrice} bold themeClasses={themeClasses} />
                                         <SummaryLine label="Комиссии маркета" value={-item.fees.marketFees} color="text-red-400" themeClasses={themeClasses} />
                                         <SummaryLine label="Налог (УСН)" value={-item.fees.taxes} color="text-amber-500" themeClasses={themeClasses} />
                                         <SummaryLine label="Логистика и закуп" value={-(item.baseCost + item.fees.delivery)} themeClasses={themeClasses} />
                                         <div className={`mt-8 pt-8 border-t ${themeClasses.border} flex justify-between items-end`}>
                                            <div>
                                               <p className={`text-[11px] font-v-bold ${themeClasses.textMuted} uppercase tracking-widest mb-2`}>Чистая Прибыль</p>
                                               <p className="text-5xl font-v-black text-emerald-500 italic tracking-tighter">{formatMoney(item.profit)}</p>
                                            </div>
                                            <div className="text-right">
                                               <p className={`text-[11px] font-v-bold ${themeClasses.textMuted} uppercase tracking-widest mb-2`}>Маржа</p>
                                               <p className={`text-2xl font-v-black ${themeClasses.textMain} italic tracking-tighter`}>{item.margin.toFixed(1)}%</p>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </td>
                             </tr>
                          )}
                       </React.Fragment>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </main>

      {/* Шаблон для печати (Экспорт PDF) */}
      <div className="hidden print-only p-8 bg-white text-black min-h-screen">
         <div className="flex justify-between items-end border-b-2 border-slate-800 pb-8 mb-8">
            <PixelPremiumLogo isDark={false} size={200} />
            <div className="text-right">
              <h1 className="text-3xl font-v-black italic tracking-tighter uppercase">Финансовый Отчет</h1>
              <p className="text-sm font-bold text-slate-500 mt-2">{new Date().toLocaleDateString('ru-RU')}</p>
            </div>
         </div>
         
         <div className="grid grid-cols-3 gap-6 mb-10 border border-slate-200 rounded-3xl p-6 bg-slate-50">
           <div>
             <p className="text-xs font-bold uppercase text-slate-500 mb-1">Оборот</p>
             <p className="text-2xl font-v-black">{formatMoney(totalStats.revenue)}</p>
           </div>
           <div>
             <p className="text-xs font-bold uppercase text-slate-500 mb-1">Позиций</p>
             <p className="text-2xl font-v-black">{totalStats.count}</p>
           </div>
           <div>
             <p className="text-xs font-bold uppercase text-slate-500 mb-1">Чистая Прибыль</p>
             <p className="text-2xl font-v-black text-emerald-600">{formatMoney(totalStats.profit)}</p>
           </div>
         </div>

         <table className="w-full text-left print-table text-sm">
           <thead>
             <tr>
               <th className="py-4 px-2 font-v-bold uppercase">Наименование</th>
               <th className="py-4 px-2 font-v-bold uppercase">Категория</th>
               <th className="py-4 px-2 font-v-bold uppercase">Доставка</th>
               <th className="py-4 px-2 font-v-bold uppercase text-right">Закупка</th>
               <th className="py-4 px-2 font-v-bold uppercase text-right">Продажа</th>
               <th className="py-4 px-2 font-v-bold uppercase text-right">Прибыль</th>
             </tr>
           </thead>
           <tbody>
             {calculatedData.filter(i => selectedIds.length === 0 || selectedIds.includes(i.id)).map(item => (
               <tr key={item.id}>
                 <td className="py-3 px-2 font-bold">{item.name}</td>
                 <td className="py-3 px-2 text-slate-600">{item.categoryInfo.name}</td>
                 <td className="py-3 px-2 text-slate-600">{item.deliveryInfo.name}</td>
                 <td className="py-3 px-2 text-right">{formatMoney(item.baseCost)}</td>
                 <td className="py-3 px-2 text-right font-bold">{formatMoney(item.recPrice)}</td>
                 <td className="py-3 px-2 text-right font-v-bold text-emerald-600">{formatMoney(item.profit)}</td>
               </tr>
             ))}
           </tbody>
         </table>
      </div>
    </div>
  );
}

const StatCard = ({ label, value, type, color, isDark, themeClasses }) => (
  <div className={`${themeClasses.bgCard} border ${themeClasses.border} p-10 rounded-[48px] flex items-center gap-8 shadow-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1`}>
    <div className={`p-5 ${themeClasses.bgInput} rounded-[28px] border ${themeClasses.border}`}>
       <PremiumIcon3D type={type} size={44} active isDark={isDark} />
    </div>
    <div className="relative">
       <p className={`text-[11px] font-v-bold ${themeClasses.textMuted} uppercase tracking-[0.4em] mb-2`}>{label}</p>
       <p className={`text-3xl font-v-black italic tracking-tighter ${color || themeClasses.textMain}`}>{value}</p>
    </div>
  </div>
);

const EditBlock = ({ label, value, onChange, color, themeClasses }) => (
  <div className="space-y-3">
     <label className={`text-[10px] font-v-bold ${themeClasses.textMuted} uppercase tracking-widest`}>{label}</label>
     <div className={`${themeClasses.bgInput} border ${themeClasses.border} rounded-[24px] p-5 flex items-center justify-between transition-all focus-within:border-emerald-500/50`}>
        <input 
          type="number" value={value} onChange={e=>onChange(Number(e.target.value))} 
          className={`bg-transparent w-full outline-none font-v-black italic text-xl ${color || themeClasses.textMain}`} 
        />
        <span className={`text-[12px] font-v-black ${themeClasses.textMuted} italic ml-4 uppercase`}>RUB</span>
     </div>
  </div>
);

const SelectBlock = ({ label, value, onChange, options, themeClasses }) => (
  <div className="space-y-3">
     <label className={`text-[10px] font-v-bold ${themeClasses.textMuted} uppercase tracking-widest`}>{label}</label>
     <select 
       value={value} onChange={e=>onChange(e.target.value)} 
       className={`w-full ${themeClasses.bgInput} border ${themeClasses.border} rounded-[24px] p-5 outline-none font-v-black italic text-sm ${themeClasses.textMain} appearance-none cursor-pointer`}
     >
        {options.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
     </select>
  </div>
);

const SummaryLine = ({ label, value, color, bold, themeClasses }) => (
  <div className={`flex justify-between items-center ${bold ? 'font-v-bold text-sm' : 'font-bold text-xs'}`}>
     <span className={`${bold ? themeClasses.textMain : themeClasses.textMuted} uppercase tracking-tight`}>{label}</span>
     <span className={`${color || themeClasses.textMain} italic font-v-black`}>{formatMoney(value)}</span>
  </div>
);
