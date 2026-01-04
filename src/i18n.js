import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    ar: {
        translation: {
            pricing: {
                title: "اختر الخطة المناسبة <span class='text-blue-600'>لعملك</span>",
                subtitle: "نظام GarageFlow يوفر لك كل ما تحتاجه لإدارة مركز الصيانة الخاص بك باحترافية وسهولة تامة.",
                badge: "الأسعار والخطط",
                monthly: "شهري",
                yearly: "سنوي",
                save: "وفر 20%",
                perMonth: "/شهر",
                perYear: "/سنة",
                startNow: "ابدأ الآن",
                tryFree: "جرّب مجاناً",
                contactUs: "تواصل معنا",
                mostPopular: "الأكثر طلباً",
                featuresTitle: "ماذا ستحصل:",
                proFeaturesTitle: "كل ميزات الأساسي بالإضافة لـ:",
                enterpriseFeaturesTitle: "مميزات حصرية:",
                contactPrice: "اتصل بنا",
                whatsappMessage: "مرحباً GarageFlow، أود الاستفسار عن باقة {{plan}} ({{cycle}})",
                security: "أمان كامل للبيانات",
                support: "دعم فني 24/7",
                updates: "تحديثات دورية مجانية",
                footer: "جميع الحقوق محفوظة لشركة GarageFlow &copy; 2024",
                plans: {
                    basic: {
                        name: "أساسي",
                        desc: "مثالي للورش الصغيرة والمبتدئين",
                        f1: "إدارة الزبائن والمركبات",
                        f2: "فتح وتتبع أوامر الإصلاح",
                        f3: "إضافة قطع الغيار وتكاليف العمالة",
                        f4: "الدفع النقدي",
                        f5: "تقارير أساسية للإيرادات والمصروفات",
                        f6: "مستخدم واحد"
                    },
                    pro: {
                        name: "احترافي",
                        desc: "القوة والتحكم الكامل لمركزك",
                        f1: "كل ميزات الخطة الأساسية",
                        f2: "تعدد طرق الدفع والشيكات",
                        f3: "إدارة الشيكات والتذكيرات",
                        f4: "إدارة المصاريف والرواتب والسلف",
                        f5: "لوحة تحكم وإحصائيات حية",
                        f6: "نظام صلاحيات للمستخدمين RBAC",
                        f7: "نسخ احتياطي آلي",
                        f8: "حتى 5 مستخدمين"
                    },
                    enterprise: {
                        name: "مؤسسي",
                        desc: "حلول مخصصة للشركات والمراكز الكبرى",
                        f1: "كل ميزات الخطة الاحترافية",
                        f2: "عدد مستخدمين غير محدود",
                        f3: "تخصيص متقدم للتقارير وواجهة العمل",
                        f4: "تصدير PDF",
                        f5: "دعم وأولوية عالية",
                        f6: "أمان وصلاحيات متقدمة",
                        f7: "نسخ احتياطي متقدم واستعادة بيانات",
                        f8: "تشغيل على Windows عبر Electron"
                    }
                }
            }
        }
    },
    en: {
        translation: {
            pricing: {
                title: "Choose the Perfect <span class='text-blue-600'>Plan</span>",
                subtitle: "GarageFlow provides everything you need to manage your service center professionally and easily.",
                badge: "Pricing & Plans",
                monthly: "Monthly",
                yearly: "Yearly",
                save: "Save 20%",
                perMonth: "/month",
                perYear: "/year",
                startNow: "Start Now",
                tryFree: "Try for Free",
                contactUs: "Contact Us",
                mostPopular: "Most Popular",
                featuresTitle: "What you get:",
                proFeaturesTitle: "All Basic features plus:",
                enterpriseFeaturesTitle: "Exclusive features:",
                contactPrice: "Contact Us",
                whatsappMessage: "Hello GarageFlow, I would like to inquire about the {{plan}} plan ({{cycle}})",
                security: "Total Data Security",
                support: "24/7 Technical Support",
                updates: "Free Regular Updates",
                footer: "All rights reserved to GarageFlow &copy; 2024",
                plans: {
                    basic: {
                        name: "Basic",
                        desc: "Ideal for small garages and beginners",
                        f1: "Customer & Vehicle Management",
                        f2: "Open & Track Repair Orders",
                        f3: "Add Spare Parts & Labor Costs",
                        f4: "Cash Payments",
                        f5: "Basic Revenue & Expense Reports",
                        f6: "1 User"
                    },
                    pro: {
                        name: "Professional",
                        desc: "Power and total control for your center",
                        f1: "All Basic Plan features",
                        f2: "Multiple Payment Methods & Checks",
                        f3: "Check Management & Reminders",
                        f4: "Expense, Salary & Advance Management",
                        f5: "Live Dashboard & Statistics",
                        f6: "RBAC User Permissions System",
                        f7: "Automatic Backup",
                        f8: "Up to 5 Users"
                    },
                    enterprise: {
                        name: "Enterprise",
                        desc: "Custom solutions for companies & large centers",
                        f1: "All Pro Plan features",
                        f2: "Unlimited Users",
                        f3: "Advanced Report & UI Customization",
                        f4: "PDF Export",
                        f5: "Priority High-Level Support",
                        f6: "Advanced Security & Permissions",
                        f7: "Advanced Backup & Data Recovery",
                        f8: "Windows Support via Electron"
                    }
                }
            }
        }
    },
    he: {
        translation: {
            pricing: {
                title: "בחרו את התוכנית <span class='text-blue-600'>המתאימה</span>",
                subtitle: "מערכת GarageFlow מספקת את כל מה שצריך לניהול מרכז השירות שלך במקצועיות ובקלות.",
                badge: "מחירים ותוכניות",
                monthly: "חודשי",
                yearly: "שנתי",
                save: "חסוך 20%",
                perMonth: "/חודש",
                perYear: "/שנה",
                startNow: "התחל עכשיו",
                tryFree: "נסה בחינם",
                contactUs: "צור קשר",
                mostPopular: "הפופולרי ביותר",
                featuresTitle: "מה תקבלו:",
                proFeaturesTitle: "כל תכונות הבסיס פלוס:",
                enterpriseFeaturesTitle: "תכונות בלעדיות:",
                contactPrice: "צור קשר",
                whatsappMessage: "שלום GarageFlow, אשמח לברר על חבילת ה-{{plan}} ({{cycle}})",
                security: "אבטחת נתונים מלאה",
                support: "תמיכה טכנית 24/7",
                updates: "עדכונים שוטפים בחינם",
                footer: "כל הזכויות שמורות ל-GarageFlow &copy; 2024",
                plans: {
                    basic: {
                        name: "בסיסי",
                        desc: "אידיאלי למוסכים קטנים ומתחילים",
                        f1: "ניהול לקוחות ורכבים",
                        f2: "פתיחה ומעקב אחר פקודות תיקון",
                        f3: "הוספת חלקי חילוף ועלויות עבודה",
                        f4: "תשלום במזומן",
                        f5: "דוחות הכנסות והוצאות בסיסיים",
                        f6: "משתמש אחד"
                    },
                    pro: {
                        name: "מקצועי",
                        desc: "עוצמה ושליטה מלאה למרכז שלך",
                        f1: "כל תכונות התוכנית הבסיסית",
                        f2: "שיטות תשלום מרובות ושיקים",
                        f3: "ניהול שיקים ותזכורות",
                        f4: "ניהול הוצאות, משכורות ומקדמות",
                        f5: "לוח בקרה וסטטיסטיקה בזמן אמת",
                        f6: "מערכת הרשאות משתמשים RBAC",
                        f7: "גיבוי אוטומטי",
                        f8: "עד 5 משתמשים"
                    },
                    enterprise: {
                        name: "ארגוני",
                        desc: "פתרונות מותאמים אישית לחברות ומרכזים גדולים",
                        f1: "כל תכונות תוכנית המקצועית",
                        f2: "מספר משתמשים בלתי מוגבל",
                        f3: "התאמה מתקדמת של דוחות וממשק עבודה",
                        f4: "ייצוא ל-PDF",
                        f5: "תמיכה ועדיפות גבוהה",
                        f6: "אבטחה והרשאות מתקדמות",
                        f7: "גיבוי מתקדם ושחזור נתונים",
                        f8: "הפעלה ב-Windows באמצעות Electron"
                    }
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

export default i18n;
