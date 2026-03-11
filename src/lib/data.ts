export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  publisher: string;
  illustrator?: string;
  description: string;
  longDescription: string;
  awards?: string[];
  reviews?: { quote: string; source: string }[];
  amazonUrl: string;
  bookshopUrl: string;
  coverImage: string;
  ages: string;
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: "art-from-her-heart",
    title: "Art From Her Heart",
    subtitle: "Folk Artist Clementine Hunter",
    year: "2008",
    publisher: "Putnam",
    illustrator: "Shane W. Evans",
    description:
      "A vibrant picture book biography of Clementine Hunter, the self-taught Louisiana folk artist who began painting at age 50 on whatever surfaces she could find.",
    longDescription:
      "Born into poverty on a Louisiana plantation, Clementine Hunter spent most of her life picking cotton and cooking. Then, at age 50, she picked up leftover paint tubes and began creating colorful scenes of life along Cane River. This lyrical biography celebrates a woman who refused to let circumstances dim her creative spirit — and whose work now hangs in galleries worldwide. [Replace with full description]",
    awards: [
      "ALA Notable Book",
      "Coretta Scott King Illustrator Honor",
      "[Add additional awards here]",
    ],
    reviews: [
      {
        quote:
          "Poetic text and richly detailed illustrations combine to create a beautiful tribute to an American original.",
        source: "Kirkus Reviews [placeholder — replace with actual quote]",
      },
      {
        quote:
          "A stunning introduction to a remarkable artist whose story deserves to be told.",
        source: "School Library Journal [placeholder — replace with actual quote]",
      },
    ],
    amazonUrl: "https://www.amazon.com/dp/[ASIN]",
    bookshopUrl: "https://bookshop.org/books/[SLUG]",
    coverImage: "/images/cover_art_from_her_heart.jpg",
    ages: "4–8",
    featured: true,
  },
  {
    id: "looking-for-uncle-louie",
    title: "Looking for Uncle Louie on the Fourth of July",
    year: "2005",
    publisher: "Boyds Mills Press",
    illustrator: "Pablo Torrecilla",
    description:
      "A young boy searches for his beloved Uncle Louie amid the colorful chaos of a Fourth of July parade in their Texas town.",
    longDescription:
      "Every Fourth of July, Joe can count on one thing: Uncle Louie will be somewhere in the parade, riding his prized lowrider. But this year, Joe can't find him anywhere! A warm, festive story about family, community, and the joy of celebration. [Replace with full description]",
    awards: ["[Add awards here]"],
    reviews: [
      {
        quote:
          "A joyful, culturally rich celebration of family and community pride.",
        source: "Booklist [placeholder — replace with actual quote]",
      },
    ],
    amazonUrl: "https://www.amazon.com/dp/[ASIN]",
    bookshopUrl: "https://bookshop.org/books/[SLUG]",
    coverImage: "/images/cover_looking_for_uncle_louie.jpg",
    ages: "4–8",
    featured: true,
  },
  {
    id: "book-placeholder-3",
    title: "[Book Title — please fill in]",
    year: "[Year]",
    publisher: "[Publisher]",
    illustrator: "[Illustrator]",
    description: "[Short 1–2 sentence description of this book. Replace this placeholder.]",
    longDescription:
      "[Full description of this book. Replace this placeholder with the complete back-cover copy and any additional context you'd like readers to know.]",
    awards: ["[Add awards here]"],
    reviews: [
      {
        quote: "[Review quote — replace with actual review]",
        source: "[Source]",
      },
    ],
    amazonUrl: "https://www.amazon.com/dp/[ASIN]",
    bookshopUrl: "https://bookshop.org/books/[SLUG]",
    coverImage: "/images/book-placeholder.jpg",
    ages: "[Age range]",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/biography", label: "About Kathy" },
  { href: "/school-visits", label: "School Visits" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = {
  facebook: "https://facebook.com/[handle]",
  twitter: "https://twitter.com/[handle]",
  instagram: "https://instagram.com/[handle]",
};
