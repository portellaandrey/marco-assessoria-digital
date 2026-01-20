import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Handshake, 
  Shield, 
  Heart, 
  Brain, 
  Lock, 
  BarChart3,
  MessageSquare,
  Mail,
  Cpu,
  ArrowUp,
  Clock,
  Star,
  Target
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header fixo com navegação */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-gray-900 text-lg hidden sm:inline">Marco Assessoria</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</a>
              <a href="#problema" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">O Problema</a>
              <a href="#proposta" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Proposta</a>
              <a href="#foco" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Nosso Foco</a>
              <a href="#plataforma" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Plataforma</a>
              <a href="#escolha" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Por Quê</a>
              <a href="#valores" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Valores</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</a>
              <a href="#parceria" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Parceria</a>
              <a href="#contato" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Contato</a>
            </div>

            <div className="lg:hidden">
              <a href="#contato" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">Contato</a>
            </div>
          </nav>
        </div>
      </header>
      {/* Section 1 - Hero */}
      <section id="inicio" className="gradient-bg min-h-screen flex items-center pt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
                Marco Assessoria e Cobrança
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                Recuperação de Crédito com Inteligência Estratégia e Experiência Comprovada
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg">
                <img 
                  src="/001.webp" 
                  alt="Marco Assessoria Logo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - O Problema */}
      <section id="problema" className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                O Problema: Cobrança Tradicional Não Funciona Mais
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                O mercado mudou radicalmente. Abordagens agressivas, processos manuais e falta de flexibilidade não apenas falham em recuperar o crédito, mas também destroem o relacionamento com o cliente e comprometem a reputação da sua marca.
              </p>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-blue-600 card-hover">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Baixa Taxa de Recuperação</h3>
                  <p className="text-gray-600">Métodos tradicionais resultam em índices de conversão cada vez menores</p>
                </Card>

                <Card className="p-6 border-l-4 border-blue-600 card-hover">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Desgaste da Marca</h3>
                  <p className="text-gray-600">Abordagens inadequadas afastam clientes permanentemente</p>
                </Card>

                <Card className="p-6 border-l-4 border-blue-600 card-hover">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Altos Custos Operacionais</h3>
                  <p className="text-gray-600">Processos manuais consomem recursos sem gerar resultados proporcionais</p>
                </Card>

                <Card className="p-6 border-l-4 border-blue-600 card-hover">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Risco de Compliance</h3>
                  <p className="text-gray-600">Não conformidade com LGPD expõe sua empresa a penalidades severas</p>
                </Card>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="/002.webp" 
                alt="Comparação cobrança tradicional vs moderna" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - A Proposta */}
      <section id="proposta" className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
            A Nossa Proposta: A Solidez da Experiência, a Agilidade da Tecnologia
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            A Marco Assessoria nasce com a agilidade de uma empresa moderna e a fundação de mais de 20 anos de experiência em recuperação de crédito. Combinamos o melhor dos dois mundos para entregar resultados superiores.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-0 overflow-hidden card-hover">
              <div className="h-80 overflow-hidden">
                <img 
                  src="003.webp" 
                  alt="Experiência em Cobrança" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">+20 Anos de Experiência em Cobrança</h3>
                <p className="text-gray-600">
                  Conhecimento profundo de negociação, comportamento do devedor e dinâmicas de crédito. Nossa experiência é a base de cada estratégia que desenvolvemos.
                </p>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden card-hover">
              <div className="h-80 overflow-hidden">
                <img 
                  src="/003.webp" 
                  alt="Plataforma de Ponta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Plataforma de Ponta</h3>
                <p className="text-gray-600">
                  Tecnologia avançada, automação inteligente e análise de dados em tempo real. Agilidade para agir no momento certo.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 - Nosso Foco */}
      <section id="foco" className="section-padding gradient-dark text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/004.webp" 
                alt="Foco em recuperar clientes" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nosso Foco: Recuperar Clientes, Não Apenas Dívidas
              </h2>
              <p className="text-lg mb-8 text-gray-200">
                Entendemos que por trás de cada dívida existe uma pessoa com circunstâncias únicas. Nossa abordagem é empática, consultiva e flexível. O objetivo não é apenas receber o valor, mas recuperar o cliente para a sua empresa e transformar inadimplência em fidelização.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-indigo-100 border-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Aumento da Taxa de Acordos</h3>
                  <p className="text-gray-700">Negociações personalizadas que respeitam a capacidade de pagamento do devedor</p>
                </Card>

                <Card className="p-6 bg-indigo-100 border-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Preservação da Marca</h3>
                  <p className="text-gray-700">Cada interação fortalece a imagem da sua empresa no mercado</p>
                </Card>

                <Card className="p-6 bg-indigo-100 border-0 md:col-span-2">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Fidelização Pós-Negociação</h3>
                  <p className="text-gray-700">Clientes que quitam suas dívidas de forma respeitosa voltam a comprar</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Plataforma Multicanal */}
      <section id="plataforma" className="section-padding gradient-dark text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/005.webp" 
                alt="Plataforma Multicanal" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Plataforma Multicanal Inteligente
              </h2>
              <p className="text-lg mb-8 text-gray-200">
                Usamos a tecnologia para encontrar o devedor no canal certo, na hora certa, com a oferta certa. Nossa infraestrutura tecnológica maximiza a eficiência de cada contato.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp e Chatbots</h3>
                    <p className="text-gray-200">
                      Comunicação rápida e portais de autoatendimento 24/7. Seus clientes podem negociar quando e como preferirem, com total autonomia e segurança.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discador Preditivo e IA</h3>
                    <p className="text-gray-200">
                      Otimizamos o contato usando inteligência artificial para definir a melhor estratégia de abordagem: o melhor horário, o canal mais efetivo, a oferta ideal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-mail e SMS</h3>
                    <p className="text-gray-200">
                      Régua de cobrança automatizada, nutrindo o devedor com propostas claras, acessíveis e personalizadas em cada etapa do processo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Por Que Somos a Escolha */}
      <section id="escolha" className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Por Que Somos a Escolha Estratégica?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Inteligência Analítica</h3>
                    <p className="text-gray-600">
                      Não usamos "achismo". Analisamos dados para segmentar sua carteira e aplicar a estratégia com maior probabilidade de sucesso para cada perfil de devedor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Compliance e LGPD</h3>
                    <p className="text-gray-600">
                      100% adequados à Lei Geral de Proteção de Dados. A segurança do seu cliente e da sua empresa é nossa prioridade absoluta.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Transparência Total</h3>
                    <p className="text-gray-600">
                      Relatórios em tempo real para você acompanhar nossa performance e seus resultados. Visibilidade completa de cada ação.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="/006.webp" 
                alt="Inteligência Analítica" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - O Que Nos Move */}
      <section id="valores" className="section-padding gradient-dark text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/007.webp" 
                alt="Missão, Visão e Valores" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">O Que Nos Move</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Missão</h3>
                  <p className="text-gray-200">
                    Transformar o processo de recuperação de crédito em uma experiência eficiente e respeitosa, reconectando empresas e clientes através de soluções justas e tecnologia inovadora.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Visão</h3>
                  <p className="text-gray-200">
                    Ser a principal referência no Brasil em recuperação de crédito humanizada, reconhecida pela ética, alta performance e pela capacidade de preservar relacionamentos.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Valores</h3>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Ética:</strong> Acima de tudo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Experiência:</strong> Nossa base para decisões</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Inovação:</strong> A ferramenta certa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Resiliência:</strong> Nunca desistimos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Como Podemos Ajudar */}
      <section id="servicos" className="section-padding bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
            Como Podemos Ajudar Sua Empresa?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Atuamos em todo o ciclo da régua de cobrança, do preventivo ao jurídico, com soluções customizadas para cada fase da inadimplência.
          </p>

          <div className="space-y-8">
            <div className="border-b-2 border-blue-600 pb-6">
              <div className="text-sm font-bold text-blue-600 mb-2">01</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Cobrança Preventiva</h3>
              <p className="text-gray-600">
                Avisos de vencimento e lembretes que evitam a inadimplência antes que ela aconteça
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b-2 border-blue-600 pb-6">
                <div className="text-sm font-bold text-blue-600 mb-2">02</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Cobrança Amigável</h3>
                <p className="text-gray-600">
                  Abordagem consultiva para atrasos recentes, focada em manter o relacionamento
                </p>
              </div>

              <div className="border-b-2 border-blue-600 pb-6">
                <div className="text-sm font-bold text-blue-600 mb-2">03</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Alta Inadimplência</h3>
                <p className="text-gray-600">
                  Estratégias especializadas para atrasos longos, com negociações estruturadas
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b-2 border-blue-600 pb-6">
                <div className="text-sm font-bold text-blue-600 mb-2">04</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Recuperação de Ativos</h3>
                <p className="text-gray-600">
                  Soluções para retomada de bens, como veículos, com processos ágeis e legais
                </p>
              </div>

              <div className="border-b-2 border-blue-600 pb-6">
                <div className="text-sm font-bold text-blue-600 mb-2">05</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Apoio Jurídico</h3>
                <p className="text-gray-600">
                  Suporte completo para casos que exigem ação judicial, sempre como último recurso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 - Parceria Estratégica */}
      <section id="parceria" className="section-padding gradient-teal text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/009.webp" 
                alt="Parceria Estratégica" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Parceria Estratégica para Sua Saúde Financeira
              </h2>
              <p className="text-lg mb-8 text-gray-100">
                Ao escolher a Marco Assessoria, sua empresa ganha muito mais do que um fornecedor de cobrança. Ganha um parceiro estratégico comprometido com seus resultados financeiros e a preservação da sua marca.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <ArrowUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Aumento Significativo</h3>
                  <p className="text-gray-100">
                    Nos índices de recuperação de crédito com metodologia comprovada
                  </p>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Redução de Tempo</h3>
                  <p className="text-gray-100">
                    Tempo médio de recebimento diminui drasticamente com nossa tecnologia
                  </p>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Proteção da Marca</h3>
                  <p className="text-gray-100">
                    Sua reputação e base de clientes são preservadas e fortalecidas
                  </p>
                </Card>

                <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Foco no Core Business</h3>
                  <p className="text-gray-100">
                    Libere sua equipe interna para se concentrar no que realmente importa
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 - Contato/CTA */}
      <section id="contato" className="gradient-bg min-h-screen flex items-center">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Vamos Conversar?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entenda na prática como nossa expertise de 20 anos pode aumentar sua receita e transformar sua gestão de crédito.
              </p>

              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Marco Assessoria e Cobrança
                </h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 font-semibold">Entre em contato conosco:</p>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:comercial@assessoriamarco.com.br" className="text-blue-600 hover:underline">
                      comercial@assessoriamarco.com.br
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <a href="https://wa.me/5541995393079" className="text-gray-700 hover:text-green-600">
                      WhatsApp: (41) 99539 - 3079
                    </a>
                  </div>
                </div>

                <Card className="p-6 bg-indigo-50 border-indigo-200">
                  <div className="flex items-start gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold text-gray-900">Agende uma Reunião</h4>
                  </div>
                  <p className="text-gray-700">
                    Faça uma análise gratuita da sua carteira de crédito e descubra o potencial de recuperação com nossa metodologia.
                  </p>
                </Card>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg">
                <img 
                  src="/010.webp" 
                  alt="Marco Assessoria Logo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p className="text-gray-400">
            © 2024 Marco Assessoria e Cobrança. Transformando Inadimplência em Oportunidade.
          </p>
        </div>
      </footer>
    </div>
  );
}

