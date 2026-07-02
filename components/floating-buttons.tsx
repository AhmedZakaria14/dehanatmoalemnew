'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const phoneNumber = "0502440714";
  
  // Create wa.me link. Use standard international format, assuming +966 for Saudi Arabia.
  const whatsappUrl = `https://wa.me/966502440714`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="تواصل معنا عبر واتساب"
      >
        <span className="absolute right-20 w-max origin-right scale-0 rounded bg-slate-800 px-3 py-2 text-sm font-medium text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
          تواصل عبر واتساب
        </span>
        <MessageCircle size={32} className="animate-pulse" />
      </a>
      
      <a
        href={callUrl}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="اتصل بنا الآن"
      >
        <span className="absolute right-20 w-max origin-right scale-0 rounded bg-slate-800 px-3 py-2 text-sm font-medium text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
          اتصل بنا الآن
        </span>
        <Phone size={28} />
      </a>
    </div>
  );
}
