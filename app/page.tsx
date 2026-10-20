import { CategoryNav } from '@/components/category-nav'
import { MenuHero } from '@/components/menu-hero'
import { MenuSection } from '@/components/menu-section'
import { menu } from '@/lib/menu'

export default function Page() {
  return (
    <>
      <MenuHero />
      <CategoryNav categories={menu} />
      <main className="mx-auto flex max-w-3xl flex-col gap-14 px-5 py-10">
        {menu.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </main>
      <footer className="bg-foreground px-5 py-8 text-center text-sm text-background/80">
<footer className="text-center py-10 mt-12 border-t border-white/10 bg-[#2b211b]">
  <p className="text-sm text-white/60">
    Developed by <span className="font-bold text-white italic">Fadi Romany</span> with ❤️
  </p>
  <p className="text-xs text-white/40 mt-2">F&A Coffee Menu © 2026</p>
  <p className="text-xs text-white/30 mt-4">الأسعار شاملة الضريبة</p>
</footer>
      </footer>
    </>
  )
}
