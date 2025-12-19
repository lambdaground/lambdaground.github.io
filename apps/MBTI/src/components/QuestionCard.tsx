import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, User, Compass, Hand, MessageCircle, Eye, Sparkles, BookOpen, Map, 
  ClipboardList, Edit, Lightbulb, Heart, Ear, Target, Check, Package, Clock, 
  Sun, Zap, Calendar, Hourglass, PartyPopper, Home, Store, Award, Trophy, 
  HelpCircle, Smile, Frown, Brain, Palette, Music, Gamepad2, Briefcase, 
  GraduationCap, Coffee, Moon, Star, Flame, Shield, Leaf, Globe, Camera, 
  Mic, Film, Laptop, Phone, MessageSquare, ThumbsUp, ThumbsDown, ArrowRight, 
  ArrowLeft, ArrowUp, ArrowDown, PenTool, Scissors, Hammer, Wrench, Settings, 
  Search, Book, FileText, Folder, Mail, Bell, Gift, Key, Lock, Unlock,
  Cake, Footprints, BarChart2, RefreshCw, Shuffle, Droplet, Cloud, 
  AlertCircle, Rocket, HandMetal, HeartHandshake, Wine, Headphones, 
  Wind, Layers, Focus, CircleDot, Play, ListChecks, Network,
  Scale, Medal, Puzzle, Dices, Feather, Sofa, Battery, Glasses,
  Route, ChevronRight, Waves, CircleHelp, Volume2, TrendingUp
} from "lucide-react";
import type { ScenarioQuestion, Answer } from "@/lib/mbti-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'users': Users,
  'user': User,
  'compass': Compass,
  'hand': Hand,
  'hands': HandMetal,
  'handshake': HeartHandshake,
  'message': MessageCircle,
  'eye': Eye,
  'sparkles': Sparkles,
  'sparkle': Sparkles,
  'book': BookOpen,
  'map': Map,
  'clipboard': ClipboardList,
  'edit': Edit,
  'lightbulb': Lightbulb,
  'bulb': Lightbulb,
  'heart': Heart,
  'ear': Ear,
  'listen': Ear,
  'target': Target,
  'goal': Target,
  'check': Check,
  'done': Check,
  'accept': Check,
  'ok': Check,
  'okay': Check,
  'package': Package,
  'clock': Clock,
  'sun': Sun,
  'zap': Zap,
  'bolt': Zap,
  'calendar': Calendar,
  'hourglass': Hourglass,
  'party': PartyPopper,
  'home': Home,
  'cozy': Home,
  'couch': Sofa,
  'store': Store,
  'award': Award,
  'medal': Medal,
  'trophy': Trophy,
  'help': HelpCircle,
  'question': HelpCircle,
  'smile': Smile,
  'frown': Frown,
  'annoyed': Frown,
  'brain': Brain,
  'think': Brain,
  'thinking': Brain,
  'analyze': Brain,
  'insight': Brain,
  'concept': Brain,
  'palette': Palette,
  'music': Music,
  'gamepad': Gamepad2,
  'play': Play,
  'briefcase': Briefcase,
  'work': Briefcase,
  'graduation': GraduationCap,
  'learn': GraduationCap,
  'coffee': Coffee,
  'moon': Moon,
  'night': Moon,
  'star': Star,
  'fire': Flame,
  'flame': Flame,
  'excited': Flame,
  'shield': Shield,
  'stable': Shield,
  'proven': Shield,
  'leaf': Leaf,
  'peace': Leaf,
  'relax': Leaf,
  'globe': Globe,
  'world': Globe,
  'camera': Camera,
  'mic': Mic,
  'film': Film,
  'laptop': Laptop,
  'phone': Phone,
  'chat': MessageSquare,
  'comment': MessageSquare,
  'talk': MessageSquare,
  'thumbsup': ThumbsUp,
  'right': ArrowRight,
  'direction': ArrowRight,
  'left': ArrowLeft,
  'up': ArrowUp,
  'down': ArrowDown,
  'pen': PenTool,
  'note': PenTool,
  'scissors': Scissors,
  'hammer': Hammer,
  'tool': Hammer,
  'wrench': Wrench,
  'settings': Settings,
  'search': Search,
  'file': FileText,
  'folder': Folder,
  'mail': Mail,
  'bell': Bell,
  'gift': Gift,
  'key': Key,
  'lock': Lock,
  'unlock': Unlock,
  'cake': Cake,
  'footprints': Footprints,
  'chart': BarChart2,
  'data': BarChart2,
  'pattern': BarChart2,
  'facts': BarChart2,
  'refresh': RefreshCw,
  'recharge': RefreshCw,
  'replan': RefreshCw,
  'shuffle': Shuffle,
  'diverse': Shuffle,
  'improv': Shuffle,
  'spontaneous': Shuffle,
  'variable': Shuffle,
  'droplet': Droplet,
  'cloud': Cloud,
  'nervous': AlertCircle,
  'warning': AlertCircle,
  'pressure': AlertCircle,
  'stress': AlertCircle,
  'rocket': Rocket,
  'adventure': Rocket,
  'active': Rocket,
  'innovate': Rocket,
  'tissue': Heart,
  'hug': HeartHandshake,
  'support': HeartHandshake,
  'encourage': HeartHandshake,
  'comfort': HeartHandshake,
  'gentle': HeartHandshake,
  'wine': Wine,
  'headphones': Headphones,
  'solo': Headphones,
  'wind': Wind,
  'flow': Wind,
  'flexible': Wind,
  'adapt': Wind,
  'layers': Layers,
  'overview': Layers,
  'abstract': Layers,
  'longterm': Layers,
  'focus': Focus,
  'careful': Focus,
  'direct': Focus,
  'honest': Focus,
  'practical': Focus,
  'circle': CircleDot,
  'balance': Scale,
  'balanced': Scale,
  'scale': Scale,
  'mediate': Scale,
  'both': Scale,
  'semiflex': Scale,
  'puzzle': Puzzle,
  'options': Puzzle,
  'dice': Dices,
  'feather': Feather,
  'whisper': Volume2,
  'battery': Battery,
  'tired': Battery,
  'eyeglasses': Glasses,
  'observe': Glasses,
  'itinerary': Route,
  'plan': ListChecks,
  'outline': ListChecks,
  'tidy': ListChecks,
  'grid': ListChecks,
  'manual': ListChecks,
  'example': ListChecks,
  'highlight': Star,
  'popcorn': Film,
  'story': Book,
  'familiar': Home,
  'network': Network,
  'social': Network,
  'connect': Network,
  'together': Users,
  'leader': Trophy,
  'improve': TrendingUp,
  'chaos': Shuffle,
  'disrupt': Shuffle,
  'debate': MessageSquare,
  'explain': MessageSquare,
  'advice': MessageSquare,
  'motivate': Zap,
  'selective': Target,
  'hide': Eye,
  'wave': Waves,
  'share': Users,
  'blush': Smile,
  'sometimes': CircleHelp,
  'never': CircleHelp,
  'rehearse': RefreshCw,
  'crystal': Sparkles,
};


interface QuestionCardProps {
  question: ScenarioQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: Answer;
  onAnswer: (answer: Answer) => void;
}

function getIcon(iconName?: string) {
  if (!iconName) return null;
  const IconComponent = iconMap[iconName.toLowerCase()];
  if (!IconComponent) {
    return <CircleDot className="w-5 h-5 shrink-0" />;
  }
  return <IconComponent className="w-5 h-5 shrink-0" />;
}

export default function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions,
  selectedAnswer, 
  onAnswer 
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto overflow-visible">
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Badge variant="secondary" className="text-sm font-medium">
            Q{questionNumber}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        
        {question.situation && (
          <div 
            className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-md"
            data-testid="text-situation"
          >
            {question.situation}
          </div>
        )}
        
        <h2 
          className="font-display text-xl md:text-2xl font-bold leading-relaxed"
          data-testid="text-question"
        >
          {question.scenario}
        </h2>
        
        <div className="space-y-3 pt-2">
          <Button
            variant={selectedAnswer === 'A' ? 'default' : 'outline'}
            size="lg"
            className={`w-full justify-start text-left whitespace-normal ${
              selectedAnswer === 'A' ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => onAnswer('A')}
            data-testid="button-option-a"
          >
            <span className="flex items-center gap-3 w-full">
              <span className="text-primary shrink-0">{getIcon(question.optionA.icon)}</span>
              <span className="font-semibold shrink-0">A.</span>
              <span>{question.optionA.text}</span>
            </span>
          </Button>
          
          <Button
            variant={selectedAnswer === 'B' ? 'default' : 'outline'}
            size="lg"
            className={`w-full justify-start text-left whitespace-normal ${
              selectedAnswer === 'B' ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => onAnswer('B')}
            data-testid="button-option-b"
          >
            <span className="flex items-center gap-3 w-full">
              <span className="text-primary shrink-0">{getIcon(question.optionB.icon)}</span>
              <span className="font-semibold shrink-0">B.</span>
              <span>{question.optionB.text}</span>
            </span>
          </Button>
          
          <Button
            variant={selectedAnswer === 'C' ? 'default' : 'outline'}
            size="lg"
            className={`w-full justify-start text-left whitespace-normal ${
              selectedAnswer === 'C' ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => onAnswer('C')}
            data-testid="button-option-c"
          >
            <span className="flex items-center gap-3 w-full">
              <span className="text-primary shrink-0">{getIcon(question.optionC.icon)}</span>
              <span className="font-semibold shrink-0">C.</span>
              <span>{question.optionC.text}</span>
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
