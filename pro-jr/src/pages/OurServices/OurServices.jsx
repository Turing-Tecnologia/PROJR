import React from 'react';
import ServicesIcon from '../../components/ServicesIcon/ServicesIcon';
import styles from './OurServices.module.css';
import ProJrLogo from '../../assets/LOGO_PRO_JR_PNG-removebg-preview 1.png';

const servicesData = [
  { title: "MAPEAMENTO DE PROCESSOS", description: "O mapeamento de processos identifica minuciosamente todas as etapas, fluxos e objetivos de seus processos, mas também aponta com precisão onde estão as oportunidades de melhoria." },
  { title: "CRONOANÁLISE", description: "A cronoanálise é uma ferramenta de estudo de tempos e movimentos, e é a chave para a otimização em sua linha de produção ou logística! Com ela, você ganha controle absoluto sobre seu negócio e identifica oportunidades valiosas para maximizar a eficiência." },
  { title: "ELABORAÇÃO DE LAYOUT", description: "Processo de organização de espaço que leva em conta cada detalhe, desde equipamentos até o fluxo de produção. Criamos o posicionamento perfeito para seus equipamentos, garantindo o máximo aproveitamento e eficiência no fluxo de produção." },
  { title: "GESTÃO DE ESTOQUE", description: "Planejamento, execução e controle dos seus recursos da melhor forma. Garantindo que você compre a quantidade certa de matérias-primas, mantenha suas mercadorias organizadas e nunca enfrente falta ou excesso." },
  { title: "PREVISÃO DE DEMANDA", description: "Realização da estimativa com precisão da quantidade de produtos ou serviços que seus clientes necessitarão, permitindo que você organize suas operações de forma impecável. Evitando o excesso e a escassez, garantindo o fornecimento ideal." },
  { title: "ATENDIMENTO AO CLIENTE", description: "Conjunto de práticas e estratégias para melhor atender os seus clientes, identificando as necessidades, e assim garantir a sua fidelização para com a sua empresa." },
  { title: "MODELO DE NEGÓCIOS", description: "Técnicas de análise de mercado para criar, entregar e capturar valor de maneira impecável. É a partir do modelo de negócios que você pode criar a sua empresa." },
  { title: "PLANEJAMENTO ESTRATÉGICO", description: "Estabelecimento de metas, estratégias de ação precisas e identificação dos recursos necessários para alcançá-las. Essencial para orientar e revitalizar sua empresa em busca de resultados excepcionais." },
  { title: "IMPLEMENTAÇÃO E MELHORIA DE DELIVERY", description: "Gestão de pedidos, preparação e entrega de produtos ou serviços através de plataformas de delivery." },
  { title: "FLUXO DE CAIXA", description: "Mantenha total controle sobre suas finanças, registrando meticulosamente todas as entradas e saídas de dinheiro. Tenha uma visão nítida de sua situação financeira atual e futura, permitindo decisões informadas que impulsionam o crescimento e a estabilidade." },
  { title: "CUSTEIO E PRECIFICAÇÃO", description: "Identificação e análise a cerca do que está envolvido dentre os custos de produção e, em seguida, definição dos preços de venda, de forma estratégica, garantindo a melhor lucratividade para seu negócio." },
  { title: "VIABILIDADE FINANCEIRA", description: "Metodologia de análise de custo-benefício como o critério definitivo para determinar a viabilidade financeira de projetos ou negócios. Apurando meticulosamente os custos e benefícios, permitindo que você tome decisões informadas e seguras." },
  { title: "GESTÃO DE REDES SOCIAIS", description: "Oferecemos soluções personalizadas para impulsionar a presença digital da sua empresa, desde consultorias simples até gestão completa, incluindo estratégias de postagem, criação de conteúdo e design visual exclusivo para aumentar o engajamento e a relevância da sua marca online." }
];

const OurServices = () => {
  const chunks = [];
  for (let i = 0; i < servicesData.length; i += 4) {
    chunks.push(servicesData.slice(i, i + 4));
  }

  return (
    <div id="services" className={styles.services}>
      <h2>Nossos serviços</h2>
      {chunks.map((chunk, index) => (
        <div key={index} className={`${styles.container} ${index === chunks.length - 1 ? styles.lastContainer : ''}`}>
          {chunk.map((service, i) => (
            <ServicesIcon
              key={i}
              title={service.title}
              description={service.description}
            />
          ))}
          <img src={ProJrLogo} alt="Logo Pro Jr" className={styles.containerLogo} />
        </div>
      ))}
    </div>
  );
};

export default OurServices;
