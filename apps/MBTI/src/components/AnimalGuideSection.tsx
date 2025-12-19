import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";
import { animalPersonalities } from "@/lib/mbti-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAnimalName } from "@/lib/i18n";
import { getLocalizedAnimalPersonality } from "@/lib/mbti-data-localized";

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

export default function AnimalGuideSection() {
  const { t, language } = useLanguage();
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);
  
  const selectedPersonality = selectedMbti ? getLocalizedAnimalPersonality(selectedMbti, language) : null;
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
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
      </div>
    </section>
  );
}
