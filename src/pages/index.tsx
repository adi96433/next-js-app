import CharacterList from "@/components/characters/CharacterList";
import { getCharacters } from "@/queries/characters";

export default function Home({ characters }) {
  // console.log("characters:", characters);
  return (
    <>
      <CharacterList characters={characters}></CharacterList>
    </>
  );
}

export async function getStaticProps() {
  const data = await getCharacters();
  // console.log("data:", data.characters);
  const characters = data?.characters?.results;
  return { props: { characters } };
}
