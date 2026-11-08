import os

svg_templates = [
    {
        'file': 'images/photo1.svg',
        'title': 'The Smile That Stole My Heart',
        'sub': 'images/photo1.jpg',
        'grad1': '#ff9a9e', 'grad2': '#fecfef',
        'icon': '❤️',
        'note': 'Simran, your smile brightens my whole universe.'
    },
    {
        'file': 'images/photo2.svg',
        'title': 'My Beautiful Birthday Queen',
        'sub': 'images/photo2.jpg',
        'grad1': '#a18cd1', 'grad2': '#fbc2eb',
        'icon': '👑',
        'note': 'You rule my heart today, tomorrow & always.'
    },
    {
        'file': 'images/photo3.svg',
        'title': 'The Cutest Eyes in the World',
        'sub': 'images/photo3.jpg',
        'grad1': '#ffecd2', 'grad2': '#fcb69f',
        'icon': '✨',
        'note': 'Lost in your eyes since day one.'
    },
    {
        'file': 'images/photo4.svg',
        'title': 'Every Second With You is Magic',
        'sub': 'images/photo4.jpg',
        'grad1': '#ff9a8b', 'grad2': '#ff6a88',
        'icon': '🌸',
        'note': 'My happiest moments are the ones spent with you.'
    },
    {
        'file': 'images/photo5.svg',
        'title': 'Chiku\'s Forever Pookie',
        'sub': 'images/photo5.jpg',
        'grad1': '#fdcbf1', 'grad2': '#e6cbfd',
        'icon': '🧸',
        'note': 'Forever your Chiku, forever your protector.'
    },
    {
        'file': 'images/photo6.svg',
        'title': 'Happy Birthday Simran! 🎉',
        'sub': 'images/photo6.jpg',
        'grad1': '#f6d365', 'grad2': '#fda085',
        'icon': '🎂',
        'note': 'Wishing you all the joy and giggles in this world!'
    }
]

for item in svg_templates:
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{item['grad1']}"/>
      <stop offset="100%" stop-color="{item['grad2']}"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.92)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.65)"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="rgba(214, 51, 132, 0.25)"/>
    </filter>
  </defs>
  
  <rect width="600" height="750" fill="url(#bgGrad)" rx="24"/>
  
  <!-- Floating background bokeh circles -->
  <circle cx="120" cy="140" r="70" fill="white" opacity="0.25" />
  <circle cx="480" cy="200" r="90" fill="white" opacity="0.2" />
  <circle cx="150" cy="610" r="85" fill="white" opacity="0.22" />
  <circle cx="490" cy="620" r="65" fill="white" opacity="0.25" />
  
  <!-- Romantic frame card inside -->
  <rect x="36" y="36" width="528" height="678" rx="28" fill="url(#cardGrad)" stroke="white" stroke-width="3" stroke-dasharray="8 6" filter="url(#softShadow)"/>
  
  <!-- Corner sparkle stars -->
  <text x="65" y="85" font-size="28" fill="#ff477e">✦</text>
  <text x="510" y="85" font-size="28" fill="#ff477e">✦</text>
  <text x="65" y="680" font-size="28" fill="#ff477e">✦</text>
  <text x="510" y="680" font-size="28" fill="#ff477e">✦</text>
  
  <!-- Central camera / photo placeholder graphic -->
  <g transform="translate(300, 270)">
    <circle cx="0" cy="0" r="82" fill="white" filter="url(#softShadow)"/>
    <circle cx="0" cy="0" r="72" fill="none" stroke="#ff477e" stroke-width="3" stroke-dasharray="6 4"/>
    <text x="0" y="22" font-size="64" text-anchor="middle">{item['icon']}</text>
  </g>
  
  <!-- Title -->
  <text x="300" y="405" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="26" font-weight="bold" fill="#2d2424" text-anchor="middle">{item['title']}</text>
  
  <!-- Subtitle note -->
  <text x="300" y="445" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="16" font-style="italic" fill="#7d6a70" text-anchor="middle">"{item['note']}"</text>
  
  <!-- Badge button preview guide -->
  <g transform="translate(140, 485)">
    <rect width="320" height="46" rx="23" fill="#ff477e" opacity="0.95" />
    <text x="160" y="29" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">📷 Click Frame to Upload/View</text>
  </g>
  
  <text x="300" y="575" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="15" fill="#5a4d52" text-anchor="middle">Or replace with file: <tspan font-weight="bold" fill="#ff0066">{item['sub']}</tspan></text>
  
  <!-- Bottom signature -->
  <text x="300" y="640" font-family="'Segoe UI', system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#e83e8c" text-anchor="middle">💕 Simran &amp; Chiku Forever 💕</text>
</svg>"""
    with open(item['file'], 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f"Generated {item['file']}")
print("All placeholder SVGs generated successfully!")
