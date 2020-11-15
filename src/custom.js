document.documentElement.classList.add(
  'sscss',
  ...location.hostname
    .split('.')
    .reverse()
    .slice(1)
    .reverse()
)
