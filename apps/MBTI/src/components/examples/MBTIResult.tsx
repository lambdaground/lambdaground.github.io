import MBTIResult from '../MBTIResult';
import { mbtiTypes } from '@/lib/mbti-data';

export default function MBTIResultExample() {
  return (
    <div className="p-4">
      <MBTIResult
        result={mbtiTypes.ENFP}
        ageGroup="elementary"
        onRestart={() => console.log('Restart clicked')}
        onShare={() => console.log('Share clicked')}
      />
    </div>
  );
}
