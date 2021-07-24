import requests
import json

r = requests.get(
    "https://financialmodelingprep.com/api/v3/losers?apikey=05facc2ddb663a44a2161880e837a6e0")
data = r.json()
data_json = json.dumps(data)
data_string = data_json[1:-1]
data_final = json.loads(data_string)

print(data_final)
print(type(data_final))
