import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  Chip,
  Avatar,
  FAB,
  Appbar,
  List,
  Switch,
  ProgressBar,
  Snackbar,
} from 'react-native-paper';

const PaperExampleScreen = () => {
  const [text, setText] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="React Native Paper Demo" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Card Component */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome to React Native Paper</Title>
            <Paragraph>
              This is a demo showcasing various Paper components in action!
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button mode="contained">OK</Button>
          </Card.Actions>
        </Card>

        {/* Text Input */}
        <TextInput
          label="Email"
          value={text}
          onChangeText={setText}
          mode="outlined"
          style={styles.textInput}
          left={<TextInput.Icon name="email" />}
        />

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Button mode="text" onPress={onToggleSnackBar}>
            Text Button
          </Button>
          <Button mode="outlined">Outlined</Button>
          <Button mode="contained">Contained</Button>
        </View>

        {/* Chips */}
        <View style={styles.chipRow}>
          <Chip icon="information" onPress={() => console.log('Pressed')}>
            Info Chip
          </Chip>
          <Chip mode="outlined" selected>
            Selected
          </Chip>
        </View>

        {/* List Items */}
        <Card style={styles.card}>
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="Second Item"
            description="Item description"
            left={props => <Avatar.Icon {...props} icon="account" />}
            right={props => (
              <Switch
                value={switchValue}
                onValueChange={setSwitchValue}
              />
            )}
          />
        </Card>

        {/* Progress Bar */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Progress</Title>
            <ProgressBar progress={0.7} color="purple" />
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />

      {/* Snackbar */}
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    marginBottom: 16,
  },
  textInput: {
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PaperExampleScreen;
