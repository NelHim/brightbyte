import { faker } from "@faker-js/faker";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export const randomDescription = faker.word.words(30);
export const randomSmallDescription = faker.word.words(15);
export const randomExtraSmallDescription = faker.word.words(10);
export const randomPhrase = faker.company.buzzPhrase();
export const randomEmail = faker.internet.email;
export const randomFullName = faker.person.fullName;
export const position = faker.person.jobTitle;
export const department = faker.person.jobArea;
export const photo = faker.image.url;
