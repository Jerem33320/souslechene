import { BookOpen, Globe, CalendarDays, Ruler } from "lucide-react";

export const AboutBookDetails = () => {
  const details = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      label: "Nombre de pages",
      value: "274 pages",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      label: "Langue",
      value: "Français",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-primary" />,
      label: "Date de publication",
      value: "28 septembre 2025",
    },
    {
      icon: <Ruler className="w-8 h-8 text-primary" />,
      label: "Dimensions",
      value: "15.24 × 1.57 × 22.86 cm",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center font-crimson">
      {details.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-card/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:bg-card/50 transition-all duration-500"
        >
          <div className="mb-3">{item.icon}</div>
          <p className="text-sm text-muted-foreground">{item.label}</p>
          <p className="text-lg font-semibold text-sepia-dark mt-1">{item.value}</p>
        </div>
      ))}
    </div>
  );
};
