import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, CheckCircle, Activity, ClipboardList, Target, UserCheck, Stethoscope, Droplet, Star, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll Reveal Animation
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((element) => {
        gsap.fromTo(element, 
          { y: 30, opacity: 0 }, 
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
      
      // Card Stagger Animation
      const cardContainers = gsap.utils.toArray('.stagger-container');
      cardContainers.forEach((container) => {
        gsap.fromTo(container.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden text-text-body">
      <div className="noise-overlay"></div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-secondary flex items-center pt-12 pb-12 overflow-hidden">
        {/* Decorative Background Letter */}
        <div className="absolute top-10 right-10 md:top-[-5%] md:right-[-5%] text-decorative opacity-20 font-heading italic text-[40rem] leading-none pointer-events-none select-none z-0">
          V
        </div>
        
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 reveal max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/Fotos Vânia/Logo Vânia.png" 
              alt="Logo Vânia Mello" 
              className="h-[64px] md:h-[100px] object-contain mb-4 md:mb-8 mix-blend-multiply opacity-90" 
            />
            <div className="inline-block px-3.5 py-1.5 mb-4 md:mb-6 rounded-[20px] border border-primary/20 text-[13px] md:text-sm font-semibold text-primary/80 max-w-[320px] md:max-w-[400px] leading-snug">
              Nutricionista Clínica • Especialista em Doenças Crônicas • Vinhedo e Região
            </div>
            
            <h1 className="text-[34px] md:text-[52px] leading-[1.15] tracking-tight text-text-heading mb-4 md:mb-6">
              Transforme Seus Exames e Sua <em>Relação com a Comida</em>
            </h1>
            
            <p className="text-[15px] md:text-lg text-text-muted mb-6 md:mb-10 max-w-[500px]">
              Nutrição clínica especializada em Doenças Crônicas para quem precisa controlar diabetes, pressão alta, colesterol e peso.
            </p>
            
            <button className="inline-flex items-center justify-center bg-primary text-white font-body font-semibold text-[15px] sm:text-[16px] py-[14px] px-[28px] sm:py-[18px] sm:px-[36px] rounded-pill shadow-btn hover:shadow-card-hover transform hover:scale-[1.02] transition duration-300 ease-out group" onClick={() => window.location.href = '#'}>
              Quero Agendar Minha Consulta
              <span className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-white rounded-full flex items-center justify-center ml-4 text-primary transform group-hover:translate-x-1 transition duration-300 ease-out">
                <ArrowRight size={18} />
              </span>
            </button>
            <p className="mt-3 md:mt-4 text-[13px] md:text-sm text-text-muted">Atendimento em Vinhedo e Região</p>
          </div>

          <div className="flex-1 relative w-full lg:max-w-none max-w-md reveal">
            <img 
              src="/Fotos Vânia/IMG_9692.jpg" 
              alt="Dra. Vânia Mello" 
              className="w-full h-auto rounded-3xl object-cover shadow-img aspect-[4/5] object-top"
            />
            {/* Social Proof Badge */}
            <div className="absolute -bottom-6 -left-2 md:-left-16 bg-white p-4 md:p-5 rounded-2xl shadow-card flex items-center gap-5">
              <img src="/Doctoralia.svg" alt="Doctoralia" className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] object-contain shrink-0" />
              <div className="flex flex-col min-w-max">
                <div className="flex text-ui-starGold mb-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-sm font-bold text-text-heading">5.0 / 5.0</span>
                <span className="text-[12px] text-text-muted">49 opiniões</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infinite Marquee */}
      <section className="bg-decorative py-4 overflow-hidden border-y border-primary/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center text-primary font-medium text-sm md:text-base">
              <span className="px-6">Resultados que respeitam o seu ritmo</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              <span className="px-6">Planos alimentares que cabem na rotina</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              <span className="px-6">Mais energia e bem-estar no dia a dia</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              <span className="px-6">Alimentação leve sem culpa e sem restrições</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties (Doenças Crônicas) */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-secondary">
        <div className="max-w-[1200px] mx-auto overflow-hidden px-1 md:px-0">
          <div className="mb-14 reveal text-center">
            <h2 className="text-[36px] md:text-[40px] font-semibold mb-3">
              Nutrição para uma vida <em>plena com saúde</em>
            </h2>
            <p className="text-[17px] text-text-muted mt-5 max-w-2xl mx-auto leading-relaxed">
              Atendo pacientes com diferentes condições de saúde, sempre com um plano alimentar feito do zero para o seu caso.
            </p>
          </div>

          <SpecialtiesContent />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-white relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[36px] md:text-[40px] font-semibold mb-3">Como será o nosso <em>processo?</em></h2>
            <p className="text-[17px] text-text-muted mt-5 max-w-2xl mx-auto leading-relaxed">
              Juntos, criaremos um plano alimentar leve, flexível e prazeroso, com estratégias simples para o seu dia a dia, sem culpa e sem restrições exageradas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-container relative pt-4">
            {/* Linha conectora (visível apenas no desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-[2px] bg-secondary z-0" />

            <ProcessColumn 
              step="01" 
              icon={<ClipboardList size={32} className="text-primary opacity-80" strokeWidth={1.5}/>}
              title="Primeira Consulta"
              desc="Uma conversa profunda sobre seus exames, rotina, gostos e dificuldades. Entendemos o seu momento atual."
            />
            <ProcessColumn 
              step="02"
              icon={
                <div className="w-[32px] h-[32px] bg-primary opacity-80" style={{ maskImage: 'url(/food-dinner-svgrepo-com.svg)', WebkitMaskImage: 'url(/food-dinner-svgrepo-com.svg)', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
              }
              title="Plano Alimentar Personalizado"
              desc="Entrega do seu plano feito sob medida, com orientações práticas que realmente cabem no seu dia a dia."
            />
            <ProcessColumn 
              step="03" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-80"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              }
              title="Acompanhamento Contínuo"
              desc="Ajustes constantes, evolução de resultados e suporte para manter a constância a longo prazo."
            />
          </div>

          <div className="mt-16 text-center reveal">
            <button className="inline-flex items-center justify-center bg-primary text-white font-body font-semibold text-[15px] sm:text-[16px] py-[14px] px-[28px] sm:py-[18px] sm:px-[36px] rounded-pill shadow-btn hover:shadow-card-hover transform hover:scale-[1.02] transition duration-300 ease-out group" onClick={() => window.location.href = '#'}>
              Agendar minha consulta
              <span className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-white rounded-full flex items-center justify-center ml-4 text-primary transform group-hover:translate-x-1 transition duration-300 ease-out"><ArrowRight size={18} /></span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-secondary">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full reveal order-2 md:order-1">
            <img 
              src="/Fotos Vânia/IMG_9689.jpg" 
              alt="Vânia Mello" 
              className="w-full h-[600px] object-cover rounded-[24px] shadow-img aspect-[3/4] md:aspect-auto"
            />
          </div>
          <div className="flex-1 reveal order-1 md:order-2">
            <h2 className="text-[40px] leading-tight mb-6">
              Quem é <em>Vânia Mello</em>?
            </h2>
            <div className="space-y-4 text-[16px] text-text-body mb-8">
              <p>
                Olá! Sou Vania Mello, nutricionista especializada no manejo de Doenças Crônicas não Transmissíveis. Minha jornada na nutrição começou na Faculdade Eduvale de Avaré e foi aprimorada com uma pós-graduação no renomado Hospital Albert Einstein.
              </p>
              <p>
                Com 4 anos de experiência, minha paixão é ajudar pessoas a transformar a saúde através da alimentação. Acredito que a nutrição é a chave para uma vida mais saudável e feliz, e minha missão é tornar esse conhecimento acessível e prático para você.
              </p>
              <ul className="space-y-3 pt-6">
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Nutricionista clínica especialista em doenças crônicas</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Foco em Diabetes, Hipertensão, Obesidade e Colesterol</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Atendimento humanizado que respeita sua individualidade</span></li>
              </ul>
            </div>
            
            <div className="p-6 md:p-8 bg-primary shadow-lg rounded-2xl italic text-[18px] md:text-[20px] text-white font-heading mt-6 leading-relaxed relative">
              "Não trato doenças, cuido de pessoas. Seu plano alimentar precisa se adaptar à sua vida, e não o contrário."
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto text-center reveal">
          <h2 className="text-[36px] md:text-[40px] text-white tracking-tight mb-4">O que dizem os <em>pacientes</em></h2>
          <p className="text-[17px] text-white/80 mt-2 mb-16 max-w-2xl mx-auto leading-relaxed">
            Histórias reais de pacientes que encontraram aqui orientação, acolhimento e um plano que funcionou de verdade.
          </p>
          <div className="grid md:grid-cols-3 gap-8 stagger-container text-left">
            <TestimonialCard 
              quote="A Vânia mudou completamente minha visão sobre dieta. Consegui controlar minha glicemia sem deixar de comer o que gosto. O acompanhamento é muito humano e próximo."
              name="Mariana S."
              info="42 anos — Vinhedo"
            />
            <TestimonialCard 
              quote="Depois de anos lutando contra o efeito sanfona, finalmente encontrei um plano que consigo seguir. Meus exames de colesterol nunca estiveram tão bons. Recomendo de olhos fechados!"
              name="Carlos E."
              info="55 anos — Valinhos"
            />
            <TestimonialCard 
              quote="O que mais me impressionou foi como ela adaptou tudo à minha rotina corrida de trabalho. Não passo fome e tenho muito mais energia ao longo do dia."
              name="Juliana P."
              info="38 anos — Campinas"
            />
          </div>
          <div className="mt-16 reveal">
             <button className="inline-flex items-center justify-center bg-white text-primary font-body font-semibold text-[16px] py-[16px] px-[36px] rounded-pill shadow-btn hover:shadow-lg transform hover:scale-[1.02] transition duration-300 group">
                Agendar minha consulta
                <span className="w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center ml-4 text-white transform group-hover:translate-x-1 transition duration-300">
                  <ArrowRight size={18} />
                </span>
             </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-secondary">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 reveal space-y-6">
            <h2 className="text-[36px] md:text-[40px] leading-tight mb-2">
              Onde me <em>encontrar</em>
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              Atendimentos presenciais em um espaço pensado para o seu total conforto e acolhimento.
            </p>
            
            <div className="space-y-6 pt-4">
               <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-xl mb-1 text-text-heading">Íntegra Clinic</h4>
                    <p className="text-text-muted text-[16px] leading-relaxed">
                      Rua Odair Rotella, 110, Centro<br/>
                      Vinhedo/SP - 13280-000
                    </p>
                  </div>
               </div>
               
               <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-lg mb-1 text-text-heading">Horários de Atendimento</h4>
                    <p className="text-text-muted text-[16px] leading-relaxed">
                      Segunda a Sexta: 08h às 19h<br/>
                      Sábados: Apenas com agendamento
                    </p>
                  </div>
               </div>
               
               <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <WhatsAppIcon width={24} height={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-lg mb-1 text-text-heading">Contato</h4>
                    <p className="text-text-muted text-[16px] leading-relaxed text-primary font-medium">
                      Apenas Atendimento via WhatsApp
                    </p>
                  </div>
               </div>
            </div>
          </div>
          <div className="flex-1 w-full reveal h-[400px] lg:h-[500px]">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Rua%20Odair%20Rotella%20110,%20Centro,%20Vinhedo+(%C3%8Dntegra%20Clinic)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '24px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-img"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          <div className="flex-1 w-full reveal md:sticky top-10">
            <img 
              src="/Fotos Vânia/IMG_9706.jpg" 
              alt="Dra. Vânia Mello" 
              className="w-full h-auto aspect-square md:aspect-[4/5] object-cover rounded-[24px] shadow-img"
            />
          </div>
          <div className="flex-[1.2] reveal w-full">
            <h2 className="text-[36px] md:text-[40px] mb-8">Dúvidas <em>Frequentes</em></h2>
            <div className="space-y-4">
              <AccordionItem title="Você aceita convênio médico (SulAmérica, etc)?" content="Os atendimentos são particulares, mas emito recibo para solicitação de reembolso junto ao seu convênio, de acordo com o seu plano." />
              <AccordionItem title="Quanto tempo demora para o plano alimentar ficar pronto?" content="Seu plano alimentar é entregue de forma ágil, focado nas suas necessidades reais e na sua rotina atual." />
              <AccordionItem title="Preciso levar exames na primeira consulta?" content="Se você tiver exames recentes, é ótimo trazer! Mas se não tiver, nós avaliamos a necessidade de solicitações durante a consulta." />
              <AccordionItem title="Você atende crianças e idosos?" content="O acompanhamento é especializado para adultos e idosos, com foco total no controle de doenças crônicas e longevidade." />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA & Footer */}
      <footer className="bg-primary pt-24 md:pt-[120px] rounded-t-[40px] md:rounded-t-[80px] -mt-10 relative z-20 overflow-hidden text-center text-white">
        <div className="section-padding pb-10 pt-0">
          <div className="max-w-2xl mx-auto reveal">
            <h2 className="text-[40px] md:text-[48px] text-white leading-tight mb-6">
              Pronta para dar o <em>próximo passo</em>?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-lg mx-auto">
              Agende sua consulta e vamos juntos construir um caminho sustentável para a sua saúde e bem-estar.
            </p>
            <button className="inline-flex items-center justify-center bg-white text-primary font-body font-semibold text-[16px] py-[16px] px-[36px] rounded-pill shadow-btn hover:shadow-lg transform hover:scale-[1.02] transition duration-300 group">
                Agendar Minha Consulta
                <span className="w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center ml-4 text-white transform group-hover:translate-x-1 transition duration-300">
                  <ArrowRight size={18} />
                </span>
             </button>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 pb-10 flex flex-col items-center">
            <div className="mb-4">
              <img src="/Fotos Vânia/Logo Vânia.png" alt="Logo" className="h-10 mix-blend-screen opacity-90 brightness-200" />
            </div>
            <p className="text-sm opacity-60">Vânia Mello | CRN 3 72661</p>
            <p className="text-sm opacity-60">© {new Date().getFullYear()} Nutricionista Clínica. Todos os direitos reservados.</p>
        </div>
      </footer>
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

// Subcomponents
function FloatingWhatsApp() {
  return (
    <a 
      href="#" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_45px_rgb(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
       <span className="absolute right-full mr-4 bg-white text-text-heading text-[15px] px-4 py-2.5 rounded-[12px] font-semibold flex items-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
         Tire suas dúvidas
         <div className="absolute top-1/2 -mt-1.5 -right-1.5 w-3 h-3 bg-white rotate-45 transform"></div>
       </span>
       <WhatsAppIcon width={34} height={34} />
    </a>
  );
}

function WhatsAppIcon({width=24, height=24}) {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="currentColor">
       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
     </svg>
  );
}

// Subcomponents
function ProcessColumn({ step, icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10 group">
      <div className="w-[96px] h-[96px] rounded-full bg-white border-[6px] border-secondary flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-105">
         {icon}
      </div>
      <div className="bg-secondary/40 p-8 md:p-10 rounded-[20px] w-full h-full flex flex-col items-center">
         <span className="text-primary font-body font-bold text-[15px] mb-4 tracking-wider">{step}</span>
         <h3 className="text-[20px] md:text-[22px] font-heading font-semibold text-text-heading mb-4 leading-tight">{title}</h3>
         <p className="text-text-muted text-[15px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SpecialtyCard({ iconSrc, title, desc }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 md:gap-6 bg-white p-8 md:p-10 rounded-[24px] shadow-card hover:shadow-card-hover transition duration-300 border border-primary/5 h-full">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-tertiary flex-shrink-0 flex items-center justify-center p-3.5 mx-auto sm:mx-0">
        <img src={iconSrc} alt={title} className="w-full h-full object-contain mix-blend-multiply" />
      </div>
      <div className="text-center sm:text-left">
        <h4 className="font-semibold text-xl md:text-[22px] mb-2">{title}</h4>
        <p className="text-text-muted text-[15px] md:text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

const SPECIALTIES_DATA = [
  { iconSrc: "/activity.svg", title: "Diabetes Tipo 2 e Pré-Diabetes", desc: "Controle glicêmico através da alimentação sem restrições severas." },
  { iconSrc: "/heart.svg", title: "Hipertensão", desc: "Estratégias nutricionais para regular a pressão arterial." },
  { iconSrc: "/scale.svg", title: "Emagrecimento e Obesidade", desc: "Perda de peso sustentável, focada na mudança real de hábitos." },
  { iconSrc: "/droplets.svg", title: "Colesterol e Triglicerídeos", desc: "Ajustes no perfil lipídico para proteger a saúde cardiovascular." },
  { iconSrc: "/dumbbell.svg", title: "Ganho de Massa Muscular", desc: "Nutrição otimizada para fortalecimento e composição corporal." },
  { iconSrc: "/stethoscope.svg", title: "Outras Doenças Crônicas", desc: "Acompanhamento individualizado para diversas condições." }
];

function SpecialtiesContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInteracted) return;
    
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveIndex((current) => (current + 1) % SPECIALTIES_DATA.length);
      }
    }, 4000); 
    return () => clearInterval(interval);
  }, [isInteracted]);

  const handleDragStart = (clientX) => {
    setTouchEnd(null);
    setTouchStart(clientX);
    setIsInteracted(true);
  };

  const handleDragMove = (clientX) => {
    setTouchEnd(clientX);
  };

  const handleDragEnd = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }
    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance) {
      setActiveIndex(prev => (prev + 1) % SPECIALTIES_DATA.length);
    } else if (distance < -minSwipeDistance) {
      setActiveIndex(prev => (prev - 1 + SPECIALTIES_DATA.length) % SPECIALTIES_DATA.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleClickIndicator = (idx) => {
    setActiveIndex(idx);
    setIsInteracted(true);
  }

  return (
    <>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
        {SPECIALTIES_DATA.map((item, idx) => (
          <SpecialtyCard key={idx} {...item} />
        ))}
      </div>
      
      {/* Mobile Auto Carousel */}
      <div className="block md:hidden w-full relative stagger-container">
        <div className="overflow-hidden w-full rounded-[24px]">
          <div 
            className="flex transition-transform duration-700 ease-in-out w-full select-none cursor-grab active:cursor-grabbing"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => {
              if (touchStart !== null) handleDragMove(e.clientX);
            }}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => {
              if (touchStart !== null) handleDragEnd();
            }}
          >
            {SPECIALTIES_DATA.map((item, idx) => (
              <div key={idx} className="w-full flex-shrink-0 box-border pointer-events-none sm:pointer-events-auto">
                <SpecialtyCard {...item} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
           {SPECIALTIES_DATA.map((_, idx) => (
             <button 
               key={idx} 
               onClick={() => handleClickIndicator(idx)}
               className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-primary' : 'w-2.5 bg-primary/30 hover:bg-primary/50'}`}
               aria-label={`Slide ${idx + 1}`}
             />
           ))}
        </div>
      </div>
    </>
  );
}

function TestimonialCard({ quote, name, info }) {
  return (
    <div className="bg-white text-text-body p-8 rounded-2xl shadow-lg relative">
      <div className="flex text-ui-starGold mb-4">
        {[...Array(5)].map((_,i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="italic text-[15px] leading-relaxed mb-6">"{quote}"</p>
      <div className="border-t border-ui-divider pt-4 mt-auto">
        <p className="font-semibold text-sm text-primary">{name}</p>
        <p className="text-xs text-text-muted">{info}</p>
      </div>
    </div>
  );
}

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div 
      className="bg-tertiary rounded-[16px] p-5 md:px-6 cursor-pointer transform hover:scale-[1.01] transition-all duration-300"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="font-semibold text-[16px] text-text-heading">{title}</h4>
        <div className={`text-accent transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className={open ? 'opacity-0 absolute' : 'opacity-100'} />
          <div className={open ? 'block rotate-45 opacity-100' : 'hidden'} style={{ fontSize: '24px', lineHeight:'10px' }}>+</div>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-text-body text-[15px] pb-2">{content}</p>
      </div>
    </div>
  );
}
