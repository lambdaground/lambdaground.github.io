import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mbtiTypes } from "@/lib/mbti-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAnimalName } from "@/lib/i18n";

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

const animalImages: Record<string, string> = {
  INTJ: intjImage,
  INTP: intpImage,
  ENTJ: entjImage,
  ENTP: entpImage,
  INFJ: infjImage,
  INFP: infpImage,
  ENFJ: enfjImage,
  ENFP: enfpImage,
  ISTJ: istjImage,
  ISFJ: isfjImage,
  ESTJ: estjImage,
  ESFJ: esfjImage,
  ISTP: istpImage,
  ISFP: isfpImage,
  ESTP: estpImage,
  ESFP: esfpImage,
};

const mbtiOrder = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

export default function MBTIAnimalGallery() {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            {t('gallery.badge')}
          </Badge>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
          {mbtiOrder.map((type) => {
            const mbtiData = mbtiTypes[type];
            if (!mbtiData) return null;
            
            return (
              <Card 
                key={type}
                className="p-2 md:p-3 text-center hover-elevate cursor-default overflow-visible"
                data-testid={`card-animal-${type}`}
              >
                <div className="aspect-square mb-2 rounded-md overflow-hidden bg-gradient-to-br from-primary/5 to-purple-500/5">
                  <img 
                    src={animalImages[type]} 
                    alt={`${getAnimalName(language, type)} - ${type}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-xs font-bold text-foreground">{type}</p>
                  <p className="text-xs text-muted-foreground truncate">{getAnimalName(language, type)}</p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          {t('gallery.info')}
        </p>
      </div>
    </section>
  );
}
