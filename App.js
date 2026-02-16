import { ColorPicker, Host } from '@expo/ui/swift-ui';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [color, setColor] = useState('#FF0000');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ColorPicker onSelectionChange Bug</Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Current state:</Text>
        <View style={styles.stateRow}>
          <View style={[styles.swatch, { backgroundColor: color }]} />
          <View>
            <Text style={styles.value}>{color}</Text>

          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Pick a new color:</Text>
        <View style={styles.pickerRow}>
          <Host matchContents>
            <ColorPicker
              selection={color}
              onSelectionChange={(value) => {
                console.log('onSelectionChange fired:', value);
                setColor(value);
              }}
            />
          </Host>
        </View>
      </View>

      <View style={styles.expected}>
        <Text style={styles.expectedTitle}>Expected:</Text>
        <Text style={styles.expectedText}>
          Swatch color and hex value should update when picking a new color.
        </Text>
        <Text style={styles.expectedTitle}>Actual:</Text>
        <Text style={styles.expectedText}>
          Nothing updates. onSelectionChange callback never fires.
        </Text>
        <Text style={styles.expectedTitle}>Workaround:</Text>
        <Text style={styles.expectedText}>
          Using the old prop name "onValueChanged" works correctly.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 80,
    gap: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    gap: 10,
  },
  pickerRow: {
    alignItems: 'flex-start',
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555',
  },
  stateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  swatch: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Courier',
  },
  expected: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  expectedTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
  expectedText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});
