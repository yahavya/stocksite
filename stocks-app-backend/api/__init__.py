from flask import Flask
import requests
import json


app = Flask(__name__)


@app.route('/')
def hello():
    return "<p>Welcome to the worst stocks tracker.</p>"


@app.route('/stocks')
def get_worst():
    r = requests.get(
        "https://financialmodelingprep.com/api/v3/losers?apikey=05facc2ddb663a44a2161880e837a6e0")
    data = r.json()
    data_json = json.dumps(data)

    return data_json
