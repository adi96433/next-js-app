import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { getCharacters } from "@/queries/characters";
import { getFollowedCharacters } from "@/queries/followedCharacters";

export default function CharacterDescription({ character, isFollowed }) {
  // console.log("in CharacterDesc char:", character);
  return (
    <>
      <Character character={character} isFollowed={isFollowed}></Character>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const data = await getCharacterById({ id: params.id });
  const followedCharacters = await getFollowedCharacters();
  console.log("followedChar:", followedCharacters);
  console.log("my id:", params.id);
  const isFollowed = followedCharacters.find(
    (character) => character.id === params.id.toString()
  )
    ? true
    : false;
  const character = data.character;
  // console.log("in getStaticProps char:", character);
  console.log("isfollewed:", isFollowed);
  return { props: { character, isFollowed } };
}

// export async function getStaticPaths() {
//   const data = await getCharacters();
//   const paths = data.characters.results.map((character) => ({
//     params: { id: character.id.toString() },
//   }));
//   return { paths, fallback: false };
// }
