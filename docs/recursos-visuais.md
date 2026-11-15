# Recursos visuais do CrIAê

## Marcas

- src/assets/brand/criae-logo-dark-v2.png: proposta para tema escuro.
- src/assets/brand/criae-logo-light-v1.png: proposta para tema claro.
- A versão dark-v1 foi preservada como histórico; contém resíduos de geração.

As novas marcas têm fundos opacos (navy e branco). A geração transparente
produziu resíduos nas letras. Conferir o encaixe no fundo do menu e a
legibilidade em tamanho pequeno antes da aprovação definitiva.
Não são reproduções vetoriais exatas da arte original.

## Ícones que mudam de cor

Icon.jsx reutiliza os SVGs existentes como máscaras CSS. Assim, o desenho
permanece no arquivo original e a cor pode acompanhar o tema, sem duplicação.
Usar o nome do arquivo sem a extensão .svg.

```jsx
import Icon from './components/icons/Icon'

<Icon name="menu-home" />
<Icon name="menu-challenges" color="#A78BFA" size={24} />
<Icon name="copy-response" />
<Icon name="chevron-down" size={16} />
```

Sem color, o ícone herda a cor do texto. A máscara transforma o desenho em
uma única cor: para preservar gradientes internos, usar o SVG original
como imagem. Para o tema claro, escolher cores com contraste adequado.

Ícones junto de texto são decorativos e ficam ocultos de leitores de tela.
Botões somente com ícone precisam de aria-label no próprio botão.
A propriedade label é destinada a ícones independentes com significado.

## Brilhos

Preferir SparklesIcon.jsx com a cor do contexto. Os SVGs sparkles-dark.svg
e sparkles-response.svg foram preservados para evitar exclusões antes de
conferir o uso na interface; não é necessário usar todos eles.

## Conferência pendente

Comparar os recursos nos componentes reais com os dois mockups.
A presença dos arquivos não significa igualdade visual exata.
Login, cadastro e Meu progresso ainda precisam de composição visual própria.
