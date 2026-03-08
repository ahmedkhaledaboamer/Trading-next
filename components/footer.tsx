import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import {
  ArrowLeft, ArrowRight, Facebook, Instagram,
  Linkedin, Mail, MapPin, Phone, Twitter,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Logo from "./logo";

interface FooterLink { label: string; href: string; }

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  const contact = {
    title: t("contact.title"),
    phone: t("contact.phone"),
    email: t("contact.email"),
    location: t("contact.location"),
  };

  const quickLinksRaw = t.raw("quickLinks.links");
  const quickLinks: FooterLink[] = Array.isArray(quickLinksRaw)
    ? quickLinksRaw
        .map((link: unknown) => {
          const l = link as { label?: unknown; href?: unknown };
          return { label: String(l.label || ""), href: String(l.href || "") };
        })
        .filter((link) => link.href && link.href !== "[object Object]")
    : [];

  /** Arrow icon: right in LTR, left in RTL */
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const socialLinks = [
    { name: "LinkedIn",  icon: Linkedin,  href: "https://linkedin.com",  ariaLabel: t("socialMedia.linkedin")  },
    { name: "Twitter",   icon: Twitter,   href: "https://twitter.com",   ariaLabel: t("socialMedia.twitter")   },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", ariaLabel: t("socialMedia.instagram") },
    { name: "Facebook",  icon: Facebook,  href: "https://facebook.com",  ariaLabel: t("socialMedia.facebook")  },
  ];

  /** Reusable glass tile */
  const tileBase = cn(
    "relative overflow-hidden rounded-[18px]",
    "border border-white/[0.08] bg-white/[0.04]",
    "p-5 lg:p-6",
    "backdrop-blur-md",
    "transition-[background,border-color] duration-300",
    "hover:bg-white/[0.07] hover:border-white/[0.12]",
    // shine sweep on hover
    "before:absolute before:top-0 before:-left-[60%] before:h-full before:w-[40%]",
    "before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/[0.04] before:to-transparent",
    "before:transition-[left] before:duration-[600ms] hover:before:left-[120%]",
  );

  /** Small tile section label — aligned with home section labels */
  const tileLabel = cn(
    "text-base md:text-lg font-semibold uppercase tracking-[0.22em] text-white/25",
  );

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#050d1f]"
    >
      {/* ── Aurora background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,60,140,0.55) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-28 -right-16 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(10,40,110,0.45) 0%, transparent 65%)" }} />
        <div className="absolute left-[40%] top-1/3 h-[300px] w-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(253,153,8,0.08) 0%, transparent 65%)" }} />
        {/* Grid lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="relative z-10 mx-auto px-[5%] md:py-[2%] py-[5%]">

        {/* ══ BENTO GRID ══ */}
        <div
          className={cn(
            "grid gap-3",
            /* mobile: 1-col */
            "grid-cols-1",
            /* tablet: 2-col */
            "sm:grid-cols-2",
            /* desktop: 12-col asymmetric */
            "lg:grid-cols-12",
          )}
        >

          {/* ╔═ BRAND TILE (Logo + About) ═╗ — spans 4 cols / 2 rows on desktop */}
          <div
            className={cn(
              tileBase,
              "lg:col-span-4 lg:row-span-2",
              "bg-gradient-to-br from-[rgba(20,45,110,0.6)] to-[rgba(5,13,31,0.8)]",
              "flex flex-col justify-between gap-8",
              "items-center text-center",
            )}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <Logo size={100} className="w-fit" />
              {/* About under logo */}
              <div className="flex flex-col gap-4 w-full">
                <span className={tileLabel}>{t("about") ?? "About Us"}</span>
                {t("description") && (
                  <p className="text-lg md:text-xl font-light leading-relaxed text-white/45">
                    {t("description")}
                  </p>
                )}
                <Link
                  href="/execution"
                  className={cn(
                    "inline-flex items-center gap-2 self-center",
                    isRTL && "flex-row-reverse",
                    "rounded-full bg-[var(--color-primary)] px-4 py-2",
                    "text-base md:text-lg font-bold uppercase tracking-[0.06em] text-[#03091a]",
                    "transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5",
                    "hover:shadow-[0_6px_20px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]",
                  )}
                >
                  {t("cta") ?? "Get in touch"}
                  <ArrowIcon className="h-5 w-5 md:h-6 md:w-6 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>
          </div>

          {/* ╔═ LINKS TILE ═╗ — row 1: cols 5–8 (with Contact + Social filling 9–12) */}
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className={cn(
              tileBase,
              "lg:col-span-3",
              "flex flex-col gap-4",
              "items-start text-start",
            )}
          >
            <span className={tileLabel}>{t("quickLinks.title")}</span>
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-0.5 justify-items-start">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  dir={isRTL ? "rtl" : "ltr"}
                  className={cn(
                    "group flex items-center gap-1.5 border-b border-white/[0.05] py-2 w-full min-w-0",
                    "text-base font-normal text-white/45 transition-colors hover:text-[var(--color-primary)]",
                    "justify-start",
                    isRTL ? "text-right" : "text-left",
                  )}
                >
                  {link.label}
                  <ArrowIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-[var(--color-primary)] opacity-0 transition-all duration-200 group-hover:opacity-100",
                      isRTL ? "translate-x-1 group-hover:translate-x-0" : "-translate-x-1 group-hover:translate-x-0",
                    )}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* ╔═ CONTACT TILE ═╗ — row 1: cols 9–12 (fills row with Quick Links) */}
          <div
            className={cn(
              tileBase,
              "lg:col-span-5",
              "flex flex-col gap-4",
              "items-start text-start",
            )}
          >
            <span className={tileLabel}>{contact.title}</span>
            <div className="flex w-full flex-col gap-2">
              {[
                { href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: <Phone className="h-6 w-6 md:h-7 md:w-7" />, text: contact.phone, isLink: true, aria: `Call: ${contact.phone}` },
                { href: `mailto:${contact.email}`, icon: <Mail className="h-6 w-6 md:h-7 md:w-7" />, text: contact.email, isLink: true, aria: `Email: ${contact.email}` },
                { href: "", icon: <MapPin className="h-6 w-6 md:h-7 md:w-7" />, text: contact.location, isLink: false, aria: "" },
              ].map(({ href, icon, text, isLink, aria }) => {
                const inner = (
                  <>
                    <span className="flex h-9 w-9 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10">
                      <span className="text-[var(--color-primary)]">{icon}</span>
                    </span>
                    <span
                      className={cn(
                        "text-lg md:text-xl font-normal leading-relaxed text-white/45 break-all",
                        "text-start",
                        isLink && "transition-colors",
                      )}
                    >
                      {text}
                    </span>
                  </>
                );
                return isLink ? (
                  <Link
                    key={text}
                    href={href}
                    aria-label={aria}
                    className={cn(
                      "group flex items-center gap-2.5",
                      "rounded-[10px] border border-white/[0.06] bg-white/[0.03] px-3 py-2.5",
                      "transition-all hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/[0.07]",
                      "justify-start",
                    )}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={text}
                    className={cn(
                      "flex items-center gap-2.5",
                      "rounded-[10px] border border-white/[0.06] bg-white/[0.03] px-3 py-2.5",
                      "justify-start",
                    )}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ╔═ SOCIAL TILE ═╗ — row 2: cols 5–12 (fills right side below Quick Links + Contact) */}
          <div
            className={cn(
              tileBase,
              "lg:col-span-8",
              "flex flex-col gap-4",
              "items-start text-start",
            )}
          >
            <span className={tileLabel}>{t("followUs") ?? "Follow Us"}</span>
            <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
              {socialLinks.map(({ name, icon: Icon, href, ariaLabel }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1.5 rounded-xl py-3",
                    "border border-white/[0.06] bg-white/[0.03]",
                    "text-sm md:text-base font-semibold uppercase tracking-[0.1em] text-white/25",
                    "transition-all duration-200",
                    "hover:border-[var(--color-primary)]/25 hover:bg-[var(--color-primary)]/[0.1] hover:text-[var(--color-primary)] hover:-translate-y-0.5",
                  )}
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  {name}
                </Link>
              ))}
            </div>
          </div>

        </div>{/* /bento */}

        {/* ══ BOTTOM STRIP ══ */}
        <div
          className={cn(
            "mt-3 flex flex-col items-center gap-2 border-t border-white/[0.06] pt-5",
            "text-center",
            "justify-center",
          )}
        >
          <p className="text-base md:text-lg font-light tracking-wide text-white/25">
            {t("copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}