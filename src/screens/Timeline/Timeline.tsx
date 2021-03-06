import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';

import SafeWithHeader from '../../components/Pages/SafeWithHeader';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  submitButton: {
    marginTop: 24,
  },
});

type TimelineProps = NavigationInjectedProps;

class Timeline extends React.Component<TimelineProps> {
  private static navigationOptions = {
    title: 'Timeline',
  };

  public render() {
    const { navigation } = this.props;

    return (
      <SafeWithHeader style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Timeline!</Text>
          <Button block style={styles.submitButton}>
            <Text>Log out</Text>
          </Button>
        </View>
      </SafeWithHeader>
    );
  }
}

export default Timeline;
