import React from 'react';
import Container from '@mui/material/Container';
import ImgMediaCard from './Minor/Card';
import kenjutsu from '../Assets/kenju.jpg'
import SimplePaper from './Minor/Paper';

const homepageData = [
  {
    header: "KENDO 剣道  – THE WAY OF THE SWORD:",
    text: `Concept of Kendo:\nKendo is the path toward the formation of human character (that is gained) through practicing the true principles of the Japanese sword*.\n\n剣道の理念:剣道は剣の理法の修練による人間形成の道である。\n\nNotes for *: 'the true principles of sword' is a translation of '剣の理法 (Ken no rihou)'. It can be translated into 'the nature of sword'.\nWhat it means here is both mental and physical forces and techniques regarded as causing and regulating phenomena in offence and defence by Japanese sword.`,
    imageLink: "https://c4.wallpaperflare.com/wallpaper/392/72/872/sport-form-kendo-wallpaper-preview.jpg",
    index: 0
  },
  {
    header: "ORIGIN OF KENDO:",
    text: `Kendo started as a martial art(剣術: Ken- Jyutsu). Ken - kyutsu focused on the principle of "to kill or be killed" with techniques to achieve it. Various ken-jyutsu schools have emerged since the 15th century from warrior Samurai. These schools were influenced by Zen historically from the Kamakura period in the 12th century. Zen played a very important role when this martial art turned into the art of swordsmanship in the early to mid 17th century.`,
    imageLink: kenjutsu,
    index: 1
}

]

const HomePage = () => {
  return (
    <Container maxWidth="md">
      {homepageData.map((x) => (
        <ImgMediaCard data={ x } key={x.index} />
      ))}
      
    </Container>
  );
};

export default HomePage;

/*
KENDO 剣道  – THE WAY OF THE SWORD

All Japan Kendo Federation

Translated by Yasuyuki Hiyama Sensei (Kyoshi 7th Dan, Oxford Kendo Head Sensei)

Concept of Kendo:
Kendo is the path toward the formation of human character (that is gained) through practicing the true principles of the Japanese sword*.

剣道の理念:剣道は剣の理法の修練による人間形成の道である。

Notes for *: 'the true principles of sword' is a translation of '剣の理法 (Ken no rihou)'. It can be translated into 'the nature of sword'. 
What it means here is both mental and physical forces and techniques regarded as causing and regulating phenomena in offence and defence by Japanese sword.
*/