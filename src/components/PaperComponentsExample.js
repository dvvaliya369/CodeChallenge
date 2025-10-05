import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  Chip,
  FAB,
  Appbar,
  Badge,
  Avatar,
  List,
  Divider,
} from 'react-native-paper';

// Example component showcasing React Native Paper components
const PaperComponentsExample = () => {
  const [text, setText] = React.useState('');
  const [selectedChip, setSelectedChip] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => console.log('Back pressed')} />
        <Appbar.Content title="Paper Components" />
        <Appbar.Action icon="magnify" onPress={() => console.log('Search pressed')} />
      </Appbar.Header>

      <View style={styles.content}>
        {/* Text Input */}
        <TextInput
          label="Enter some text"
          value={text}
          onChangeText={setText}
          mode="outlined"
          style={styles.textInput}
        />

        {/* Card */}
        <Card style={styles.card}>
          <Card.Cover 
            source={{ uri: 'https://picsum.photos/700' }}
            style={styles.cardCover}
          />
          <Card.Content>
            <Title>Sample Card Title</Title>
            <Paragraph>
              This is a sample card component from React Native Paper.
              It demonstrates the theming and styling capabilities.
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => console.log('Cancel pressed')}>Cancel</Button>
            <Button mode="contained" onPress={() => console.log('OK pressed')}>
              OK
            </Button>
          </Card.Actions>
        </Card>

        {/* Chips */}
        <View style={styles.chipContainer}>
          <Chip
            selected={selectedChip}
            onPress={() => setSelectedChip(!selectedChip)}
            style={styles.chip}
          >
            Recipe
          </Chip>
          <Chip style={styles.chip}>Cooking</Chip>
          <Chip 
            mode="outlined"
            onClose={() => console.log('Chip closed')}
            style={styles.chip}
          >
            Food
          </Chip>
        </View>

        {/* List */}
        <Card style={styles.listCard}>
          <List.Section>
            <List.Subheader>Sample List Items</List.Subheader>
            <List.Item
              title="Home"
              description="Navigate to home screen"
              left={props => <List.Icon {...props} icon="home" />}
              right={props => <Badge {...props}>3</Badge>}
            />
            <Divider />
            <List.Item
              title="Profile"
              description="View your profile"
              left={props => <Avatar.Icon {...props} size={40} icon="account" />}
            />
          </List.Section>
        </Card>

        {/* Floating Action Button */}
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => console.log('FAB pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardCover: {
    height: 150,
  },
  chipContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
  },
  listCard: {
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PaperComponentsExample;
