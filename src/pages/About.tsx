import aboutImg from "../assets/images/about-img.jpg";

export default function About() {
  return (
    <main className="min-h-[calc(100vh-9.25rem)]">
      <h2 className=" font-lexend text-white text-5xl md:text-7xl text-center tracking-widest">
        about
      </h2>
      <h3 className="text-center text-xl md:text-3xl mt-10">
        Wedgy are an Alt-Rock band, based in Leeds.
      </h3>
      <img
        className="w-11/12 m-auto mt-10 md:max-w-3xl"
        src={aboutImg}
        alt=""
      />
      <div className="flex flex-col gap-7 mt-10 max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl  m-auto mb-10 md:text-xl md:leading-">
        <p>
          Rooted by fuzzy guitar tones, Wedgy weaves in synths and digital
          production techniques to define their sound. With clear nods to both
          post-punk and shoe-gaze, harsh tones meet ethereal synth and backing
          vocals lines. The tone accompanies the deep insight into internal
          challenges that are represented on face value through the narrative.
        </p>
        <p>
          The band developed inspiration in the juxtaposition of travel and
          homecoming. After a stint crafting electronic landscapes during their
          time in Brazil, a return home to the familiar surroundings, guitars in
          hand, shifted the sound back into the alt rock scene.
        </p>
        <p>
          Live performances, whether as a 3-piece or solo, prove to provide a
          dynamic range in both noise and energy with tones ranging from harsh
          fuzz to delicate atmospheric synths.
        </p>
      </div>
    </main>
  );
}
