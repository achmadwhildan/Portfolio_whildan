import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Certificates() {
  const certificates = [
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "2023",
      image: "/dicoding.png",
      verifyLink: "https://www.dicoding.com/certificates/QLZ9RYWWMP5D",
    },
    {
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      issuer: "Dicoding",
      date: "2024",
      image: "/dicoding.png",
      verifyLink: "https://www.dicoding.com/certificates/GRX5OM0QYP0M",
    },
    {
      title: "Belajar Prinsip Pemrograman SOLID",
      issuer: "Dicoding",
      date: "2024",
      image: "/dicoding.png",
      verifyLink: "https://www.dicoding.com/certificates/98XWLJ7K9ZM3",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "2024",
      image: "/dicoding.png",
      verifyLink: "https://www.dicoding.com/certificates/JMZV36VGNPN9",
    },
  ]

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and accomplishments in web development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.title}
              className="overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="aspect-[3/2] relative overflow-hidden bg-muted">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <Award className="h-8 w-8 text-white mb-2" />
                </div>
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-foreground line-clamp-2">{cert.title}</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <Button size="sm" variant="ghost" className="w-full mt-2" asChild>
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Verify
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href="https://drive.google.com/drive/folders/1idQKlLqx_vLqIKD_ZCXWcWG9Kofjh0St?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6" />
            </div>
            <span className="text-lg font-medium">See All Certificates</span>
          </a>
        </div>
      </div>
    </section>
  )
}
