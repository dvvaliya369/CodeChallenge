import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  Button, 
  Card, 
  Title, 
  Paragraph, 
  TextInput,
  FAB,
  Chip,
  Avatar,
  Badge,
  Divider,
  Surface,
  ActivityIndicator,
  useTheme
} from 'react-native-paper';

const PaperExampleScreen = () => {
  const theme = useTheme();
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Title style={styles.title}>React Native Paper Components</Title>
        
        {/* Card Example */}
        <Card style={styles.card}>
          <Card.Title 
            title="Card Title" 
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Paragraph>This is a sample card with Paper components.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button mode="contained">Ok</Button>
          </Card.Actions>
        </Card>

        {/* Text Input Example */}
        <TextInput
          label="Email"
          value={text}
          onChangeText={setText}
          mode="outlined"
          style={styles.textInput}
          left={<TextInput.Icon name="email" />}
        />

        {/* Buttons Example */}
        <View style={styles.buttonContainer}>
          <Button mode="text" onPress={() => console.log('Text pressed')}>
            Text Button
          </Button>
          <Button mode="outlined" onPress={() => console.log('Outlined pressed')}>
            Outlined
          </Button>
          <Button 
            mode="contained" 
            onPress={() => console.log('Contained pressed')}
            style={styles.button}
          >
            Contained
          </Button>
        </View>

        {/* Chips Example */}
        <View style={styles.chipContainer}>
          <Chip icon="information" onPress={() => console.log('Pressed')}>
            Example Chip
          </Chip>
          <Chip mode="outlined" selected onPress={() => console.log('Pressed')}>
            Selected Chip
          </Chip>
        </View>

        {/* Badge Example */}
        <View style={styles.badgeContainer}>
          <Avatar.Icon size={50} icon="account" />
          <Badge style={styles.badge}>3</Badge>
        </View>

        <Divider style={styles.divider} />

        <ActivityIndicator animating={true} color={theme.colors.primary} />
      </Surface>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('FAB Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  surface: {
    flex: 1,
    padding: 16,
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    marginVertical: 8,
  },
  textInput: {
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    flexWrap: 'wrap',
  },
  button: {
    marginHorizontal: 4,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  divider: {
    marginVertical: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PaperExampleScreen;
