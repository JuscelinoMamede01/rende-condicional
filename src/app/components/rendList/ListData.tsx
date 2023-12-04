import { people } from "./Data";
import { ImageLink } from "./ImageLink";

export const ListData = () => {
  const listItems = people.map((person) => (
    <li key={person.id} className="flex py-4 space-x-4  items-center">
      <img
        className="rounded-full"
        src={ImageLink({ link: person.imageId })}
        alt={person.name}
      />
      <div>
        <p>
          <strong>{person.name}</strong>
        </p>
        <p>Profissão: {person.profession}</p>
        <p>Conquista: {person.accomplishment}</p>
      </div>
    </li>
  ));
  return <ul className="list-inside text-white">{listItems}</ul>;
};
