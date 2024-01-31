import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../Button';
import {PRIMARY_COLOR, SPACING} from '../../constants';

const Task = () => {
  return (
    <View style={[styles.row, styles.card]}>
      <View style={styles.row}>
        <BouncyCheckbox
          fillColor={PRIMARY_COLOR}
          onPress={(isChecked: boolean) => {}}
        />
        <Text style={styles.cardText}>Task 1</Text>
      </View>
      <View>
        <Button variant="secondary" text="Remove item" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: SPACING / 2,
  },
  cardText: {
    fontSize: 16,
  },
});

export default Task;
