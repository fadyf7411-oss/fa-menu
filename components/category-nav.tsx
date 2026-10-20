import type { MenuCategory } from '@/lib/menu'

export function CategoryNav({ categories }: { categories: MenuCategory[] }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none]">
        {categories.map((category) => (
          <li key={category.id} className="shrink-0">
            <a
              href={`#${category.id}`}
              className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
