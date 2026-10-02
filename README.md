# Prévia da Agência Veiga

Site estático em `dist/`, com as fotografias e a marca fornecidas pela cliente.

## Abrir localmente

Na pasta deste projeto, execute `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist` e abra http://127.0.0.1:4173/.

## Implementado

- Layout editorial responsivo com a identidade da VEIGA.
- Movimento de imagens na rolagem, entrada suave das seções e respeito à preferência por movimento reduzido.
- Quatro serviços selecionáveis, biografia expansível e três cases expansíveis.
- Links de WhatsApp, e-mail e LinkedIn extraídos dos materiais fornecidos.

## Validação

Navegação interna, arquivos de imagem e sintaxe JavaScript verificados. Prévia inspecionada no navegador em tamanhos de computador e celular; seleção de serviços e expansão de cases testadas. Sem rolagem horizontal nos tamanhos verificados de 390, 781 e 1440 pixels.

## Publicação

O Site foi registrado como privado em `.openai/hosting.json`, mas não publicado. O pacote local do plugin Sites ficou indisponível durante o trabalho e o arquivo `site-workflow.mjs` não foi encontrado. Reutilizar o project_id existente ao retomar; não criar outro Site. Nenhuma credencial foi salva neste projeto.

## Conteúdo a revisar com a cliente

Confirmar o nome comercial principal, foco comercial, direitos de uso das fotografias e contatos antes da publicação pública. Números de resultados ainda pendentes de validação não foram utilizados. Experiências são apresentadas como parte da trajetória da Lívia e da VEIGA, sem afirmar contratos atuais.
