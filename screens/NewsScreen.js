import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NewsContext } from '../contexts/NewsContext';
import NewsletterForm from '../components/NewsletterForm';

const NewsScreen = () => {
  const { news, highlightedNews, fetchNews } = useContext(NewsContext);

  useEffect(() => {
    fetchNews('categoria_desejada');
  }, []);

  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity style={styles.itemContainer}>
        {item.imageUrl && <Image style={styles.image} source={{ uri: item.imageUrl }} />}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.source}>{item.source}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </TouchableOpacity>
      {index === 2 && <NewsletterForm />}
    </>
  );
  

  const renderHighlightedNews = () => {
    if (highlightedNews) {
      return (
        <TouchableOpacity style={styles.highlightedItemContainer}>
          <Image style={styles.highlightedImage} source={{ uri: highlightedNews.imageUrl }} />
          <Text style={styles.highlightedTitle}>{highlightedNews.title}</Text>
          <Text style={styles.source}>{highlightedNews.source}</Text>
          <Text style={styles.date}>{highlightedNews.date}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.defaultAdContainer}>
          <Image style={styles.defaultAdImage} source={require('../assets/fiap_ad.png')} />
          <Text style={styles.defaultAdText}>Anúncio FIAP</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderHighlightedNews()}
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// screens/NewsScreen.js

// ... (restante do código NewsScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    itemContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    source: {
      fontSize: 14,
      color: 'gray',
    },
    date: {
      fontSize: 14,
      color: 'gray',
    },
    highlightedItemContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    highlightedImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
    },
    highlightedTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    defaultAdContainer: {
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    defaultAdImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
    },
    defaultAdText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'gray',
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
  });
  
  export default NewsScreen;
  