import os
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

url = 'https://azima.app/storage/logs/userlogs.log'
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    file_links = [link.get('href') for link in soup.find_all('a')]
    filtered_files = [
        file for file in file_links if not file.startswith('index.')]

    # Generate JSON filename based on the URL
    parsed_url = urlparse(url)
    json_filename = parsed_url.netloc + \
        parsed_url.path.replace('/', '-') + '.json'

    # Define the directory to save the JSON file
    results_directory = 'results'

    # Create the directory if it doesn't exist
    if not os.path.exists(results_directory):
        os.makedirs(results_directory)

    # Construct the full path to the JSON file
    json_filepath = os.path.join(results_directory, json_filename)

    # Write filtered files list to the JSON file
    with open(json_filepath, 'w') as f:
        json.dump(filtered_files, f)
    print('Saved filtered files list to', json_filepath)

else:
    print('Failed to fetch directory listing')
