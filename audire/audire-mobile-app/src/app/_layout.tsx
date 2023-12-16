import { Slot } from 'expo-router';
import { GluestackUIProvider, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { ExpoSupabaseProvider } from '@learning-app/supabase';

const audireConfig = {
  ...config,
  tokens: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      primary0: '#E5F1FB',
      primary50: '#CCE9FF',
      primary100: '#ADDBFF',
      primary200: '#7CC2FF',
      primary300: '#4AA9FF',
      primary400: '#1A91FF',
      primary500: '#0077E6',
      primary600: '#005DB4',
      primary700: '#004282',
      primary800: '#002851',
      primary900: '#011838',
      primary950: '#000711',
      secondary0: '#F6F6F6',
      secondary50: '#F3F3F3',
      secondary100: '#E9E9E9',
      secondary200: '#DADADA',
      secondary300: '#B0B0B0',
      secondary400: '#737373',
      secondary500: '#5F5F5F',
      secondary600: '#525252',
      secondary700: '#404040',
      secondary800: '#262626',
      secondary900: '#171717',
      secondary950: '#0C0C0C',
    },
  },
} as const;

const RootLayout = () => (
  <ExpoSupabaseProvider>
    <GluestackUIProvider config={audireConfig}>
      <Box
        width="100%"
        flex={1}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Slot />
      </Box>
    </GluestackUIProvider>
  </ExpoSupabaseProvider>
);
export default RootLayout;
