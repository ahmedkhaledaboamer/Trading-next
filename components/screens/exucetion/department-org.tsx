import {
  UsersIcon,
  ShipIcon,
  TruckIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  BarChartIcon,
} from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'

const departmentVisuals = [
  {
    image:
      "/images/execution/0014.webp",
    icon: UsersIcon,
  },
  {
    image:
    "/images/execution/0015.webp",
    icon: ShipIcon,
  },
  {
    image:
     "/images/execution/0016.webp",
    icon: TruckIcon,
  },
  {
    image:
     "/images/execution/0017.webp",
    icon: BriefcaseIcon,
  },
  {
    image:
     "/images/execution/0018.webp",
    icon: ShieldCheckIcon,
  },
  {
    image:
     "/images/execution/0019.webp",
    icon: BarChartIcon,
  },
]

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

const roleBorderColors = [
  'border-emerald-400/70',
  'border-sky-400/70',
  'border-fuchsia-400/70',
  'border-orange-400/70',
  'border-lime-400/70',
  'border-rose-400/70',
  'border-cyan-400/70',
  'border-amber-400/70',
]

const roleTitleColors = [
  'text-emerald-300',
  'text-sky-300',
  'text-fuchsia-300',
  'text-orange-300',
  'text-lime-300',
  'text-rose-300',
  'text-cyan-300',
  'text-amber-300',
]

export async function DepartmentOrg() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  const t = await getTranslations("execution.departmentOrg");
  const departments = t.raw("departments") as {
    title: string;
    roles: { title: string; desc: string }[];
  }[];
  return (
    <section className="p-[3%] md:p-[5%] bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-5xl font-bold text-indigo-800 mb-4 bg-indigo-100 border-2 border-indigo-400 rounded-xl px-8 py-4 inline-block">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          {departments.map((dept, idx) => {
            const visual = departmentVisuals[idx]
            const Icon = visual.icon
            return (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-xl bg-gray-900/80 shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${cardColors[idx % cardColors.length]} border-4`}
            >
              {/* Card Header Background */}
              <div className="relative h-[400px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                  backgroundImage: `url('${visual.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div
                    className={`p-3 rounded-full mb-3 text-white shadow-lg ${badgeColors[idx % badgeColors.length]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {dept.title}
                  </h3>
                </div>
              </div>

              {/* Roles List */}
              <div className="p-6 space-y-4 bg-gray-900/80 border-t border-gray-700 h-full" dir={isRTL ? "rtl" : "ltr"}>
                {dept.roles.map((role, rIdx) => (
                  <div
                    key={rIdx}
                    className={`border-r-2 border pr-4 bg-gray-700/30 p-3 rounded-l-lg hover:bg-gray-700/50 transition-colors ${roleBorderColors[idx % roleBorderColors.length]}`}
                  >
                    <h4
                      className={`font-bold text-xl md:text-2xl mb-1 ${roleTitleColors[idx % roleTitleColors.length]}`}
                    >
                      {role.title}
                    </h4>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
