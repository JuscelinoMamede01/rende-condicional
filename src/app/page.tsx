import { Container } from "./components/Container";
import { List } from "./components/rendList/List";
import { Postagem } from "./components/Postagem";
import { Posts } from "./components/postList/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Container>
        <h1 className="flex justify-center text-white text-5xl">
          Exercício Postagens
        </h1>
        <Postagem
          image="julia.jpg"
          imgProfile="profile-pic.png"
          name="juscelinomamede"
          postContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ea blanditiis obcaecati, veniam totam culpa repellat beatae maiores cumque dignissimos magni quidem accusamus iusto consequatur aliquam magnam temporibus velit placeat molestiae expedita ut? Labore optio repellendus sint! Corrupti voluptate voluptatum quasi recusandae odit earum adipisci! Dolore incidunt commodi blanditiis veniam."
        />
        <Postagem
          image="job.jpg"
          imgProfile="profile-pic.png"
          name="juscelinomamede"
          postContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ea blanditiis obcaecati, veniam totam culpa repellat beatae maiores cumque dignissimos magni quidem accusamus iusto consequatur aliquam magnam temporibus velit placeat molestiae expedita ut? Labore optio repellendus sint! Corrupti voluptate voluptatum quasi recusandae odit earum adipisci! Dolore incidunt commodi blanditiis veniam."
        />
        <Postagem
          image="pc.jpg"
          imgProfile="profile-pic.png"
          name="juscelinomamede"
          postContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ea blanditiis obcaecati, veniam totam culpa repellat beatae maiores cumque dignissimos magni quidem accusamus iusto consequatur aliquam magnam temporibus velit placeat molestiae expedita ut? Labore optio repellendus sint! Corrupti voluptate voluptatum quasi recusandae odit earum adipisci! Dolore incidunt commodi blanditiis veniam."
        />
        <Postagem
          image="guitar.jpg"
          imgProfile="profile-pic.png"
          name="juscelinomamede"
          postContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ea blanditiis obcaecati, veniam totam culpa repellat beatae maiores cumque dignissimos magni quidem accusamus iusto consequatur aliquam magnam temporibus velit placeat molestiae expedita ut? Labore optio repellendus sint! Corrupti voluptate voluptatum quasi recusandae odit earum adipisci! Dolore incidunt commodi blanditiis veniam."
        />
      </Container>
      <Container>
        <h1 className="flex justify-center text-white text-5xl">
          Renderização de lista
        </h1>
        <List />
      </Container>
      <Container>
        <h1 className="flex justify-center text-white text-5xl">
          Renderização de lista POSTS
        </h1>
        <Posts />
      </Container>
    </main>
  );
}
