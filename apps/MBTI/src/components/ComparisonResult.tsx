import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Users, 
  MessageCircle, 
  Brain, 
  Heart, 
  Lightbulb,
  Target,
  Share2,
  RotateCcw,
  Sparkles,
  BookOpen,
  Star,
  Zap,
  Quote,
  Users2,
  Eye
} from "lucide-react";
import {
  type MBTIResult,
  type HybridPersonality,
  type DimensionSimilarity,
  type AgeGroup,
  type AgeNarrative,
  getRelationshipInsight,
  getComplexComparisonAnalysis,
  getAgeNarrative,
  getMBTIFunFacts,
  animalPersonalities,
} from "@/lib/mbti-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAnimalName } from "@/lib/i18n";
import { getLocalizedMBTIType, getLocalizedAgeNarrative, getLocalizedFunFacts, getLocalizedHybridName, getLocalizedAnimalDescription, getLocalizedRelationshipInsight, getLocalizedAnimalPersonality } from "@/lib/mbti-data-localized";

function generateLocalizedHybridBadgeName(hybrid: HybridPersonality, language: Language): string {
  const directTranslation = getLocalizedHybridName(hybrid.hybridAnimalName, language);
  if (directTranslation !== hybrid.hybridAnimalName || language === 'ko') {
    return directTranslation;
  }
  
  const primaryName = getLocalizedHybridName(hybrid.primaryAnimal, language);
  const secondaryName = getLocalizedHybridName(hybrid.secondaryAnimal, language);
  
  if (hybrid.blendLevel === 'pure' || primaryName === secondaryName) {
    return primaryName;
  }
  
  return `${primaryName}-${secondaryName}`;
}

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

import dogCatHybrid from "@assets/generated_images/dog-cat_hybrid_mascot.png";
import lionFoxHybrid from "@assets/generated_images/lion-fox_hybrid_mascot.png";
import owlWolfHybrid from "@assets/generated_images/owl-wolf_hybrid_mascot.png";
import rabbitCatHybrid from "@assets/generated_images/rabbit-cat_hybrid_mascot.png";
import eagleLionHybrid from "@assets/generated_images/eagle-lion_hybrid_mascot.png";
import cheetahDogHybrid from "@assets/generated_images/cheetah-dog_hybrid_mascot.png";

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

const hybridImageMap: Record<string, string> = {
  '개냥이': dogCatHybrid,
  '냥멍이': dogCatHybrid,
  '사여우': lionFoxHybrid,
  '여자왕': lionFoxHybrid,
  '늑빼미': owlWolfHybrid,
  '올늑이': owlWolfHybrid,
  '토냥이': rabbitCatHybrid,
  '냥토끼': rabbitCatHybrid,
  '독사왕': eagleLionHybrid,
  '사독이': eagleLionHybrid,
  '치멍이': cheetahDogHybrid,
  '멍치타': cheetahDogHybrid,
  '사올이': intjImage,
  '올사자': intjImage,
};

function getAnimalImage(type: string): string {
  return mbtiImageMap[type.toUpperCase()] || intjImage;
}

function getHybridImage(hybrid: HybridPersonality): string {
  if (hybrid.blendLevel === 'pure') {
    return getAnimalImage(hybrid.primaryType);
  }
  if (hybridImageMap[hybrid.hybridAnimalName]) {
    return hybridImageMap[hybrid.hybridAnimalName];
  }
  return getAnimalImage(hybrid.primaryType);
}

type Language = 'ko' | 'en' | 'ja' | 'zh';

function generateLocalizedBlendDescription(hybrid: HybridPersonality, language: Language): string {
  const primaryAnimal = getLocalizedHybridName(hybrid.primaryAnimal, language);
  const secondaryAnimal = getLocalizedHybridName(hybrid.secondaryAnimal, language);
  const primaryDesc = getLocalizedAnimalDescription(hybrid.primaryAnimal, language);
  
  if (hybrid.blendLevel === 'pure') {
    const descriptions: Record<Language, string> = {
      ko: `${primaryDesc} ${primaryAnimal} 성향이에요.`,
      en: `Has a ${primaryAnimal} personality - ${primaryDesc}.`,
      ja: `${primaryAnimal}の性格です - ${primaryDesc}。`,
      zh: `有${primaryAnimal}的性格 - ${primaryDesc}。`
    };
    return descriptions[language];
  }
  
  const descriptions: Record<Language, string> = {
    ko: `${primaryAnimal}의 특성이 강하지만, ${secondaryAnimal}의 매력도 있어요.`,
    en: `Strong ${primaryAnimal} characteristics, but also has some ${secondaryAnimal} charm.`,
    ja: `${primaryAnimal}の特性が強いですが、${secondaryAnimal}の魅力もあります。`,
    zh: `${primaryAnimal}的特性很强，但也有${secondaryAnimal}的魅力。`
  };
  return descriptions[language];
}

interface ComparisonResultProps {
  parentResult: MBTIResult;
  childResult: MBTIResult;
  childAgeGroup?: AgeGroup;
  onRestart: () => void;
  onShare?: () => void;
}

export default function ComparisonResult({ 
  parentResult, 
  childResult, 
  childAgeGroup,
  onRestart,
  onShare 
}: ComparisonResultProps) {
  const { t, language } = useLanguage();
  const parentType = parentResult.primaryType.type;
  const childType = childResult.primaryType.type;
  
  const localizedParentType = getLocalizedMBTIType(parentType, language);
  const localizedChildType = getLocalizedMBTIType(childType, language);
  
  const parentNickname = localizedParentType?.nickname || parentResult.primaryType.nickname;
  const childNickname = localizedChildType?.nickname || childResult.primaryType.nickname;
  
  const relationshipInsight = getRelationshipInsight(parentType, childType);
  const localizedRelationshipInsight = getLocalizedRelationshipInsight(parentType, childType, language);
  const finalRelationshipInsight = language === 'ko' ? relationshipInsight : localizedRelationshipInsight;
  const complexAnalysis = getComplexComparisonAnalysis(parentResult, childResult);
  
  const { parentHybrid, childHybrid } = complexAnalysis;
  
  const localizedAgeNarrative = childAgeGroup ? getLocalizedAgeNarrative(childType, childAgeGroup, language) : null;
  const fallbackAgeNarrative = childAgeGroup ? getAgeNarrative(childType, childAgeGroup) : null;
  const childAgeNarrative = localizedAgeNarrative || fallbackAgeNarrative;
  const ageLabel = childAgeGroup ? t(`age.${childAgeGroup}`) : '';
  
  const localizedFunFacts = getLocalizedFunFacts(childType, language);
  const fallbackFunFacts = getMBTIFunFacts(childType);
  const childFunFacts = localizedFunFacts || fallbackFunFacts;

  return (
    <div className="container max-w-4xl mx-auto space-y-8" data-testid="comparison-result-container">
      <div className="text-center space-y-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground" data-testid="text-comparison-title">
          {t('result.title')}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t('result.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-rose-200 dark:border-rose-900/50 overflow-visible" data-testid="card-parent-result">
          <CardHeader className="text-center pb-2">
            <div className="flex items-end justify-center gap-2 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-950/30 p-1.5 border-2 border-rose-300 dark:border-rose-800">
                  <img 
                    src={getAnimalImage(parentResult.primaryType.type)} 
                    alt={getAnimalName(language, parentResult.primaryType.type)}
                    className="w-full h-full object-contain rounded-full"
                    data-testid="img-parent-animal-primary"
                  />
                </div>
                <span className="text-xs text-rose-600/70 dark:text-rose-400/70 mt-0.5">{Math.round(parentResult.primaryPercentage)}%</span>
              </div>
              {parentResult.secondaryType && parentResult.secondaryType.type !== parentResult.primaryType.type && (
                <div className="flex flex-col items-center">
                  <div 
                    className="rounded-full bg-rose-50 dark:bg-rose-950/20 p-1 border border-rose-200 dark:border-rose-800/50"
                    style={{
                      width: `${Math.round((parentResult.secondaryPercentage / parentResult.primaryPercentage) * 80)}px`,
                      height: `${Math.round((parentResult.secondaryPercentage / parentResult.primaryPercentage) * 80)}px`,
                    }}
                  >
                    <img 
                      src={getAnimalImage(parentResult.secondaryType.type)} 
                      alt={getAnimalName(language, parentResult.secondaryType.type)}
                      className="w-full h-full object-contain rounded-full"
                      data-testid="img-parent-animal-secondary"
                    />
                  </div>
                  <span className="text-xs text-rose-600/50 dark:text-rose-400/50 mt-0.5">{Math.round(parentResult.secondaryPercentage)}%</span>
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground mb-1">{t('result.parent')}</div>
            <CardTitle className="text-4xl font-bold text-rose-600 dark:text-rose-400" data-testid="text-parent-mbti">
              {parentType}
            </CardTitle>
            <div className="text-sm text-rose-600/80 dark:text-rose-400/80 mt-1" data-testid="text-parent-mbti-percentage">
              {parentResult.primaryType.type} {parentResult.primaryPercentage}% + {parentResult.secondaryType.type} {parentResult.secondaryPercentage}%
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700">
                {generateLocalizedHybridBadgeName(parentHybrid, language)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-lg font-medium text-foreground">{parentNickname}</p>
            <p className="text-sm text-muted-foreground">
              {language === 'ko' ? parentHybrid.blendDescription : generateLocalizedBlendDescription(parentHybrid, language)}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-sky-200 dark:border-sky-900/50 overflow-visible" data-testid="card-child-result">
          <CardHeader className="text-center pb-2">
            <div className="flex items-end justify-center gap-2 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sky-100 dark:bg-sky-950/30 p-1.5 border-2 border-sky-300 dark:border-sky-800">
                  <img 
                    src={getAnimalImage(childResult.primaryType.type)} 
                    alt={getAnimalName(language, childResult.primaryType.type)}
                    className="w-full h-full object-contain rounded-full"
                    data-testid="img-child-animal-primary"
                  />
                </div>
                <span className="text-xs text-sky-600/70 dark:text-sky-400/70 mt-0.5">{Math.round(childResult.primaryPercentage)}%</span>
              </div>
              {childResult.secondaryType && childResult.secondaryType.type !== childResult.primaryType.type && (
                <div className="flex flex-col items-center">
                  <div 
                    className="rounded-full bg-sky-50 dark:bg-sky-950/20 p-1 border border-sky-200 dark:border-sky-800/50"
                    style={{
                      width: `${Math.round((childResult.secondaryPercentage / childResult.primaryPercentage) * 80)}px`,
                      height: `${Math.round((childResult.secondaryPercentage / childResult.primaryPercentage) * 80)}px`,
                    }}
                  >
                    <img 
                      src={getAnimalImage(childResult.secondaryType.type)} 
                      alt={getAnimalName(language, childResult.secondaryType.type)}
                      className="w-full h-full object-contain rounded-full"
                    data-testid="img-child-animal-secondary"
                    />
                  </div>
                  <span className="text-xs text-sky-600/50 dark:text-sky-400/50 mt-0.5">{Math.round(childResult.secondaryPercentage)}%</span>
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground mb-1">{t('result.child')}</div>
            <CardTitle className="text-4xl font-bold text-sky-600 dark:text-sky-400" data-testid="text-child-mbti">
              {childType}
            </CardTitle>
            <div className="text-sm text-sky-600/80 dark:text-sky-400/80 mt-1" data-testid="text-child-mbti-percentage">
              {childResult.primaryType.type} {childResult.primaryPercentage}% + {childResult.secondaryType.type} {childResult.secondaryPercentage}%
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700">
                {generateLocalizedHybridBadgeName(childHybrid, language)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-lg font-medium text-foreground">{childNickname}</p>
            <p className="text-sm text-muted-foreground">
              {language === 'ko' ? childHybrid.blendDescription : generateLocalizedBlendDescription(childHybrid, language)}
            </p>
          </CardContent>
        </Card>
      </div>

      {childAgeNarrative && (
        <Card className="border-2 border-sky-200 dark:border-sky-900/50" data-testid="card-child-age-narrative">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
              <BookOpen className="w-5 h-5" />
              {ageLabel} {childType} {t('result.childAgeTitle')}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t('result.childAgeDesc')}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-sky-50 dark:bg-sky-950/30 rounded-lg" data-testid="text-child-overview">
              <p className="text-foreground leading-relaxed">{childAgeNarrative.overview}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t('result.keyTraits')}
              </h4>
              <div className="flex flex-wrap gap-2" data-testid="container-child-traits">
                {childAgeNarrative.keyTraits.map((trait, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700"
                    data-testid={`badge-child-trait-${index}`}
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">{t('result.scenarios')}</h4>
              <div className="space-y-3" data-testid="container-child-scenarios">
                {childAgeNarrative.scenarios.map((scenario, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-muted/50 rounded-lg"
                    data-testid={`card-child-scenario-${index}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-950/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-sky-600 dark:text-sky-400">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{scenario.situation}</p>
                        <p className="text-sm text-muted-foreground mt-1">{scenario.behavior}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {childFunFacts && (
        <Card className="border-2 border-amber-200 dark:border-amber-900/50" data-testid="card-child-fun-facts">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Star className="w-5 h-5" />
              {childType} {t('result.funFacts')}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t('result.funFactsDesc')}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/30" data-testid="fun-fact-hidden-talent">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-300">{t('result.hiddenTalent')}</span>
                </div>
                <p className="text-sm text-foreground">{childFunFacts.hiddenTalent}</p>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/30" data-testid="fun-fact-superpower">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-300">{t('result.superpower')}</span>
                </div>
                <p className="text-sm text-foreground">{childFunFacts.superpower}</p>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/30" data-testid="fun-fact-fun-fact">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-300">{t('result.didYouKnow')}</span>
                </div>
                <p className="text-sm text-foreground">{childFunFacts.funFact}</p>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/30" data-testid="fun-fact-best-match">
                <div className="flex items-center gap-2 mb-2">
                  <Users2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-300">{t('result.bestMatch')}</span>
                </div>
                <p className="text-sm text-foreground">{childFunFacts.bestMatch}</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg border border-amber-200 dark:border-amber-800" data-testid="fun-fact-quote">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium italic">{childFunFacts.famousQuote}</p>
                  <p className="text-xs text-muted-foreground mt-2">- {childType} {t('result.motto')}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg" data-testid="fun-fact-weakness">
              <div className="flex items-start gap-3">
                <Heart className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-foreground">{t('result.parentTip')}: </span>
                  <span className="text-sm text-muted-foreground">{childFunFacts.secretWeakness}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-300 dark:border-emerald-800" data-testid="card-compatibility">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            {t('result.compatibility')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div 
              className={`inline-flex items-center rounded-md px-6 py-3 text-2xl font-bold ${
                complexAnalysis.overallCompatibilityScore >= 75 
                  ? 'bg-green-100 dark:bg-green-950/50 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-800' 
                  : complexAnalysis.overallCompatibilityScore >= 50 
                  ? 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-800 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-800' 
                  : 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
              }`}
              data-testid="badge-compatibility"
            >
              {t('result.compatibilityScore')} {complexAnalysis.overallCompatibilityScore}%
            </div>
            <p className="text-sm text-muted-foreground">
              {complexAnalysis.overallCompatibilityScore >= 75 
                ? t('result.highCompat')
                : complexAnalysis.overallCompatibilityScore >= 50 
                ? t('result.medCompat')
                : t('result.lowCompat')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complexAnalysis.dimensionSimilarities.map((dimSim) => (
              <DimensionSimilarityCard key={dimSim.dimension} similarity={dimSim} t={t} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="differences" className="w-full" data-testid="tabs-insights">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="differences" data-testid="tab-differences">
            <MessageCircle className="w-4 h-4 mr-2" />
            {t('result.differences')}
          </TabsTrigger>
          <TabsTrigger value="parent-guide" data-testid="tab-parent-guide">
            <Heart className="w-4 h-4 mr-2" />
            {t('result.parentGuide')}
          </TabsTrigger>
          <TabsTrigger value="child-guide" data-testid="tab-child-guide">
            <Lightbulb className="w-4 h-4 mr-2" />
            {t('result.childGuide')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="differences" className="space-y-4 mt-4">
          <InsightCard
            icon={<MessageCircle className="w-5 h-5 text-blue-500" />}
            title={t('result.commDiff')}
            content={finalRelationshipInsight.communicationDifference}
            testId="card-communication"
          />
          <InsightCard
            icon={<Brain className="w-5 h-5 text-purple-500" />}
            title={t('result.behaviorDiff')}
            content={finalRelationshipInsight.behaviorDifference}
            testId="card-behavior"
          />
          <InsightCard
            icon={<Target className="w-5 h-5 text-orange-500" />}
            title={t('result.thinkingDiff')}
            content={finalRelationshipInsight.thinkingDifference}
            testId="card-thinking"
          />
        </TabsContent>

        <TabsContent value="parent-guide" className="mt-4">
          <Card data-testid="card-parent-guidance">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <Heart className="w-5 h-5" />
                {t('result.parentAdvice')}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {childType} {t('result.parentAdviceDesc')}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {finalRelationshipInsight.parentGuidance.map((guidance, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-parent-guidance-${index}`}>
                    <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-rose-600 dark:text-rose-400">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{guidance}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="child-guide" className="mt-4">
          <Card data-testid="card-child-understanding">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                <Lightbulb className="w-5 h-5" />
                {t('result.childExplain')}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {t('result.childExplainDesc')}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {finalRelationshipInsight.childUnderstanding.map((understanding, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-child-understanding-${index}`}>
                    <div className="mt-1 w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-sky-600 dark:text-sky-400">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{understanding}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onRestart}
          className="gap-2"
          data-testid="button-restart"
        >
          <RotateCcw className="w-4 h-4" />
          {t('restart')}
        </Button>
        {onShare && (
          <Button 
            size="lg" 
            onClick={onShare}
            className="gap-2"
            data-testid="button-share"
          >
            <Share2 className="w-4 h-4" />
            {t('share')}
          </Button>
        )}
      </div>
    </div>
  );
}

function InsightCard({ 
  icon, 
  title, 
  content,
  testId 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  testId: string;
}) {
  return (
    <Card data-testid={testId}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
}

function DimensionSimilarityCard({ similarity, t }: { similarity: DimensionSimilarity; t: (key: string) => string }) {
  const isHigh = similarity.similarityPct >= 75;
  const isMedium = similarity.similarityPct >= 50 && similarity.similarityPct < 75;
  
  const getDimensionName = (dim: string): string => {
    const dimensionKeys: Record<string, string> = {
      EI: 'result.dimEI',
      SN: 'result.dimSN',
      TF: 'result.dimTF',
      JP: 'result.dimJP'
    };
    return t(dimensionKeys[dim] || dim);
  };
  
  const getTraitLabel = (dim: string, pct: number): string => {
    const labels: Record<string, { low: string; high: string }> = {
      EI: { low: t('result.traitE'), high: t('result.traitI') },
      SN: { low: t('result.traitS'), high: t('result.traitN') },
      TF: { low: t('result.traitT'), high: t('result.traitF') },
      JP: { low: t('result.traitJ'), high: t('result.traitP') }
    };
    return pct >= 50 ? labels[dim].high : labels[dim].low;
  };
  
  return (
    <div 
      className={`p-4 rounded-lg border ${
        isHigh 
          ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50' 
          : isMedium
          ? 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900/50'
          : 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50'
      }`}
      data-testid={`card-similarity-${similarity.dimension}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-foreground">{getDimensionName(similarity.dimension)}</span>
        <Badge 
          variant="outline" 
          className={
            isHigh 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300' 
              : isMedium
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300'
              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300'
          }
        >
          {similarity.similarityPct}% {t('result.match')}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-rose-600 dark:text-rose-400 font-medium">{t('result.parentLabel')}</span>
            <span className="text-foreground">{getTraitLabel(similarity.dimension, similarity.parentPct)}</span>
            <span className="text-muted-foreground text-xs">({similarity.parentPct < 50 ? 100 - similarity.parentPct : similarity.parentPct}%)</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-sky-600 dark:text-sky-400 font-medium">{t('result.childLabel')}</span>
            <span className="text-foreground">{getTraitLabel(similarity.dimension, similarity.childPct)}</span>
            <span className="text-muted-foreground text-xs">({similarity.childPct < 50 ? 100 - similarity.childPct : similarity.childPct}%)</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all ${
            isHigh 
              ? 'bg-green-500' 
              : isMedium 
              ? 'bg-yellow-500' 
              : 'bg-blue-500'
          }`}
          style={{ width: `${similarity.similarityPct}%` }}
        />
      </div>
    </div>
  );
}

function AnimalGuideSection({ 
  language, 
  t, 
  mbtiImageMap 
}: { 
  language: Language; 
  t: (key: string) => string; 
  mbtiImageMap: Record<string, string>;
}) {
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  
  const selectedPersonality = selectedMbti ? getLocalizedAnimalPersonality(selectedMbti, language) : null;
  
  return (
    <>
      <Card className="border-2 border-purple-200 dark:border-purple-900/50" data-testid="card-animal-legend">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <Sparkles className="w-5 h-5" />
            {t('result.animalGuide')}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {t('result.animalGuideDesc')}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {animalPersonalities.map((item, index) => {
              const localizedData = getLocalizedAnimalPersonality(item.mbti, language);
              const shortDesc = localizedData?.shortDesc || item.description;
              
              return (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 cursor-pointer hover-elevate transition-all"
                  data-testid={`legend-item-${item.mbti}`}
                  onClick={() => setSelectedMbti(item.mbti)}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800">
                    <img 
                      src={mbtiImageMap[item.mbti]} 
                      alt={getAnimalName(language, item.mbti)}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-purple-700 dark:text-purple-300">{item.mbti}</span>
                      <Badge variant="outline" className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-700">
                        {getAnimalName(language, item.mbti)}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{shortDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedMbti} onOpenChange={(open) => !open && setSelectedMbti(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedMbti && (
                <>
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
                    <img 
                      src={mbtiImageMap[selectedMbti]} 
                      alt={getAnimalName(language, selectedMbti)}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-purple-700 dark:text-purple-300">{selectedMbti}</span>
                    <Badge variant="outline" className="ml-2 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-700">
                      {getAnimalName(language, selectedMbti)}
                    </Badge>
                  </div>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-foreground leading-relaxed">
              {selectedPersonality?.detailedDesc}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
