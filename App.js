import React, {useRef} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const itemHeight = 50;
const list = [];
for(let i=0;i<100;i++){
  list.push({
    key: i,
    value: i
  })
}

const App = () => {
  const scrollRef = useRef(null);
  const handleScrollTo = () => {
    scrollRef.current.scrollTo({y: 500, x: 0})
    console.log('scrollRef', scrollRef.current.scrollTo)
  }
  const onScroll = (e) => {
    console.log('onScroll', JSON.stringify(e))
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        onScroll={onScroll}
        style={styles.scrollView} 
        ref={scrollRef}>
        {
          list.map(({key, value}) => (
            <View key={key} style={[styles.item, {borderColor: '#' + Math.random().toString(16).substr(2, 6).toUpperCase()}]}>
              <Text style={[styles.text]}>
                {value * itemHeight + 'px'}
              </Text>
            </View>
          ))
        }
      </ScrollView>
      <TouchableOpacity
        style={{width: 100, height: 100, position: 'absolute', left: 0, top: 0}}
        onPress={handleScrollTo}
      >
        <Text style={{fontSize: 18}}>滚动</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    height: '100vh',
    overflowY: 'hidden'
  },
  item: {
    height: itemHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid'
  },
  text: {
    fontSize: 18,
  },
});

export default App;