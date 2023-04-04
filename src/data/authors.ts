export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    "name": "Anna Nowakowska",
    "slug": "anna-nowakowska",
    "image": "./src/assets/authors/anna.jpg",
    "bio": "Anna to doświadczona dziennikarka z 10-letnim doświadczeniem w pisaniu artykułów politycznych i społecznych. Interesuje się historią, kulturą i podróżami."
  },
  {
    "name": "Jan Kowalski",
    "slug": "jan-kowalski",
    "image": "./src/assets/authors/jan.jpg",
    "bio": "Jan to doświadczony reporter zajmujący się tematyką sportową i ekonomiczną. W wolnym czasie lubi uprawiać sporty ekstremalne."
  },
  {
    "name": "Marta Wiśniewska",
    "slug": "marta-wisniewska",
    "image": "./src/assets/authors/marta.jpg",
    "bio": "Marta to dziennikarka specjalizująca się w dziedzinie zdrowia i medycyny. Posiada wykształcenie medyczne oraz pasję do gotowania i zdrowego stylu życia."
  }

];
