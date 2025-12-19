import QuizProgress from '../QuizProgress';

export default function QuizProgressExample() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <QuizProgress current={1} total={12} />
      <QuizProgress current={6} total={12} />
      <QuizProgress current={12} total={12} />
    </div>
  );
}
