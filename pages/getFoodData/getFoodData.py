import schedule
import time
import requests
import json

def getFood():
  todayMeal = {"breakfast": "", "lunch": "", "dinner": ""}
  html = requests.get('https://meal.jinhyodev.com/경북소')
    
  for mealtime in range(3):
    arr = []
    tmp =  {}

    if mealtime == 0:
      meal = "breakfast"
      food = html.json()["breakfast"]
      time = "아침"

    elif mealtime == 1:
      meal = "lunch"
      food = html.json()["lunch"]
      time = "점심"

    else:
      meal = "dinner"
      food = html.json()["dinner"]
      time = "저녁"
        
    if food == None:
        print(f'오늘 {time}의 급식 정보가 없습니다.')
    else:
      for i in food:
        tmp = i
        tmp = tmp.replace('*', '')
        tmp = tmp.replace('s', '')
        tmp = tmp.replace('a', '')
        tmp = tmp.replace('!', '')
        arr.append(tmp)
            
    todayMeal[meal] = arr
  with open("./foodData.json", "w", encoding='utf-8') as f:
      json.dump(todayMeal, f, indent="\t", ensure_ascii = False)

schedule.every().day.at("00:00").do(getFood)

while True:
    schedule.run_pending()
    time.sleep(1)
