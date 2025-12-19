import { Card } from "@/components/ui/card";
import { Backpack, BookOpen, GraduationCap, Briefcase } from "lucide-react";
import type { AgeGroup } from "@/lib/mbti-data";

interface AgeCardProps {
  ageGroup: AgeGroup;
  label: string;
  subtitle: string;
  isSelected?: boolean;
  onClick: () => void;
}

const icons = {
  elementary: Backpack,
  middle: BookOpen,
  high: GraduationCap,
  adult: Briefcase,
};

const colors = {
  elementary: 'from-orange-400 to-amber-500',
  middle: 'from-emerald-400 to-teal-500',
  high: 'from-blue-400 to-indigo-500',
  adult: 'from-purple-400 to-violet-500',
};

export default function AgeCard({ ageGroup, label, subtitle, isSelected, onClick }: AgeCardProps) {
  const Icon = icons[ageGroup];
  const gradient = colors[ageGroup];
  
  return (
    <Card
      className={`relative overflow-visible cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
      onClick={onClick}
      data-testid={`card-age-${ageGroup}`}
    >
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-bold text-foreground">{label}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
}
