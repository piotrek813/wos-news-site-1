export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    "title": "Lifestyle",
    "slug": "lifestyle",
    "color": "pink",
    "description": "Odkrywaj nowe trendy w modzie, urodzie, kulinariach i podróżach. Czytaj porady, wywiady z ekspertami i relacje z najciekawszych miejsc na świecie."
  },
  {
    "title": "Polityka",
    "slug": "polityka",
    "color": "blue",
    "description": "Bądź na bieżąco z wydarzeniami politycznymi w kraju i na świecie. Czytaj analizy, wywiady i komentarze ekspertów."
  },
  {
    "title": "Kultura",
    "slug": "kultura",
    "color": "purple",
    "description": "Odkrywaj świat sztuki, muzyki, literatury i filmu. Czytaj recenzje, wywiady z artystami i relacje z najważniejszych festiwali."
  },
  {
    "title": "Sport",
    "slug": "sport",
    "color": "green",
    "description": "Śledź najnowsze wyniki i relacje z meczów oraz wywiady z najlepszymi sportowcami. Bądź na bieżąco z wydarzeniami sportowymi w kraju i na świecie."
  },
  {
    "title": "Lokalnie",
    "slug": "lokalnie",
    "color": "orange",
    "description": "Bądź na bieżąco z wydarzeniami i informacjami z Twojego miasta oraz okolic. Czytaj o nowych inicjatywach, wydarzeniach kulturalnych i społecznych oraz problemach i wyzwaniach stojących przed Twoim regionem."
  }
];
