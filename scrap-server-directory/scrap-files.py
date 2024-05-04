import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse


def sanitize_filename(filename):
    # Replace invalid characters with underscores
    invalid_chars = '\\/:*?"<>|'
    for char in invalid_chars:
        filename = filename.replace(char, '_')
    return filename


def download_files_in_directory(url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the directory listing page
        soup = BeautifulSoup(response.content, 'html.parser')

        # Extract all links from the page
        links = [link.get('href') for link in soup.find_all('a')]

        # Filter out links to parent directories and special files
        files = [link for link in links if not link.startswith(('../', '/'))]

        # Download each file individually
        for file in files:
            # Construct the absolute URL of the file
            file_url = urljoin(url, file)

            # Send a GET request to the file URL
            file_response = requests.get(file_url)

            # Check if the request was successful (status code 200)
            if file_response.status_code == 200:
                # Extract the filename from the URL
                filename = os.path.basename(urlparse(file_url).path)

                # Sanitize the filename
                filename = sanitize_filename(filename)

                # Save the file content to a local file
                with open(filename, 'wb') as f:
                    f.write(file_response.content)

                print(f'Downloaded {filename}')
            else:
                print(f'Failed to download {file_url}')
    else:
        print(f'Failed to fetch directory listing from {url}')


# Example usage
directory_url = 'http://swayam.nta.ac.in/resources'
download_files_in_directory(directory_url)
