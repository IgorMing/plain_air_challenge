import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../Button';
import {PRIMARY_COLOR, SPACING} from '../../constants';

interface TaskProps {
  title: string;
  onEdit(): void;
}

const Task = (props: TaskProps) => {
  return (
    <View style={[styles.row, styles.card]}>
      <View style={styles.row}>
        <BouncyCheckbox
          fillColor={PRIMARY_COLOR}
          onPress={(isChecked: boolean) => {
            console.log(isChecked);
          }}
        />
        <Text style={styles.cardText}>{props.title}</Text>
      </View>
      <View>
        <Button variant="secondary" title="Edit" onPress={props.onEdit} />
        <Button variant="secondary" title="Remove" />
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
