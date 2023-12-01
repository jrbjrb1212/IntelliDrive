import requests
import json

def main():
    # URL of the API endpoint
    url = 'http://localhost:8080/api/ATP/ReserveRide'

    # Data to be sent as part of the POST request (if needed)
    payload = None

    with open('../../File_Storage/Reservation_Forms/test.json', 'r') as file:
        payload = json.load(file)

    print(payload)

    # Headers if required (content-type etc.)
    headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_TOKEN'}

    # Making the POST request
    response = requests.post(url, json=payload, headers=headers)

    # Checking the response status
    if response.status_code == 200:
        # Successful request
        print("POST request was successful!")
        try:
            data = response.json()
            print("Response:", data)
        except json.decoder.JSONDecodeError:
            print("Response content:", response.text)  # Print the raw content
    else:
        # Request failed
        print("POST request failed with status code:", response.status_code)


if __name__ == "__main__":
    main()