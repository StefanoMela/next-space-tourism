export default function Index() {
  return (
    <div
      className={[
        "relative flex flex-col items-center justify-center p-8 text-center",
        "bg-[url('/assets/home/background-home-mobile.jpg')]",
        "md:bg-[url('/assets/home/background-home-tablet.jpg')]",
        "lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
        "bg-cover bg-center min-h-screen",
      ].join(" ")}
    >
      <div className="relative z-10">
        <h2 className="font-condensed text-clr-subheading text-nav tracking-nav md:text-h5-tablet lg:text-h5 md:tracking-h5 lg:tracking-h5 uppercase">
          so, you want to travel to
        </h2>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-heading uppercase text-h1-mobile md:text-h1 lg:text-h1">
            space
          </h1>
          <p className="font-base text-clr-subheading text-body md:text-body-tablet lg:text-body-desktop max-w-md">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <div className="mt-8 flex items-center justify-center rounded-full bg-white text-black w-36 md:w-48 lg:w-[274px] aspect-square">
            <button className="uppercase font-heading text-cta tracking-cta">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
