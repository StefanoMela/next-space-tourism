export default function Index() {
  return (
    <div
      className={[
        "relative flex items-center justify-center lg:items-end px-12 md:py-12 lg:px-40 pb-16 lg:pb-50",
        "bg-[url('/assets/home/background-home-mobile.jpg')]",
        "md:bg-[url('/assets/home/background-home-tablet.jpg')]",
        "lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
        "bg-cover bg-center min-h-screen",
      ].join(" ")}
    >
      <div className="relative z-10 flex flex-col items-center gap-16 md:gap-32 lg:justify-between lg:flex-row w-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="font-condensed text-clr-subheading text-nav tracking-nav md:text-h5-tablet lg:text-h5 md:tracking-h5 lg:tracking-h5 uppercase">
            so, you want to travel to
          </h2>
          <h1 className="font-heading uppercase text-h1-mobile md:text-h1">
            space
          </h1>
          <p className="font-base text-clr-subheading text-body md:text-body-tablet lg:text-body-desktop max-w-md">
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center justify-center rounded-full bg-white text-black w-[150px] md:w-[242px] lg:w-[274px] aspect-square lg:self-end">
          <button className="uppercase font-heading text-cta tracking-cta md:text-cta-desktop md:tracking-cta-desktop">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
