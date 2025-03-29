import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, Image, Pen, CheckSquare, Code, 
  BarChart, MoreHorizontal, LucideIcon
} from 'lucide-react';
import type { Category } from '@shared/schema';
import { getAgentsCountByCategory } from '@/lib/mock-data';

type IconName = 
  | 'message-circle' 
  | 'image' 
  | 'pen' 
  | 'check-square' 
  | 'code' 
  | 'bar-chart' 
  | 'more-horizontal';

const iconMap: Record<IconName, LucideIcon> = {
  'message-circle': MessageCircle,
  'image': Image,
  'pen': Pen,
  'check-square': CheckSquare,
  'code': Code,
  'bar-chart': BarChart,
  'more-horizontal': MoreHorizontal
};

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon as IconName] || MoreHorizontal;

  return (
    <Link href={`/category/${category.slug}`}>
      <Card className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-neutral-200 flex flex-col items-center cursor-pointer">
        <CardContent className="pt-3 sm:pt-4 flex flex-col items-center p-0">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${category.iconBgColor} flex items-center justify-center mb-2 sm:mb-3`}>
            <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${category.iconColor}`} />
          </div>
          <h3 className="font-medium text-sm sm:text-base line-clamp-1">{category.name}</h3>
          <p className="text-xs text-neutral-500 mt-1">{getAgentsCountByCategory(category.id)} agents</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CategoryCard;
