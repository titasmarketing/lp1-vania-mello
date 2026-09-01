import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, CheckCircle, Activity, ClipboardList, Target, UserCheck, Stethoscope, Droplet, Star, MapPin, Globe, Clock, Heart, Leaf, Flower2, Venus, Calendar, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Quote } from 'lucide-react';

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
      <section className="relative w-full min-h-[85vh] lg:min-h-[88vh] bg-secondary flex items-center pt-4 sm:pt-6 md:pt-8 pb-8 md:pb-12 overflow-hidden">
        {/* Decorative Background Letter */}
        <div className="absolute top-6 right-6 md:top-[-5%] md:right-[-5%] text-decorative opacity-20 font-heading italic text-[40rem] leading-none pointer-events-none select-none z-0">
          V
        </div>
        
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="flex-1 reveal max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/Fotos Vânia/Logo Vânia.png" 
              alt="Logo Vânia Mello" 
              className="h-[56px] md:h-[84px] object-contain mb-3 md:mb-5 mix-blend-multiply opacity-90" 
            />
            <div className="inline-block px-3.5 py-1.5 mb-3 md:mb-5 rounded-[20px] border border-primary/20 text-[13px] md:text-sm font-semibold text-primary/80 max-w-[340px] md:max-w-[420px] leading-snug">
              Nutricionista Clínica • Especialista em Doenças Crônicas
            </div>
            
            <h1 className="text-[32px] sm:text-[36px] md:text-[50px] leading-[1.15] tracking-tight text-text-heading mb-3 md:mb-5">
              Transforme Seus Exames e Sua <em>Relação com a Comida</em>
            </h1>
            
            <p className="text-[15px] md:text-lg text-text-muted mb-5 md:mb-8 max-w-[500px]">
              Nutrição clínica especializada em Doenças Crônicas para quem precisa controlar diabetes, pressão alta, colesterol e peso.
            </p>
            
            <a href="https://tintim.link/whatsapp/04fd1ab5-eb65-4bbf-86a4-32adb78f3275/a24517b4-6edd-42c3-91f8-4435fd61a4c7" target="_blank" rel="noopener noreferrer" role="button" className="inline-flex items-center justify-center bg-primary text-white font-body font-semibold text-[15px] sm:text-[16px] py-[14px] px-[28px] sm:py-[18px] sm:px-[36px] rounded-pill shadow-btn hover:shadow-card-hover transform hover:scale-[1.02] transition duration-300 ease-out group">
              Quero Agendar Minha Consulta
              <span className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-white rounded-full flex items-center justify-center ml-4 text-primary transform group-hover:translate-x-1 transition duration-300 ease-out">
                <ArrowRight size={18} />
              </span>
            </a>

            {/* Badges de Atendimento Presencial & Online */}
            <div className="mt-4 md:mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-primary/15 shadow-xs text-xs sm:text-[13px] font-medium text-text-heading/90 backdrop-blur-xs">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>Presencial em <strong>Vinhedo e Região</strong></span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-primary/15 shadow-xs text-xs sm:text-[13px] font-medium text-text-heading/90 backdrop-blur-xs">
                <Globe size={14} className="text-primary shrink-0" />
                <span>Online para todo o <strong>Brasil e Exterior</strong></span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:max-w-none max-w-md reveal">
            <div className="w-full rounded-3xl overflow-hidden shadow-img aspect-[4/5] bg-secondary/60">
              <img 
                src="/Fotos Vânia/IMG_9692.jpg" 
                alt="Dra. Vânia Mello" 
                className="w-full h-full object-cover object-[center_32%] scale-[1.12] transition-transform duration-500"
              />
            </div>
            {/* Social Proof Badge */}
            <div className="absolute -bottom-5 -left-2 md:-left-12 bg-white p-3.5 md:p-5 rounded-2xl shadow-card flex items-center gap-4 md:gap-5 z-20">
              <img src="/Doctoralia.svg" alt="Doctoralia" className="w-[52px] h-[52px] md:w-[68px] md:h-[68px] object-contain shrink-0" />
              <div className="flex flex-col min-w-max">
                <div className="flex text-ui-starGold mb-1">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
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

      {/* Testimonials (Doctoralia Verificados) */}
      <DoctoraliaTestimonialsSection />

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

          {/* Diagnostic Features Highlight */}
          <div className="mt-16 md:mt-24 max-w-[1050px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 bg-secondary p-8 md:p-12 rounded-[32px] reveal border border-primary/5 relative z-10 hover:shadow-card-hover transition-all duration-300">
            <div className="flex-1 w-full relative">
              <img 
                src="/Fotos Vânia/IMG_9683.jpg" 
                alt="Equipamentos de medição" 
                className="w-full h-auto aspect-square md:aspect-[4/3] object-cover rounded-[24px] shadow-img"
              />
              <div className="hidden md:flex absolute -bottom-6 -right-5 bg-white p-4 rounded-[16px] shadow-card items-center justify-center">
                 <Target size={28} className="text-primary opacity-80" />
              </div>
            </div>
            <div className="flex-[1.2] text-center md:text-left">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white text-primary font-semibold text-[13px] uppercase tracking-wider mb-5 shadow-sm border border-primary/5">
                Alta Tecnologia
              </span>
              <h3 className="text-[22px] sm:text-[26px] md:text-[34px] font-heading font-semibold text-text-heading mb-4 leading-tight whitespace-nowrap">
                Diferenciais <em>Diagnósticos</em>
              </h3>
              <p className="text-text-muted text-[15px] md:text-[16px] leading-relaxed mb-6">
                O tratamento da sua saúde não pode ser baseado em uma "dieta de gaveta" padronizada e restritiva. 
                Por isso, utilizo ferramentas de alta precisão para analisar profundamente a sua composição corporal e o seu gasto energético real.
              </p>
              <ul className="space-y-4 text-left text-[15px] md:text-[16px]">
                <li className="flex items-start gap-4">
                   <Activity size={22} className="text-accent shrink-0 mt-0.5" />
                   <span className="text-text-body leading-relaxed"><strong>Bioimpedância e Dinamometria:</strong> Entendemos exatamente de que o seu corpo é feito e como ele processa energia.</span>
                </li>
                <li className="flex items-start gap-4">
                   <CheckCircle size={22} className="text-accent shrink-0 mt-0.5" />
                   <span className="text-text-body leading-relaxed"><strong>Meta 100% Exata:</strong> Com estes dados em mãos, eliminamos o achismo e criamos um planejamento que vai direto ao ponto.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 md:mt-24 text-center reveal">
            <a href="https://tintim.link/whatsapp/04fd1ab5-eb65-4bbf-86a4-32adb78f3275/a24517b4-6edd-42c3-91f8-4435fd61a4c7" target="_blank" rel="noopener noreferrer" role="button" className="inline-flex items-center justify-center bg-primary text-white font-body font-semibold text-[15px] sm:text-[16px] py-[14px] px-[28px] sm:py-[18px] sm:px-[36px] rounded-pill shadow-btn hover:shadow-card-hover transform hover:scale-[1.02] transition duration-300 ease-out group">
              Agendar minha consulta
              <span className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] bg-white rounded-full flex items-center justify-center ml-4 text-primary transform group-hover:translate-x-1 transition duration-300 ease-out"><ArrowRight size={18} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-secondary">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full reveal hidden md:block">
            <img 
              src="/Fotos Vânia/IMG_9689.jpg" 
              alt="Vânia Mello" 
              className="w-full h-[600px] object-cover rounded-[24px] shadow-img"
            />
          </div>
          <div className="flex-1 reveal">
            <h2 className="text-[36px] md:text-[40px] leading-tight mb-8 md:mb-6 text-center md:text-left">
              Quem é <em>Vânia Mello</em>?
            </h2>
            
            {/* Mobile Image (Entre título e texto) */}
            <div className="block md:hidden mb-10 max-w-[260px] mx-auto">
              <img 
                src="/Fotos Vânia/IMG_9689.jpg" 
                alt="Vânia Mello" 
                className="w-full aspect-[4/5] object-cover rounded-[24px] shadow-img mx-auto"
              />
            </div>
            <div className="space-y-4 text-[16px] text-text-body mb-8">
              <p>
                Sou nutricionista, graduada pela Faculdade Eduvale de Avaré e pós-graduada em Doenças Crônicas Não Transmissíveis pelo Instituto Albert Einstein. Minha atuação na nutrição clínica é pautada pelo rigor científico e pelo uso de tecnologias de precisão para compreender a individualidade de cada metabolismo.
              </p>
              <p>
                Minha prática busca unir o acolhimento humano à exatidão diagnóstica. Entendo que cada paciente possui objetivos únicos, seja a busca por mais vitalidade, a prevenção de condições hereditárias ou o manejo de quadros clínicos já diagnosticados. Por isso, utilizo ferramentas avançadas de avaliação para estruturar estratégias que respeitem o estilo de vida e a biologia de quem atendo.
              </p>
              <p>
                Acredito em uma nutrição transformadora, capaz de promover saúde em todas as etapas da vida, oferecendo suporte técnico para que cada pessoa alcance sua melhor versão de forma segura e sustentável.
              </p>
              <ul className="space-y-3 pt-6">
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Nutrição Clínica Especializada (Pós-graduação Albert Einstein)</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Avaliação de Composição Corporal e Metabolismo com Alta Precisão</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Manejo Nutricional de Condições Metabólicas e Prevenção de Doenças</span></li>
                <li className="flex items-start gap-3"><CheckCircle size={20} className="text-accent shrink-0 mt-0.5" /> <span>Foco em Saúde Integrativa e Longevidade</span></li>
              </ul>
            </div>
            
            <div className="p-6 md:p-8 bg-primary shadow-lg rounded-2xl italic text-[18px] md:text-[20px] text-white font-heading mt-6 leading-relaxed relative">
              "Não trato doenças, cuido de pessoas. Seu plano alimentar precisa se adaptar à sua vida, e não o contrário."
            </div>
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
                    <h4 className="font-semibold text-xl mb-1 text-text-heading">Íntegra Clinic (Presencial)</h4>
                    <p className="text-text-muted text-[16px] leading-relaxed">
                      Rua Odair Rotella, 110, Centro<br/>
                      Vinhedo/SP - 13280-000
                    </p>
                  </div>
               </div>

               <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Globe size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-lg mb-1 text-text-heading">Atendimento Online</h4>
                    <p className="text-text-muted text-[16px] leading-relaxed">
                      Consultas por videoconferência para todo o Brasil e exterior com a mesma profundidade e acompanhamento.
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
                    <Calendar size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-lg mb-1 text-text-heading">Agendamento</h4>
                    <p className="text-text-muted text-[16px] leading-relaxed text-primary font-medium">
                     <a href="https://tintim.link/whatsapp/04fd1ab5-eb65-4bbf-86a4-32adb78f3275/a24517b4-6edd-42c3-91f8-4435fd61a4c7" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Agendar consulta pelo WhatsApp
                      </a>
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
              <AccordionItem title="Como funciona a consulta online?" content="A consulta online é realizada por videoconferência com o mesmo tempo de atenção, acolhimento, análise criteriosa de seus exames e elaboração do plano alimentar personalizado da consulta presencial. Você também conta com acompanhamento e suporte contínuo pelo WhatsApp para tirar dúvidas." />
              <AccordionItem title="Você aceita convênio médico?" content="Atendimentos apenas ao Sulamérica Saúde. Os atendimentos são particulares, mas emito recibo para solicitação de reembolso junto ao seu convênio, de acordo com o seu plano." />
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
            <a href="https://tintim.link/whatsapp/04fd1ab5-eb65-4bbf-86a4-32adb78f3275/a24517b4-6edd-42c3-91f8-4435fd61a4c7" target="_blank" rel="noopener noreferrer" role="button" className="inline-flex items-center justify-center bg-white text-primary font-body font-semibold text-[16px] py-[16px] px-[36px] rounded-pill shadow-btn hover:shadow-lg transform hover:scale-[1.02] transition duration-300 group">
                Agendar Minha Consulta
                <span className="w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center ml-4 text-white transform group-hover:translate-x-1 transition duration-300">
                  <ArrowRight size={18} />
                </span>
             </a>
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
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}

// Subcomponents
function FloatingWhatsApp() {
  return (
    <a 
      href="https://tintim.link/whatsapp/04fd1ab5-eb65-4bbf-86a4-32adb78f3275/a24517b4-6edd-42c3-91f8-4435fd61a4c7" 
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

const CustomHealthSyncIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M14.98,41.8753a20.4839,20.4839,0,1,1,18.21-.0832"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M31.8164,38.6064,29.8255,42.97,34.0715,45"/>
    <circle fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} cx="25.3111" cy="12.1986" r="2.2096"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M19.7031,30.2216l-2.9186,3.5558c-1.3981,1.618.62,3.0368,2.0995,1.6362l2.859-3.6012.9384-3.5211L24.19,29.8l1.0058,5.2074c.6653,1.4484,2.8278,1.3689,2.7575-.4942l-1.4908-5.5638-2.1363-3.7,1.1964-4.465,1.3349.3576a.7774.7774,0,0,0,.3879.7716c.465.2483,3.8078,1.2722,3.8078,1.2722,2.1028.6458,2.34-1.4709.6406-1.9639L28.91,20.4755l-1.378-2.2949-2.239-2.0056L21.87,16.0957l-4.8377,2.9207-1.7968,4.8018c-.3972,1.3419,1.5265,1.6913,2.058.6475.2582-.4581,1.5582-3.5518,1.5582-3.5518l2.8247-1.4015-1.3818,6.3337Z"/>
  </svg>
);

const CustomStomachIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2v3.5c0 1.5-1 2.5-2 4A4.5 4.5 0 0 0 8 16c2 3 5.5 3 8.5 1s4.5-5.5 4.5-8.5c0-3-2-4.5-3.5-5-1.5-.5-2.5-1.5-2.5-2.5V2" />
    <path d="M8 16c-1 1-2 2-2 4" />
    <path d="M12 12c1 1 2 1 3 0" />
  </svg>
);

const CustomKidneyIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 8C7 5 3 6 3 10c0 4 3.5 8 5.5 8 2 0 3-1 3-3s-1-2.5-1-4 1-2 1-3z" />
    <path d="M14 8c3-3 7-2 7 2 0 4-3.5 8-5.5 8-2 0-3-1-3-3s1-2.5 1-4-1-2-1-3z" />
    <path d="M10 12h4" />
  </svg>
);

function SpecialtyCard({ icon: Icon, title, desc, tags }) {
  return (
    <div className="flex flex-col gap-5 md:gap-6 bg-white p-6 md:p-8 rounded-[24px] shadow-card hover:shadow-card-hover transition duration-300 border border-primary/5 h-full justify-start">
      <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center sm:items-start text-center sm:text-left">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-tertiary flex-shrink-0 flex items-center justify-center p-3.5 mx-auto sm:mx-0 text-primary">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="font-semibold text-xl md:text-[22px] mb-2 text-text-heading">{title}</h4>
          <p className="text-text-muted text-[14px] md:text-[15px] leading-relaxed">{desc}</p>
        </div>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-5 border-t border-ui-divider/40 mt-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-primary/90 text-[12px] font-semibold tracking-wide leading-tight shadow-sm border border-primary/10">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const SPECIALTIES_DATA = [
  { 
    icon: CustomHealthSyncIcon, 
    title: "Metabólicas e Endócrinas", 
    desc: "O pilar central do controle clínico e metabólico, cuidando da raiz do seu bem-estar.",
    tags: ["Diabetes e Pré-diabetes", "Obesidade e Sobrepeso", "Pós-Bariátrica", "Colesterol e Triglicerídeos", "Síndrome Metabólica", "Tireoide"]
  },
  { 
    icon: Heart, 
    title: "Saúde Cardiovascular", 
    desc: "Estratégias nutricionais avançadas para regular a pressão e proteger o seu coração.",
    tags: ["Hipertensão Arterial", "Insuficiência Cardíaca", "Recuperação Pós-Infarto", "Pós-Cirurgia Cardíaca"]
  },
  { 
    icon: CustomStomachIcon, 
    title: "Digestiva e Intestinal", 
    desc: "Cuidado especializado para o bom funcionamento do seu intestino e melhoria na digestão.",
    tags: ["Gastrite e Úlceras", "Refluxo (DRGE)", "Intestino Irritável (FODMAPs)", "Doenças Inflamatórias", "Intolerâncias", "Constipação", "Gordura no Fígado"]
  },
  { 
    icon: Venus, 
    title: "Saúde da Mulher", 
    desc: "Nutrição funcional focada no equilíbrio hormonal em todas as fases da sua vida.",
    tags: ["Ovários Policísticos (SOP)", "Endometriose", "Menopausa e Climatério", "Fertilidade"]
  },
  { 
    icon: CustomKidneyIcon, 
    title: "Renais e Hepáticas", 
    desc: "Acompanhamento protetor e altamente qualificado para preservar suas funções.",
    tags: ["Doença Renal Crônica", "Cálculos Renais", "Cirrose Hepática"]
  },
  { 
    icon: Stethoscope, 
    title: "Outras Condições Clínicas", 
    desc: "Suporte e cuidado clínico direcionado para fortalecer seu organismo como um todo.",
    tags: ["Sarcopenia e Osteoporose", "Anemias", "Transtornos Alimentares", "Nutrição Oncológica"]
  }
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
            style={{ transform: `translateX(-${activeIndex * 100}%)`, touchAction: 'pan-y' }}
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
              <div key={idx} className="w-full flex-shrink-0 box-border">
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

// Doctoralia Real Reviews & Interactive Carousel
const doctoraliaReviews = [
  {
    id: 1,
    name: "Luana Fernandes",
    initial: "L",
    date: "29 de julho de 2026",
    tag: "Primeira consulta Nutrição",
    location: "Íntegra Clinic",
    rating: 5,
    verified: true,
    quote: "Um amor de nutri! Escutou meus desafios sem me julgar e conduziu a consulta com excelência."
  },
  {
    id: 2,
    name: "Glauco",
    initial: "G",
    date: "15 de julho de 2026",
    tag: "Nutrição Familiar",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Eu e minha esposa já fazemos acompanhamento nutricional com ela e estamos muito satisfeitos. Então decidi levar meu filho mais velho também. Ele adorou a abordagem dela (versátil, se adaptou para conversar com adolescente de 15 anos), mas também todo conhecimento e experiência técnica. Já é a Nutricionista da minha família."
  },
  {
    id: 3,
    name: "Daniela",
    initial: "D",
    date: "15 de julho de 2026",
    tag: "Consulta Nutricional",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Muito atenciosa, educada, realmente interessada em ajudar. Excelente profissional."
  },
  {
    id: 4,
    name: "Regis",
    initial: "R",
    date: "6 de julho de 2026",
    tag: "Consulta Presencial",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Excelente profissional, pontual e detalhista nas explicações."
  },
  {
    id: 5,
    name: "Jacqueline Zaia",
    initial: "J",
    date: "1 de julho de 2026",
    tag: "Análise Criteriosa",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Excelente profissional! Fiquei realmente encantada. Foi muito além de tirar minhas dúvidas e orientar corretamente após análise criteriosa."
  },
  {
    id: 6,
    name: "Darlyane",
    initial: "D",
    date: "29 de junho de 2026",
    tag: "Acompanhamento Nutricional",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Uma excelente profissional, atenciosa, paciente, ótima explicação."
  },
  {
    id: 7,
    name: "Valdirene Ribeiro",
    initial: "V",
    date: "1 de junho de 2026",
    tag: "Bioimpedância & Exames",
    location: "Íntegra Clinic",
    rating: 5,
    verified: true,
    quote: "Minha experiência com a Nutricionista Vania Mello foi excelente. Atendimento atencioso, consulta completa, exames realizados na hora e explicações muito claras. Superou minhas expectativas e certamente vou recomendá-la."
  },
  {
    id: 8,
    name: "Helena Lima",
    initial: "H",
    date: "26 de maio de 2026",
    tag: "Consulta Humanizada",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Foi incrível. A Dra. Vânia foi sublime e esclarecedora. Ótima ouvinte e conselheira. Vou querer vê-la novamente. Nota 1000!!!! Eficiente e objetiva. Recomendo muito."
  },
  {
    id: 9,
    name: "Michele",
    initial: "M",
    date: "26 de maio de 2026",
    tag: "Reeducação Alimentar",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Atenciosa aos detalhes, preocupada em fazer o melhor para o paciente não sofrer tanto nas mudanças, tudo com muito equilíbrio e cuidado com o paciente."
  },
  {
    id: 10,
    name: "LG",
    initial: "L",
    date: "25 de maio de 2026",
    tag: "Consulta Acolhedora",
    location: "Vinhedo",
    rating: 5,
    verified: true,
    quote: "Consulta humanizada, acolhedora e atenta em sanar minhas necessidades."
  }
];

function DoctoraliaTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slider (troca automática a cada 4s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % doctoraliaReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctoraliaReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % doctoraliaReviews.length);
  };

  const visibleReviews = [
    doctoraliaReviews[currentIndex % doctoraliaReviews.length],
    doctoraliaReviews[(currentIndex + 1) % doctoraliaReviews.length],
    doctoraliaReviews[(currentIndex + 2) % doctoraliaReviews.length],
  ];

  return (
    <section className="py-20 lg:py-[100px] px-6 md:px-10 bg-primary text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center reveal max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold text-[13px] uppercase tracking-wider mb-4 backdrop-blur-md border border-white/15">
            <ShieldCheck size={16} className="text-accent" />
            Depoimentos Reais & Verificados
          </span>
          <h2 className="text-[36px] md:text-[44px] text-white tracking-tight mb-4 leading-tight">
            O que dizem os <em>pacientes</em>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed">
            Avaliações autênticas coletadas diretamente do perfil oficial no Doctoralia.
          </p>
        </div>

        {/* Doctoralia Official Rating Card Banner */}
        <div className="reveal mb-14 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full sm:w-auto">
            <img 
              src="/Doctoralia.svg" 
              alt="Doctoralia Logo" 
              className="h-10 sm:h-12 md:h-14 object-contain brightness-0 invert" 
            />
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 flex-wrap">
                <span className="text-3xl sm:text-3xl font-bold text-white leading-none">5.0</span>
                <div className="flex text-ui-starGold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-base sm:text-sm text-white/90 font-semibold">(52+ opiniões)</span>
              </div>
              <p className="text-[15px] sm:text-sm text-white/90 text-center sm:text-left mt-1.5 leading-relaxed font-medium text-balance max-w-[320px] sm:max-w-none mx-auto sm:mx-0">
                Perfil 100% verificado com pontuação máxima no Doctoralia Brasil
              </p>
            </div>
          </div>

          <a 
            href="https://www.doctoralia.com.br/vania-mello/nutricionista/vinhedo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-bold text-base sm:text-sm hover:bg-opacity-90 transition duration-300 shadow-md shrink-0 group"
          >
            Ver Perfil Oficial
            <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Interactive Carousel */}
        <div 
          className="relative reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Grid of Cards (1 no mobile, 2 no tablet, 3 no desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {visibleReviews.map((item, idx) => (
              <div 
                key={`${currentIndex}-${item.id}-${idx}`} 
                className={`bg-white text-text-body p-7 rounded-2xl shadow-xl flex-col justify-between h-full border border-white/20 transform transition-all duration-300 hover:-translate-y-1.5 animate-card-fade ${
                  idx === 1 ? 'hidden md:flex' : idx === 2 ? 'hidden lg:flex' : 'flex'
                }`}
              >
                <div className="flex-1 flex flex-col justify-between">
                  {/* Top Badge & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-ui-starGold">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[12px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                        <CheckCircle size={13} className="text-emerald-600" />
                        Consulta Verificada
                      </span>
                    )}
                  </div>

                  {/* Quote Container (Alinhamento & Altura Igual) */}
                  <div className="relative my-4 flex-1 flex items-center min-h-[120px] sm:min-h-[130px] md:min-h-[145px]">
                    <Quote size={24} className="text-primary/15 absolute -top-1 -left-2 rotate-180 shrink-0" />
                    <p className="italic text-[16px] sm:text-[15px] leading-relaxed text-text-heading relative z-10 pl-3">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Patient Footer */}
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3 mt-auto">
                  <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-base sm:text-sm shrink-0 border border-primary/20">
                    {item.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-sm text-text-heading truncate">{item.name}</h4>
                    <p className="text-xs text-text-muted truncate">{item.date} • {item.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls & Dots */}
          <div className="flex items-center justify-between mt-10">
            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 backdrop-blur-sm"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 backdrop-blur-sm"
                aria-label="Próximo Depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {doctoraliaReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center reveal">
          <a 
            href="https://tintim.link/whatsapp/04fd1ab5-eb65-4bbf-86a4-32adb78f3275/a24517b4-6edd-42c3-91f8-4435fd61a4c7" 
            target="_blank" 
            rel="noopener noreferrer" 
            role="button" 
            className="inline-flex items-center justify-center bg-white text-primary font-body font-semibold text-[16px] py-[16px] px-[36px] rounded-pill shadow-btn hover:shadow-lg transform hover:scale-[1.02] transition duration-300 group"
          >
            Quero Agendar Minha Consulta
            <span className="w-[36px] h-[36px] bg-primary rounded-full flex items-center justify-center ml-4 text-white transform group-hover:translate-x-1 transition duration-300">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
