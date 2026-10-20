import type { MenuCategory } from '@/lib/menu'

const priceFormatter = new Intl.NumberFormat('en-US',)

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-20">
      <div className="mb-5 flex items-end justify-between gap-4 border-b-2 border-primary pb-3">
        <h2 id={`${category.id}-title`} className="font-display text-3xl text-primary md:text-4xl
        ltalic font-light tracking-wider">
          {category.title}
        </h2>
        <p className="text-sm text-muted-foreground">{category.subtitle}</p>
      </div>

      <ul className="flex flex-col gap-5">
        {category.items.map((item) => (
          <li key={item.name} className="flex flex-col gap-1">
            <div className="flex items-baseline gap-3">
              <h3 className="flex items-center gap-2 text-lg font-bold italic font-serif text-primary">
                {item.name}
                {item.tag && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                    {item.tag}
                  </span>
                )}
              </h3>
              <span aria-hidden="true" className="flex-1 border-b border-dashed border-muted-foreground/40" />
              <span className="whitespace-nowrap text-lg font-bold text-primary">
                {priceFormatter.format(item.price)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
