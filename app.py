from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process_data', methods=['POST'])
def process_data():
    data = request.get_json()
    input_data = data.get('input')

    # Process the data (for demonstration, echoing it back)
    processed_data = f"Received: {input_data}"

    return jsonify({'result': processed_data})

if __name__ == '__main__':
    app.run(debug=True)
