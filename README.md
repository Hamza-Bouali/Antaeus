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

**Swin Transformer**: Used for the disaster classification model, leveraging the power of Swin Transformers to classify disasters (e.g., hurricanes, floods, wildfires, earthquakes) based on satellite imagery.

**PyTorch**: This framework was used used to train and deploy the machine learning models.

**XBD Dataset**: The model training was done on the XBD dataset, a benchmark dataset for disaster damage detection in satellite imagery, provided by xview2.
### Chatbot & Conversational Interface:
**Function Calling**: Integrated with the chatbot to dynamically interact with external APIs (e.g., map API) to provide geographical insights and actionable information based on disaster data and predictions.

**Mistral NeMo Instruct 22B**: Used for training the conversational AI model, which is optimized for instruction-following tasks to handle complex queries and provide insights.

**4-bit Quantization**: For efficient deployment of the Mistral NeMo Instruct 22B model, reducing its memory footprint and enabling faster inference without compromising performance.

### Backend & APIs:
**FastAPI**: For serving the models and handling requests, ensuring fast and efficient communication between the frontend and the backend.   
**ngrok**: Used for creating secure tunnels to expose the FastAPI backend to the internet, useful for testing and development.   
**Map API Integration**: To connect the chatbot with a geospatial map, allowing users to query for geographical insights related to disasters and predictions.

### Frontend
**JavaScript**: For building the interactive, dynamic features of the frontend interface, such as handling user input and displaying data.
**React**: Used for building the user interface (UI), ensuring a smooth and responsive experience when interacting with the disaster data, predictions, and chatbot.

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
