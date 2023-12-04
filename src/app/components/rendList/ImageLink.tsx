interface LinkPerson {
  link: string;
}

export function ImageLink({ link }: LinkPerson) {
  return "https://i.imgur.com/" + link + "s.jpg";
}
