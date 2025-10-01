import { Card } from "@/components/ui/card";

export const AuthorSection = () => {
  return (
    <section id="auteur" className="py-20 px-4 bg-parchment">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            À propos de l'auteur
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 bg-card border-sepia-light shadow-medium">
          <div className="prose prose-lg max-w-none font-crimson text-foreground leading-relaxed">
            <p className="mt-4 text-lg md:text-xl text-sepia-dark first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Ingénieur de formation, passionné d'histoire, de géographie et de géopolitique, 
              l'auteur nourrit également un goût profond pour les voyages, sources d'inspiration 
              et d'ouverture sur le monde.
            </p>
            
            <p className="mt-4 text-lg md:text-xl text-sepia-dark">
              À travers ce parcours, s'est imposé à lui le besoin impérieux de rappeler combien 
              la France demeure une terre singulière : un pays d'une beauté inépuisable, riche 
              d'un héritage séculaire, mais aussi engagé dans les efforts constants qu'exige la 
              construction d'une nation tournée vers l'avenir et fidèle à son peuple.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-sepia-light">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-playfair font-semibold text-primary mb-2">Formation</h4>
                <p className="font-crimson text-sepia-dark">Ingénieur</p>
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-primary mb-2">Passions</h4>
                <p className="font-crimson text-sepia-dark">Histoire, Géographie, Géopolitique</p>
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-primary mb-2">Inspiration</h4>
                <p className="font-crimson text-sepia-dark">Les autres, Voyages & Découvertes</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};