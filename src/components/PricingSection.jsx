import { useState } from "react"
import { Check, Zap, Building2, Rocket, ArrowLeft, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = {
  basic: [
    "إدارة الزبائن والمركبات",
    "فتح وتتبع أوامر الإصلاح",
    "إضافة قطع الغيار وتكاليف العمالة",
    "الدفع النقدي",
    "تقارير أساسية للإيرادات والمصروفات",
    "مستخدم واحد"
  ],
  pro: [
    "كل ميزات الخطة الأساسية",
    "تعدد طرق الدفع والشيكات",
    "إدارة الشيكات والتذكيرات",
    "إدارة المصاريف والرواتب والسلف",
    "لوحة تحكم وإحصائيات حية",
    "نظام صلاحيات للمستخدمين RBAC",
    "نسخ احتياطي آلي",
    "حتى 5 مستخدمين"
  ],
  enterprise: [
    "كل ميزات الخطة الاحترافية",
    "عدد مستخدمين غير محدود",
    "تخصيص متقدم للتقارير وواجهة العمل",
    "تصدير PDF",
    "دعم وأولوية عالية",
    "أمان وصلاحيات متقدمة",
    "نسخ احتياطي متقدم واستعادة بيانات",
    "تشغيل على Windows عبر Electron"
  ]
}

export default function PricingSection() {
  const [yearly, setYearly] = useState(false)
  const phoneNumber = "972568353362"

  const price = (monthly) => {
    if (yearly) return monthly * 10
    return monthly
  }

  const getWhatsAppLink = (plan) => {
    const message = encodeURIComponent(`مرحباً GarageFlow، أود الاستفسار عن باقة ${plan} (${yearly ? "السنوية" : "الشهرية"})`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-4 overflow-hidden relative font-cairo">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase">
            الأسعار والخطط
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            اختر الخطة المناسبة <span className="text-blue-600">لعملك</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 font-medium">
            نظام GarageFlow يوفر لك كل ما تحتاجه لإدارة مركز الصيانة الخاص بك باحترافية وسهولة تامة.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-bold transition-colors ${!yearly ? "text-slate-900" : "text-slate-400"}`}>
              شهري
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-16 h-8 rounded-full bg-slate-200 p-1 transition-all duration-300 hover:bg-slate-300"
            >
              <motion.div
                animate={{ x: yearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-blue-600 shadow-lg"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${yearly ? "text-slate-900" : "text-slate-400"}`}>
                سنوي
              </span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full border border-emerald-200">
                وفر 20%
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* Basic Plan */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-8">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">أساسي</h3>
              <p className="text-slate-500 text-sm mt-1">مثالي للورش الصغيرة والمبتدئين</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price(29)}</span>
                <span className="text-slate-500 font-medium">{yearly ? "/سنة" : "/شهر"}</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink("الأساسية")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 font-bold mb-8 transition-all hover:bg-slate-50 flex items-center justify-center gap-2 group text-center"
            >
              ابدأ الآن
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>

            <div className="space-y-4 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">ماذا ستحصل:</p>
              {features.basic.map((f) => (
                <div key={f} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 bg-blue-50 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium leading-tight">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div variants={itemVariants} className="relative rounded-3xl p-8 flex flex-col border-2 border-blue-600 bg-white shadow-2xl scale-105 z-10 overflow-hidden transition-all duration-300 hover:scale-[1.07]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-50 rounded-full opacity-50" />

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  الأكثر طلباً
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">احترافي</h3>
              <p className="text-slate-500 text-sm mt-1">القوة والتحكم الكامل لمركزك</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price(59)}</span>
                <span className="text-slate-500 font-medium">{yearly ? "/سنة" : "/شهر"}</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink("الاحترافية")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-bold mb-8 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2 group text-center"
            >
              جرّب مجاناً
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </a>

            <div className="space-y-4 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">كل ميزات الأساسي بالإضافة لـ:</p>
              {features.pro.map((f) => (
                <div key={f} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm font-bold leading-tight">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-8">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">مؤسسي</h3>
              <p className="text-slate-500 text-sm mt-1">حلول مخصصة للشركات والمراكز الكبرى</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">اتصل بنا</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink("المؤسسية")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-slate-900 text-white font-bold mb-8 transition-all hover:bg-slate-800 flex items-center justify-center gap-2 group text-center"
            >
              تواصل معنا
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>

            <div className="space-y-4 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">مميزات حصرية:</p>
              {features.enterprise.map((f) => (
                <div key={f} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 bg-blue-50 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium leading-tight">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-slate-200 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

              <span className="font-bold text-slate-600 flex items-center gap-2 text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                دعم فني 24/7
              </span>

            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-600 transition-all hover:bg-blue-600 hover:text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-600 transition-all hover:bg-pink-600 hover:text-white" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900/5 flex items-center justify-center text-slate-600 transition-all hover:bg-slate-900 hover:text-white" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm font-medium text-slate-400">
            جميع الحقوق محفوظة لشركة GarageFlow &copy; 2024
          </p>
        </motion.div>
      </div>
    </section>
  )
}
