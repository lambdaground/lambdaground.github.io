import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection onStart={() => console.log('Start test clicked')} />
  );
}
