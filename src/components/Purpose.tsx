import { Users, Heart, ShoppingBag, Compass } from "lucide-react";

const Purpose = () => {
  const purposes = [
    {
      icon: Users,
      title: "Conectar personas",
      description: "Incentivar a personas del interior y exterior a explorar Mendoza"
    },
    {
      icon: Heart,
      title: "Cultura e historia",
      description: "Conocer y valorar la rica cultura e historia mendocina"
    },
    {
      icon: ShoppingBag,
      title: "Comercio local",
      description: "Fomentar el consumo y apoyo a los comercios locales"
    },
    {
      icon: Compass,
      title: "Experiencias únicas",
      description: "Vivir aventuras auténticas en cada rincón de la provincia"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Qué buscamos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestra misión es transformar la forma en que las personas descubren y viven Mendoza, 
            creando conexiones auténticas con nuestra tierra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {purposes.map((purpose, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-warm hover:shadow-mountain transition-smooth hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <purpose.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                {purpose.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {purpose.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;