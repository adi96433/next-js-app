import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { getCharacters } from "@/queries/characters";

export default function CharacterDescription({ character }) {
  // console.log("in CharacterDesc char:", character);
  return (
    <>
      <Character character={character}></Character>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getCharacterById({ id: params.id });
  const character = data.character;
  // console.log("in getStaticProps char:", character);
  return { props: { character } };
}

export async function getStaticPaths() {
  const data = await getCharacters();
  const paths = data.characters.results.map((character) => ({
    params: { id: character.id.toString() },
  }));
  return { paths, fallback: false };
}
