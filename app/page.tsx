import { HeroMarquee } from "./components/HeroMarquee";
import { ThemeInvertToggle } from "./components/ThemeInvertToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 py-8">
        <div className="flex items-baseline gap-2">
          <span className="font-(--font-display) text-2xl tracking-tight">
            SalonDrake
          </span>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <a className="hover:opacity-70 transition-opacity" href="#">
            home
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#">
            services
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#">
            contact
          </a>
          <a className="hover:opacity-70 transition-opacity" href="#">
            about
          </a>
          <a
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            href="#"
          >
            others
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeInvertToggle />
          <a
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90"
            href="#"
          >
            buy template
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-foreground/25 bg-transparent px-6 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/10"
            href="#"
          >
            cart
          </a>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-8 pb-16 pt-8 md:grid-cols-2 md:gap-20 md:pt-16">
        <section className="max-w-[660px]">
          <h1 className="font-(--font-display) text-[50px] leading-[1.02] tracking-tight md:text-[66px]">
            Your local hair salon,
            <br />
            with <span className="italic">world class</span> style.
          </h1>

          <p className="mt-8 max-w-[620px] text-[18px] leading-8 text-white/70">
            Your go-to salon for stylish transformations —
            <br />
            creating custom looks for our Montreal clients
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <a
              className="inline-flex h-[72px] w-full items-center justify-center rounded-2xl border border-background bg-foreground px-10 text-center font-(--font-display) text-2xl uppercase tracking-wide text-background transition-transform hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-w-[260px] md:h-[84px] md:min-w-[320px]"
              href="#"
            >
              book now
            </a>
            <a
              className="inline-flex h-[72px] w-full items-center justify-center rounded-2xl border border-foreground bg-background px-10 text-center font-(--font-display) text-2xl uppercase tracking-wide text-foreground transition-transform hover:-translate-y-0.5 hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-w-[260px] md:h-[84px] md:min-w-[320px]"
              href="#"
            >
              call salon
            </a>
          </div>
        </section>

        <section className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[680px] rounded-[40px] bg-foreground px-0 py-10 md:py-14">
            <HeroMarquee
              heightClass="h-[400px] md:h-[500px]"
              cardWidthClass="w-[300px] md:w-[380px]"
              repeat={6}
              speedPxPerSecond={40}
              startDirection="right"
              bounceScope="set"
              images={[
                {
                  src: "/images/hero_1.jpg",
                  alt: "Salon hero image 1",
                },
                {
                  src: "/images/hero_2.jpg",
                  alt: "Salon hero image 2",
                },
                {
                  src: "/images/hero_3.jpg",
                  alt: "Salon hero image 3",
                },
                {
                  src: "/images/hero_4.jpg",
                  alt: "Salon hero image 4",
                },
              ]}
            />
          </div>
        </section>
      </main>

      <section className="mx-auto w-full max-w-[1400px] px-8 pb-24 pt-4">
        <div className="flex items-start justify-between gap-10">
          <div>
            <div className="text-sm font-medium tracking-tight text-foreground/70">
              services
            </div>
            <h2 className="mt-3 font-(--font-display) text-[46px] leading-[1.05] tracking-tight md:text-[56px]">
              We offer wide range of services
            </h2>
          </div>

          <a
            href="#"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-foreground/25 bg-transparent px-7 text-sm font-medium transition-colors hover:bg-foreground/10"
          >
            see all
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Haircuts & styling",
              image: "/images/hero_2.jpg",
            },
            {
              title: "Hair coloring",
              image: "/images/hero_3.jpg",
            },
            {
              title: "Hair treatments",
              image: "/images/hero_4.jpg",
            },
          ].map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] bg-foreground/10 p-7 md:p-8"
            >
              <div className="overflow-hidden rounded-[22px] bg-foreground/10">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 420px, 92vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-7 text-center font-(--font-display) text-2xl tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 text-center text-[15px] leading-7 text-foreground/70">
                Fusce a quam. Vestibulum turpis sem, aliquet eget, lobortis
                pellentesque, rutrum eu, nisl.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
