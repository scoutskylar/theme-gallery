{
  const cacheId = 'Hello-World'
  const newThemeAvailable = true;
  const newThemeAltText = 'FHSched New Theme';
  const newThemeAltTextHint = 'Icy background with snowflakes falling';
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
    'Vaporwave-buggy',
    'Tumbleweed'
  ];

  let main = document.getElementsByTagName('main')[0];
  let div, img, p;
  let themeIndex = 1;
  for (themeName of themes) {
    div = document.createElement('div');
    div.setAttribute('data-theme', themeName);
    
    // Thumbnail
    img = document.createElement('img');
    img.setAttribute('src', 'thumbnails/' + themeIndex + '_' + themeName.toLowerCase() + '.png?thumbnailsVersion=' + cacheId);
    themeName = themeName.slice(0, themeName.indexOf('-') > 0 ? themeName.indexOf('-') : undefined);
    img.setAttribute('alt', themeName + ' thumbnail');
    div.appendChild(img);
    
    // Title
    p = document.createElement('p');
    p.innerText = themeIndex + '. ' + themeName;
    div.appendChild(p);

    main.appendChild(div);

    themeIndex++;
  }

  if (newThemeAvailable) {
    div = document.createElement('div');
    
    // Thumbnail
    img = document.createElement('img');
    img.setAttribute('src', 'new theme.jpg?thumbnailsVersion=' + cacheId);
    img.setAttribute('alt', ((newThemeAltText ? '“' + newThemeAltText + '”' + (newThemeAltTextHint ? ': ' : '') : '') + newThemeAltTextHint));
    div.appendChild(img);
    
    // Title
    p = document.createElement('p');
    // p.innerText = themeIndex + '. ' + 'New Theme';
    p.innerText = 'New Theme';
    div.appendChild(p);

    main.appendChild(div);
  }
}

// <div>
//     <img src="thumbnails/cornucopia.png" alt="Cornucopia">
//     <p>Cornucopia</p>
// </div>
