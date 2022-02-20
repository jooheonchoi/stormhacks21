from flask import Flask, jsonify, request
from flask_cors import CORS
from google.cloud import language

app = Flask(__name__)
CORS(app)

def analyze_text_sentiment(text):
    client = language.LanguageServiceClient()
    document = language.Document(content=text, type_=language.Document.Type.PLAIN_TEXT)

    response = client.analyze_sentiment(document=document)

    sentiment = response.document_sentiment
    results = dict(
        text=text,
        score=f"{sentiment.score:.1%}",
        magnitude=f"{sentiment.magnitude:.1%}",
    )
    for k, v in results.items():
        print(f"{k:10}: {v}")
    return results


@app.route("/")
def func():
    return "hello"

@app.route("/text")
def index():
    text = request.form.get("text")
    res = analyze_text_sentiment(text)
    return jsonify({'result': res})
