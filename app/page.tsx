import { HeroMarquee } from "./components/HeroMarquee";
import { ThemeInvertToggle } from "./components/ThemeInvertToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
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

        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:justify-end sm:gap-3">
          <ThemeInvertToggle />
          <a
            className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:opacity-90 sm:px-6 sm:py-2.5 sm:text-sm"
            href="#"
          >
            buy template
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-foreground/25 bg-transparent px-4 py-2 text-xs font-medium transition-colors hover:bg-foreground/10 sm:px-6 sm:py-2.5 sm:text-sm"
            href="#"
          >
            cart
          </a>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-5 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:grid-cols-2 md:gap-20 md:pt-16">
        <section className="w-full text-center sm:max-w-[660px] sm:text-left">
          <h1 className="text-[34px] font-medium leading-[1.02] tracking-tight sm:text-[44px] md:text-[62px]">
            Your local hair salon,
            <br className="hidden sm:block" />
            with <span className="italic">world class</span> style.
          </h1>

          <p className="mt-7 max-w-none text-[24px] font-medium leading-[1.3] text-foreground sm:mt-8 sm:max-w-[620px] md:text-[26px]">
            Your go-to salon for stylish transformations — creating custom looks
            for our Montreal clients
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-start">
            <a
              className="inline-flex h-[clamp(56px,7vw,84px)] w-full items-center justify-center rounded-2xl border border-background bg-foreground px-[clamp(24px,4vw,40px)] text-center text-[clamp(16px,2.2vw,24px)] font-medium uppercase tracking-wide text-background transition-transform hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-auto md:min-w-[clamp(220px,22vw,320px)]"
              href="#"
            >
              book now
            </a>
            <a
              className="inline-flex h-[clamp(56px,7vw,84px)] w-full items-center justify-center rounded-2xl border border-foreground bg-background px-[clamp(24px,4vw,40px)] text-center text-[clamp(16px,2.2vw,24px)] font-medium uppercase tracking-wide text-foreground transition-transform hover:-translate-y-0.5 hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:w-auto md:min-w-[clamp(220px,22vw,320px)]"
              href="#"
            >
              call salon
            </a>
          </div>
        </section>

        <section className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[680px] rounded-[40px] bg-foreground px-0 py-8 sm:py-10 md:min-w-[520px] md:max-w-[720px] md:py-14 lg:max-w-[760px]">
            <HeroMarquee
              heightClass="h-[320px] sm:h-[400px] md:h-[500px]"
              cardWidthClass="w-[240px] sm:w-[300px] md:w-[380px]"
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

      <section className="mx-auto w-full max-w-[1400px] px-5 pb-20 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="text-sm font-medium tracking-tight text-foreground/70">
            about us
          </div>
          <h2
            className="mt-4 font-(--font-display) text-[32px] leading-[1.05] tracking-tight"
            style={{ fontWeight: 500 }}
          >
            SalonDrake is a place where
            <br />
            you can <span className="italic">relax</span> and{" "}
            <span className="italic">unwind</span>.
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-[18px] font-medium leading-8 text-foreground">
            Located in the heart of Montreal, we blend the latest trends with
            timeless techniques to create styles that feel uniquely you.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-foreground/25 bg-transparent px-7 text-sm font-medium transition-colors hover:bg-foreground/10"
          >
            about us
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1120px] flex-col gap-6 sm:mt-14 sm:gap-8 md:grid md:grid-cols-12 md:items-start md:gap-10 lg:gap-14">
          {/* Big image - second on mobile (order-2), LEFT on desktop (col 1-7) */}
          <div className="order-2 md:order-0 md:col-span-7">
            <div className="w-full max-w-[496px] overflow-hidden rounded-[20px]">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/images/hero_3.jpg"
                  alt="Salon service in progress"
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Small image - first on mobile (order-1), RIGHT on desktop (col 8-12), positioned higher */}
          <div className="order-1 md:order-0 md:col-span-5 md:flex md:justify-end md:pt-24 lg:pt-32">
            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[20px] sm:max-w-[300px] md:mx-0 md:max-w-[322px]">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/hero_1.jpg"
                  alt="Salon client"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 380px, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 pb-20 pt-2 sm:px-8 sm:pb-24 sm:pt-4">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left">
          <div>
            <div className="text-sm font-medium tracking-tight text-foreground/70">
              services
            </div>
            <h2
              className="mt-3 font-(--font-display) text-[40px] leading-[1.05] tracking-tight"
              style={{ fontWeight: 500 }}
            >
              We offer wide range of services
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/25 bg-transparent px-7 text-sm font-medium transition-colors hover:bg-foreground/10 sm:mt-6"
          >
            see all
          </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-[520px] grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-6">
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
              className="rounded-[28px] bg-foreground/10 p-6 sm:p-7 md:p-8"
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

              <h3
                className="mt-7 text-center font-(--font-display) text-[28px] tracking-tight"
                style={{ fontWeight: 500 }}
              >
                {service.title}
              </h3>
              <p className="mt-4 text-center text-[18px] font-medium leading-7 text-foreground/70">
                Fusce a quam. Vestibulum turpis sem, aliquet eget, lobortis
                pellentesque, rutrum eu, nisl.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 pb-10 sm:px-8 sm:pb-12">
        <div className="overflow-hidden rounded-[28px] bg-foreground/10">
          <div className="relative aspect-21/9 w-full sm:aspect-20/9">
            <Image
              src="/images/hero_4.jpg"
              alt="Salon interior"
              fill
              sizes="(min-width: 1024px) 1400px, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 pb-24 sm:px-8">
        <div className="rounded-[28px] bg-foreground/10 p-8 sm:p-10 md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h3
                className="font-(--font-display) text-[34px] leading-[1.1] tracking-tight sm:text-[40px]"
                style={{ fontWeight: 500 }}
              >
                Find us in Montreal
              </h3>

              <div className="mt-8 space-y-7 text-[18px] font-medium leading-7 text-foreground">
                <div className="space-y-1">
                  <div>123 Drake Street</div>
                  <div>Montreal, QC H2X 1Y4</div>
                  <div>Canada</div>
                </div>

                <div className="space-y-2">
                  <a
                    href="mailto:hello@salondrake.com"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    hello@salondrake.com
                  </a>
                  <div>
                    <a
                      href="tel:+15145550199"
                      className="underline underline-offset-4 hover:opacity-80"
                    >
                      +1 (514) 555-0199
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <a
                href="#"
                aria-label="TikTok"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/25 bg-transparent transition-colors hover:bg-foreground/10"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M14 3v10.2a4.8 4.8 0 1 1-4-4.74"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3c.7 3.1 2.9 5.3 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/25 bg-transparent transition-colors hover:bg-foreground/10"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/25 bg-transparent transition-colors hover:bg-foreground/10"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4l16 16M20 4L4 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mx-auto w-full max-w-[1400px] px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
        <div className="text-center">
          <div className="text-sm font-medium tracking-tight text-foreground/70">
            testimonials
          </div>
          <h2
            className="mt-4 font-(--font-display) text-[32px] leading-[1.05] tracking-tight sm:text-[40px]"
            style={{ fontWeight: 500 }}
          >
            What others are saying
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {/* Left - Video */}
          <div className="overflow-hidden rounded-[20px] bg-foreground/10">
            <div className="relative aspect-3/4 w-full lg:aspect-auto lg:h-full lg:min-h-[600px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="https://www.pexels.com/download/video/3997183/"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          {/* Middle - Light Testimonial Card */}
          <div className="relative">
            <div
              className="relative flex h-full min-h-[340px] flex-col rounded-[20px] bg-foreground/10 p-8 pb-32 sm:min-h-[560px] sm:p-10 sm:pb-36 lg:min-h-[600px]"
              style={{ fontWeight: 500 }}
            >
              <p
                className="font-(--font-display) text-[20px] leading-[1.35] tracking-tight sm:text-[28px]"
                style={{ fontWeight: 500 }}
              >
                The attention to detail and personal care is unmatched. Plus, I
                love that they use eco-friendly products. I've found my go-to
                salon, and I wouldn't trust my hair with anyone else!"
              </p>

              <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10">
                <div className="text-[18px] font-medium">Caroline M</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-foreground/60">
                  SalonDrake Client
                </div>
              </div>

              {/* Rounded cutout corner (background-colored) */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[104px] w-[104px] rounded-[24px] rounded-tl-[32px] bg-background" />
            </div>

            {/* Avatar outside card */}
            <div className="absolute bottom-0 right-0 h-[104px] w-[104px] overflow-hidden rounded-[18px] ring-4 ring-background">
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero_2.jpg"
                  alt="Caroline M"
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Dark Testimonial Card */}
          <div className="relative">
            <div
              className="relative flex h-full min-h-[340px] flex-col rounded-[20px] bg-foreground p-8 pb-32 text-background sm:min-h-[560px] sm:p-10 sm:pb-36 lg:min-h-[600px]"
              style={{ fontWeight: 500 }}
            >
              <p
                className="font-(--font-display) text-[20px] leading-[1.35] tracking-tight sm:text-[28px]"
                style={{ fontWeight: 500 }}
              >
                SalonDrake is hands down the best salon in Montreal! From the
                moment I walked in, I felt welcomed and relaxed. The atmosphere
                is so inviting, and the stylists really take the time to
                understand what you want.
              </p>

              <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10">
                <div className="text-[18px] font-medium">Sophie J.</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-background/60">
                  SalonDrake Client
                </div>
              </div>

              {/* Rounded cutout corner (background-colored) */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[104px] w-[104px] rounded-[24px] rounded-tl-[32px] bg-background" />
            </div>

            {/* Avatar outside card */}
            <div className="absolute bottom-0 right-0 h-[104px] w-[104px] overflow-hidden rounded-[18px] ring-4 ring-background">
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero_3.jpg"
                  alt="Sophie J."
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
