export interface Wine {
    name: string;
    year: string;
    wine_type: string;
    origin_country: string;
    region: string;
    description: string;
    price: string;
    image: File | null | undefined;
    [key: string]: string | File | null | undefined;
  }