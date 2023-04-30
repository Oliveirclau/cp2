import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import NewsletterForm from '../components/NewsletterForm';

const FullNewsScreen = ({ route }) => {
  const { title, source, date, imageUrl, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>{source}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.content}>{content}</Text>
      <NewsletterForm />
      <View style={styles.defaultAdContainer}>
        <Image style={styles.defaultAdImage} source={require('../assets/fiap_ad.png')} />
        <Text style={styles.defaultAdText}>Anúncio FIAP</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
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
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
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
});

export default FullNewsScreen;
