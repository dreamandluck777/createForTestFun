import { forNumbers} from "../testOptions/test";
import { useChangeBlocks } from "./customHoocs/forTest";
import { renderArr } from "./functions/renderArray";
import '../css/styleForTest.css';


export function RenderQuestionsNumber({
    activeIndex,
    func
}: {
    activeIndex: number;
    func: (index: number | undefined) => void;
}) {
    return (
        <div className="divWrapperQuestions">
            {renderArr(forNumbers, null, (iteam, index) => (
                <button
                    key={index}
                    onClick={() => func(index)}
                    className={index === activeIndex ? "buttonActive" : ""}
                >
                    {iteam.number}
                </button>
            ))}
        </div>
    );
}

export function QuestionsBlocks() {
  const {
    changeBlocks,
    currentQuestion,
    currentAnswers,
    index,
    checkAnswer,
    userAnswere,
    correct,
    userPoints,
    lastQuestion,
    resetTest
  } = useChangeBlocks();

  const textForTitleP = 'Test: Okeanlar və Dənizlər';
  const textForPoints = `Bal: ${userPoints}`;

  const isLastQuestion = currentQuestion.id === lastQuestion?.id;

  return (
    <div className="mainContDiv">
      <div className="divTtitleCont">
        <p>{textForTitleP}</p>
        <p>{`${textForPoints} /10`}</p>
      </div>
      <div className="divWrapperContent">
        <RenderQuestionsNumber 
          func={changeBlocks} 
          activeIndex={index} 
        />
        <p>{currentQuestion.question}</p>
        <div className="answersWrapper">
          {renderArr(currentAnswers, null, (iteam) => (
            <p
              key={iteam.id}
              onClick={() => checkAnswer(iteam.id)}
              className={userAnswere === iteam.id ? (correct ? 'correct' : 'incorrect') : ''}
            >
              {iteam.answer}
            </p>
          ))}
        </div>
      </div>

      {isLastQuestion && (
        <>
          <p>Test bitdi! Sizin balınız: {userPoints}</p>
          <button onClick={resetTest} className="restartButton">Testi yenidən başlat</button>
        </>
      )}
    </div>
  );
}