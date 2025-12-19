import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Sparkles, Target } from "lucide-react";

export default function About() {
  const { t, language } = useLanguage();
  
  const aboutContent = {
    ko: {
      title: '사이트 소개',
      subtitle: '부모와 자녀가 서로를 더 잘 이해하는 방법',
      description: 'MBTI 궁합 테스트는 부모와 자녀의 성격 유형을 비교하여 서로를 더 깊이 이해하고, 더 나은 소통 방법을 찾을 수 있도록 도와주는 서비스입니다.',
      features: [
        {
          icon: Users,
          title: '부모-자녀 MBTI 비교',
          description: '부모와 자녀의 MBTI를 함께 분석하여 성격적 공통점과 차이점을 알아봅니다.'
        },
        {
          icon: Heart,
          title: '맞춤형 소통 가이드',
          description: '각 조합에 맞는 효과적인 대화법과 이해의 포인트를 제공합니다.'
        },
        {
          icon: Sparkles,
          title: '귀여운 동물 캐릭터',
          description: '16가지 MBTI 유형을 대표하는 귀여운 동물 캐릭터로 쉽게 이해할 수 있어요.'
        },
        {
          icon: Target,
          title: '연령별 맞춤 테스트',
          description: '초등학생부터 성인까지, 연령에 맞는 질문으로 정확한 결과를 제공합니다.'
        }
      ],
      mission: {
        title: '우리의 미션',
        content: '모든 가정에서 부모와 자녀가 서로의 다름을 이해하고 존중하며, 더 행복한 관계를 만들어 나가길 바랍니다. MBTI는 단순한 성격 분류가 아닌, 서로를 이해하는 도구가 될 수 있습니다.'
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'Helping parents and children understand each other better',
      description: 'MBTI Compatibility Test is a service that helps parents and children understand each other more deeply and find better ways to communicate by comparing their personality types.',
      features: [
        {
          icon: Users,
          title: 'Parent-Child MBTI Comparison',
          description: 'Analyze parent and child MBTI together to discover personality similarities and differences.'
        },
        {
          icon: Heart,
          title: 'Customized Communication Guide',
          description: 'Provides effective communication tips tailored to each combination.'
        },
        {
          icon: Sparkles,
          title: 'Cute Animal Characters',
          description: 'Easily understand the 16 MBTI types through cute animal characters.'
        },
        {
          icon: Target,
          title: 'Age-Appropriate Tests',
          description: 'Provides accurate results with questions tailored from elementary school to adults.'
        }
      ],
      mission: {
        title: 'Our Mission',
        content: 'We hope that in every family, parents and children can understand and respect each other\'s differences, building happier relationships. MBTI can be more than just personality classification—it can be a tool for mutual understanding.'
      }
    },
    ja: {
      title: 'サイト紹介',
      subtitle: '親と子がお互いをより理解するために',
      description: 'MBTI相性テストは、親と子の性格タイプを比較することで、お互いをより深く理解し、より良いコミュニケーション方法を見つけるお手伝いをするサービスです。',
      features: [
        {
          icon: Users,
          title: '親子MBTI比較',
          description: '親と子のMBTIを一緒に分析し、性格的な共通点と違いを発見します。'
        },
        {
          icon: Heart,
          title: 'カスタマイズされたコミュニケーションガイド',
          description: '各組み合わせに合った効果的なコミュニケーションのヒントを提供します。'
        },
        {
          icon: Sparkles,
          title: 'かわいい動物キャラクター',
          description: 'かわいい動物キャラクターで16種類のMBTIタイプを簡単に理解できます。'
        },
        {
          icon: Target,
          title: '年齢に合わせたテスト',
          description: '小学生から大人まで、年齢に合った質問で正確な結果を提供します。'
        }
      ],
      mission: {
        title: '私たちのミッション',
        content: 'すべての家庭で、親と子がお互いの違いを理解し尊重し、より幸せな関係を築いていくことを願っています。MBTIは単なる性格分類ではなく、お互いを理解するためのツールになれます。'
      }
    },
    zh: {
      title: '网站介绍',
      subtitle: '帮助父母和孩子更好地理解彼此',
      description: 'MBTI配对测试是一项通过比较父母和孩子的性格类型，帮助他们更深入地理解彼此，找到更好的沟通方式的服务。',
      features: [
        {
          icon: Users,
          title: '亲子MBTI比较',
          description: '一起分析父母和孩子的MBTI，发现性格上的共同点和差异。'
        },
        {
          icon: Heart,
          title: '定制沟通指南',
          description: '提供针对每种组合的有效沟通技巧。'
        },
        {
          icon: Sparkles,
          title: '可爱的动物角色',
          description: '通过可爱的动物角色轻松理解16种MBTI类型。'
        },
        {
          icon: Target,
          title: '适龄测试',
          description: '从小学生到成人，根据年龄量身定制的问题提供准确的结果。'
        }
      ],
      mission: {
        title: '我们的使命',
        content: '我们希望在每个家庭中，父母和孩子都能理解和尊重彼此的差异，建立更幸福的关系。MBTI不仅仅是性格分类，它可以成为相互理解的工具。'
      }
    }
  };
  
  const content = aboutContent[language];
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mb-2">{t('nav.about')}</Badge>
            <h1 className="text-3xl md:text-4xl font-display font-bold">{content.title}</h1>
            <p className="text-xl text-muted-foreground">{content.subtitle}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {content.features.map((feature, index) => (
              <Card key={index} className="overflow-visible">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 overflow-visible">
            <CardHeader>
              <CardTitle className="text-xl">{content.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{content.mission.content}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
