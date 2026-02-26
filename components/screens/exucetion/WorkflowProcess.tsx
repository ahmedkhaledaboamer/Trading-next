import {
  ClipboardListIcon,
  ArrowLeftRightIcon,
  HeadphonesIcon,
  PlayIcon,
  ActivityIcon,
  CheckCircleIcon,
  FileCheckIcon,
  TrendingUpIcon,
} from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server';

const stepIcons = [
  ClipboardListIcon,
  ArrowLeftRightIcon,
  HeadphonesIcon,
  PlayIcon,
  ActivityIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  FileCheckIcon,
] as const

export async function WorkflowProcess() {
  const cardColors = [
    'bg-gradient-to-br from-emerald-500/25 via-emerald-500/10 to-transparent border-emerald-400/70',
    'bg-gradient-to-br from-sky-500/25 via-sky-500/10 to-transparent border-sky-400/70',
    'bg-gradient-to-br from-fuchsia-500/25 via-fuchsia-500/10 to-transparent border-fuchsia-400/70',
    'bg-gradient-to-br from-orange-500/25 via-orange-500/10 to-transparent border-orange-400/70',
    'bg-gradient-to-br from-lime-500/25 via-lime-500/10 to-transparent border-lime-400/70',
    'bg-gradient-to-br from-rose-500/25 via-rose-500/10 to-transparent border-rose-400/70',
    'bg-gradient-to-br from-cyan-500/25 via-cyan-500/10 to-transparent border-cyan-400/70',
    'bg-gradient-to-br from-amber-500/25 via-amber-500/10 to-transparent border-amber-400/70',
  ]

  const badgeColors = [
    'bg-emerald-500',
    'bg-sky-500',
    'bg-fuchsia-500',
    'bg-orange-500',
    'bg-lime-500',
    'bg-rose-500',
    'bg-cyan-500',
    'bg-amber-500',
  ]

  const iconColors = [
    'text-emerald-300',
    'text-sky-300',
    'text-fuchsia-300',
    'text-orange-300',
    'text-lime-300',
    'text-rose-300',
    'text-cyan-300',
    'text-amber-300',
  ]
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("execution.workflow");
  const steps = t.raw("steps") as { title: string; desc: string }[];
  return (
    <section className="relative py-24 overflow-hidden bg-black/70" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Image with Fixed Attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      <div className="relative mx-auto p-[5%] z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-cyan-100 mb-4 bg-cyan-900/60 border-2 border-cyan-400 rounded-xl px-6 py-3 w-fit mx-auto">
            {t("title")}
          </h2>
          <p className="text-amber-200 text-base md:text-xl bg-amber-950/50 border-2 border-amber-500/70 rounded-lg px-6 py-2 w-fit mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx]
            return (
            <div
              key={idx}
              className={`relative group bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${cardColors[idx % cardColors.length]} border-2`}
            >
              <div
                className={`absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-gray-900 ${badgeColors[idx % badgeColors.length]}`}
              >
                {idx + 1}
              </div>

              <div className={`mb-4 ${iconColors[idx % iconColors.length]}`}>
                <Icon className="w-10 h-10" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {step.desc}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
