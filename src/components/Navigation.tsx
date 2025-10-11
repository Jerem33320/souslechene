import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-subtle",
      className
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-playfair font-bold text-xl text-primary">
          Sous le chêne, la France
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
        <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sepia-dark hover:text-primary transition-colors font-crimson"
            >
              ⬆
            </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sepia-dark hover:text-primary transition-colors font-crimson"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('extraits')}
            className="text-sepia-dark hover:text-primary transition-colors font-crimson"
          >
            Extraits
          </button>
          <button 
            onClick={() => scrollToSection('auteur')}
            className="text-sepia-dark hover:text-primary transition-colors font-crimson"
          >
            Auteur
          </button>
          <Button 
            variant="amazon" 
            size="sm"
            onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1', '_blank')}
          >
            Acheter sur Amazon
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="amazon" 
            size="sm"
            onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1', '_blank')}
          >
            Amazon
          </Button>
        </div>
      </div>
    </nav>
  );
};