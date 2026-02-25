import { cn } from "@/utils/cn";

interface Props {
  title: string;
  subtitle?: string;
  items: string[];
  closing?: string;
  bg?: string;
}

export default function SectionWithList({
  title,
  subtitle,
  items,
  closing,
  bg = "bg-[#f7f3eb]",
}: Props) {
  return (
    <section className={cn("w-full", bg)}>
      <div className="p-[5%] flex flex-col gap-8 max-w-3xl">
        <header className="flex flex-col gap-3">
          <h2
            className="font-bold text-secondary"
            style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-secondary/70">{subtitle}</p>
          )}
        </header>

        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-secondary/85"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {closing && (
          <p className="text-secondary/60 italic border-r-4 border-primary pr-4 text-sm">
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}