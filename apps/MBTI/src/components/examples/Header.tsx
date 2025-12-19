import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header 
      showRestart={true} 
      onRestart={() => console.log('Restart clicked')} 
    />
  );
}
