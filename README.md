# Descrição

A tarefa é simples: implementar uma coleta de NPS (Net Promoted Score). Para saber mais sobre o significado da metodologia NPS veja esse artigo.

Basicamente usamos essa função para coletar a percepção que nosso usuário tem de todo nosso conteúdo. Assim podemos coletar insumos que irão impactar no desenvolvimento futuro, com ajustes, inovações, etc.

O layout que implementaremos no produto você pode conferir aqui: https://projects.invisionapp.com/share/DVH8YGZYPRK

Seguem algumas orientações relacionadas ao UX: 

## Requisitos básicos:
- O bloco de coleta do NPS de ser exibido em um elemento fixo, mesmo ao fazermos scroll. Ver referência medium (https://medium.com/@smolenyak/the-immigrant-ancestors-ann-coulter-wishes-she-didnt-have-23bf504fc667)
- O protótipo mostra o cenário feliz, em que o usuário deu nota máxima e recebeu um emoji feliz de feedback, mas a escala vai de zero a 10. Sendo as regras para usar o emoji:
- Detratores: clientes que deram notas de 0 a 6. Por estarem insatisfeitos, podem “falar mal” da nossa empresa.
- Neutros: clientes que deram notas de 7 a 8. Estão satisfeitos com sua empresa, mas não foram “surpreendidos” ou “encantados” por seus produtos ou serviços. Não serão fiéis.
- Promotores: clientes que deram notas de 9 a 10. Estes clientes realmente ficaram satisfeitos com o nível de serviços e qualidade dos produtos da empresa e passam a fazer uma verdadeira “propaganda gratuita”, recomendando e até se orgulhando de serem clientes.

## Não é obrigatório, mas é um diferencial: 
- Após dar uma nota e escrever um comentário, a barra não irá mais aparecer para aquele usuário.
- Animação após selecionar a nota com efeito semelhante ao curtir um post no medium. Referência: https://medium.com/@smolenyak/the-immigrant-ancestors-ann-coulter-wishes-she-didnt-have-23bf504fc667. (dê um scroll down para ver)

### Backend:

- Para armazenar os dados ne NPS você deve utilizar os seguintes endpoints REST:
- - Salvar nota: POST https://staging-api.lejour.com.br/portal/api/v2/nps/
- - Body (JSON): { "score": "<nota>" }
- - Return (JSON): { "code": 200, "reason": "OK", "data": { "id": "<chave_nps>", "resposta" : true } }
- Salvar comentário: POST https://staging-api.lejour.com.br/portal/api/v2/nps/
- - Body (JSON): { "id": "<chave_nps>", "comment": "<comentario>" }
- - Return (JSON): { "code": 200, "reason": "OK", "data": true }
- Recuperar resultado: GET https://staging-api.lejour.com.br/portal/api/v2/nps/

### Tecnologias a serem utilizadas:
- Angular / Typescript
- SASS

### Entrega esperada: 
Em 48h