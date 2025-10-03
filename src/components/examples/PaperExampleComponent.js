import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  Button, 
  Card, 
  Title, 
  Paragraph, 
  FAB, 
  Chip,
  Avatar,
  useTheme 
} from 'react-native-paper';

const PaperExampleComponent = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title 
          title="React Native Paper" 
          subtitle="Material Design Components"
          left={(props) => <Avatar.Icon {...props} icon="check" />}
        />
        <Card.Content>
          <Title>Setup Complete!</Title>
          <Paragraph>
            React Native Paper has been successfully configured with custom theming.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log('Button pressed!')}>
            Primary Button
          </Button>
          <Button mode="outlined" onPress={() => console.log('Outlined pressed!')}>
            Outlined
          </Button>
        </Card.Actions>
      </Card>

      <View style={styles.chipContainer}>
        <Chip icon="information" onPress={() => console.log('Chip pressed!')}>
          Example Chip
        </Chip>
        <Chip mode="outlined" selected onPress={() => console.log('Selected chip!')}>
          Selected
        </Chip>
      </View>

      <FAB
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        icon="plus"
        onPress={() => console.log('FAB pressed!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default PaperExampleComponent;
