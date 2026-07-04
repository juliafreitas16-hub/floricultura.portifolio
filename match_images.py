import re
import unicodedata
from pathlib import Path

def norm(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode('ascii').lower()
    return ' '.join(''.join(ch if ch.isalnum() else ' ' for ch in s).split())

root = Path('imagens/categorias')
files = [p for p in root.rglob('*') if p.is_file()]
file_infos = []
for p in files:
    file_infos.append({
        'name': p.name,
        'path': p.as_posix().replace('\\', '/'),
        'folder': norm(p.parent.name),
        'normname': norm(p.name)
    })

text = Path('script.js').read_text(encoding='utf-8')
pattern = re.compile(r"\{[^{}]*?nome:\s*'([^']+)'[^{}]*?categoria:\s*'([^']+)'[^{}]*?img:\s*'([^']+)'[^{}]*?\}", re.S)
matches = pattern.findall(text)

for nome, categoria, img in matches:
    tnorm = norm(nome)
    best = None
    for fi in file_infos:
        score = 0
        if tnorm == fi['normname']:
            score += 200
        if tnorm in fi['normname'] or fi['normname'] in tnorm:
            score += 40
        if norm(categoria) in fi['folder']:
            score += 30
        if tnorm.split() and any(tok in fi['normname'] for tok in tnorm.split()):
            score += 20
        diff = abs(len(tnorm) - len(fi['normname']))
        score -= diff * 0.2
        if best is None or score > best['score']:
            best = {'score': score, 'file': fi}
    print(f"{nome} | {categoria} | {img} => {best['file']['path']} | score={best['score']}")
