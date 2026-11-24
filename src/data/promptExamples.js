// Exemplos para preencher os campos do laboratório e orientar o aluno.
export const promptExamples = {
    text: {
        objective: "Explicar um conceito de forma simples.",
        context:
            "Preciso de uma explicação curta e didática sobre IA generativa para um estudante do ensino médio.",
        format: "explanation",
    },

    image: {
        subject: "Uma biblioteca do futuro com estudantes aprendendo.",
        style: "Ilustração digital",
        composition:
            "Plano aberto, iluminação suave e cores em ciano e lilás.",
    },
};

// Formatos disponíveis para organizar as respostas de texto.
export const textFormats = [
    {
        id: "explanation",
        label: "Texto explicativo (até 150 palavras)",
        instruction: "Responda com um texto explicativo de até 150 palavras.",
    },
    {
        id: "list",
        label: "Lista com cinco tópicos",
        instruction: "Organize a resposta em cinco tópicos.",
    },
    {
        id: "steps",
        label: "Passo a passo",
        instruction: "Organize a resposta em etapas numeradas.",
    },
];