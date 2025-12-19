import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

interface HeaderProps {
  showRestart?: boolean;
  onRestart?: () => void;
  onHome?: () => void;
  subtitle?: string;
}

export default function Header({ showRestart, onRestart, onHome, subtitle }: HeaderProps) {
  const { t } = useLanguage();
  
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onHome) {
      e.preventDefault();
      onHome();
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-6xl items-center justify-between gap-4 mx-auto px-4">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2 cursor-pointer" onClick={handleHomeClick} data-testid="link-home">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-primary to-purple-600">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              {t('site.title')}
            </span>
          </a>
          {subtitle && (
            <span className="text-sm text-muted-foreground border-l pl-3" data-testid="text-subtitle">
              {subtitle}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSelector />
          {showRestart && onRestart && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onRestart}
              data-testid="button-restart"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t('restart')}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
