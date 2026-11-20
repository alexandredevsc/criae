export const trails = [
    {
        id: "fundamentos",
        title: "Fundamentos da IA generativa",
        description:
            "Entenda os conceitos e aprenda a usar IA com responsabilidade.",

        lessons: [
            // Primeira aula
            {
                id: "o-que-e-ia-generativa",
                title: "O que é IA generativa?",
                durationMinutes: 5,
                introduction:
                    "IA generativa é uma tecnologia capaz de produzir conteúdos a partir de padrões aprendidos em dados.",

                summary: [
                    "Pode gerar textos, imagens, áudios e outros conteúdos.",
                    "Produz resultados a partir das instruções recebidas.",
                    "Pode cometer erros e exige avaliação humana.",
                ],

                example:
                    "Você pode pedir uma explicação sobre um assunto e depois solicitar exemplos adequados ao seu nível de conhecimento.",
            },

            // Segunda aula
            {
                id: "como-a-ia-aprende",
                title: "Como a IA aprende?",
                durationMinutes: 7,
                introduction:
                    "Durante o treinamento, modelos generativos ajustam seus parâmetros para aprender padrões presentes em grandes conjuntos de dados. Ao receber um prompt, usam esses padrões para produzir uma resposta.",

                summary: [
                    "O treinamento identifica padrões nos dados.",
                    "Gerar uma resposta não é o mesmo que consultar uma fonte confiável.",
                    "Os resultados podem reproduzir erros e vieses dos dados.",
                ],

                example:
                    "Um modelo treinado com muitos textos pode aprender padrões de linguagem e produzir uma explicação nova. Isso não garante que os fatos apresentados estejam corretos.",
            },

            // Terceira aula
            {
                id: "usos-e-beneficios",
                title: "Usos e benefícios",
                durationMinutes: 6,

                introduction:
                    "A IA generativa pode apoiar estudos, trabalho e criatividade. Seus benefícios dependem de escolher tarefas adequadas e revisar os resultados.",

                summary: [
                    "Pode ajudar a elaborar rascunhos, resumos e ideias.",
                    "Permite adaptar explicações ao nível de conhecimento do aluno.",
                    "Pode aumentar a produtividade, mas exige revisão humana.",
                ],

                example:
                    "Ao estudar, você pode pedir perguntas de revisão sobre um texto. Depois, confira se as respostas estão de acordo com o material original.",
            },

            // Quarta aula
            {
                id: "riscos-e-privacidade",
                title: "Riscos, privacidade e responsabilidade",
                durationMinutes: 6,

                introduction:
                    "A IA generativa pode produzir informações falsas, reproduzir vieses e facilitar a criação de conteúdo enganoso. Usá-la com responsabilidade exige verificar resultados e proteger informações pessoais.",

                summary: [
                    "Confira afirmações importantes em fontes confiáveis.",
                    "Observe possíveis estereótipos, vieses e informações enganosas.",
                    "Não inclua senhas, documentos ou dados pessoais sensíveis nos prompts.",
                    "Use a IA como apoio ao aprendizado, mantendo sua autonomia.",
                ],

                example:
                    "Para pedir ajuda na revisão de um currículo, substitua nome, telefone, endereço e outros dados pessoais por informações fictícias antes de enviar o texto.",
            },
        ],
    },

    // Trilha de prompts
    {
        id: "prompts",
        title: "Prompts na prática",
        description:
            "Aprenda a construir instruções claras e avaliar os resultados.",

        lessons: [

            //Aula 1
            {
                id: "estrutura-de-um-prompt",
                title: "Como montar um bom prompt?",
                durationMinutes: 5,

                introduction:
                    "Um prompt é a instrução enviada à IA. Explicar o objetivo, fornecer contexto e indicar o formato desejado ajuda a orientar a resposta, mas não garante que ela esteja correta.",

                summary: [
                    "Explique qual tarefa você quer realizar.",
                    "Informe o contexto e o público da resposta.",
                    "Indique o formato e as restrições importantes.",
                    "Avalie o resultado e ajuste a instrução quando necessário.",
                ],

                example:
                    "Explique o ciclo da água para um estudante de 12 anos. Use linguagem simples, três tópicos e um exemplo do cotidiano.",
            },

            //Aula 2
            {
                id: "contexto-e-publico",
                title: "Contexto e público",
                durationMinutes: 4,

                introduction:
                    "O contexto explica a situação da tarefa. Informar quem vai receber a resposta ajuda a orientar a linguagem, os exemplos e o nível de detalhe.",

                summary: [
                    "Explique a situação e o objetivo da tarefa.",
                    "Informe para quem a resposta será destinada.",
                    "Indique o conhecimento prévio desse público.",
                    "Forneça apenas as informações necessárias, sem dados pessoais sensíveis.",
                ],

                example:
                    "Em vez de pedir apenas 'Explique reciclagem', experimente: 'Explique reciclagem para alunos de 10 anos. Use linguagem simples e exemplos de materiais encontrados na escola'.",
            },
            //Aula 3
            {
                id: "formato-e-restricoes",
                title: "Formato e restrições",
                durationMinutes: 4,

                introduction:
                    "Indicar como a resposta deve ser organizada ajuda a torná-la mais útil. Você pode definir tamanho, estrutura, tom e critérios que precisam ser respeitados.",

                summary: [
                    "Escolha um formato, como lista, tabela ou texto curto.",
                    "Defina o tamanho aproximado da resposta.",
                    "Informe o tom e os elementos que devem aparecer.",
                    "Confira se a resposta respeitou as instruções.",
                ],

                example:
                    "Crie um plano de estudos de cinco dias sobre IA generativa. Organize em uma tabela com dia, assunto e atividade. Considere 30 minutos por dia e use linguagem para iniciantes.",
            },

            //Aula 4
            {
                id: "avaliar-e-melhorar",
                title: "Avaliar e melhorar respostas",
                durationMinutes: 5,

                introduction:
                    "Criar um prompt é um processo de revisão. Depois de receber a resposta, confira se ela atende ao objetivo, verifique as informações e ajuste as instruções quando necessário.",

                summary: [
                    "Compare o resultado com o objetivo e o formato solicitados.",
                    "Confira afirmações importantes em fontes confiáveis.",
                    "Identifique o que ficou vago, incompleto ou inadequado.",
                    "Ajuste o prompt e compare as versões sem presumir que a nova está correta.",
                ],

                example:
                    "Se uma explicação ficou técnica demais, peça: 'Reescreva para um iniciante, explique os termos difíceis e inclua um exemplo cotidiano'. Depois, confira se a nova versão manteve as informações corretas.",
            },
        ],
    },

    // Trilha de ética e segurança
    {

        //Aula 1
        id: "etica",
        title: "Ética e segurança",
        description:
            "Pratique a avaliação crítica dos resultados e a proteção de dados.",

        lessons: [
            {
                id: "avaliar-antes-de-compartilhar",
                title: "Avalie antes de compartilhar",
                durationMinutes: 5,

                introduction:
                    "Uma resposta convincente pode conter erros ou apresentar uma visão parcial. Antes de usar ou compartilhar conteúdo gerado por IA, avalie sua precisão, seu contexto e seus possíveis impactos.",

                summary: [
                    "Confira informações importantes em fontes independentes e confiáveis.",
                    "Verifique se as fontes citadas existem e sustentam a afirmação.",
                    "Observe estereótipos e perspectivas que possam ter sido ignoradas.",
                    "Evite expor dados pessoais seus ou de outras pessoas.",
                ],

                example:
                    "Ao receber um resumo com uma estatística, procure a publicação original. Confira a data, o contexto e se o número realmente aparece nela antes de compartilhar.",
            },

            //Aula 2 
            {
                id: "reconhecer-vieses",
                title: "Reconhecer vieses",
                durationMinutes: 4,

                introduction:
                    "Respostas geradas por IA podem reproduzir estereótipos e favorecer algumas perspectivas. Uma resposta bem escrita não garante uma representação justa das pessoas e das situações.",

                summary: [
                    "Observe generalizações sobre grupos de pessoas.",
                    "Identifique perspectivas relevantes que ficaram de fora.",
                    "Peça critérios claros e exemplos diversos.",
                    "Revise o resultado, pois pedir imparcialidade não elimina os vieses.",
                ],

                example:
                    "Ao pedir sugestões de profissões para estudantes, confira se a resposta associa determinadas carreiras a um gênero. Solicite opções baseadas em interesses e habilidades, sem estereótipos.",
            },

            //Aula 3

            {
                id: "proteger-dados-pessoais",
                title: "Proteger dados pessoais",
                durationMinutes: 4,

                introduction:
                    "Antes de enviar informações a uma ferramenta de IA, avalie o que realmente é necessário para a tarefa. Evite expor dados pessoais e informações confidenciais suas ou de outras pessoas.",

                summary: [
                    "Nunca envie senhas, tokens ou chaves de acesso.",
                    "Remova nomes, documentos, contatos e outros identificadores desnecessários.",
                    "Não compartilhe informações confidenciais sem autorização.",
                    "Consulte as configurações e as políticas de uso de dados da ferramenta.",
                ],

                example:
                    "Para revisar uma mensagem de atendimento, substitua o nome do cliente, o telefone e o número do pedido por dados fictícios. Preserve apenas o contexto necessário para melhorar o texto.",
            },

            //Aula 4
            {
                id: "uso-responsavel-nos-estudos",
                title: "Uso responsável nos estudos",
                durationMinutes: 5,

                introduction:
                    "A IA pode apoiar os estudos com explicações, perguntas e sugestões. O aprendizado exige que você compreenda o conteúdo, confira os resultados e respeite as orientações da atividade.",

                summary: [
                    "Use a IA para esclarecer dúvidas e praticar.",
                    "Tente resolver a atividade antes de consultar uma resposta pronta.",
                    "Confira as informações e explique a solução com suas palavras.",
                    "Respeite as regras do professor e informe o uso de IA quando solicitado.",
                ],

                example:
                    "Depois de tentar resolver um exercício, peça uma dica em vez da resposta completa. Compare seu raciocínio com a explicação e tente resolver outro exercício semelhante sem ajuda.",
            },


        ],
    },
];