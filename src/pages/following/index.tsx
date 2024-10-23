import CharacterList from "@/components/characters/CharacterList";
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";
import { getFollowedCharacters } from "@/queries/followedCharacters";

export default function Following({ followedCharacters }) {
  return (
    <>
      {followedCharacters.length > 0 ? (
        <CharacterList characters={followedCharacters}></CharacterList>
      ) : (
        <EmptyPlaceholder></EmptyPlaceholder>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const followedCharacters = await getFollowedCharacters();
  //  console.log("data fetched::", followedCharacters);
  return { props: { followedCharacters } };
}
