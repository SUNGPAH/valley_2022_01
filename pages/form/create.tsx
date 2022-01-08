import { useState } from 'react';
import {QuestionInterface} from '../../src/interface/question';

// localhost:3000/form/create 

export default function Create() {
  const [btnState, setBtnState] = useState(false);
  const [title, setTitle] = useState<string>("");

  const toggle = (event) => {
    console.log(event);
    // setBtnState(prev => !prev)
    setBtnState(!btnState)
  }
  /*
  0. Data
  1. updating, modfying, creating, deleting, read functions (CRUD)
  2. view
  3. view - functions.
  the end..
  
  homework
  - npm => yarn.
  - how to install npm, how to install yarn. 
  - nextjs. (install target!!)

  - CRUD 
    for questions, and options.
  - understanding about components.
  - {} > destructurization
  - uuid
    - || - 
    - || - 
  
  - React 공식문서.. || firebase document..(yes) - except redux.

  - GIT (how to use Git) 
    - signup.
    - youtube..
  
  - CSS : wish website.. 
  */


  const [questions, setQuestions] = useState<Array<QuestionInterface>>([
    {
      qType: "radio",
      title: "sample title",
      desc: "sample description",
      options: [
        {
          title: "[option] sample title",
          desc: "[option] sample desc"
        },
        {
          title: "[option2]",
          desc: "[option2]"
        }
      ]
    },
    {
      qType: "checkbox",
      title: "sample title",
      desc: "sample description",
      options: [
        {
          title: "[option] sample title",
          desc: "[option] sample desc"
        },
        {
          title: "[option2]",
          desc: "[option2]"
        }
      ]
    },
    {
      qType: "text",
      title: "sample title",
      desc: "sample description",
      options: []
    }
  ])

  const updateQuesetionTitle = (index, text) => {
    // alert(index);
    console.log(index);
    console.log(text);

    const cp = [...questions]
    cp[index].title = text
    setQuestions(cp)

  }

  const addOptionToQuestion = (index) => {
    const cp = [...questions]
    cp[index].options.push({ title: "default" })
    setQuestions(cp);
  }

  const updateQuestionType = (index, qType) => {
    const cp = [...questions]
    cp[index].qType = qType
    setQuestions(cp);
  }

  return (
    <div>
      - event firing..
      <textarea value={title} onChange={e => setTitle(e.target.value)} />
      <br/><br/>
      {questions.map((question, index) => {
        return <Question key={question.uuid} question={question}
          index={index}
          updateQuesetionTitle={updateQuesetionTitle}
          addOptionToQuestion={addOptionToQuestion}
          updateQuestionType={updateQuestionType}
        />
      })
      }
    </div>
  )
}

const Question = ({ question, index, updateQuesetionTitle, addOptionToQuestion, updateQuestionType }) => {
  return <>
    question title:  {index}
    <textarea value={question.title} onChange={e => updateQuesetionTitle(index, e.target.value)} />
    <br />

    <select value={question.qType} onChange={e => updateQuestionType(index, e.target.value)}>
      <option value="checkbox">checkbox</option>
      <option value="radio">radio</option>
      <option value="text">text</option>
    </select>

    {
      (question.qType === "radio" || question.qType === "checkbox") &&
      <>
        <span>options</span>
        <div style={{ paddingLeft: 20, }}>
          {
            question.options.map((option, index) => {
              return <div key={index}>
                option title: {option.title}
              </div>
            })
          }
          <button onClick={e => addOptionToQuestion(index)} >add++</button>
        </div>
      </>
    }
  </>

}
