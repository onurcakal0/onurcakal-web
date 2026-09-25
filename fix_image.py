import re

with open('style.css', 'r') as f:
    content = f.read()

# Replace the hero-image img block and rgbGlow keyframes
pattern = re.compile(r'\.hero-image img \{.*?\}\n+@keyframes rgbGlow \{.*?\}', re.DOTALL)

new_style = """.hero-image img { 
    width: min(100%, 430px);
    height: min(100%, 430px);
    aspect-ratio: 1 / 1; 
    margin-left: auto; 
    border-radius: 50%; 
    object-fit: cover; 
    object-position: 50% 38%; 
    animation: softRedGlow 3s ease-in-out infinite; 
}

@keyframes softRedGlow {
    0% { border: 4px solid rgba(220, 38, 38, 0.5); box-shadow: 0 0 10px rgba(220, 38, 38, 0.2); }
    50% { border: 4px solid rgba(239, 68, 68, 1); box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
    100% { border: 4px solid rgba(220, 38, 38, 0.5); box-shadow: 0 0 10px rgba(220, 38, 38, 0.2); }
}"""

content = pattern.sub(new_style, content)

# Check for responsive media queries where height might be overridden
content = content.replace('.hero-image { grid-row: 1; width: min(76vw, 360px); margin: 0 auto; }', 
                          '.hero-image { grid-row: 1; width: min(76vw, 360px); height: min(76vw, 360px); margin: 0 auto; }')

with open('style.css', 'w') as f:
    f.write(content)
