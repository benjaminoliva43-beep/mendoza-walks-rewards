import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import landmarksImage from "@/assets/mendoza-landmarks.jpg";

const CityShowcase = () => {
  const landmarks = [
    {
      name: "Plaza Independencia",
      description: "El corazón histórico de Mendoza, rodeado de palmeras centenarias y arquitectura colonial."
    },
    {
      name: "Cerro Aconcagua",
      description: "La montaña más alta de América, un símbolo de grandeza y aventura mendocina."
    },
    {
      name: "Bodegas históricas",
      description: "Tradición vitivinícola con más de 400 años de historia en los mejores terroirs."
    },
    {
      name: "Parque San Martín",
      description: "600 hectáreas de naturaleza urbana con el famoso rosedal y vistas panorámicas."
    },
    {
      name: "Centro histórico",
      description: "Arquitectura que cuenta la historia de una ciudad que renació tras el terremoto de 1861."
    }
  ];

  const [currentLandmark, setCurrentLandmark] = useState(0);

  const nextLandmark = () => {
    setCurrentLandmark((prev) => (prev + 1) % landmarks.length);
  };

  const prevLandmark = () => {
    setCurrentLandmark((prev) => (prev - 1 + landmarks.length) % landmarks.length);
  };

  return (
    <section className="py-20 mountain-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conocé nuestra ciudad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubrí los lugares más emblemáticos de Mendoza, cada uno con su propia historia y encanto único.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-mountain">
              <img 
                src={landmarksImage}
                alt="Lugares emblemáticos de Mendoza"
                className="w-full h-[500px] object-cover transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevLandmark}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextLandmark}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {landmarks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLandmark(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentLandmark 
                      ? 'bg-primary shadow-glow' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Landmark Info */}
          <div className="space-y-8">
            <div className="animate-fade-up" key={currentLandmark}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  {landmarks[currentLandmark].name}
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {landmarks[currentLandmark].description}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-warm">
              <h4 className="font-semibold text-card-foreground mb-4">
                Con TURI podés:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Obtener información histórica detallada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Ganar puntos por cada visita
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Acceder a descuentos especiales
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  Compartir tu experiencia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityShowcase;