import os
import logging

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Configure logging to ignore warnings and logs
logging.basicConfig(level=logging.ERROR)


def change_colors():
    # Set up the WebDriver
    options = Options()
    options.add_argument('--headless')  # Run in headless mode
    options.add_argument('--log-level=3')  # Set log level to ignore warnings and logs
    driver = webdriver.Chrome('C:\\Users\\brigh\\Downloads\\chromedriver.exe', options=options)

    # Open the Coolors website
    driver.get('https://coolors.co/d5dfe5-c9b1bd-b49594')

    # Press the space bar
    driver.find_element('tag name', 'body').send_keys(Keys.SPACE)

    # Get the new URL
    new_url = driver.current_url

    # Print the new URL
    color_string = new_url.split("/")[-1]  # Get the part after the last slash
    color_list = color_string.split("-")  # Split the colors by the dash

    # Convert the colors to the desired format
    colors = ["#" + color for color in color_list]

    new_primary_color = colors[0]
    new_secondary_color = colors[1]
    new_accent_color = colors[2]

    print(colors)

    # Close the WebDriver
    driver.quit()

    current_dir = os.getcwd()
    target_file = os.path.abspath(os.path.join(current_dir, '..', 'src/index.css'))

    with open(target_file, 'r') as file:
        file_content = file.read()

    # Update --primary-color
    start_index = file_content.find('--primary-color:') + len('--primary-color:')
    end_index = file_content.find(';', start_index)
    modified_content = file_content[:start_index] + new_primary_color + file_content[end_index:]

    # Update --secondary-color
    start_index = modified_content.find('--secondary-color:') + len('--secondary-color:')
    end_index = modified_content.find(';', start_index)
    modified_content = modified_content[:start_index] + new_secondary_color + modified_content[end_index:]

    # Update --accent-color
    start_index = modified_content.find('--accent-color:') + len('--accent-color:')
    end_index = modified_content.find(';', start_index)
    modified_content = modified_content[:start_index] + new_accent_color + modified_content[end_index:]

    with open(target_file, 'w') as file:
        file.write(modified_content)

while True:
    change_colors()
