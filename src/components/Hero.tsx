import { Button } from "@/components/ui/enhanced-button";
import { MapPin, Smartphone, Award } from "lucide-react";
import heroImage from "@/assets/hero-mendoza.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Paisaje de Mendoza con viñedos y montañas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mucho más que
            <span className="block text-gradient bg-gradient-to-r from-primary-glow via-accent to-secondary bg-clip-text text-transparent">
              turismo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Explorá Mendoza, conectá con cultura e historia, y ganá mientras caminás.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Descubrí lugares únicos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-5 w-5 text-primary-glow" />
              <span className="text-sm font-medium">Ganá recompensas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Smartphone className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Experiencia móvil</span>
            </div>
          </div>

          <Button variant="hero" size="xl" className="animate-scale-in shadow-glow">
            Descubrí la app
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;