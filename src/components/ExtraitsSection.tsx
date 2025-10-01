import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import knightIllustration from "@/assets/knights.jpg";
import marianneIllustration from "@/assets/republic.jpg";
import cathedralIllustration from "@/assets/cathedral.jpg";

export const ExtraitsSection = () => {
  const extraits = [
    {
      title: "Les Chevaliers de l'Honneur",
      text: "J’y trouvai un vieux chapiteau sculpté : un chevalier en armure, l’épée levée, et sous ses pieds un croissant brisé. Cette image résumait un siècle, peut-être deux, ceux des Templiers, de la fureur sainte, de la confusion entre la foi et le fer.",
      illustration: knightIllustration,
      alt: "Illustration d'un chevalier médiéval"
    },
    {
      title: "L'Esprit des Cathédrales",
      text: "Dans les fondements silencieux de l\’artisanat et de l\’entreprise française, on retrouve les Compagnons du Devoir, société initiatique médiévale encore active. Ces bâtisseurs de cathédrales, devenus aujourd’hui menuisiers, couvreurs, soudeurs, codeurs même, transmettent un savoir sacré, une éthique du travail, une humilité face à la matière.",
      illustration: cathedralIllustration,
      alt: "Illustration d'une cathédrale gothique"
    },
    {
      title: "La République Éternelle",
      text: "Symbole de la République, Marianne trône dans chaque mairie, sur les timbres, les pièces, les bustes officiels. Mais qui est-elle vraiment ?",
      illustration: marianneIllustration,
      alt: "Illustration de Marianne"
    }
  ];

  return (
    <section id="extraits" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            Extraits & Illustrations
          </h2>
          <p className="font-crimson text-lg text-sepia-dark">
            Découvrez quelques passages qui illustrent l'esprit de l'ouvrage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extraits.map((extrait, index) => (
            <Card 
              key={index} 
              className="group p-6 bg-card border-sepia-light shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <img 
                  src={extrait.illustration} 
                  alt={extrait.alt}
                  className="w-full h-48 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                {extrait.title}
              </h3>
              
              <p className="mt-4 text-lg md:text-xl font-crimson text-sepia-dark leading-relaxed italic">
                "{extrait.text}"
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="literary" 
            size="lg"
            onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.DODZb9cp5PVwsm1qWFRuinvSGVsvlcfEX-yWbpXhppHJGfXVbMUxcWptqnYD7ZoxkK1ExFr0c2zen6GDoClN02DQHqBH5e_28OGASyPuD1WKMbwdmKeZqr86eDSUXLtuE-zwFLFt28o9ylcQPwO5J6lCQE9aa69iq7uauCAZ6cQrywFmaj7CsJI-_mlp7ZlD.YGsT2GN7GYVK5qjnPLIQmmCDUhWmCeAWCHOitsyFVBM&qid=1759302877&sr=1-1', '_blank')}
          >
            Lire l'intégralité sur Amazon
          </Button>
        </div>
      </div>
    </section>
  );
};