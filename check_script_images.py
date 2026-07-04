from pathlib import Path
import re

text = Path('script.js').read_text(encoding='utf-8')
imgs = re.findall(r"img:\s*'([^']+)'", text)
unique = sorted(set(imgs))
print('TOTAL_REFS', len(imgs))
print('UNIQUE_REFS', len(unique))
print()
for img in unique:
    exists = Path(img).exists()
    print(f"{exists}\t{img}")
