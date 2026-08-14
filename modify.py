import os
import re

def process_html(filename, is_index):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract style block to old_style.css if index
    if is_index:
        style_match = re.search(r'<style>(.*?)</style>', content, flags=re.DOTALL)
        if style_match:
            with open('old_style.css', 'w', encoding='utf-8') as f:
                f.write(style_match.group(1))

    # Replace style block with link
    content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="style.css">', content, flags=re.DOTALL)
    
    # Remove ambient-glow and particles
    content = re.sub(r'<div class="ambient-glow"></div>\n?', '', content)
    content = re.sub(r'<div class="particles"></div>\n?', '', content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

process_html('index.html', True)
process_html('en.html', False)
print("Files modified successfully.")
