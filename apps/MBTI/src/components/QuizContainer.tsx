import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuizProgress from "./QuizProgress";
import QuestionCard from "./QuestionCard";
import { getScenarioQuestions, calculateMBTIWithPercentage, type AgeGroup, type ScenarioQuestion, type Answer, type MBTIResult } from "@/lib/mbti-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslatedQuestions } from "@/lib/quiz-translations";
import { apiRequest } from "@/lib/queryClient";

interface QuizContainerProps {
  ageGroup: AgeGroup;
  onComplete: (result: MBTIResult) => void;
  onBack: () => void;
}

export default function QuizContainer({ ageGroup, onComplete, onBack }: QuizContainerProps) {
  const { t, language } = useLanguage();
  const [questions, setQuestions] = useState<ScenarioQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  
  useEffect(() => {
    const baseQuestions = getScenarioQuestions(ageGroup);
    const translatedQuestions = getTranslatedQuestions(baseQuestions, language, ageGroup);
    setQuestions(translatedQuestions);
  }, [ageGroup, language]);
  
  if (questions.length === 0) return null;
  
  // Ensure currentIndex is within bounds after questions array changes
  const safeIndex = Math.min(currentIndex, questions.length - 1);
  const currentQuestion = questions[safeIndex];
  
  // Early return if currentQuestion is still undefined (edge case)
  if (!currentQuestion) return null;
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;
  const allAnswered = Object.keys(answers).length === questions.length;
  
  const handleAnswer = (answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    
    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 300);
    }
  };
  
  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (answers[currentQuestion.id] && !isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  
  const handleSubmit = async () => {
    if (allAnswered) {
      const convertedQuestions = questions.map(q => ({
        id: q.id,
        text: q.scenario,
        optionA: q.optionA.text,
        optionB: q.optionB.text,
        optionC: q.optionC.text,
        dimension: q.dimension,
        scoring: q.scoring
      }));
      const result = calculateMBTIWithPercentage(answers, convertedQuestions);
      
      try {
        await apiRequest("POST", "/api/quiz-responses", {
          ageGroup,
          language,
          answers,
          mbtiResult: result.primaryType.type,
          percentages: result.dimensionScores
        });
      } catch (error) {
        console.error("Failed to save quiz response:", error);
      }
      
      onComplete(result);
    }
  };
  
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-4">
        <div className="container max-w-2xl mx-auto px-4">
          <QuizProgress current={currentIndex + 1} total={questions.length} />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center py-8 px-4">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentQuestion.id]}
          onAnswer={handleAnswer}
        />
      </div>
      
      <div className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t py-4">
        <div className="container max-w-2xl mx-auto px-4 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={isFirstQuestion ? onBack : handlePrevious}
            data-testid="button-previous"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            {isFirstQuestion ? t('quiz.ageSelect') : t('quiz.previous')}
          </Button>
          
          {isLastQuestion ? (
            <Button
              onClick={handleSubmit}
              disabled={!allAnswered}
              data-testid="button-submit"
            >
              {t('quiz.seeResult')}
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              data-testid="button-next"
            >
              {t('quiz.next')}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
