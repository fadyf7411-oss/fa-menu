import Image from 'next/image'
import { Clock, Phone } from 'lucide-react'

export function MenuHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="relative h-72 w-full md:h-96">
        <Image
          src="/images/hero.png"
          alt="A cup of coffee on a wooden table"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-3xl flex-col gap-3 px-5 pb-8 text-background">
          <p className="text-xl font-orange tracking-wide text-accent">Welcom to</p>
          <h1 className="font-display text-6xl leading-tight ma:text-7xl text-re">F&A</h1>
          <p className="max-w-md text-pretty text-base leading-relaxed text-background/85">
           All types of coffee
          </p>
          <div className="flex flex-wrap gap-4 pt-1 text-sm text-background/90">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
             ALL THE Time
            </span>
            <a href="tel:01274667953" className="flex items-center gap-1.5 underline-offset-4 hover:underline">
              <Phone className="size-4" aria-hidden="true" />
              01274667953
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
