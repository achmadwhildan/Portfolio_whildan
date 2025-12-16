import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following industry standards.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency to deliver the best user experience.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer dedicated to building exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am an 18-year-old Frontend Developer with a passion for creating clean, 
              attractive, and user-friendly web interfaces. I enjoy transforming ideas into functional 
              and visually appealing websites that provide a great user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on detail, usability, and responsive design. I am highly motivated to keep learning, improve my skills, and stay updated with modern web trends. My goal is to continuously grow 
              as a developer while delivering high-quality and meaningful digital products.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Technologies</h3>
            <div className="space-y-3">
              {[
                { name: "React & Next.js", level: 60 },
                { name: "TypeScript", level: 50 },
                { name: "Tailwind CSS", level: 80 },
                { name: "JavaScript", level: 90 },
                { name: "HTML & CSS", level: 95 },
                { name: "Laravel", level: 90 },
                { name: "PHP", level: 95 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{skill.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
