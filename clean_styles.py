import re

for filename in ['index.html', 'en.html']:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = re.sub(r'text-align:\s*center;?', '', content)
    content = re.sub(r'margin:\s*0\s+auto;?', '', content)
    content = re.sub(r'margin:\s*-30px\s+auto\s+0;?', '', content)
    content = re.sub(r'text-shadow:[^;"]*;?', '', content)
    content = re.sub(r'color:\s*#[0-9a-fA-F]{3,6};?', '', content)
    content = re.sub(r'color:\s*var\(--(primary|secondary)-rgb\);?', '', content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Styles cleaned.")
