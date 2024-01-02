export interface User {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    phone: string;
    role?: string;
    username?: string;
    password?: string;
    postalCode:string;
    city:string;
    [key: string]: string | number | undefined;
  }