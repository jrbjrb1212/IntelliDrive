import requests
import json


def main():
    # URL of the API endpoint
    url = 'http://localhost:8080/api/ATP/PlanRide'

    # Making the POST request
    response = requests.get(url)

    # Checking the response status
    if response.status_code == 200:
        # Successful request
        print("GET request was successful!")
        try:
            data = response.json()
            print("Response:", data)
        except json.decoder.JSONDecodeError:
            print("Response content:", response.text)  # Print the raw content
    else:
        # Request failed
        print("GET request failed with status code:", response.status_code)


if __name__ == "__main__":
    main()