import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  const { t, language } = useLanguage();
  
  const privacyContent = {
    ko: {
      intro: '본 개인정보처리방침은 MBTI 궁합 테스트 서비스(이하 "서비스")의 개인정보 처리에 관한 사항을 규정합니다.',
      sections: [
        {
          title: '1. 수집하는 개인정보',
          content: '본 서비스는 테스트 진행을 위해 다음 정보를 일시적으로 처리합니다:\n• MBTI 테스트 응답 결과\n• 선택한 연령대 정보\n\n본 서비스는 별도의 회원가입을 요구하지 않으며, 이름, 이메일, 연락처 등의 개인식별정보를 수집하지 않습니다.'
        },
        {
          title: '2. 개인정보의 처리 목적',
          content: '수집된 정보는 오직 다음 목적으로만 사용됩니다:\n• MBTI 테스트 결과 분석 및 제공\n• 부모-자녀 MBTI 궁합 분석\n• 서비스 이용 통계 (익명화된 데이터)'
        },
        {
          title: '3. 개인정보의 보유 및 파기',
          content: '본 서비스는 서버에 개인정보를 저장하지 않습니다. 모든 테스트 데이터는 사용자의 브라우저 세션에만 일시적으로 저장되며, 브라우저를 닫으면 자동으로 삭제됩니다.'
        },
        {
          title: '4. 쿠키 및 분석 도구',
          content: '본 서비스는 사용자 경험 개선 및 서비스 분석을 위해 쿠키를 사용할 수 있습니다. 또한 Google Analytics 등의 분석 도구를 사용하여 익명화된 방문 통계를 수집할 수 있습니다.'
        },
        {
          title: '5. 광고',
          content: '본 서비스는 Google AdSense 등의 광고 서비스를 사용할 수 있습니다. 광고 서비스는 관련 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.'
        },
        {
          title: '6. 개인정보 보호책임자',
          content: '개인정보 관련 문의사항은 아래 연락처로 문의해 주시기 바랍니다.\n이메일: lambda.brains@gmail.com'
        },
        {
          title: '7. 개정 이력',
          content: '본 방침은 2024년 12월 6일부터 시행됩니다.\n향후 법령 변경이나 서비스 변경에 따라 내용이 수정될 수 있으며, 변경 시 서비스 내 공지를 통해 안내드리겠습니다.'
        }
      ]
    },
    en: {
      intro: 'This Privacy Policy describes how MBTI Compatibility Test Service ("Service") handles personal information.',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'This Service temporarily processes the following information for testing purposes:\n• MBTI test response results\n• Selected age group information\n\nThis Service does not require registration and does not collect personally identifiable information such as name, email, or contact details.'
        },
        {
          title: '2. Purpose of Processing',
          content: 'Collected information is used only for:\n• MBTI test result analysis and provision\n• Parent-child MBTI compatibility analysis\n• Service usage statistics (anonymized data)'
        },
        {
          title: '3. Retention and Deletion',
          content: 'This Service does not store personal information on servers. All test data is temporarily stored only in your browser session and is automatically deleted when you close the browser.'
        },
        {
          title: '4. Cookies and Analytics',
          content: 'This Service may use cookies to improve user experience and for service analysis. We may also use analytics tools like Google Analytics to collect anonymized visit statistics.'
        },
        {
          title: '5. Advertising',
          content: 'This Service may use advertising services such as Google AdSense. Advertising services may use cookies to provide relevant advertisements.'
        },
        {
          title: '6. Privacy Contact',
          content: 'For privacy-related inquiries, please contact us at:\nEmail: lambda.brains@gmail.com'
        },
        {
          title: '7. Updates',
          content: 'This policy is effective as of December 6, 2024.\nThis policy may be updated due to changes in laws or services. Any changes will be announced through the Service.'
        }
      ]
    },
    ja: {
      intro: '本プライバシーポリシーは、MBTI相性テストサービス（以下「本サービス」）における個人情報の取り扱いについて規定します。',
      sections: [
        {
          title: '1. 収集する情報',
          content: '本サービスは、テスト実施のため以下の情報を一時的に処理します：\n• MBTIテスト回答結果\n• 選択した年齢層情報\n\n本サービスは会員登録を必要とせず、氏名、メールアドレス、連絡先などの個人識別情報は収集しません。'
        },
        {
          title: '2. 処理目的',
          content: '収集した情報は以下の目的にのみ使用されます：\n• MBTIテスト結果の分析と提供\n• 親子MBTI相性分析\n• サービス利用統計（匿名化データ）'
        },
        {
          title: '3. 保存と削除',
          content: '本サービスはサーバーに個人情報を保存しません。すべてのテストデータはブラウザセッションにのみ一時的に保存され、ブラウザを閉じると自動的に削除されます。'
        },
        {
          title: '4. Cookieと分析ツール',
          content: '本サービスは、ユーザー体験の向上とサービス分析のためにCookieを使用する場合があります。また、Google Analyticsなどの分析ツールを使用して匿名化された訪問統計を収集する場合があります。'
        },
        {
          title: '5. 広告',
          content: '本サービスはGoogle AdSenseなどの広告サービスを使用する場合があります。広告サービスは関連広告を提供するためにCookieを使用する場合があります。'
        },
        {
          title: '6. お問い合わせ',
          content: 'プライバシーに関するお問い合わせは下記までご連絡ください。\nメール：lambda.brains@gmail.com'
        },
        {
          title: '7. 改定履歴',
          content: '本ポリシーは2024年12月6日より施行されます。\n法令やサービスの変更に伴い内容が修正される場合があります。変更がある場合はサービス内でお知らせします。'
        }
      ]
    },
    zh: {
      intro: '本隐私政策规定了MBTI配对测试服务（以下简称"本服务"）的个人信息处理相关事项。',
      sections: [
        {
          title: '1. 收集的信息',
          content: '本服务为进行测试而临时处理以下信息：\n• MBTI测试回答结果\n• 选择的年龄段信息\n\n本服务不需要注册，不收集姓名、电子邮件、联系方式等个人身份信息。'
        },
        {
          title: '2. 处理目的',
          content: '收集的信息仅用于：\n• MBTI测试结果分析与提供\n• 亲子MBTI配对分析\n• 服务使用统计（匿名数据）'
        },
        {
          title: '3. 保存与删除',
          content: '本服务不在服务器上存储个人信息。所有测试数据仅临时存储在您的浏览器会话中，关闭浏览器后自动删除。'
        },
        {
          title: '4. Cookie和分析工具',
          content: '本服务可能使用Cookie来改善用户体验和进行服务分析。我们也可能使用Google Analytics等分析工具收集匿名访问统计数据。'
        },
        {
          title: '5. 广告',
          content: '本服务可能使用Google AdSense等广告服务。广告服务可能使用Cookie来提供相关广告。'
        },
        {
          title: '6. 联系方式',
          content: '如有隐私相关问题，请通过以下方式联系我们：\n电子邮件：lambda.brains@gmail.com'
        },
        {
          title: '7. 修订记录',
          content: '本政策自2024年12月6日起生效。\n本政策可能因法律或服务变更而更新。如有变更，将通过服务内公告通知。'
        }
      ]
    }
  };
  
  const content = privacyContent[language];
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-display">{t('privacy.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{content.intro}</p>
              {content.sections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
