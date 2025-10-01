import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const EngagementSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-sepia">
      <div className="container mx-auto max-w-4xl text-center">
        <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-sepia-light shadow-strong">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8">
            Un appel à la transmission
          </h2>
          
          <p className="font-crimson text-xl text-sepia-dark leading-relaxed mb-10 max-w-3xl mx-auto">
            Ce livre est plus qu'un récit : c'est un appel à chaque lecteur à continuer de faire 
            rayonner la France et à transmettre son héritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="amazon" 
              size="xl"
              onClick={() => window.open('https://www.amazon.fr/dp/B0FTC9KQV1/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.DODZb9cp5PVwsm1qWFRuinvSGVsvlcfEX-yWbpXhppHJGfXVbMUxcWptqnYD7ZoxkK1ExFr0c2zen6GDoClN02DQHqBH5e_28OGASyPuD1WKMbwdmKeZqr86eDSUXLtuE-zwFLFt28o9ylcQPwO5J6lCQE9aa69iq7uauCAZ6cQrywFmaj7CsJI-_mlp7ZlD.YGsT2GN7GYVK5qjnPLIQmmCDUhWmCeAWCHOitsyFVBM&qid=1759302877&sr=1-1', '_blank')}
              className="min-w-[200px]"
            >
              Acheter sur Amazon
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};