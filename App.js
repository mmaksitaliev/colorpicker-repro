import { ColorPicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [color, setColor] = useState('#FF0000');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected color: {color}</Text>

      <Host matchContents>
        <ColorPicker
          selection={color}
          onSelectionChange={(value) => {
            console.log('onSelectionChange fired:', value);
            setColor(value);
          }}
        />
      </Host>

      <Text style={styles.note}>
        Bug: onSelectionChange never fires.{'\n'}
        Using onValueChanged (old prop name) works instead.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
