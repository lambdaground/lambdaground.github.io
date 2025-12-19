import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>진행률</span>
        <span className="font-medium" data-testid="text-progress">
          {current} / {total}
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="h-3 bg-muted"
        data-testid="progress-bar"
      />
    </div>
  );
}
