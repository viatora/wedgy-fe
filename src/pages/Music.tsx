import BandcampPlayer from "../components/BandcampPlayer/BandcampPlayer";
import bandCampData from "../assets/data/bandcamp.json";

export default function Music() {
  return (
    <main className="min-h-[calc(100vh-9.25rem)]">
      <h2 className=" font-lexend text-white text-5xl md:text-7xl text-center tracking-widest">
        MUSIC
      </h2>
      <h3 className="m-auto font-lexend text-white text-4xl text-center tracking-widest mt-10 mb-10">
        SINGLES
      </h3>
      <div className="flex justify-center flex-wrap gap-24 w-11/12 m-auto mb-16">
        {bandCampData.map((song) => {
          if (song.type === "single") {
            return <BandcampPlayer song={song} />;
          }
        })}
      </div>
      <h3 className="m-auto font-lexend text-white text-4xl text-center tracking-widest mt-10 mb-10">
        BUY THE ALBUM
      </h3>
      <div className="flex justify-center flex-wrap gap-24 w-11/12 m-auto mb-16">
        {bandCampData.map((song) => {
          if (song.type === "album") {
            return <BandcampPlayer song={song} />;
          }
        })}
      </div>
    </main>
  );
}
