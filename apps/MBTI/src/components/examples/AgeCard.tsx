import AgeCard from '../AgeCard';

export default function AgeCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <AgeCard
        ageGroup="elementary"
        label="초등학생"
        subtitle="12개의 쉬운 질문"
        onClick={() => console.log('Elementary selected')}
      />
      <AgeCard
        ageGroup="middle"
        label="중학생"
        subtitle="16개의 질문"
        isSelected={true}
        onClick={() => console.log('Middle selected')}
      />
      <AgeCard
        ageGroup="high"
        label="고등학생"
        subtitle="20개의 질문"
        onClick={() => console.log('High selected')}
      />
    </div>
  );
}
