/**
 * 示例文件
 */
import React, {Component} from 'react';
import { StyleSheet,  View} from 'react-native';
import AssetsLoader from './index';
// hook 执行
AssetsLoader.initAssetsLoader();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
