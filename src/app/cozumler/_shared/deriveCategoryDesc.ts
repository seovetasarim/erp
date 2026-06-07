export function deriveCategoryDesc(title: string, items: string[]): string {
  const first = items[0] || '';
  const dash = first.indexOf(' – ');
  if (dash > 0) return first.slice(0, dash) + ' ve ilgili işlemleri tek ekrandan yönetin.';
  return `${title} modülü ile işlemlerinizi DijitalERP üzerinden yönetin.`;
}
