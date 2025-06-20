
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Target, Brain, TrendingUp, Users, Zap, BarChart3, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CardData {
  title: string;
  description: string;
  emoji: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  hasWhatsAppIcon?: boolean;
  hasEmail?: boolean;
}

interface CardSet {
  title: string;
  color: string;
  icon: any;
  cards: CardData[];
}

const Index = () => {
  const [currentCardSet, setCurrentCardSet] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const cardSets: CardSet[] = [
    {
      title: "💡 Cansou de perder clientes?",
      color: "bg-gradient-to-br from-red-50 to-orange-50 border-red-200",
      icon: Target,
      cards: [
        {
          title: "Custos Crescentes de Aquisição",
          description: "Campanhas, mídias sociais, tráfego pago, outdoors... Os custos só aumentam e a conversão diminui.",
          emoji: "💸"
        },
        {
          title: "Atendimento Limitado",
          description: "Equipes trabalham apenas em horário comercial. Clientes insatisfeitos ficam sem resposta.",
          emoji: "⏰"
        },
        {
          title: "Relacionamento Genérico",
          description: "Respostas padronizadas que não consideram o momento emocional de cada cliente.",
          emoji: "🤖"
        },
        {
          title: "A Solução BePair",
          description: "Reduza drasticamente esses custos com atendimento 24h ultra personalizado e inteligente.",
          emoji: "✨"
        }
      ]
    },
    {
      title: "🚀 Conheça a BePair",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
      icon: Brain,
      cards: [
        {
          title: "O que é BePair?",
          description: "Uma IA que conversa com seu cliente como se fosse humana. Atende 24h, entende emoções e gera ações simbólicas personalizadas.",
          emoji: "🤖"
        },
        {
          title: "Metodologia PAIR",
          description: "Personas Ativadas por Inteligência Relacional. Detecta o momento do cliente, sentimento e propõe resposta ideal com base simbólica.",
          emoji: "🧠"
        },
        {
          title: "Resultados",
          description: "Redução de churn, reativação de clientes silenciosos, fidelização com impacto simbólico e economia com mídia paga.",
          emoji: "📈"
        },
        {
          title: "Simulações em tempo real",
          description: "Veja a IA analisando reclamações e propondo respostas personalizadas: texto, áudio, sentimento e plano de ação.",
          emoji: "⚡"
        },
        {
          title: "Economia com mídia",
          description: "BePair substitui parte dos custos com marketing tradicional (tráfego pago, mídia, outdoor), entregando conversas reais com clientes 24/7.",
          emoji: "💰"
        }
      ]
    },
    {
      title: "🎯 Sistema PAIR em Funcionamento",
      color: "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200",
      icon: Zap,
      cards: [
        {
          title: "Sistema PAIR em Ação",
          description: "Veja como a IA entende quem é o cliente e em que momento ele está. Cada resposta é simbólica, emocionalmente orientada e personalizada.",
          emoji: "🎯"
        },
        {
          title: "Escuta Ativa Automatizada",
          description: "A IA escuta, interpreta sentimentos e detecta sinais de churn antes do cliente sumir. Ela filtra \"clientes silenciosos\", \"reclamantes reincidentes\" e mais.",
          emoji: "👂"
        },
        {
          title: "Evolução e Resultados Visíveis",
          description: "Você acompanha a evolução simbólica da jornada do cliente: de detratores a promotores, com indicadores de impacto e reconquista.",
          emoji: "📊"
        },
        {
          title: "Entregas e Ações Humanizadas",
          description: "Cada ação gerada é adaptada à emoção, canal e tom ideal para aquele cliente. A entrega não é genérica, é relacional.",
          emoji: "💝"
        },
        {
          title: "Engajamento e Personas Vivas",
          description: "Personas evoluem com base em emoções e respostas. A IA mantém o vínculo ativo, entende barreiras e ativa playbooks personalizados.",
          emoji: "🎭"
        },
        {
          title: "Demonstração Visual da Solução",
          description: "Explore todas essas funcionalidades em um dashboard funcional.",
          emoji: "🖥️",
          hasButton: true,
          buttonText: "Testar Agora",
          buttonLink: "https://preview--interface-remake-project-flow.lovable.app/entrega"
        }
      ]
    },
    {
      title: "💬 Teste via WhatsApp",
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
      icon: MessageCircle,
      cards: [
        {
          title: "Atendimento Real via WhatsApp",
          description: "Envie uma mensagem de reclamação (texto ou voz) e veja como a IA responde com empatia e inteligência contextual.",
          emoji: "📱"
        },
        {
          title: "Análise do Momento do Cliente",
          description: "A IA identifica emoções, intenção e urgência. Classifica o estado simbólico do cliente e prepara a resposta adequada.",
          emoji: "🔍"
        },
        {
          title: "Blocos de Resposta Inteligente",
          description: "Você receberá blocos que mostram: • A análise feita pelo backend • A decisão simbólica gerada • A resposta final ao cliente (em texto e áudio)",
          emoji: "🧩"
        },
        {
          title: "Retenção Automática e Personalizada",
          description: "Além da resposta imediata, a IA pode acionar benefícios: vouchers, cashback, descontos — tudo conforme a emoção e histórico do cliente.",
          emoji: "🎁"
        },
        {
          title: "Teste Agora via WhatsApp",
          description: "Experimente o atendimento simbólico 24h por dia.",
          emoji: "✅",
          hasButton: true,
          buttonText: "Testar Agora",
          buttonLink: "https://wa.me/5511962513987"
        }
      ]
    },
    {
      title: "💻 Análise por Texto",
      color: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200",
      icon: BarChart3,
      cards: [
        {
          title: "Reclamação por Texto com IA",
          description: "Nesta demonstração, você envia uma mensagem de reclamação simples e recebe uma resposta construída por IA com base simbólica.",
          emoji: "📝"
        },
        {
          title: "Análise Automática do Verbatim",
          description: "A IA interpreta o texto do cliente, identifica emoção, contexto e intenção. O backend relata exatamente o que foi analisado.",
          emoji: "🔬"
        },
        {
          title: "Blocos de Retorno Inteligente",
          description: "Você verá: • O que a IA detectou no sentimento • Qual foi a leitura simbólica • A resposta ideal que seria enviada ao cliente",
          emoji: "🔄"
        },
        {
          title: "Suba sua Base D-1",
          description: "Empresas podem enviar suas bases de clientes (ex: até D-1) e a IA responderá individualmente, com diagnósticos e sugestões por cliente.",
          emoji: "📊"
        },
        {
          title: "Acesse a Demonstração Agora",
          description: "Envie sua mensagem e veja a IA em ação.",
          emoji: "🚀",
          hasButton: true,
          buttonText: "Testar Agora",
          buttonLink: "https://webhook.etechats.com.br/webhook/chat-ia"
        }
      ]
    },
    {
      title: "🤝 Vamos Conversar?",
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
      icon: Users,
      cards: [
        {
          title: "Obrigado pela visita!",
          description: "Esperamos que você tenha entendido o potencial da BePair para transformar o relacionamento com seus clientes. Se quiser conversar, testar mais recursos ou levar essa inteligência para sua empresa, é só chamar!",
          emoji: "🙏",
          hasButton: true,
          buttonText: "Fale Conosco",
          buttonLink: "https://wa.me/5521987162377?text=Olá%21%20Te%20conheci%20na%20Campus%20Party%20Brasília%20%2D%20Startup%20BePair",
          hasWhatsAppIcon: true,
          hasEmail: true
        }
      ]
    }
  ];

  const nextCard = () => {
    if (currentCard < cardSets[currentCardSet].cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else if (currentCardSet < cardSets.length - 1) {
      setCurrentCardSet(currentCardSet + 1);
      setCurrentCard(0);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else if (currentCardSet > 0) {
      setCurrentCardSet(currentCardSet - 1);
      setCurrentCard(cardSets[currentCardSet - 1].cards.length - 1);
    }
  };

  const goToCardSet = (setIndex: number) => {
    setCurrentCardSet(setIndex);
    setCurrentCard(0);
  };

  const currentSet = cardSets[currentCardSet];
  const currentCardData = currentSet.cards[currentCard];
  const IconComponent = currentSet.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-3">
            <img 
              src="/lovable-uploads/48a7e0bf-e856-4456-b94e-0998ce1a3da9.png" 
              alt="BePair Logo" 
              className="h-12 w-auto"
            />
            <div className="text-sm text-gray-500">
              IA que transforma relacionamento com clientes
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Dots */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-2 mb-8">
          {cardSets.map((set, index) => (
            <button
              key={index}
              onClick={() => goToCardSet(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCardSet 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Current Card Set Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <IconComponent className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              {currentSet.title}
            </h2>
          </div>
          <div className="text-sm text-gray-500">
            {currentCard + 1} de {currentSet.cards.length}
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto">
          <Card className={`${currentSet.color} shadow-2xl transition-all duration-500 hover:scale-105`}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {currentCardData.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {currentCardData.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {currentCardData.description}
                </p>
                
                {currentCardData.hasButton && (
                  <div className="space-y-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <a 
                        href={currentCardData.buttonLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2"
                      >
                        {currentCardData.hasWhatsAppIcon && (
                          <MessageCircle className="w-5 h-5" />
                        )}
                        <span>{currentCardData.buttonText}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    
                    {currentCardData.hasEmail && (
                      <div className="text-sm text-gray-600 mt-4">
                        ✉️ Envie suas dúvidas: contact.bepair@gmail.com
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevCard}
              disabled={currentCardSet === 0 && currentCard === 0}
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </Button>

            <div className="flex space-x-2">
              {currentSet.cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCard 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextCard}
              disabled={currentCardSet === cardSets.length - 1 && currentCard === currentSet.cards.length - 1}
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 disabled:opacity-50"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/48a7e0bf-e856-4456-b94e-0998ce1a3da9.png" 
              alt="BePair Logo" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-600 mb-4">
            Transformando relacionamento com clientes através de Personas de IA
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://wa.me/5521987162377?text=Olá%21%20Te%20conheci%20na%20Campus%20Party%20Brasília%20%2D%20Startup%20BePair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="mailto:contact.bepair@gmail.com"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
