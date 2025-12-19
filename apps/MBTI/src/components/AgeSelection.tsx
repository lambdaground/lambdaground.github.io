import { useState } from "react";
import AgeCard from "./AgeCard";
import { type AgeGroup } from "@/lib/mbti-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

interface AgeSelectionProps {
  selectedAge?: AgeGroup;
  onSelect: (age: AgeGroup) => void;
  onMbtiInput?: (mbti: string, ageGroup: AgeGroup) => void;
}

export default function AgeSelection({ selectedAge, onSelect, onMbtiInput }: AgeSelectionProps) {
  const { t } = useLanguage();
  const ageGroups: AgeGroup[] = ['elementary', 'middle', 'high', 'adult'];
  
  const getAgeLabel = (age: AgeGroup) => t(`age.${age}`);
  const getAgeSubtitle = (age: AgeGroup) => t(`age.${age}.subtitle`);
  const [showMbtiOption, setShowMbtiOption] = useState(false);
  const [tempSelectedAge, setTempSelectedAge] = useState<AgeGroup | null>(null);
  const [showMbtiSelector, setShowMbtiSelector] = useState(false);
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  
  const handleAgeClick = (age: AgeGroup) => {
    setTempSelectedAge(age);
    setShowMbtiOption(true);
  };
  
  const handleTakeQuiz = () => {
    if (tempSelectedAge) {
      onSelect(tempSelectedAge);
    }
  };
  
  const handleKnowMbti = () => {
    setShowMbtiSelector(true);
  };
  
  const handleMbtiSelect = (mbti: string) => {
    setSelectedMbti(mbti);
  };
  
  const handleConfirmMbti = () => {
    if (selectedMbti && tempSelectedAge && onMbtiInput) {
      onMbtiInput(selectedMbti, tempSelectedAge);
    }
  };
  
  const handleBack = () => {
    if (showMbtiSelector) {
      setShowMbtiSelector(false);
      setSelectedMbti(null);
    } else {
      setShowMbtiOption(false);
      setTempSelectedAge(null);
    }
  };
  
  if (showMbtiOption && tempSelectedAge) {
    return (
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <Badge variant="outline" className="mb-4">
              {getAgeLabel(tempSelectedAge)} ({getAgeSubtitle(tempSelectedAge)})
            </Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t('age.askChildMbti')}
            </h2>
            <p className="text-muted-foreground">
              {t('age.askChildMbtiDesc')}
            </p>
          </div>
          
          {!showMbtiSelector ? (
            <Card className="p-6 overflow-visible">
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleKnowMbti}
                    className="gap-2"
                    data-testid="button-child-know-mbti"
                  >
                    <Check className="w-5 h-5" />
                    {t('hero.knowMbti')}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleTakeQuiz}
                    className="gap-2"
                    data-testid="button-child-take-quiz"
                  >
                    <Sparkles className="w-5 h-5" />
                    {t('hero.takeQuiz')}
                  </Button>
                </div>
                <Button 
                  variant="ghost"
                  onClick={handleBack}
                  data-testid="button-back-age"
                >
                  {t('age.backToAge')}
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6 overflow-visible">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {t('age.selectChildMbti')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('hero.selectedMbti')}: {selectedMbti ? (
                      <Badge variant="outline" className="ml-2 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 border-sky-300">
                        {selectedMbti}
                      </Badge>
                    ) : t('hero.none')}
                  </p>
                </div>
                
                <div className="grid grid-cols-4 gap-2" data-testid="container-child-mbti-selector">
                  {mbtiTypes.map((mbti) => (
                    <Button
                      key={mbti}
                      variant={selectedMbti === mbti ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleMbtiSelect(mbti)}
                      className={`font-mono text-sm ${selectedMbti === mbti ? '' : 'hover-elevate'}`}
                      data-testid={`button-child-mbti-${mbti}`}
                    >
                      {mbti}
                    </Button>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button 
                    variant="ghost"
                    onClick={handleBack}
                    data-testid="button-back-mbti-option"
                  >
                    {t('hero.back')}
                  </Button>
                  <Button 
                    size="lg"
                    onClick={handleConfirmMbti}
                    disabled={!selectedMbti}
                    className="gap-2"
                    data-testid="button-confirm-child-mbti"
                  >
                    {t('age.seeResult')}
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('age.selectTitle')}
          </h2>
          <p className="text-muted-foreground">
            {t('age.selectDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ageGroups.map((age) => (
            <AgeCard
              key={age}
              ageGroup={age}
              label={getAgeLabel(age)}
              subtitle={getAgeSubtitle(age)}
              isSelected={selectedAge === age}
              onClick={() => handleAgeClick(age)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
