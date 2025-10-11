import { Button } from "@/components/ui/button";
import bookCover from "@/assets/bookcover.png";
import backCover from "@/assets/backcover.png";
import BookCoverCarousel from "./BookCoverCarousel";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="text-center md:text-left space-y-8 animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Sous le chêne,
            <br />
            <span className="text-sepia-dark">la France</span>
          </h1>
          
          <p className="font-crimson text-lg md:text-xl text-sepia-dark leading-relaxed max-w-xl">
          Un voyage à travers l’histoire et la culture de ce pays, guidé par la voix d’un humble ermite, ponctué de points mystères qui éclairent des dimensions méconnues et de points personnages qui incarnent les grandes figures de la France.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              variant="amazon" 
              size="xl"
              onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1', '_blank')}
              className="animate-slide-in-right"
            >
              Acheter sur Amazon
            </Button>
            <Button 
              variant="literary-outline" 
              size="xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir le livre
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in-slow">
          {/* <div className="relative">
            <img 
              src={bookCover} 
              alt="Couverture du livre Sous le chêne, la France"
              className="w-80 shadow-strong transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-sepia opacity-20 rounded-lg blur-xl -z-10"></div>
          </div> */}
          <BookCoverCarousel frontCover={bookCover} backCover={backCover} />
        </div>
      </div>
    </section>
  );
};