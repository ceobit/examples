export const isIntoView = el => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

export const randomValue = max =>
{
  return Math.floor(Math.random() * max);
}