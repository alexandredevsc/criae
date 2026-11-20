// Atividades vinculadas às trilhas e aulas pelos seus identificadores.
export const activities = [

    // Atividades de Fundamentos
    {
        id: "fundamentos-o-que-e-ia-generativa",
        trailId: "fundamentos",
        lessonId: "o-que-e-ia-generativa",
        response:
            "Sou uma IA generativa. Produzo conteúdos a partir de padrões aprendidos em dados, mas minhas respostas podem conter erros.",
        question: "Qual afirmação descreve melhor a IA generativa?",
        options: [
            {
                id: "a",
                text: "Produz conteúdos a partir de padrões aprendidos em dados.",
            },
            {
                id: "b",
                text: "Sempre apresenta informações corretas e verificadas.",
            },
            {
                id: "c",
                text: "Substitui a necessidade de avaliação humana.",
            },
        ],
        correctOptionId: "a",
        explanation:
            "A IA generativa produz conteúdos a partir de padrões aprendidos em dados. Seus resultados podem conter erros e precisam de avaliação humana.",
    },

    // Verifica a compreensão sobre treinamento e confiabilidade das respostas.
    {
        id: "fundamentos-como-a-ia-aprende",
        trailId: "fundamentos",
        lessonId: "como-a-ia-aprende",
        response:
            "Aqui está uma explicação clara e convincente sobre o assunto. Por estar bem escrita, você pode considerar todas as informações corretas.",
        question:
            "Uma IA produz uma explicação convincente. O que isso permite concluir?",
        options: [
            {
                id: "a",
                text: "A explicação foi consultada em uma fonte confiável.",
            },
            {
                id: "b",
                text: "O modelo gerou a explicação usando padrões aprendidos, mas os fatos precisam ser verificados.",
            },
            {
                id: "c",
                text: "A explicação está correta porque foi escrita com clareza.",
            },
        ],
        correctOptionId: "b",
        explanation:
            "Uma resposta clara e convincente pode conter erros. O modelo usa padrões aprendidos durante o treinamento; isso não garante a veracidade das informações.",
    },

    // Avalia o uso da IA como apoio aos estudos, com revisão humana.
    {
        id: "fundamentos-usos-e-beneficios",
        trailId: "fundamentos",
        lessonId: "usos-e-beneficios",
        response:
            "Posso ajudar você a estudar criando perguntas de revisão sobre seu material. Confira as respostas no texto original.",
        question:
            "Qual situação demonstra um uso adequado da IA nos estudos?",
        options: [
            {
                id: "a",
                text: "Entregar uma resposta gerada sem ler ou conferir.",
            },
            {
                id: "b",
                text: "Substituir todo o material de estudo pelas respostas da IA.",
            },
            {
                id: "c",
                text: "Gerar perguntas de revisão e conferir as respostas no material original.",
            },
        ],
        correctOptionId: "c",
        explanation:
            "A IA pode apoiar a revisão e a organização dos estudos. Conferir os resultados no material original ajuda a identificar erros e mantém o aluno participando do aprendizado.",
    },

    // Avalia os cuidados com dados pessoais ao elaborar prompts.
    {
        id: "fundamentos-riscos-e-privacidade",
        trailId: "fundamentos",
        lessonId: "riscos-e-privacidade",
        response:
            "Posso revisar a escrita do seu currículo. Antes de enviar, substitua os dados pessoais por informações fictícias.",
        question:
            "Antes de pedir à IA que revise um currículo, qual cuidado é adequado?",
        options: [
            {
                id: "a",
                text: "Substituir nome, telefone, endereço e outros dados pessoais por informações fictícias.",
            },
            {
                id: "b",
                text: "Incluir documentos e senhas para oferecer mais contexto.",
            },
            {
                id: "c",
                text: "Enviar todos os dados pessoais, pois a IA sempre garante sigilo.",
            },
        ],
        correctOptionId: "a",
        explanation:
            "Para revisar a escrita de um currículo, não é necessário enviar dados pessoais reais. Substituí-los por informações fictícias reduz a exposição dessas informações.",
    },

    //Atividade de Prompts na prática

    // Avalia a clareza do objetivo e do formato solicitado no prompt.
    {
        id: "prompts-estrutura-de-um-prompt",
        trailId: "prompts",
        lessonId: "estrutura-de-um-prompt",
        response:
            "Para ajudar nos seus estudos, preciso entender qual assunto você quer revisar, seu objetivo e como deseja receber a resposta.",
        question: "Qual prompt apresenta uma tarefa mais clara?",
        options: [
            {
                id: "a",
                text: "Fale alguma coisa sobre estudos.",
            },
            {
                id: "b",
                text: "Crie um plano de estudos de cinco dias para revisar frações, com uma atividade por dia.",
            },
            {
                id: "c",
                text: "Faça algo bom para mim.",
            },
        ],
        correctOptionId: "b",
        explanation:
            "O prompt informa o objetivo, o assunto, o período e o formato esperado. Isso ajuda a orientar a resposta, que ainda precisa ser revisada.",
    },

    // Verifica como o público orienta a linguagem e os exemplos.
    {
        id: "prompts-contexto-e-publico",
        trailId: "prompts",
        lessonId: "contexto-e-publico",
        response:
            "Posso explicar reciclagem para crianças de 10 anos usando linguagem simples e exemplos do cotidiano escolar.",
        question:
            "Você quer uma explicação sobre reciclagem para crianças de 10 anos. Que informação ajuda a orientar a resposta?",
        options: [
            {
                id: "a",
                text: "O nome completo e o endereço de cada criança.",
            },
            {
                id: "b",
                text: "A instrução para usar o máximo possível de termos técnicos.",
            },
            {
                id: "c",
                text: "A idade do público, a linguagem simples e exemplos do cotidiano escolar.",
            },
        ],
        correctOptionId: "c",
        explanation:
            "Informar o público e seu contexto ajuda a orientar a linguagem e os exemplos. Dados pessoais das crianças não são necessários para essa tarefa.",
    },

    // Avalia a definição de formato e limites para a resposta.
    {
        id: "prompts-formato-e-restricoes",
        trailId: "prompts",
        lessonId: "formato-e-restricoes",
        response:
            "Posso organizar um resumo em tópicos. Informe quantos tópicos deseja e o limite de palavras de cada um.",
        question:
            "Você precisa de um resumo curto em tópicos. Qual instrução expressa melhor esse formato?",
        options: [
            {
                id: "a",
                text: "Resuma o texto em três tópicos, com até 20 palavras em cada tópico.",
            },
            {
                id: "b",
                text: "Escreva tudo o que souber sobre o assunto.",
            },
            {
                id: "c",
                text: "Faça uma resposta interessante.",
            },
        ],
        correctOptionId: "a",
        explanation:
            "A instrução define a organização e o tamanho esperado. Depois de receber a resposta, confira se ela respeita os limites e preserva as ideias do texto.",
    },

    // Avalia a revisão e o aperfeiçoamento das respostas geradas.
    {
        id: "prompts-avaliar-e-melhorar",
        trailId: "prompts",
        lessonId: "avaliar-e-melhorar",
        response:
            "Minha resposta ficou genérica e uma informação parece duvidosa. Você pode ajustar as instruções, mas também precisa verificar os fatos.",
        question:
            "A resposta ficou genérica e trouxe uma informação duvidosa. Qual é o próximo passo mais adequado?",
        options: [
            {
                id: "a",
                text: "Copiar a resposta, pois um texto bem escrito deve estar correto.",
            },
            {
                id: "b",
                text: "Verificar a informação em uma fonte confiável e ajustar o prompt com orientações mais específicas.",
            },
            {
                id: "c",
                text: "Pedir que a IA confirme que está certa e aceitar a confirmação como prova.",
            },
        ],
        correctOptionId: "b",
        explanation:
            "Melhorar o prompt pode tornar a resposta mais útil, mas não garante sua veracidade. Informações duvidosas precisam ser verificadas em fontes confiáveis.",
    },

    //Atividadades desafios de ética e segurança

    // Avalia a verificação de informações antes do compartilhamento.
    {
        id: "etica-avaliar-antes-de-compartilhar",
        trailId: "etica",
        lessonId: "avaliar-antes-de-compartilhar",
        response:
            "Acabei de gerar uma notícia surpreendente, mas não apresentei fontes que permitam verificar as informações.",
        question:
            "Uma IA gerou uma notícia surpreendente sem apresentar fontes. O que fazer antes de compartilhar?",
        options: [
            {
                id: "a",
                text: "Compartilhar rapidamente porque o texto parece convincente.",
            },
            {
                id: "b",
                text: "Pedir que a IA escreva com mais confiança.",
            },
            {
                id: "c",
                text: "Verificar a informação em fontes confiáveis e conferir a data e o contexto.",
            },
        ],
        correctOptionId: "c",
        explanation:
            "Um texto convincente pode conter informações falsas. Conferir fontes, data e contexto ajuda a evitar a divulgação de conteúdo enganoso.",
    },

    // Avalia a identificação de estereótipos nas respostas.
    {
        id: "etica-reconhecer-vieses",
        trailId: "etica",
        lessonId: "reconhecer-vieses",
        response:
            "Engenharia é uma profissão para homens, enquanto mulheres devem escolher outras áreas.",
        question:
            "Uma resposta associa determinada profissão apenas a homens. Qual atitude demonstra avaliação crítica?",
        options: [
            {
                id: "a",
                text: "Identificar o estereótipo e revisar a resposta para representar as pessoas de forma mais justa.",
            },
            {
                id: "b",
                text: "Aceitar a associação porque foi produzida por uma IA.",
            },
            {
                id: "c",
                text: "Concluir que todas as respostas da ferramenta são imparciais.",
            },
        ],
        correctOptionId: "a",
        explanation:
            "Os modelos podem reproduzir vieses presentes nos dados de treinamento. A avaliação humana ajuda a reconhecer e corrigir associações injustas.",
    },

    // Avalia a redução da exposição de informações pessoais.
    {
        id: "etica-proteger-dados-pessoais",
        trailId: "etica",
        lessonId: "proteger-dados-pessoais",
        response:
            "Para melhorar sua mensagem, envie também o nome completo, o endereço e os documentos do colega mencionado.",
        question:
            "Você quer ajuda para melhorar uma mensagem que contém dados de um colega. Como preparar o texto?",
        options: [
            {
                id: "a",
                text: "Acrescentar documentos do colega para tornar o pedido mais completo.",
            },
            {
                id: "b",
                text: "Remover ou substituir os dados pessoais que não são necessários para revisar a mensagem.",
            },
            {
                id: "c",
                text: "Enviar os dados sem avaliar quais informações são necessárias.",
            },
        ],
        correctOptionId: "b",
        explanation:
            "Para melhorar a escrita, geralmente não é necessário identificar as pessoas envolvidas. Remover dados desnecessários reduz sua exposição.",
    },

    // Avalia a autonomia do aluno e o respeito às orientações da atividade.
    {
        id: "etica-uso-responsavel-nos-estudos",
        trailId: "etica",
        lessonId: "uso-responsavel-nos-estudos",
        response:
            "Posso apoiar seu trabalho escolar com ideias e explicações. Você deve compreender o conteúdo e seguir as orientações do professor.",
        question:
            "Qual atitude representa um uso responsável da IA em um trabalho escolar?",
        options: [
            {
                id: "a",
                text: "Entregar o texto gerado como se tivesse sido escrito integralmente por você.",
            },
            {
                id: "b",
                text: "Usar a ferramenta para evitar compreender o conteúdo.",
            },
            {
                id: "c",
                text: "Seguir as orientações do professor, revisar as informações e informar o uso da IA quando solicitado.",
            },
        ],
        correctOptionId: "c",
        explanation:
            "A IA pode apoiar o aprendizado, mas o aluno continua responsável pelo trabalho. É necessário compreender o conteúdo e respeitar as regras definidas pelo professor.",
    },
];