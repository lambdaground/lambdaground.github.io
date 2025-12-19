import { useState } from 'react';
import AgeSelection from '../AgeSelection';
import type { AgeGroup } from '@/lib/mbti-data';

export default function AgeSelectionExample() {
  const [selected, setSelected] = useState<AgeGroup | undefined>();
  
  return (
    <AgeSelection
      selectedAge={selected}
      onSelect={(age) => {
        setSelected(age);
        console.log('Selected age:', age);
      }}
    />
  );
}
