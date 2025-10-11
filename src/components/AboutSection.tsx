import { Card } from "@/components/ui/card";
import { AboutBookDetails } from "./AboutBookDetails";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-parchment">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            À propos du livre
          </h2>
          <p className="font-crimson text-lg text-sepia-dark">
            Roman historique
          </p>
        </div>
        
        <Card className="p-8 md:p-12 bg-card border-sepia-light shadow-medium">
          <div className="prose prose-lg max-w-none font-crimson text-foreground leading-relaxed">
            <p className="text-xl text-sepia-dark first-letter:text-6xl first-letter:font-playfair first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              À travers les âges, des forêts celtiques, en passant par les barricades de 1789 jusqu'à notre ère, 
              ce livre caché sous un grand chêne, remonte le fil de notre histoire pour y redécouvrir la fierté 
              d'un peuple, la constance d'une idée, la quête inlassable de liberté, de justice et d'universel.
            </p>
            
            <p className="mt-4 text-lg md:text-xl text-sepia-dark">
              Sous la plume d'un vieil ermite, témoin de l'éternité des peuples et des révolutions, la France se 
              raconte comme on évoque une flamme : fragile, vacillante, mais inextinguible. De Vercingétorix à 
              Jeanne d'Arc, de Montaigne à Robespierre, l'ouvrage explore les grandes étapes d'un destin collectif 
              unique, nourri de sang, de mots, et de visions.
            </p>
            
            <p className="mt-4 text-lg md:text-xl text-sepia-dark">
              Ce livre est une ode à la mémoire et au vécu, mais aussi la quête d'un avenir. Il invite chaque 
              lecteur à se réapproprier les racines profondes de notre nation, à renouer avec l'idéal républicain, 
              et à porter haut les valeurs qui, depuis deux mille ans, forgent la singularité française.
            </p>
            
            <p className="mt-4 text-lg md:text-xl text-sepia-dark">
              Ce récit ne peut être qu'un résumé de l'histoire, mais plus encore une méditation partagée, un acte 
              de transmission et de résistance. À l'heure des doutes et des replis, il rappelle que l'Histoire 
              n'est pas un fardeau : elle est un flambeau. Mais ce flambeau n'appartient pas qu'aux morts ni aux 
              livres : il revient à chaque lecteur de le saisir, de le porter plus loin.
            </p>
            <p className="mt-4 text-lg md:text-xl text-orange-500">
                - APOLITIQUE - HUMBLE - ENSEMBLE -
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-sepia-light">
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-crimson italic">
              L'écriture de "Sous le chêne, la France" a pris 12 mois, entre recherches historiques,
              réflexions personnelles et voyages à travers les régions de France. Chaque chapitre est le fruit
              d'une immersion profonde dans les époques et les lieux qui ont façonné notre identité nationale.
              Ce livre est dédié à tous ceux qui, comme l'auteur, croient en la puissance de l'histoire pour
              éclairer notre présent et inspirer notre avenir.
            </p>
          </div>
        </Card>
        <AboutBookDetails />
      </div>
    </section>
  );
};