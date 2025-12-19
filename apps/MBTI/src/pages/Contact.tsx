import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const { t, language } = useLanguage();
  
  const contactContent = {
    ko: {
      title: '연락처',
      subtitle: '문의 사항이 있으신가요?',
      description: '서비스 관련 문의, 제안, 또는 버그 리포트가 있으시면 아래 연락처로 연락해주세요.',
      email: 'lambda.brains@gmail.com',
      emailLabel: '이메일',
      emailDescription: '일반 문의 및 제안',
      privacyEmail: 'lambda.brains@gmail.com',
      privacyLabel: '개인정보 문의',
      privacyDescription: '개인정보 관련 문의',
      responseTime: '보통 1-2 영업일 이내에 답변드립니다.',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Have any questions?',
      description: 'For service inquiries, suggestions, or bug reports, please contact us using the information below.',
      email: 'lambda.brains@gmail.com',
      emailLabel: 'Email',
      emailDescription: 'General inquiries and suggestions',
      privacyEmail: 'lambda.brains@gmail.com',
      privacyLabel: 'Privacy Inquiries',
      privacyDescription: 'Privacy-related questions',
      responseTime: 'We typically respond within 1-2 business days.',
    },
    ja: {
      title: 'お問い合わせ',
      subtitle: 'ご質問がありますか？',
      description: 'サービスに関するお問い合わせ、ご提案、バグ報告は、以下の連絡先までご連絡ください。',
      email: 'lambda.brains@gmail.com',
      emailLabel: 'メール',
      emailDescription: '一般的なお問い合わせとご提案',
      privacyEmail: 'lambda.brains@gmail.com',
      privacyLabel: 'プライバシーに関するお問い合わせ',
      privacyDescription: 'プライバシー関連のご質問',
      responseTime: '通常1〜2営業日以内にご返答いたします。',
    },
    zh: {
      title: '联系我们',
      subtitle: '有任何问题吗？',
      description: '如有服务相关咨询、建议或错误报告，请通过以下方式联系我们。',
      email: 'lambda.brains@gmail.com',
      emailLabel: '电子邮件',
      emailDescription: '一般咨询和建议',
      privacyEmail: 'lambda.brains@gmail.com',
      privacyLabel: '隐私咨询',
      privacyDescription: '隐私相关问题',
      responseTime: '我们通常在1-2个工作日内回复。',
    }
  };
  
  const content = contactContent[language];
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="mb-2">{t('nav.contact')}</Badge>
            <h1 className="text-3xl md:text-4xl font-display font-bold">{content.title}</h1>
            <p className="text-xl text-muted-foreground">{content.subtitle}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="overflow-visible">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {content.emailLabel}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{content.emailDescription}</p>
                <a 
                  href={`mailto:${content.email}`}
                  className="text-primary hover:underline font-medium"
                  data-testid="link-contact-email"
                >
                  {content.email}
                </a>
              </CardContent>
            </Card>
            
            <Card className="overflow-visible">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  {content.privacyLabel}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{content.privacyDescription}</p>
                <a 
                  href={`mailto:${content.privacyEmail}`}
                  className="text-primary hover:underline font-medium"
                  data-testid="link-privacy-email"
                >
                  {content.privacyEmail}
                </a>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            {content.responseTime}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
