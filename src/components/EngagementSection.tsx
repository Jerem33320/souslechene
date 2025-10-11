import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const EngagementSection = () => {
  const reviews = [
    {
      title: "Coup de cœur, merci de me rendre encore plus fière de mon pays",
      date: "1 octobre 2025",
      content: `J'ai eu la chance de découvrir ce livre par hasard et j'ai adoré le lire. Moi qui ai du mal avec les romans historiques, j'ai beaucoup apprécié le personnage de l'ermite et sa manière de raconter l'Histoire de France sous forme de récit et non de résumé historique. L'écriture fluide et agréable nous amène facilement à la page suivante si bien que j'ai eu du mal à m'arrêter. Ce livre m'a rendue très fière de mon pays, de son identité, tout en restant factuel et impartial.`,
    },
    {
      title: "Une merveille littéraire et historique",
      date: "5 octobre 2025",
      content: `Un roman profondément touchant. On y ressent l’amour de la France et la profondeur de sa mémoire. L’auteur parvient à mêler érudition et poésie avec une rare élégance. Chaque chapitre m’a captivé.`,
    },
    {
      title: "À lire absolument",
      date: "7 octobre 2025",
      content: `Une œuvre à la fois instructive et inspirante. Ce livre m’a donné envie de relire notre Histoire autrement. Il nous rappelle combien il est précieux d’aimer et de comprendre notre pays.`,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-sepia">
      <div className="container mx-auto max-w-5xl text-center">
        <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-sepia-light shadow-strong">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8">
            Un appel à la transmission
          </h2>

          <p className="font-crimson text-xl text-sepia-dark leading-relaxed mb-10 max-w-3xl mx-auto">
            Ce livre est plus qu'un récit : c'est un appel à chaque lecteur à continuer de faire 
            rayonner la France et à transmettre son héritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="amazon" 
              size="xl"
              onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1', '_blank')}
              className="min-w-[200px]"
            >
              Acheter sur Amazon
            </Button>
          </div>

          {/* --- Bloc des avis lecteurs --- */}
          <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
            {reviews.map((review, i) => (
              <div 
                key={i} 
                className="p-6 bg-white/80 border border-sepia-light rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <h3 className="font-semibold text-sepia-dark mb-1">{review.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Avis laissé en France le {review.date}
                </p>
                <p className="font-crimson text-sepia-dark text-base leading-relaxed">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
