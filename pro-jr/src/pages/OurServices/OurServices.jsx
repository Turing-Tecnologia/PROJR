import styles from './OurServices.module.css'

import ServicesButton from '../../components/ServicesButton/ServicesButton'

const OurServices = () => {
  return (
    <div id="services" className={styles.services}>
        <div>
            <ServicesButton
                ServicesTitle={'MAPEAMENTO DE PROCESSOS'}
                ServicesContent=
                {
                    'O mapeamento de processos identifica minuciosamente todas as etapas, fluxos e objetivos de seus processos, mas também aponta com precisão onde estão as oportunidades de melhoria.'
                }
            />
          
            <ServicesButton
                ServicesTitle={'CRONOANÁLISE'}
                ServicesContent=
                {
                    'A cronoanálise é uma ferramenta de estudo de tempos e movimentos, e é a chave para a otimização em sua linha de produção ou logística! Com ela, você ganha controle absoluto sobre seu negócio e identifica oportunidades valiosas para maximizar a eficiência.'
                }
            />

            <ServicesButton
                ServicesTitle={'ELABORAÇÃO DE LAYOUT'}
                ServicesContent=
                {
                    'Processo de organização de espaço que leva em conta cada detalhem desde equipamentos até o fluxo de produção. Criamos o posicionamento perfeito para seus equipamentos, garantindo o máximo aproveitamento e eficiência no fluxo de produção.'
                }
            />
          
            <ServicesButton
                ServicesTitle={'GESTÃO DE ESTOQUE'}
                ServicesContent=
                { 
                    'Planejamento, execução e controle dos seus recursos da melhor forma. Garantindo que você compre a quantidade certa de matériais-primas, mantenha suas mercadorias organizadas e nunca enfrente falta ou excesso.'
                }
            />

            <ServicesButton
                ServicesTitle={'PREVISÃO DE DEMANDA'}
                ServicesContent=
                { 
                    'Realização da estimativa com precisão da quantidade de produtos ou serviços que seus clientes necessitarão, permitindo que você organize suas operações de forma impecável. Evitando o excesso e a escassez, garantindo o fornecimento ideal.'
                }
            />
              
            <ServicesButton
                ServicesTitle={'ATENDIMENTO AO CLIENTE'}
                ServicesContent=
                {
                    'Conjunto de práticas e estratégias para melhor atender os seus clientes, identificando as necessidades, e assim garantir a sua fidelização para com a sua empresa.'
                }
            />

            <ServicesButton
                ServicesTitle={'MODELO DE NEGÓCIOS'}
                ServicesContent=
                {
                    'Técnicas de análise de mercado para criar, entregar e capturar valor de maneira impecável. É a parti do modelo de negócios que você pode criar a sua empresa.'
                }
            />

            <ServicesButton
                ServicesTitle={'PLANEJAMENTO ESTRATÉGICO'}
                ServicesContent=
                {
                    'Estabelecimento de metas, estratégias de ação precisas e identificação dos recursos necessários para alcançá-las. Essencial para orientar e revitalizar sua empresa em busca de resultados excepcionais.'
                }
            />

            <ServicesButton
                ServicesTitle={'IMPLEMENTAÇÃO E MELHORIA DE DELIVERY'}
                ServicesContent=
                {
                    'Gestão de pedidos, preparação e entrega de produtos ou serviços através de plataformas de delivery.'
                }
            />
          
            <ServicesButton
                ServicesTitle={'FLUXO DE CAIXA'}
                ServicesContent=
                {
                    'Mantenha total controle sobre suas finanças, registrando meticulosamente todas as entradas e saídas de dinheiro. Tenha uma visão nítida de sua situação financeira atual e futura, permitindo decisões informadas que impulsionam o crescimento e a estabilidade.'
                }
            />
            
            <ServicesButton
                ServicesTitle={'CUSTEIO E PRECIFICAÇÃO'}
                ServicesContent=
                {
                    'Identificação e análise a cerca do que está envolvido dentre os custos de produção e, em seguida, definição dos preços de venda, de forma estratégica, garantindo a melhor lucratividade para seu negócio.'
                }
            />
            
            <ServicesButton
                ServicesTitle={'VIABILIDADE FINANCEIRA'}
                ServicesContent=
                {
                    'Metodologia de análise de custo-benefício como o critério definitivo para determinar a viabilidade financeira de projetos ou negócios. Apurando meticulosamente os custos e benefícios, permitindo que você tome decisões informadas e seguras.'
                }
            />
            
            <ServicesButton
                ServicesTitle={'GESTÃO DE REDES SOCIAIS'}
                ServicesContent=
                {
                    'Oferecemos soluções personalizadas para impulsionar a presença digital da sua empresa, desde consultorias simples até gestão completa, incluindo estratégias de postagem, criação de conteúdo e design visual exclusivo para aumentar o engajamento e a relevância da sua marca online.'
                }
            />      
        </div>
    </div>
  )
}

export default OurServices