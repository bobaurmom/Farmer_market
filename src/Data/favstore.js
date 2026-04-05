export function addFav(item) {
  const favs = getFavs();
  if (!favs.find(f => f.path === item.path)) {
    localStorage.setItem('favs', JSON.stringify([...favs, item]));
  }
}

export function removeFav(item) {
  const favs = getFavs().filter(f => f.path !== item.path);
  localStorage.setItem('favs', JSON.stringify(favs));
}

export function getFavs() {
  return JSON.parse(localStorage.getItem('favs') || '[]');
}

export function isFav(item) {
  return getFavs().some(f => f.path === item.path);
}