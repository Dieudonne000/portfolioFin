import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Dieudonne - Designer & Developer Portfolio",
  description:
    "Learn about Dieudonne's background, design philosophy, and experience as a multidisciplinary creator in 3D, web development, and programming.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Multidisciplinary creator with a focus on immersive 3D design, web development, and programming
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/passportme.jpg"
                    alt="Dieudonne - Designer & Developer"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Email</h4>
                    <p>munezadieudonne2021@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">Location</h4>
                    <p>Bugesera, Rwanda</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">
                      Availability
                    </h4>
                    <p>Freelance</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-1">
                      Experience
                    </h4>
                    <p>5+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                I'm MUNEZA Jean Dieudonne, a creator passionate about both 3D design and web development. My journey began over 4 years ago, exploring how digital art, interactive web applications, and programming can come together to build immersive experiences. From detailed 3D models to full-stack web apps, I love working at the intersection of creativity and technology.
              </p>
              <p className="text-black/70 dark:text-white/70 mb-6">
                After joining Rwanda Coding Academy, I honed my skills in software programming, embedded systems, and cybersecurity, while also working on a variety of 3D and web projects—including contributing to events like the 2024 Mashirika event.
              </p>
              <p className="text-black/70 dark:text-white/70 mb-10">
                Today, I specialize in building visually stunning 3D assets, interactive environments, and robust web applications using tools like Blender, React, Next.js, Node.js, and more. My work blends technical precision with artistic expression, whether I'm coding, designing, or animating.
              </p>

              <h2 className="text-3xl font-bold mb-6">Philosophy</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                My approach centers around three core principles:
              </p>

              <div className="space-y-6 mb-10">
                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Whether it's subtle texturing in 3D or clean, maintainable code in web development, I believe the smallest details make the biggest impact.
                  </p>
                </div>

                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Functional Aesthetics</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Beautiful design and robust code should serve a purpose. I ensure that form and function work together, whether I'm creating product visualizations, web interfaces, or backend systems.
                  </p>
                </div>

                <div className="bg-black/5 dark:bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Narrative & Problem Solving</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Every project tells a story and solves a problem. I approach each challenge with a narrative mindset and a problem-solving attitude, considering how both visual and technical elements contribute to the broader experience.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Goals & Vision</h2>
              <p className="text-black/70 dark:text-white/70 mb-6">
                As I continue to grow as a designer and developer, my goal is to push the boundaries of what's possible in digital art, web technology, and interactive experiences. I'm particularly interested in exploring how traditional artistic techniques and modern programming can work together.
              </p>
              <p className="text-black/70 dark:text-white/70">
                I'm always open to collaborations and new projects that challenge me creatively and technically. If you're looking for someone who can bring your vision to life with both precision and creativity—whether in 3D, web, or code—I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
