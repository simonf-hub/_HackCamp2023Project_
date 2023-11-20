from urllib.parse import parse_qs, urlparse
import requests
import json;
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Apply CORS to your Flask app


@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.get_json()
    input_data = data.get('input')
    print('THIS IS THE INPUT')
    print(input_data)

    url = "https://api-v2.agenthub.dev/remote_start_pipeline"

    headers = { 
      "Content-Type": "application/json",
      "x-auth-key": "TRxEJum1hvhbfD0HITUXhdcSt8G3"
    }

    data = { 
      "user_id": "TRxEJum1hvhbfD0HITUXhdcSt8G3", 
      "saved_item_id": "7HqpidMvNXwbXWfaTaS5FD",
      "api_key": "89c3b2f1161142f39d94da047af826b7",
      "pipeline_inputs": [
          {"input_name": "ingredients", "value": input_data}
      ]
    }

    print(data)

    response = requests.post(url, headers=headers, json=data)

    parsed_url = urlparse(response.json())
    query_params = parse_qs(parsed_url.query)
    run_id = query_params.get('run_id')[0] if 'run_id' in query_params else None
    
    print(run_id)
        
    return jsonify({'result': run_id})

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

