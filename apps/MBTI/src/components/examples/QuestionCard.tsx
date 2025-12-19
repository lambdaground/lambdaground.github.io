import { useState } from 'react';
import QuestionCard from '../QuestionCard';

export default function QuestionCardExample() {
  const [answer, setAnswer] = useState<'A' | 'B' | undefined>();
  
  const sampleQuestion = {
    id: 1,
    text: '친구들과 놀 때 나는...',
    optionA: '여러 친구들과 함께 노는 게 좋아!',
    optionB: '한두 명의 친구와 노는 게 좋아!',
    dimension: 'EI' as const
  };
  
  return (
    <div className="p-4">
      <QuestionCard
        question={sampleQuestion}
        questionNumber={3}
        totalQuestions={12}
        selectedAnswer={answer}
        onAnswer={(a) => {
          setAnswer(a);
          console.log('Selected:', a);
        }}
      />
    </div>
  );
}
