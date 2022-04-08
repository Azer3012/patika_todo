import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import styles from './Styles'
const Header = ({count}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Yapilacaklar</Text>
      <Text style={styles.title}>{count}</Text>
    </View>
  );
};

export default Header;
