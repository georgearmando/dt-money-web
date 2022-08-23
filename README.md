# Porquê que um componente renderiza?
  - Hooks Changed (mudou o estado, contexto, reducer ...)
  - Props Changed (mudou uma propriedade)
  - Parent (componente pai renderizou)

# Qual é o fluxo de renderização?
  1. O React recria o HTML da interface do componente
  2. Compara a versão do HTML recriada com a versão anterior
  3. Se mudou alguma coisa, ele reescreve o HTML na tela

# memo é uma função do react usada para memorizar um componente
  - Adiciona um passo inicial ao fluxo normal de renderização do react:
    0. Hooks changed, Props changed - faz um deep comparison
    0.1. Compara a versão anterior dos hooks e props
    0.2. Se mudou alguma coisa, ele vai permitir o novo fluxo de renderização

# O memo só deve ser usado preferencialmente para componentes que têm um HTML muito grande
# Muitas vezes é melhor deixar o react recriar o HTML do que ficar a comparar versões diferentes dos hooks e props