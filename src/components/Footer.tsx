import { Heart, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-primary text-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold">TURI</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Explorá Mendoza, conectá con cultura e historia, y ganá mientras caminás.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#inicio" className="hover:text-primary-glow transition-smooth">Inicio</a></li>
              <li><a href="#como-funciona" className="hover:text-primary-glow transition-smooth">Cómo funciona</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-primary-glow transition-smooth">Sobre nosotros</a></li>
              <li><a href="#contacto" className="hover:text-primary-glow transition-smooth">Contacto</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Mendoza Futura</h4>
            <p className="text-background/80 leading-relaxed mb-4">
              Proyecto desarrollado por estudiantes comprometidos con el futuro tecnológico de nuestra provincia.
            </p>
            <div className="flex items-center gap-2 text-primary-glow">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Hecho con amor en Mendoza</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Mendoza Futura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;