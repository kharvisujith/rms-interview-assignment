import React from "react";
import Canvas from "../../../uiEngine";

interface IQuizContentScreen {
  componentProperties: any;
  getComponent: any;
  uiJSON: any;
}

const QuizContentScreen = (props: IQuizContentScreen) => {
  const { componentProperties, getComponent, uiJSON } = props;
  // console.log("value of question data is", componentProperties);
  // console.log("value of uijons in queizContetnScreen is", uiJSON);
  return (
    <div className="quiz-content-scrn-wrapper">
      <Canvas
        componentProps={componentProperties}
        getComponent={getComponent}
        layoutConfig={uiJSON}
      />
    </div>
  );
};

export default QuizContentScreen;
