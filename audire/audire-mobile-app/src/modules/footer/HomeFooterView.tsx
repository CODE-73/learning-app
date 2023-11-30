import { Box, Button, ButtonIcon } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import { Users2, FileQuestion, Download } from 'lucide-react-native';

const HomeFooterView = () => {
  const footer = [
    { name: 'My Batches', icon: Users2, link: '' },
    { name: 'Doubts', icon: FileQuestion, link: '' },
    { name: 'Download', icon: Download, link: '' },
  ];
  return (
    <Box
      borderTopRightRadius="$xl"
      borderTopLeftRadius="$xl"
      position="absolute"
      w="$full"
      bottom="$0"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bg="$fuchsia200"
      px="$10"
      py="$3"
      shadowColor="$black"
      shadowOffset={{
        width: 3,
        height: 0,
      }}
      shadowOpacity="$95"
      shadowRadius="$1.5"
    >
      {footer.map((footer) => (
        <Link key={footer.name} href={footer.link} asChild>
          <Button bg="rgba(0, 0, 0, 0)">
            <ButtonIcon size="xl" color="black" as={footer.icon} />
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default HomeFooterView;
