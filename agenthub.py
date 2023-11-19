import requests

url = "https://api-v2.agenthub.dev/remote_start_pipeline"

headers = { 
  "Content-Type": "application/json",
  "x-auth-key": "TRxEJum1hvhbfD0HITUXhdcSt8G3"
}

data = { 
  "user_id": "TRxEJum1hvhbfD0HITUXhdcSt8G3", 
  "saved_item_id": "7HqpidMvNXwbXWfaTaS5FD",
  "api_key": "dde5fc919d8e49428732780324e759b1",
}

response = requests.post(url, headers=headers, json=data)