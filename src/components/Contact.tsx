import { Instagram, Mail, Youtube, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conectá con nosotros
          </h2>
          <p className="text-xl text-muted-foreground">
            Seguinos en nuestras redes y mantente al día con las novedades de TURI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@turi-mendoza.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Mendoza, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Soporte</p>
                    <p className="text-muted-foreground">Disponible en la app</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                Seguinos en redes
              </h4>
               <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-bounce">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white hover:border-red-500 transition-bounce">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-black hover:text-white hover:border-black transition-bounce">
                  <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAZlBMVEX///8AAADr6+tQUFDj4+MzMzPm5ub5+fmoqKjv7+93d3cRERHd3d1gYGClpaWRkZHOzs68vLxAQEAhISEcHBzHx8dra2vX19eIiIhHR0d/f38oKCgICAhaWloWFhZVVVWdnZ2xsbGinzy4AAAEXElEQVR4nO2b2ZaCMAyGKTsIAi4oMI76/i854jIUulFJgZ7T/xaOfHZJ0iS1LCMjIyMjIyMjIyMjIyMjIx0URLbvPuXbUbA0DakgKbZZWTXoraYqs22RrIn0WDveDyL04zn1cWm2p/yiJPFwlYW/MGKe7fiIrXZZviDi6XIQI7Y6XE4LIebpOMKX0iVG0443MowIbWJ7ZsTgLon4xAxnNUmJ1Ex3SpP5GI/ed4wIeXPZzeD8LWKr8yxTHsVTGBGKoxkYq2mMCFXKKf39VEaE9or9pD/CC4q1U0oZjXSDIh0Uzvj09fiRunUZTNzXuGJVlmi0fTyUcas6pUTCH53VMB5HD9P1PZkub5sp8T3JeF/ofOIdnov3FPjxQCKm+Ie8895K4Zcl93ssSIv7WgjNaP9+Bcn9a7/QUbCU9ekgA+5RMoZlPEkF4h2k5Tec9jawxzO5SByDtCIeZQrJeJJi7EFaPu8PQg6l5JGmB8n1poBDmUsGP85g27o1KzI5wJ3GMzlGAvIx58fwHNOsWAbFKB3pkpCtAppfBYt/C0lGGUhUAEEKcnvTIEsgSFlGKUgEwzg+jvwKEiaurNVC1hCMwVUt5BUirEzkj9pSkDuICL3gnKbEkGFnYhiQPxBGKBxJ5lWO8y7kYJBbFH88HwMSJEAf5RPTe564tu8XDQGJDh9MBiSAZ+TH1k/tsv98hO+RkA/tb0kUsEaynL5zhKmVfYalTFw65ENNnDEScgApF5sXWbeMvc1JQI5Y0c3085jP/8LgLPUNJJoeCPEh68F6WiMkEf2vELIi9uX6IPfkAWV9kJQUI2EnF4fsT3Z+v93C7dDjLA3Zc2duiZnq2SGZxnyDW/Ft79HsxpzpFkvMm937j+QgAdwiM8DAZjsfeGU5SIAAgxWqYbEqkeyRg4RIYjA+s+8SYsTeokVBbEEEvYzjQ9OtJOLMKwUJcnxgHMS8biURYy0FCXIQYxxpMUgCRAoS5EjLSA543XQTCa20eyaGBEkOMNIsjfv/QjJ8hjn1mxASqHxH/e3f7sejy+AZZp3EORoYRkbq79a9MJhvLBS2HREjVOqPnkTF1lLQN/jdQrBc4UBCJVHp6WgPY8FL4R4eCgv3DVw7Bt0z9sag+MxrjLNbwt4XsMQ+o0Sy671jH7NrlW7zntUT5l8BSySMYpNwOYlTm5B1O3rZbicKBMUhEGgFlD6UggVlC0u7oAVQVimZG2UFgiwSeCmZVZS/cxjFOUPgojyzvWHLZBz6SlLg7Q3MTVDTd8+YcgB4owi75cahhTGZcD0qabnhNC+lp/5oRvcxfU4qmpe47uMaHj/ryy2yca1YilqQeQ11+ypN4zhOL2NLUzABOSktWhO1aPLUo11Wj8ZjPVq49WiG1+NawdQLGsPylDJpcNXF0uPS0GPKw/Vfv7K0uMjWSoMrga00uFzZSoNrqq00uPD70uqvTr+kwSX0t9Z+nd/IyMjIyMjIyMjIyMjIyIiiP8/jPQpvv/u8AAAAAElFTkSuQmCC" 
                    alt="TikTok" 
                    className="h-5 w-5 object-contain" 
                  />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-bounce">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-muted rounded-2xl p-8 shadow-warm">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Conocé más sobre TURI
            </h3>
            
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-primary/30">
              <div className="text-center">
                <Youtube className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">
                  Video de presentación
                </p>
                <p className="text-sm text-muted-foreground">
                  Próximamente disponible
                </p>
              </div>
            </div>
            
            <Button variant="mendoza" className="w-full">
              Ver video en YouTube
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            ¿Listo para comenzar tu aventura?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Descargá TURI y comenzá a explorar Mendoza de una forma completamente nueva
          </p>
          <Button variant="hero" size="xl">
            Descargar TURI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;