import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, RotateCcw, Star, Heart, Zap, Target, Briefcase, Palette, Users, TrendingUp } from "lucide-react";
import type { MBTIResult as MBTIResultType, AgeGroup } from "@/lib/mbti-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAnimalName } from "@/lib/i18n";
import { getLocalizedMBTIType } from "@/lib/mbti-data-localized";

import intjImage from "@assets/generated_images/intj_wise_owl_mascot.png";
import intpImage from "@assets/generated_images/curious_raccoon_mascot_intp.png";
import entjImage from "@assets/generated_images/entj_lion_leader_mascot.png";
import entpImage from "@assets/generated_images/entp_clever_fox_mascot.png";
import infjImage from "@assets/generated_images/infj_wise_wolf_mascot.png";
import infpImage from "@assets/generated_images/infp_unicorn_dreamer_mascot.png";
import enfjImage from "@assets/generated_images/enfj_caring_dolphin_mascot.png";
import enfpImage from "@assets/generated_images/playful_otter_mascot_enfp.png";
import istjImage from "@assets/generated_images/wise_turtle_mascot_istj.png";
import isfjImage from "@assets/generated_images/isfj_caring_rabbit_mascot.png";
import estjImage from "@assets/generated_images/estj_eagle_leader_mascot.png";
import esfjImage from "@assets/generated_images/cute_golden_retriever_mascot.png";
import istpImage from "@assets/generated_images/istp_cool_leopard_mascot.png";
import isfpImage from "@assets/generated_images/isfp_artistic_cat_mascot.png";
import estpImage from "@assets/generated_images/estp_cheetah_adventurer_mascot.png";
import esfpImage from "@assets/generated_images/esfp_parrot_entertainer_mascot.png";

interface MBTIResultProps {
  result: MBTIResultType;
  ageGroup: AgeGroup;
  onRestart: () => void;
  onShare: () => void;
}

const mbtiImageMap: Record<string, string> = {
  'INTJ': intjImage,
  'INTP': intpImage,
  'ENTJ': entjImage,
  'ENTP': entpImage,
  'INFJ': infjImage,
  'INFP': infpImage,
  'ENFJ': enfjImage,
  'ENFP': enfpImage,
  'ISTJ': istjImage,
  'ISFJ': isfjImage,
  'ESTJ': estjImage,
  'ESFJ': esfjImage,
  'ISTP': istpImage,
  'ISFP': isfpImage,
  'ESTP': estpImage,
  'ESFP': esfpImage,
};

const getAnimalImage = (type: string): string => {
  const normalizedType = type.toUpperCase();
  return mbtiImageMap[normalizedType] || intjImage;
};

const strengthIcons = [Star, Heart, Zap, Target];

function DimensionBar({ label, leftLabel, rightLabel, percentage, leftColor, rightColor }: {
  label: string;
  leftLabel: string;
  rightLabel: string;
  percentage: number;
  leftColor: string;
  rightColor: string;
}) {
  const leftPercent = 100 - percentage;
  const rightPercent = percentage;
  const isLeftDominant = percentage < 50;
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm gap-2">
        <span className={`font-medium ${isLeftDominant ? 'text-foreground' : 'text-muted-foreground'}`}>
          {leftLabel} {isLeftDominant ? `${Math.round(leftPercent)}%` : ''}
        </span>
        <span className="text-muted-foreground text-xs shrink-0">{label}</span>
        <span className={`font-medium ${!isLeftDominant ? 'text-foreground' : 'text-muted-foreground'}`}>
          {!isLeftDominant ? `${Math.round(rightPercent)}%` : ''} {rightLabel}
        </span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden flex">
        <div 
          className={`${leftColor} transition-all duration-500`}
          style={{ width: `${leftPercent}%` }}
        />
        <div 
          className={`${rightColor} transition-all duration-500`}
          style={{ width: `${rightPercent}%` }}
        />
      </div>
    </div>
  );
}

export default function MBTIResult({ result, ageGroup, onRestart, onShare }: MBTIResultProps) {
  const { primaryType, primaryPercentage, secondaryType, secondaryPercentage, dimensionScores } = result;
  const { t, language } = useLanguage();
  
  const localizedType = getLocalizedMBTIType(primaryType.type, language);
  
  const nickname = localizedType?.nickname || primaryType.nickname;
  const description = localizedType?.description || primaryType.description;
  const strengths = localizedType?.strengths || primaryType.strengths;
  const activities = localizedType?.activities || primaryType.activities;
  const careers = localizedType?.careers || primaryType.careers;
  const hobbies = localizedType?.hobbies || primaryType.hobbies;
  const loveStyle = localizedType?.loveStyle || primaryType.loveStyle;
  const behavioralScenarios = localizedType?.behavioralScenarios || primaryType.behavioralScenarios;
  
  const ageLabels: Record<AgeGroup, string> = {
    elementary: t('age.elementary'),
    middle: t('age.middle'),
    high: t('age.high'),
    adult: t('age.adult')
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="overflow-visible">
        <div className={`bg-gradient-to-br ${primaryType.color} p-8 md:p-12 text-white text-center rounded-t-lg`}>
          <div className="flex items-end justify-center gap-3 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <img 
                  src={getAnimalImage(primaryType.type)} 
                  alt={getAnimalName(language, primaryType.type)}
                  className="w-full h-full object-contain rounded-full"
                  data-testid="img-mbti-animal-primary"
                />
              </div>
              <span className="text-xs mt-1 opacity-80">{Math.round(primaryPercentage)}%</span>
            </div>
            {secondaryType && secondaryType.type !== primaryType.type && (
              <div className="flex flex-col items-center">
                <div 
                  className="bg-white/15 backdrop-blur-sm rounded-full p-1.5"
                  style={{
                    width: `${Math.round((secondaryPercentage / primaryPercentage) * 112)}px`,
                    height: `${Math.round((secondaryPercentage / primaryPercentage) * 112)}px`,
                  }}
                >
                  <img 
                    src={getAnimalImage(secondaryType.type)} 
                    alt={getAnimalName(language, secondaryType.type)}
                    className="w-full h-full object-contain rounded-full"
                    data-testid="img-mbti-animal-secondary"
                  />
                </div>
                <span className="text-xs mt-1 opacity-60">{Math.round(secondaryPercentage)}%</span>
              </div>
            )}
          </div>
          
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
            {ageLabels[ageGroup]} {t('result.resultBadge')}
          </Badge>
          
          <h1 
            className="font-display text-5xl md:text-7xl font-bold mb-3"
            data-testid="text-mbti-type"
          >
            {primaryType.type}
          </h1>
          
          <p 
            className="text-xl md:text-2xl font-medium opacity-90"
            data-testid="text-mbti-nickname"
          >
            {nickname}
          </p>
          
          <p className="text-lg opacity-80 mt-2">
            {t('result.myAnimal')}: <span className="font-bold">{getAnimalName(language, primaryType.type)}</span>
          </p>
          
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-white/30 text-white border-0 text-base py-1 px-3">
              {primaryType.type} {Math.round(primaryPercentage)}%
            </Badge>
            {secondaryType && secondaryType.type !== primaryType.type && (
              <Badge variant="secondary" className="bg-white/15 text-white/80 border-0 text-sm">
                {t('result.secondRank')}: {secondaryType.type} {Math.round(secondaryPercentage)}%
              </Badge>
            )}
          </div>
        </div>
        
        <div className="p-6 md:p-8 space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              {t('result.personalityAnalysis')}
            </h2>
            <div className="space-y-4">
              <DimensionBar
                label={t('result.energyDirection')}
                leftLabel={t('result.introvert')}
                rightLabel={t('result.extrovert')}
                percentage={dimensionScores.EI.percentage}
                leftColor="bg-blue-500"
                rightColor="bg-orange-500"
              />
              <DimensionBar
                label={t('result.perceptionFunction')}
                leftLabel={t('result.intuition')}
                rightLabel={t('result.sensing')}
                percentage={dimensionScores.SN.percentage}
                leftColor="bg-purple-500"
                rightColor="bg-green-500"
              />
              <DimensionBar
                label={t('result.judgmentFunction')}
                leftLabel={t('result.feeling')}
                rightLabel={t('result.thinking')}
                percentage={dimensionScores.TF.percentage}
                leftColor="bg-pink-500"
                rightColor="bg-cyan-500"
              />
              <DimensionBar
                label={t('result.lifestyle')}
                leftLabel={t('result.perceiving')}
                rightLabel={t('result.judging')}
                percentage={dimensionScores.JP.percentage}
                leftColor="bg-yellow-500"
                rightColor="bg-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-3 text-foreground">{t('result.whoAmI')}</h2>
            <p 
              className="text-muted-foreground leading-relaxed text-lg"
              data-testid="text-description"
            >
              {description}
            </p>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground">{t('result.myStrengths')}</h2>
            <div className="grid grid-cols-2 gap-3">
              {strengths.map((strength, index) => {
                const Icon = strengthIcons[index % strengthIcons.length];
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    data-testid={`text-strength-${index}`}
                  >
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${primaryType.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{strength}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {t('result.suitableCareers')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {careers.map((career, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-1.5 px-3"
                  data-testid={`badge-career-${index}`}
                >
                  {career}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Palette className="w-5 h-5" />
              {t('result.favoriteHobbies')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-1.5 px-3"
                  data-testid={`badge-hobby-${index}`}
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {t('result.loveStyleTitle')}
            </h2>
            <p 
              className="text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-lg"
              data-testid="text-love-style"
            >
              {loveStyle}
            </p>
          </div>
          
          {behavioralScenarios && behavioralScenarios.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Users className="w-5 h-5" />
                {t('result.behavioralScenarios')}
              </h2>
              <div className="space-y-3">
                {behavioralScenarios.map((scenario, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-4 space-y-2"
                    data-testid={`card-scenario-${index}`}
                  >
                    <p className="text-sm text-muted-foreground">{scenario.situation}</p>
                    <p className="font-medium text-foreground">{scenario.behavior}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h2 className="font-display text-xl font-bold mb-4 text-foreground">{t('result.likeActivities')}</h2>
            <div className="flex flex-wrap gap-2">
              {activities.map((activity, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-1.5 px-3"
                  data-testid={`badge-activity-${index}`}
                >
                  {activity}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          onClick={onShare}
          className="gap-2"
          data-testid="button-share"
        >
          <Share2 className="w-4 h-4" />
          {t('result.shareResult')}
        </Button>
        <Button 
          variant="outline" 
          onClick={onRestart}
          className="gap-2"
          data-testid="button-restart-test"
        >
          <RotateCcw className="w-4 h-4" />
          {t('result.restartTest')}
        </Button>
      </div>
    </div>
  );
}
