import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Sous le chêne, la France
            </h3>
            <p className="font-crimson text-sm opacity-90">
              Un voyage lyrique et académique à travers l'histoire de France
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 font-crimson text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-75 transition-opacity"
                >
                  À propos du livre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('extraits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-75 transition-opacity"
                >
                  Extraits & Illustrations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('auteur')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:opacity-75 transition-opacity"
                >
                  À propos de l'auteur
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Médias</h4>
            <ul className="space-y-2 font-crimson text-sm">
              <li>
                <a
                  href="https://instagram.com/ermitemotivation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity flex items-center lg:justify-start justify-center gap-2"
                >
                  <img
                    src="/src/assets/insta.png"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                  Instagram (motivation/inspiration)
                </a>
              </li>  
              <li>
                <a
                  href="https://fr.pinterest.com/ermiteossau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity flex items-center lg:justify-start justify-center gap-2"
                >
                  <img
                    src="/src/assets/pinterest.png"
                    alt="Pinterest"
                    className="w-8 h-8"
                  />
                  Pinterest (motivation/inspiration)
                </a>
              </li>  
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold mb-4">Achat</h4>
            <Button 
              variant="amazon" 
              size="sm"
              onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.DODZb9cp5PVwsm1qWFRuinvSGVsvlcfEX-yWbpXhppHJGfXVbMUxcWptqnYD7ZoxkK1ExFr0c2zen6GDoClN02DQHqBH5e_28OGASyPuD1WKMbwdmKeZqr86eDSUXLtuE-zwFLFt28o9ylcQPwO5J6lCQE9aa69iq7uauCAZ6cQrywFmaj7CsJI-_mlp7ZlD.YGsT2GN7GYVK5qjnPLIQmmCDUhWmCeAWCHOitsyFVBM&qid=1759302877&sr=1-1', '_blank')}
            >
              Disponible sur Amazon
            </Button>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-crimson text-sm opacity-75">
            © 2025 Sous le chêne, la France. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};