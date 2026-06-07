const BACK_VOWELS = new Set(['a', 'ı', 'o', 'u', 'A', 'I', 'O', 'U', 'İ']);
const FRONT_VOWELS = new Set(['e', 'i', 'ö', 'ü', 'E', 'İ', 'Ö', 'Ü']);
const VOICELESS = new Set(['ç', 'f', 'h', 'k', 'p', 's', 'ş', 't', 'Ç', 'F', 'H', 'K', 'P', 'S', 'Ş', 'T']);

function lastVowel(word: string): string | null {
  for (let i = word.length - 1; i >= 0; i--) {
    const ch = word[i];
    if (BACK_VOWELS.has(ch) || FRONT_VOWELS.has(ch)) return ch;
  }
  return null;
}

/** Örn: İstanbul → İstanbul'da, İzmir → İzmir'de, Kilis → Kilis'te */
export function getCityLocative(cityName: string): string {
  const vowel = lastVowel(cityName);
  const last = cityName[cityName.length - 1] ?? 'a';
  const front = vowel !== null && FRONT_VOWELS.has(vowel);
  const buffer = front ? 'e' : 'a';
  const harmony = front ? 'e' : 'a';

  if (VOICELESS.has(last)) {
    return `${cityName}'${buffer}t`;
  }
  return `${cityName}'${harmony}d`;
}
