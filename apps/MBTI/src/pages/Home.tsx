import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeSelection from "@/components/AgeSelection";
import QuizContainer from "@/components/QuizContainer";
import ComparisonResult from "@/components/ComparisonResult";
import AnimalGuideSection from "@/components/AnimalGuideSection";
import Footer from "@/components/Footer";
import { 
  type AgeGroup, 
  type MBTIResult as MBTIResultType, 
  mbtiTypes
} from "@/lib/mbti-data";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

type Stage = 'home' | 'parent-quiz' | 'child-age-selection' | 'child-quiz' | 'comparison-result';

const SESSION_KEYS = {
  PARENT_RESULT: 'mbti_parent_result',
  PARENT_MBTI_CODE: 'mbti_parent_code',
  CHILD_RESULT: 'mbti_child_result',
  CHILD_AGE_GROUP: 'mbti_child_age_group',
  STAGE: 'mbti_stage',
};

function saveToSession<T>(key: string, value: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save to session storage:', e);
  }
}

function loadFromSession<T>(key: string): T | null {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Failed to load from session storage:', e);
    return null;
  }
}

function clearSession(): void {
  Object.values(SESSION_KEYS).forEach(key => {
    sessionStorage.removeItem(key);
  });
}

function createMockResultFromMBTI(mbtiCode: string): MBTIResultType | null {
  const normalizedCode = mbtiCode.toUpperCase();
  const primaryType = mbtiTypes[normalizedCode];
  
  if (!primaryType) {
    return null;
  }
  
  const letters = normalizedCode.split('');
  
  const oppositeEI = letters[0] === 'E' ? 'I' : 'E';
  const secondaryCode = `${oppositeEI}${letters[1]}${letters[2]}${letters[3]}`;
  const secondaryType = mbtiTypes[secondaryCode];
  
  if (!secondaryType) {
    return null;
  }
  
  return {
    primaryType,
    secondaryType,
    primaryPercentage: 100,
    secondaryPercentage: 0,
    dimensionScores: {
      EI: { score: letters[0] === 'I' ? 6 : -6, percentage: letters[0] === 'I' ? 100 : 0 },
      SN: { score: letters[1] === 'N' ? 6 : -6, percentage: letters[1] === 'N' ? 100 : 0 },
      TF: { score: letters[2] === 'F' ? 6 : -6, percentage: letters[2] === 'F' ? 100 : 0 },
      JP: { score: letters[3] === 'P' ? 6 : -6, percentage: letters[3] === 'P' ? 100 : 0 },
    },
  };
}

export default function Home() {
  const [stage, setStage] = useState<Stage>('home');
  const [selectedChildAge, setSelectedChildAge] = useState<AgeGroup | undefined>();
  const [parentResult, setParentResult] = useState<MBTIResultType | undefined>();
  const [childResult, setChildResult] = useState<MBTIResultType | undefined>();
  const [childAgeGroup, setChildAgeGroup] = useState<AgeGroup | undefined>();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  useEffect(() => {
    const savedParentResult = loadFromSession<MBTIResultType>(SESSION_KEYS.PARENT_RESULT);
    const savedChildResult = loadFromSession<MBTIResultType>(SESSION_KEYS.CHILD_RESULT);
    const savedChildAgeGroup = loadFromSession<AgeGroup>(SESSION_KEYS.CHILD_AGE_GROUP);
    const savedStage = loadFromSession<Stage>(SESSION_KEYS.STAGE);
    
    if (savedParentResult) setParentResult(savedParentResult);
    if (savedChildResult) setChildResult(savedChildResult);
    if (savedChildAgeGroup) setChildAgeGroup(savedChildAgeGroup);
    
    if (savedStage === 'comparison-result' && savedParentResult && savedChildResult) {
      setStage('comparison-result');
    } else if (savedStage === 'child-quiz' && savedParentResult && savedChildAgeGroup) {
      setStage('child-quiz');
      setSelectedChildAge(savedChildAgeGroup);
    } else if (savedStage === 'child-age-selection' && savedParentResult) {
      setStage('child-age-selection');
    }
  }, []);
  
  const handleStartWithMbti = (mbtiCode: string) => {
    const result = createMockResultFromMBTI(mbtiCode);
    if (!result) {
      toast({
        title: t('toast.invalidMbti'),
        description: t('toast.invalidMbtiDesc'),
        variant: "destructive",
      });
      return;
    }
    setParentResult(result);
    saveToSession(SESSION_KEYS.PARENT_RESULT, result);
    saveToSession(SESSION_KEYS.PARENT_MBTI_CODE, mbtiCode);
    setStage('child-age-selection');
    saveToSession(SESSION_KEYS.STAGE, 'child-age-selection');
    toast({
      title: t('toast.parentComplete'),
      description: t('toast.parentCompleteDesc'),
    });
  };
  
  const handleStartWithQuiz = () => {
    setStage('parent-quiz');
    saveToSession(SESSION_KEYS.STAGE, 'parent-quiz');
  };
  
  const handleParentQuizComplete = (result: MBTIResultType) => {
    setParentResult(result);
    saveToSession(SESSION_KEYS.PARENT_RESULT, result);
    setStage('child-age-selection');
    saveToSession(SESSION_KEYS.STAGE, 'child-age-selection');
    toast({
      title: t('toast.parentTestComplete'),
      description: t('toast.parentCompleteDesc'),
    });
  };
  
  const handleChildAgeSelect = (age: AgeGroup) => {
    setSelectedChildAge(age);
    setChildAgeGroup(age);
    saveToSession(SESSION_KEYS.CHILD_AGE_GROUP, age);
    setStage('child-quiz');
    saveToSession(SESSION_KEYS.STAGE, 'child-quiz');
  };
  
  const handleChildMbtiInput = (mbtiCode: string, ageGroup: AgeGroup) => {
    const result = createMockResultFromMBTI(mbtiCode);
    if (!result) {
      toast({
        title: t('toast.invalidMbti'),
        description: t('toast.invalidMbtiDesc'),
        variant: "destructive",
      });
      return;
    }
    setChildResult(result);
    setChildAgeGroup(ageGroup);
    saveToSession(SESSION_KEYS.CHILD_RESULT, result);
    saveToSession(SESSION_KEYS.CHILD_AGE_GROUP, ageGroup);
    setStage('comparison-result');
    saveToSession(SESSION_KEYS.STAGE, 'comparison-result');
    toast({
      title: t('toast.childComplete'),
      description: t('toast.childCompleteDesc'),
    });
  };
  
  const handleChildQuizComplete = (result: MBTIResultType) => {
    setChildResult(result);
    saveToSession(SESSION_KEYS.CHILD_RESULT, result);
    setStage('comparison-result');
    saveToSession(SESSION_KEYS.STAGE, 'comparison-result');
  };
  
  const handleRestart = () => {
    setStage('home');
    setSelectedChildAge(undefined);
    setParentResult(undefined);
    setChildResult(undefined);
    setChildAgeGroup(undefined);
    clearSession();
  };
  
  const handleBackToHome = () => {
    setStage('home');
    saveToSession(SESSION_KEYS.STAGE, 'home');
  };
  
  const handleBackToAgeSelection = () => {
    setStage('child-age-selection');
    saveToSession(SESSION_KEYS.STAGE, 'child-age-selection');
  };
  
  const handleComparisonShare = () => {
    if (!parentResult || !childResult) return;
    const text = `${t('result.parent')}(${parentResult.primaryType.type}) & ${t('result.child')}(${childResult.primaryType.type}) MBTI! ${t('site.title')}: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: t('result.title'),
        text,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard.writeText(text).then(() => {
          toast({
            title: t('toast.copied'),
            description: t('toast.copiedDesc'),
          });
        });
      });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        toast({
          title: t('toast.copied'),
          description: t('toast.copiedDesc'),
        });
      });
    }
  };
  
  if (stage === 'parent-quiz') {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          showRestart 
          onRestart={handleRestart}
          onHome={handleRestart}
          subtitle={t('quiz.parentTest')}
        />
        <QuizContainer
          ageGroup="adult"
          onComplete={handleParentQuizComplete}
          onBack={handleBackToHome}
        />
      </div>
    );
  }
  
  if (stage === 'child-age-selection') {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          showRestart 
          onRestart={handleRestart}
          onHome={handleRestart}
          subtitle={t('quiz.childTest')}
        />
        <main className="flex-1">
          <AgeSelection
            selectedAge={selectedChildAge}
            onSelect={handleChildAgeSelect}
            onMbtiInput={handleChildMbtiInput}
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  if (stage === 'child-quiz' && selectedChildAge) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          showRestart 
          onRestart={handleRestart}
          onHome={handleRestart}
          subtitle={t('quiz.childTest')}
        />
        <QuizContainer
          ageGroup={selectedChildAge}
          onComplete={handleChildQuizComplete}
          onBack={handleBackToAgeSelection}
        />
      </div>
    );
  }
  
  if (stage === 'comparison-result' && parentResult && childResult) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header showRestart onRestart={handleRestart} onHome={handleRestart} />
        <main className="flex-1 py-8 px-4">
          <ComparisonResult
            parentResult={parentResult}
            childResult={childResult}
            childAgeGroup={childAgeGroup}
            onRestart={handleRestart}
            onShare={handleComparisonShare}
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection 
          onStartWithMbti={handleStartWithMbti}
          onStartWithQuiz={handleStartWithQuiz}
        />
        <AnimalGuideSection />
      </main>
      <Footer />
    </div>
  );
}
