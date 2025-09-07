import { useState } from "react";
import { forTest } from "../../testOptions/test";


export function useChangeBlocks() {
  const [index, setIndex] = useState<number>(0);
  const [userAnswere, setUserAnswere] = useState<number | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [userPoints, setPoints] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const answers = forTest.answers;
  const questions = forTest.questions;

  const currentQuestion = questions[index];
  const currentAnswers = answers.filter(e => e.questionId === currentQuestion.id);

  const lastQuestion = questions.at(-1);

  function changeBlocks(newId: number | undefined) {
    if (newId === undefined) return;
    setIndex(newId);
    setUserAnswere(null);
    setCorrect(null);
  }

  function checkAnswer(answerId: number) {
    if (answeredQuestions.includes(index)) {
      setUserAnswere(answerId);
      const clicked = currentAnswers.find(item => item.id === answerId);
      setCorrect(clicked ? clicked.isCorrect : null);
      return;
    }

    setUserAnswere(answerId);
    const clicked = currentAnswers.find(item => item.id === answerId);
    if (clicked) {
      setCorrect(clicked.isCorrect);
      if (clicked.isCorrect) {
        setPoints(prev => prev + 1);
      }

      setAnsweredQuestions(prev => [...prev, index]);
    } else {
      setCorrect(null);
    }
  }

 
  function resetTest() {
    setIndex(0);
    setUserAnswere(null);
    setCorrect(null);
    setPoints(0);
    setAnsweredQuestions([]);
  }

  return { changeBlocks, currentQuestion, currentAnswers, index, checkAnswer, userAnswere, correct, userPoints, lastQuestion, resetTest };
}
