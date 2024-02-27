import * as React from 'react';
import Container from '@mui/material/Container';
import Accordionn from './Minor/Accordionn';
import Paper from './Minor/Paper';

const faqs = [
    {
        question: "What are the benefits of practicing Kendo?",
        answer: "Kendo offers numerous physical, mental, and spiritual benefits. Physically, it improves agility, strength, and stamina. Mentally, it enhances focus, concentration, and discipline. Spiritually, it fosters respect, humility, and self-awareness!",
        index: 0,
    },
    {
        question: "Is Kendo suitable for everyone?",
        answer: "Kendo is a highly inclusive martial art that welcomes practitioners of all ages, genders, and skill levels. Whether you're a beginner looking to improve your fitness and coordination or an experienced martial artist seeking to deepen your understanding of Japanese culture and philosophy, Kendo offers something for everyone.!",
        index: 1,
    },
    {
        question: "What is the significance of the bamboo sword (Shinai) in Kendo?",
        answer: "The bamboo sword, or Shinai, is used in Kendo practice and matches to simulate the weight and feel of a traditional Japanese sword (katana) while ensuring safety for practitioners. It allows for realistic training in striking techniques without the risk of serious injury.",
        index: 2,
    },
    {
        question: "How do you play Kendo?",
        answer: "People often refer to Kendo as a 'game', so this question aims to understand the structure and rules of Kendo matches.",
        index: 3,
    },
    {
        question: "Is Kendo safe?",
        answer: "Safety is a common concern, especially for parents and beginners. This question addresses the safety measures in place during Kendo practice and matches.",
        index: 4,
    },
]

const Faq = () => {
  return (
      <Container maxWidth="md">
          {faqs.map((x) => (
        <Accordionn data={ x } key={x.index} />
          ))}
          <Paper/>
    </Container>
  );
};

export default Faq;
