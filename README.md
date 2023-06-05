# Teste de Programação - Rota das Oficinas

Seja bem-vindo(a) ao nosso Teste de Programação! Nesta etapa, serão passados 3 desafios para você solucionar. Você pode utilizar qualquer ferramenta, biblioteca ou framework para a implementação, desde que ao final exista uma página HTML interativa com a resolução.

## Instruções

1. Clone este repositório em sua máquina local.
2. Implemente a solução para cada um dos desafios mencionados abaixo.
3. Ao finalizar o teste, compartilhe a solução de todos os exercícios que conseguiu resolver em um link aberto no Google Drive.
4. Certifique-se de que o link é público para que possamos acessar o código.
5. Não se esqueça de incluir instruções sobre como rodar seu projeto.
6. Caso não consiga resolver todos os exercícios, envie os que conseguiu.

## Desafios

### Tarefa 1: Conversor de números romanos

A sua tarefa será fazer um conversor de números romanos para arábicos e vice-versa. Para a tarefa, considere apenas números inteiros positivos entre 1 e 3999.

Sobre números romanos:
Os números romanos são indicações numéricas utilizadas para indicar séculos, capítulos e páginas de livros, horas dos relógios, nomes dos papas e reis, dentre outros. São representados por letras maiúsculas, num total de 7 numerações: I (1), V (5), X (10), L (50), C (100), D (500), M (1000). Para representar outros números, são escritos alguns algarismos, começando do algarismo de maior valor e seguindo a seguinte regra:

- Algarismos de menor ou igual valor à direita são somados ao algarismo de maior valor;
- Algarismos de menor valor à esquerda são subtraídos do algarismo de maior valor.

Assim, XI representa 10 + 1 = 11, enquanto XC representa 100 - 10 = 90.

- Um algarismo não pode ser repetido lado a lado por mais de três vezes. Assim, para representar 300, podemos usar CCC; para representar 400, entretanto, precisamos escrever CD.
- A letra I é utilizada somente antes do V e do X, por exemplo: IV = 4; IX = 9;
- A letra X é utilizada somente antes do L e do C, por exemplo: XL = 40; XC = 90;
- A letra C é utilizada somente antes do D e do M, por exemplo, CD = 400; CM = 900.

### Tarefa 2: Jogo da vida

A sua tarefa será implementar um tabuleiro interativo do jogo da vida de Conway. Considere um tabuleiro composto por pelo menos 10 células de largura e altura.

Sobre o jogo da vida:
O jogo da vida é um autômato celular desenvolvido pelo matemático britânico John Horton Conway em 1970. É o exemplo mais bem conhecido de autômato celular. O jogo foi criado de modo a reproduzir, através de regras simples, as alterações e mudanças em grupos de seres vivos, tendo aplicações em diversas áreas da ciência.

As regras do jogo são as seguintes:

- Qualquer espaço vazio com exatamente três vizinhos vivos se torna uma célula viva.
- Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
- Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
- Qualquer célula viva com dois ou três vizinhos vivos continua viva para a próxima geração.

Você pode conferir um exemplo interativo do jogo da vida [aqui](https://playgameoflife.com/).

### Tarefa 3: Divisor de conta de restaurante

A sua tarefa será criar uma calculadora capaz de dividir a conta de um estabelecimento para cada cliente considerando somente o consumido por cada um. Considere que a calculadora somente faz a divisão de uma conta por vez.

Requisitos:

- Deve ser possível inserir múltiplos produtos e clientes.
- Um cliente pode ter consumido vários, um ou nenhum produto.
- Um produto pode ter sido consumido por vários ou um cliente.
- Deve ser verificada a inclusão dos 10% do serviço para cada pessoa individualmente, sendo a taxa aplicada ao valor que cada um gastou.

## Compartilhando a solução

Compartilhe sua solução dos exercícios resolvidos em um link aberto no Google Drive. Certifique-se de incluir todas as instruções necessárias para rodar o projeto.

Boa sorte!
