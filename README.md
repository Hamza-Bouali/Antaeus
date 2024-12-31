# Antaeus : Disaster Assistance Chatbot

## Overview
This repository contains the code and resources for a chatbot designed to assist users in disaster-affected areas. The chatbot provides real-time damage detection and classification by analysing satellite imagery ,support, information, and connections to emergency services, helping to ensure safety and survival during critical times.

## Features
- **Emergency Alerts:** Notifications and updates about ongoing disasters in the user’s vicinity.
- **Resource Finder:** Helps locate nearby shelters, hospitals, and relief centers.
- **Communication Assistance:** Facilitates communication with emergency contacts and services.
- **First Aid Guidance:** Provides step-by-step instructions for administering first aid.
- **Multilingual Support:** Communicates in multiple languages to reach diverse communities.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Hamza-Bouali/Antaeus.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Antaeus
   ```

we recommend to use the kaggle notebook to run the backend server

## Usage
1. open the notebook inside the project (notebook.ipynb) and wait until it reaches the last cell of code.
2. select the url and then open the file App.jsx file , search for the varibale url ,and set it to the result. 
3. inside the directory there is a folder named front , open it with the terminal and run this commands
   ```bash
   npm run dev
   ```
4. Interact with the chatbot through the command line or web interface.

## Technologies Used
### Machine Learning & Deep Learning:
**Siamese Networks**: For the damage prediction model, we use a neural network architecture inspired by Siamese networks, which compares pre- and post-disaster images to predict damage levels.
**Computer Vision**: For disaster classification (e.g., hurricanes, floods, wildfires, earthquakes) based on satellite imagery, leveraging advanced image classification models.
**PyTorch**: This framework was used used to train and deploy the machine learning models.
**XBD Dataset**: The model training was done on the XBD dataset, a benchmark dataset for disaster damage detection in satellite imagery, provided by xview2.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- Emergency responders for their valuable input on disaster management.
- Open-source contributors who inspired this project.

## Contact : 
- for more contact [reda elkate](https://github.com/redaelkate) or [Hamza Bouali](https://github.com/Hamza-Bouali).
