import { GraduationCap, Target, Users2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-muted">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
          ¿Qué es TURI?
        </h2>

        <div className="mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium text-foreground">Nuestra Misión</span>
          </div>
          
          <p className="text-2xl font-light text-foreground leading-relaxed mb-8">
            Una app que premia por visitar puntos de interés en la ciudad
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            TURI nace de la pasión por nuestra tierra mendocina y el deseo de compartir 
            sus tesoros con el mundo. Combinamos tecnología moderna con la calidez de 
            nuestra cultura para crear experiencias memorables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-mountain transition-smooth">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
              Quiénes somos
            </h3>
            <p className="text-muted-foreground">
              Estudiantes comprometidos de <strong>Conectados por Mendoza Futura</strong>, 
              trabajando por el desarrollo tecnológico de nuestra provincia.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-mountain transition-smooth">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
              Nuestro equipo
            </h3>
            <p className="text-muted-foreground">
              Jóvenes innovadores unidos por la visión de un Mendoza más conectado, 
              próspero y accesible para todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;