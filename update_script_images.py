from pathlib import Path

replacements = {
    # homepage category covers
    "imagens/produtos/tematicos/bola1.jpg": "imagens/categorias/capadascategorias/Buquês temáticos.png",
    "imagens/categorias/girasois.jpg": "imagens/categorias/capadascategorias/Girassóis.png",
    "imagens/categorias/rosas.jpg": "imagens/categorias/capadascategorias/Rosas.png",
    "imagens/categorias/orquideas.jpg": "imagens/categorias/capadascategorias/Oquídeas.png",
    "imagens/categorias/adicionais.jpg": "imagens/categorias/capadascategorias/Adicionais.png",
    "imagens/categorias/ocasioes.jpg": "imagens/categorias/capadascategorias/Ocasiões especiais.png",

    # Buquês Temáticos products
    "imagens/produtos/tematicos/buque-bela-e-fera.jpg": "imagens/categorias/buquetematicos/Temático bela e a fera.jpg",
    "imagens/produtos/tematicos/buque-snopy.jpg": "imagens/categorias/buquetematicos/Tematico NBA.jpg",
    "imagens/produtos/tematicos/minions.jpg": "imagens/categorias/buquetematicos/Temático formatura.jpg",
    "imagens/produtos/tematicos/van-goh.jpg": "imagens/categorias/buquetematicos/Temático van gohg.jpg",
    "imagens/produtos/tematicos/bola.jpg": "imagens/categorias/buquetematicos/Temático homem aranha.jpg",

    # Girassóis products
    "imagens/produtos/girasois/girasois.jpg": "imagens/categorias/girasois/buque de girasois.jpg",
    "imagens/produtos/girasois/girasois-unico.jpg": "imagens/categorias/girasois/girasois premium.jpg",
    "imagens/produtos/girasois/girasois-roxo.jpg": "imagens/categorias/girasois/girassois  com rosas.jpg",
    "imagens/produtos/girasois/girasol-um.jpg": "imagens/categorias/girasois/caixa girassois.jpg",
    "imagens/produtos/girasois/girtasois-rosa.jpg": "imagens/categorias/girasois/arranjo de girassóis.jpg",

    # Rosas products
    "imagens/produtos/rosas/buque-v.jpg": "imagens/categorias/rosas/rosas vermelhas.jpg",
    "imagens/produtos/rosas/rosa-branca.jpg": "imagens/categorias/rosas/rosas branca.jpg",
    "imagens/produtos/rosas/v2.jpg": "imagens/categorias/rosas/rosas primavera.jpg",
    "imagens/produtos/rosas/v3.jpg": "imagens/categorias/rosas/buque azul.jpg",
    "imagens/produtos/rosas/amarelo.jpg": "imagens/categorias/rosas/rosas amarelas.jpg",
    "imagens/produtos/rosas/v4.jpg": "imagens/categorias/rosas/caixa rosas.jpg",
    "imagens/produtos/rosas/v6.jpg": "imagens/categorias/rosas/12 rosas.jpg",
    "imagens/produtos/rosas/v7.png": "imagens/categorias/rosas/buque gg.jpg",
    "imagens/produtos/rosas/v9.jpg": "imagens/categorias/rosas/buque uma rosa.jpg",

    # Orquídeas products
    "imagens/produtos/orquidias/orquidia-azul.jpg": "imagens/categorias/orquidias/orquedas branco.jpg",
    "imagens/produtos/orquidias/orquidia-roxo.jpg": "imagens/categorias/orquidias/orquedeas roxa.jpg",
    "imagens/produtos/orquidias/orquidia-vinho.jpg": "imagens/categorias/orquidias/orquedias rosa.jpg",
    "imagens/produtos/orquidias/vinho.jpg": "imagens/categorias/orquidias/arranjo.jpg",

    # Ocasiões Especiais products
    "imagens/produtos/ocassioes-especiais/noiva4.jpg": "imagens/categorias/ocasioesespeciais/Buquê de Casamento Luxo.jpg",
    "imagens/produtos/ocassioes-especiais/dia das maes.jpg": "imagens/categorias/ocasioesespeciais/Buquê Dia das Mães.jpg",
    "imagens/produtos/ocassioes-especiais/dia dos pais.jpg": "imagens/categorias/ocasioesespeciais/Girassóis - Dia dos Pais.jpg",
    "imagens/produtos/ocassioes-especiais/nascimentoboyy.jpg": "imagens/categorias/ocasioesespeciais/Arranjo Nascimento.jpg",
    "imagens/produtos/ocassioes-especiais/condolencias1.jpg": "imagens/categorias/ocasioesespeciais/Coroas Condolências.jpg",
    "imagens/produtos/ocassioes-especiais/buque nascimento.jpg": "imagens/categorias/ocasioesespeciais/Cesta de Nascimento Azul.jpg",
    "imagens/produtos/ocassioes-especiais/condolencias2.jpg": "imagens/categorias/ocasioesespeciais/Arranjo Condolências Tradicional.jpg",
    "imagens/produtos/ocassioes-especiais/dia da maes2.jpg": "imagens/categorias/ocasioesespeciais/Presente Dia das Mães.jpg",
    "imagens/produtos/orquidias/vinho.jpg": "imagens/categorias/ocasioesespeciais/Buquê Casamento Clássico.jpg",
    # Matching by name for Occasion products that already correlate to category images
    "imagens/produtos/rosas/buque-v.jpg": "imagens/categorias/ocasioesespeciais/Rosas Vermelhas - Dia dos Namorados.jpg",
    "imagens/produtos/orquidias/orquidia-azul.jpg": "imagens/categorias/ocasioesespeciais/Orquídea Branca - Casamento.jpg",
    "imagens/produtos/rosas/v7.png": "imagens/categorias/ocasioesespeciais/Buquê para Namorados.jpg",

    # Monte seu Buquê builder images
    "imagens/produtos/monte-seu-buque/rosas/rosa-vermelha.jpg": "imagens/categorias/monte seu buque/Rosa vermelhaa.jpg",
    "imagens/produtos/monte-seu-buque/rosas/rosa-branca.jpg": "imagens/categorias/monte seu buque/rosa branca.jpg",
    "imagens/produtos/monte-seu-buque/rosas/gi-um.jpg": "imagens/categorias/monte seu buque/Girassol.jpg",
    "imagens/produtos/monte-seu-buque/orquidia-um.jpg": "imagens/categorias/monte seu buque/Orquidia.jpg",
    "imagens/produtos/monte-seu-buque/rosas/v2.jpg": "imagens/categorias/monte seu buque/lirio.jpg",
    "imagens/produtos/monte-seu-buque/rosas/v3.jpg": "imagens/categorias/monte seu buque/Gipsofila.jpg",
    "imagens/produtos/monte-seu-buque/Embalagens/embalagem-branca.jpg": "imagens/categorias/monte seu buque/luxo branca.jpg",
    "imagens/produtos/monte-seu-buque/Embalagens/embalagem-rosa.jpg": "imagens/categorias/monte seu buque/Luxo dourada.jpg",
    "imagens/produtos/monte-seu-buque/Embalagens/papel-craft.jpg": "imagens/categorias/monte seu buque/rustica.jpg",
    "imagens/produtos/monte-seu-buque/Embalagens/papel-preto.jpg": "imagens/categorias/monte seu buque/premium preta.jpg",
    "imagens/produtos/monte-seu-buque/lacos/laco-vermelho.jpg": "imagens/categorias/monte seu buque/vermelho.jpg",
    "imagens/produtos/monte-seu-buque/lacos/laco-dourado.jpg": "imagens/categorias/monte seu buque/Dourada.jpg",
    "imagens/produtos/monte-seu-buque/lacos/laco-prata.jpg": "imagens/categorias/monte seu buque/prata.jpg",
    "imagens/produtos/monte-seu-buque/Embalagens/laco-rosa.jpg": "imagens/categorias/monte seu buque/rosa.jpg",
}

path = Path('script.js')
text = path.read_text(encoding='utf-8')
for old, new in replacements.items():
    if old not in text:
        print(f'MISSING {old}')
    text = text.replace(old, new)
path.write_text(text, encoding='utf-8')
print('UPDATED', len(replacements), 'paths in script.js')
