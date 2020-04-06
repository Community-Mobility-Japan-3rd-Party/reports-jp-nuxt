type StringByLanguage = {
  [key: string]: string;
};

type Cookie = {
  name: string | StringByLanguage;
  description: string | StringByLanguage;
  cookies: string[];
  src?: string;
  async?: boolean;
  accepted?: () => void;
  declined?: () => void;
};

type Cookies = {
  necessary: Cookie[];
  optional?: Cookie[];
};

const config: Cookies = {
  necessary: [
    {
      name: {
        ja: '既定のCookie'
      },

      description: {
        ja: 'Cookieの制御に使用されます。'
      },
      cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
    }
  ],
  optional: [
    {
      name: {
        ja: 'Google Analytics'
      },
      description: {
        ja:
          'Google AnalyticsはGoogleが提供するウェブ分析サービスで、ウェブサイトのトラフィックを追跡・報告します。'
      },
      cookies: ['_ga', '_gat_gtag_UA_162897034_1', '_gid'],
      declined: () => {
        (window as any)['ga-disable-UA-162897034-1'] = true;
      }
    }
  ]
};

export default config;
