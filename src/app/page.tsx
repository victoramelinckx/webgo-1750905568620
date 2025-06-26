
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas." subheadline="Digitalizamos tu negocio rápidamente con soporte constante, ideal para dueños ocupados." cta1="Comienza Ahora" />
<How step1Title="Contacto inicial" step1Desc="Conversa con nosotros sobre tus necesidades." step2Title="Web en 24h" step2Desc="Creamos tu sitio de ventas rápidamente." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para tu negocio." />
<Aboutus headline="WebGo: Digitaliza y Crece" subheadline="Transformamos tus ventas en línea sin esfuerzo, con estrategias únicas y efectivas." beneficiotitulo1="Aumento Rápido" beneficio1="Incrementa ventas online rápidamente." beneficiotitulo2="Gestión Sencilla" beneficio2="Nos encargamos de todo." />
<Services heading="Transforma Tu Negocio en 24 Horas" description="Rapidez e innovación: Llevamos tus ventas al mundo digital." services={[{"name":"Desarrollo Web Express","icon":"bolt","description":"Web de ventas lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para manejar tu web."},{"name":"Optimización SEO","icon":"search","description":"Aumenta visibilidad y atrae clientes."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Añade capacidad de venta online."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido atractivo que engancha."},{"name":"Análisis de Tráfico","icon":"chart-line","description":"Entiende y optimiza visitas."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en sitios web cautivadores y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio en Santiago?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo digital de manera rápida y sin complicaciones. Nos encargamos de crear una presencia online efectiva, para que puedas llegar a más clientes y aumentar tus ventas, incluso si solo has vendido por recomendaciones hasta ahora."},{"pregunta":"¿Qué tan rápido puedo empezar a ver resultados con WebGo?","respuesta":"Con WebGo, la rapidez es clave. Ponemos tu negocio en línea rápidamente para que puedas comenzar a ver resultados en poco tiempo. No tendrás que esperar meses para notar el impacto en tus ventas."},{"pregunta":"¿Qué pasa si no tengo tiempo para gestionar un sitio web?","respuesta":"No te preocupes, en WebGo nos encargamos de todo. Nuestro compromiso es facilitarte la gestión del sitio web, para que tú te enfoques en lo que mejor sabes hacer: manejar tu negocio. Así no tendrás que invertir tiempo extra en aprender o gestionar tecnología."},{"pregunta":"¿WebGo ofrece soluciones innovadoras para aumentar mis ventas?","respuesta":"Sí, en WebGo nos destacamos por nuestra innovación. Utilizamos las últimas herramientas y estrategias digitales para asegurarnos de que tu negocio no solo esté en línea, sino que también se destaque y atraiga a más clientes potenciales."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo y qué incluye?","respuesta":"El servicio de WebGo tiene un costo de 120 y abarca todo lo necesario para digitalizar tus ventas: desde el diseño y desarrollo de tu sitio web hasta la implementación de estrategias para atraer clientes. Todo esto con un compromiso de calidad y resultados."}]} />
<BookAppointment 
                      heading="Digitaliza Tus Ventas y Llega Más Lejos" 
                      description="Transforma tu negocio con WebGo: rapidez, compromiso e innovación por solo $120. No pierdas más tiempo."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
