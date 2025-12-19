import { Card } from "@/components/ui/card";
import { Heart, Baby, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Role } from "@/lib/mbti-data";

interface RoleSelectionProps {
  onSelectRole: (role: Role) => void;
  onStartComparison: () => void;
}

const roleInfo: Record<Role, { 
  label: string; 
  subtitle: string; 
  description: string;
  gradient: string;
  icon: typeof Heart;
}> = {
  parent: {
    label: '부모님',
    subtitle: '엄마 또는 아빠',
    description: '성인용 MBTI 질문으로 검사해요',
    gradient: 'from-rose-400 to-pink-500',
    icon: Heart,
  },
  child: {
    label: '아이',
    subtitle: '초등학생~고등학생',
    description: '나이에 맞는 질문으로 검사해요',
    gradient: 'from-sky-400 to-blue-500',
    icon: Baby,
  },
};

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

function RoleCard({ role, onClick }: RoleCardProps) {
  const info = roleInfo[role];
  const Icon = info.icon;
  
  return (
    <Card
      className="relative overflow-visible cursor-pointer transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
      data-testid={`card-role-${role}`}
    >
      <div className="p-8 flex flex-col items-center text-center gap-4">
        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg`}>
          <Icon className="w-12 h-12 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-foreground">{info.label}</h3>
          <p className="text-muted-foreground text-sm">{info.subtitle}</p>
          <p className="text-muted-foreground text-xs">{info.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default function RoleSelection({ onSelectRole, onStartComparison }: RoleSelectionProps) {
  return (
    <section className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">부모-자녀 비교 테스트</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            누가 먼저 테스트할까요?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            부모님과 아이가 각각 MBTI 검사를 하고,<br />
            서로의 성격 차이와 소통 방법을 알아보아요
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <RoleCard role="parent" onClick={() => onSelectRole('parent')} />
          <RoleCard role="child" onClick={() => onSelectRole('child')} />
        </div>
        
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onStartComparison}
            data-testid="button-start-comparison"
            className="gap-2"
          >
            <Users className="w-4 h-4" />
            부모-자녀 비교 시작하기
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-muted-foreground text-xs mt-3">
            부모님 테스트 → 아이 테스트 → 결과 비교 순서로 진행됩니다
          </p>
        </div>
      </div>
    </section>
  );
}
