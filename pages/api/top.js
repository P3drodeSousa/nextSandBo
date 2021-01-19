import { getTopTracks } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();
  console.log(items);

  const tracks = items.map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ tracks });
};
