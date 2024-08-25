import json
def check_function(e, ans):
  # Здесь необходимо вставить верные ответы
  answers = [
    {
      'id': "footer",
      'area': 'bottom-block'
    },
    {
      'id': "header",
      'area': 'top-block'
    },
  ]

  # Код проверки
  response = json.loads(ans)
  state = json.loads(response["state"])

  correctAnswersCount = 0
  for answerIndex in range(len(answers)):
      answerArea = answers[answerIndex]['area']
      answerId = answers[answerIndex]['id']
      if state[answerArea] and state[answerArea]['id'] == answerId:
         correctAnswersCount += 1

  return {'input_list':[
     {
        'ok': True if correctAnswersCount == len(answers) else 'partial' if correctAnswersCount != 0 else False,
        'grade_decimal': correctAnswersCount / len(answers)
     }
  ]}