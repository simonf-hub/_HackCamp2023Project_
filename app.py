from flask import Flask, request, render_template, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import requests
import json

app = Flask(__name__)
CORS(app)  # Apply CORS to your Flask app


@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.get_json()
    input_data = data.get('input')

    # Process the data (for demonstration, echoing it back)
    processed_data = f"Received: {input_data}"

    return jsonify({'result': processed_data})


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)