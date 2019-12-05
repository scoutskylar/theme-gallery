{
  const themes = [
    'Classic',
    'Dark',
    'Cherry',
    'Aqua',
    'Emerald',
    'Autumn',
    'Midnight',
    'Metropolis',
    'Marigold',
    'Cornucopia',
    'Vaporwave',
    'Tumbleweed'
  ];

  let main = document.getElementsByTagName('main')[0];
  let div, img, p;
  for (themeName of themes) {
    div = document.createElement('div');
    div.setAttribute('data-theme', themeName);
    
    // Thumbnail
    img = document.createElement('img');
    img.setAttribute('src', 'thumbnails/' + themeName.toLowerCase() + '.png');
    img.setAttribute('alt', themeName);
    div.appendChild(img);
    
    // Title
    p = document.createElement('p');
    p.innerText = themeName;
    div.appendChild(p);

    main.appendChild(div);
  }
}

// <div>
//     <img src="cornucopia.png" alt="Cornucopia">
//     <p>Cornucopia</p>
// </div>
