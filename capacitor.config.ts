import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.attaportfolio.app',
  appName: 'Atta Portfolio',
  webDir: 'out',
  plugins: {
    SafeArea: {
      statusBarStyle: 'DARK',
      navigationBarStyle: 'DARK',
    },
    SystemBars: {
      insetsHandling: 'disable',
    },
  },
};

export default config;
