import { jsQuestions } from "../../utils/quiz/utils/questions";
import CheckboxComponent from "./CheckboxComponent";
import RadioComponent from "./RadioComponent";
import CodingComponent from "./CodingComponent";
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import EndTestDialog from "./EndTestDialog";

const AllQuestions = (props: any) => {
  const { openDialog, handleClose, setOpenDialog } = props;
  const [answers, setAnswers] = useState<any>([]);
  // const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleRadioAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    const selectedOption = (event.target as HTMLInputElement).value;
    const existingId = answers.find((e: any) => e.id === id);
    if (existingId) {
      existingId.choosenAnswer = selectedOption;
    } else {
      setAnswers((prev: any) => [
        ...prev,
        { id: id, choosenAnswer: selectedOption },
      ]);
    }
  };

  const handleCheckboxAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: any
  ) => {
    console.log(event.target.name, event.target.checked, id);
    const existingId = answers.find((e: any) => e.id === id);
    console.log("exisidis", existingId);
    if (existingId) {
      console.log("inded if existingID");
      const valExist = existingId.choosenAnswer.find(
        (e: any) => e === event.target.name
      );
      console.log("value of valExist is", valExist);

      if (valExist && !event.target.checked) {
        console.log("inded valExist and !event.target.checked");
        var index = existingId.choosenAnswer.indexOf(event.target.name);
        if (index !== -1) {
          existingId.choosenAnswer.splice(index, 1);
        }
      } else {
        console.log("in else part of valexist false");
        existingId.choosenAnswer.push(event.target.name);
      }
    } else {
      console.log("inside main else part");
      setAnswers((prev: any) => [
        ...prev,
        { id: id, choosenAnswer: [event.target.name] },
      ]);
    }
  };

  // const handleClose = () => {
  //   setOpenDialog(false);
  // };

  const handleTestSubmit = () => {
    setOpenDialog(true);
    console.log("The submited answer set is", answers);
    //setConfirmSubmit(true);
  };
  // const endTest = () => {
  //   setOpenDialog(false);
  //   console.log("test ended");
  //   console.log("the final answer set is", answers);
  // };

  console.log("value of answers is", answers);

  return (
    <>
      <h1>keek</h1>
      {jsQuestions.map((question, index) => {
        switch (question.selectionType) {
          case "radio":
            return (
              <RadioComponent
                key={index}
                question={{ questionNumber: index + 1, questionText: question }}
                handleAnswerChange={handleRadioAnswerChange}
              />
            );
          case "checkbox":
            return (
              <CheckboxComponent
                key={index}
                question={{ questionNumber: index + 1, questionText: question }}
                handleCheckboxAnswerChange={handleCheckboxAnswerChange}
              />
            );
          case "coding":
            return <CodingComponent key={index} question={question} />;
          default:
            return null;
        }
      })}
      <Box>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Submit
        </Button>
      </Box>
      <EndTestDialog
        openDialog={openDialog}
        handleClose={handleClose}
        setOpenDialog={setOpenDialog}
      />
      {/* <Box>
        <Dialog
          open={openDialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do want to End the Test? "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your latest answers will be submitted if you end the test. Once
              you submit your test will be completed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="contained">
              Cancel
            </Button>
            <Button
              onClick={endTest}
              autoFocus
              variant="contained"
              color="error"
            >
              submit and End Test
            </Button>
          </DialogActions>
        </Dialog>
      </Box> */}
    </>
  );
};

export default AllQuestions;
