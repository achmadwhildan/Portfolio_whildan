import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Kasir Platform",
      description: "A web-based cashier and sales management system designed to handle transactions, product data, and sales reports efficiently for small to medium businesses.",
      image: "/kasir.png",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Data Siswa App",
      description: "A web application for managing student data, including personal information, classes, and academic records, built to simplify school administration.",
      image: "/data-siswa.png",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Bahan Bakar",
      description: "A web-based fuel data management system that helps monitor fuel usage, stock, and transaction records in a structured and efficient way.",
      image: "/bahan-bakar.png",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Web Shop",
      description: "An e-commerce website that allows users to browse products, view product details, and make online purchases with a simple and responsive interface.",
      image: "/web-shop.png",
      tags: ["HTML", "CSS"],
      demoLink: "web-shop-omega-ten.vercel.app",
      githubLink: "https://github.com/achmadwhildan/web-shop",
    },
    {
      title: "Website Rayon",
      description: "A modern informational website for managing and displaying rayon-related data, featuring a clean UI and responsive design for all devices.",
      image: "/rayon.png",
      tags: ["React JS", "Tailwind CSS"],
      demoLink: "https://cisarua-2.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Aplikasi Tiket",
      description: "A mobile ticketing application that helps users book, manage, and view ticket information easily through a simple and intuitive interface.",
      image: "/tiket.png",
      tags: ["Flutter"],
      demoLink: "#",
      githubLink: "#",
    },

  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
