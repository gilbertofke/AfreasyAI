import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Category {
  id: string
  name: string
  icon: string
  count: number
}

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link href={`/market?category=${category.id}`} key={category.id}>
          <Card className="h-full hover:shadow-md transition-all duration-300 border-2 border-primary/10">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-barlow font-semibold text-lg">{category.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{category.count} servers</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

