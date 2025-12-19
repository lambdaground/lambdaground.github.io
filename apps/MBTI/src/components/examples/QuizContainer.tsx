import QuizContainer from '../QuizContainer';

export default function QuizContainerExample() {
  return (
    <QuizContainer
      ageGroup="elementary"
      onComplete={(type) => console.log('Completed with type:', type)}
      onBack={() => console.log('Back clicked')}
    />
  );
}
