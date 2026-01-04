import { useState, useEffect } from "react"
import { Check, Zap, Building2, Rocket, ArrowLeft, MessageCircle, Facebook, Instagram, Twitter, Languages, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from 'react-i18next'

export default function PricingSection() {
  const { t, i18n } = useTranslation()
  const [yearly, setYearly] = useState(false)
  const phoneNumber = "972568353362"
  const isRtl = i18n.language === 'ar' || i18n.language === 'he'

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language, isRtl])

  const price = (monthly) => {
    if (yearly) return monthly * 10
    return monthly
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const getWhatsAppLink = (planKey) => {
    const planName = t(`pricing.plans.${planKey}.name`)
    const cycle = yearly ? t('pricing.yearly') : t('pricing.monthly')
    const message = encodeURIComponent(t('pricing.whatsappMessage', { plan: planName, cycle: cycle }))
    return `https://wa.me/${phoneNumber}?text=${message}`
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

  const features = {
    basic: ["f1", "f2", "f3", "f4", "f5", "f6"],
    pro: ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"],
    enterprise: ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"]
  }

  return (
    <section className={`min-h-screen bg-slate-50 py-10 px-4 overflow-hidden relative ${isRtl ? 'font-cairo' : 'font-inter'}`}>
      {/* Language Switcher */}
      <div className="absolute top-6 left-6 right-6 flex justify-end z-50">
        <div className="bg-white/80 backdrop-blur-md p-1 rounded-2xl shadow-sm border border-slate-200 flex gap-1">
          {[
            { code: 'ar', label: 'العربية' },
            { code: 'en', label: 'English' },
            { code: 'he', label: 'עברית' }
          ].map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${i18n.language === lang.code
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase">
            {t('pricing.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            dangerouslySetInnerHTML={{ __html: t('pricing.title') }} />
          <p className="max-w-2xl mx-auto text-lg text-slate-600 font-medium">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-bold transition-colors ${!yearly ? "text-slate-900" : "text-slate-400"}`}>
              {t('pricing.monthly')}
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-16 h-8 rounded-full bg-slate-200 p-1 transition-all duration-300 hover:bg-slate-300"
            >
              <motion.div
                animate={{ x: yearly ? (isRtl ? -32 : 32) : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-blue-600 shadow-lg"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold transition-colors ${yearly ? "text-slate-900" : "text-slate-400"}`}>
                {t('pricing.yearly')}
              </span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full border border-emerald-200">
                {t('pricing.save')}
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
              <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.basic.name')}</h3>
              <p className="text-slate-500 text-sm mt-1">{t('pricing.plans.basic.desc')}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price(39)}</span>
                <span className="text-slate-500 font-medium">{yearly ? t('pricing.perYear') : t('pricing.perMonth')}</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink("basic")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 font-bold mb-8 transition-all hover:bg-slate-50 flex items-center justify-center gap-2 group text-center"
            >
              {t('pricing.startNow')}
              {isRtl ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </a>

            <div className="space-y-4 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('pricing.featuresTitle')}</p>
              {features.basic.map((fKey) => (
                <div key={fKey} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 bg-blue-50 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium leading-tight">{t(`pricing.plans.basic.${fKey}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div variants={itemVariants} className="relative rounded-3xl p-8 flex flex-col border-2 border-blue-600 bg-white shadow-2xl scale-105 z-10 overflow-hidden transition-all duration-300 hover:scale-[1.05]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-50 rounded-full opacity-50" />

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {t('pricing.mostPopular')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.pro.name')}</h3>
              <p className="text-slate-500 text-sm mt-1">{t('pricing.plans.pro.desc')}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price(59)}</span>
                <span className="text-slate-500 font-medium">{yearly ? t('pricing.perYear') : t('pricing.perMonth')}</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink("pro")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-bold mb-8 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2 group text-center"
            >
              {t('pricing.tryFree')}
              {isRtl ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </a>

            <div className="space-y-4 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('pricing.proFeaturesTitle')}</p>
              {features.pro.map((fKey) => (
                <div key={fKey} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm font-bold leading-tight">{t(`pricing.plans.pro.${fKey}`)}</span>
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
              <h3 className="text-xl font-bold text-slate-900">{t('pricing.plans.enterprise.name')}</h3>
              <p className="text-slate-500 text-sm mt-1">{t('pricing.plans.enterprise.desc')}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">{t('pricing.contactPrice')}</span>
              </div>
            </div>

            <a
              href={getWhatsAppLink("enterprise")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-slate-900 text-white font-bold mb-8 transition-all hover:bg-slate-800 flex items-center justify-center gap-2 group text-center"
            >
              {t('pricing.contactUs')}
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>

            <div className="space-y-4 flex-grow">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('pricing.enterpriseFeaturesTitle')}</p>
              {features.enterprise.map((fKey) => (
                <div key={fKey} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 bg-blue-50 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium leading-tight">{t(`pricing.plans.enterprise.${fKey}`)}</span>
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
                {t('pricing.security')}
              </span>
              <span className="font-bold text-slate-600 flex items-center gap-2 text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {t('pricing.support')}
              </span>
              <span className="font-bold text-slate-600 flex items-center gap-2 text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {t('pricing.updates')}
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

          <p className="mt-8 text-sm font-medium text-slate-400" dangerouslySetInnerHTML={{ __html: t('pricing.footer') }} />
        </motion.div>
      </div>
    </section>
  )
}
