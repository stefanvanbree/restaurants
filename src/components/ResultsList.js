import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from "./ResultsDetail";


const ResultsList = ({title, results, navigation}) => {
  return (
      <View style={styles.containerStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={results}
              keyExtractor={(result) => result.id}
              renderItem={({item}) => {
                  return (
                      <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', { id: item.id})}>
                          <ResultsDetail result={item}/>
                      </TouchableOpacity>
                  )
              }}
          />
      </View>
  );
}

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom:10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);