'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone, Paintbrush, PaintRoller, Sparkles, Droplet, Star, CheckCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import FloatingButtons from '@/components/floating-buttons';

// Import our generated AI images
import imgHero from '@/src/assets/images/riyadh_luxury_living_room_1782979326606.jpg';
import imgPainter from '@/src/assets/images/professional_painter_1782979340836.jpg';
import imgDecor from '@/src/assets/images/decorative_wall_panel_1782979352577.jpg';
import imgWallpaper from '@/src/assets/images/modern_wallpaper_1782979365088.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const services = [
  {
    title: 'دهانات داخلية وخارجية',
    description: 'أحدث الألوان وأجود أنواع الدهانات المضمونة (جوتن، الجزيرة) لواجهات الفلل والقصور والمنازل من الداخل.',
    icon: PaintRoller,
    image: imgPainter
  },
  {
    title: 'ديكورات فوم وجبس بورد',
    description: 'تركيب أحدث تصاميم الفوم وبديل الجبس بورد التي تضفي فخامة ولمسة عصرية على جدران وأسقف منزلك.',
    icon: Sparkles,
    image: imgDecor
  },
  {
    title: 'بديل الخشب والرخام',
    description: 'تكسيات جدارية راقية من بديل الخشب وبديل الرخام بألوان وتشكيلات مميزة تناسب المجالس والصالات.',
    icon: Paintbrush,
    image: imgHero
  },
  {
    title: 'تركيب ورق جدران',
    description: 'تشكيلة واسعة من ورق الجدران ثلاثي الأبعاد والعادي بتصاميم كلاسيكية ومودرن تلبي كافة الأذواق.',
    icon: Droplet,
    image: imgWallpaper
  }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={imgHero}
            alt="خلفية ديكور فخم"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
              <span className="text-sm font-medium">الخيار الأول في الرياض</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            لمسة فن وإبداع في <br className="hidden md:block" />
            <span className="text-amber-400">عالم الدهانات والديكورات</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            نحول رؤيتك إلى واقع ملموس. خدمات احترافية، دقة في المواعيد، وضمان على كافة الأعمال.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="tel:0502440714"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل بنا الآن</span>
            </a>
            <a 
              href="https://wa.me/966502440714"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>راسلنا واتساب</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-sm tracking-widest uppercase">اكتشف المزيد</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "جودة مضمونة", desc: "نستخدم أفضل أنواع الدهانات والمواد لضمان بقائها لسنوات طويلة دون تأثر." },
              { icon: Star, title: "دقة واحترافية", desc: "فريق من المعلمين ذوي الخبرة الطويلة لضمان تنفيذ العمل بأعلى معايير الجودة." },
              { icon: CheckCircle, title: "سرعة التنفيذ", desc: "نلتزم بالمواعيد المحددة ونسلم المشروع بأسرع وقت مع الحفاظ على النظافة." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">خدماتنا المتميزة</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من خدمات الدهانات والديكورات الحديثة التي تلبي كافة الأذواق وتناسب جميع الميزانيات.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-3xl flex flex-col sm:flex-row bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:hidden" />
                </div>
                
                <div className="p-8 sm:w-3/5 flex flex-col justify-center relative z-10 bg-slate-50">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <a 
                    href="https://wa.me/966502440714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors w-max"
                  >
                    <span>طلب الخدمة</span>
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/4" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              هل أنت مستعد لتجديد منزلك؟
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر يناسب ميزانيتك.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-right">
                  <span className="block text-sm text-slate-300 mb-1">اتصل مباشرة</span>
                  <a href="tel:0502440714" className="text-2xl font-bold text-white tracking-wider" dir="ltr">
                    050 244 0714
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center border-t border-slate-800">
        <p>© {new Date().getFullYear()} أفضل معلم دهانات وديكورات بالرياض. جميع الحقوق محفوظة.</p>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </main>
  );
}
