import { Box, Button } from "@mui/material";
import { useState } from "react";
import EndTestDialog from "./EndTestDialog";
import { jsQuestions } from "../../utils/quiz/utils/questions";
import CheckboxComponent from "./CheckboxComponent";
import CodingComponent from "./CodingComponent";
import RadioComponent from "./RadioComponent";

const TotalNumberOfQuestion = 5;

const SingleQuestion = (props: any) => {
  const { openDialog, handleClose, setOpenDialog } = props;
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const moveToNextQuestion = () => {
    console.log("next question");
    setCurrentQuestion((prev) => prev + 1);
    // if (currentQuestion < TotalNumberOfQuestion && currentQuestion > 1) {
    //   console.log("inside if in next");
    //   setCurrentQuestion((prev) => prev + 1);
    // }
  };
  const moveToPreviousQuestion = () => {
    console.log("previous question");
    setCurrentQuestion((prev) => prev - 1);
    // if (currentQuestion > 1) {
    //   setCurrentQuestion((prev) => prev - 1);
    // }
  };
  return (
    <>
      <h1>single question</h1>
      <Box>
        {jsQuestions.map((question: any, index: any) => {
          if (index + 1 === currentQuestion) {
            switch (question.selectionType) {
              case "radio":
                return (
                  <RadioComponent
                    key={index}
                    question={{
                      questionNumber: index + 1,
                      questionText: question,
                    }}
                    //  handleAnswerChange={handleRadioAnswerChange}
                  />
                );
              case "checkbox":
                return (
                  <CheckboxComponent
                    key={index}
                    question={{
                      questionNumber: index + 1,
                      questionText: question,
                    }}
                    //  handleCheckboxAnswerChange={handleCheckboxAnswerChange}
                  />
                );
              case "coding":
                return <CodingComponent key={index} question={question} />;
              default:
                return null;
            }
          }
        })}
      </Box>
      <Box>
        {currentQuestion <= TotalNumberOfQuestion && currentQuestion > 1 && (
          <Button variant="outlined" onClick={moveToPreviousQuestion}>
            Previous
          </Button>
        )}
        {currentQuestion < TotalNumberOfQuestion && (
          <Button variant="contained" onClick={moveToNextQuestion}>
            Next
          </Button>
        )}
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          color="error"
          variant="contained"
          onClick={() => setOpenDialog(true)}
        >
          Submit Test
        </Button>
      </Box>
      <EndTestDialog
        openDialog={openDialog}
        handleClose={handleClose}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
};
export default SingleQuestion;
