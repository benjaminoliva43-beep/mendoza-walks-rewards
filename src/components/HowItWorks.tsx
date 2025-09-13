import { Footprints, Gift, MapPin, Trophy } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Footprints,
      title: "Caminá",
      description: "Cada paso cuenta para acumular puntos",
      color: "from-primary to-primary-glow"
    },
    {
      icon: MapPin,
      title: "Explorá",
      description: "Visitá puntos de interés en Mendoza",
      color: "from-accent to-secondary"
    },
    {
      icon: Gift,
      title: "Ganá",
      description: "Recibí bonificaciones por tus recorridos",
      color: "from-secondary to-primary"
    },
    {
      icon: Trophy,
      title: "Disfrutá",
      description: "Canjeá tus recompensas en comercios locales",
      color: "from-primary-glow to-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Cómo funciona?
          </h2>
          <div className="text-2xl font-medium text-gradient mb-8">
            Ganás bonificaciones por cada paso recorrido
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-warm group-hover:shadow-glow transition-smooth step-bounce`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl transform scale-110"></div>
              <img 
                src={appMockup}
                alt="Interfaz de la app TUR I mostrando sistema de recompensas"
                className="relative w-80 h-80 object-cover rounded-3xl shadow-mountain hover:shadow-glow transition-smooth hover:scale-105 float-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;