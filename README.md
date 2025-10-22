# Women-Safety-Index👩‍🎓

🟣Overview

The Women Safety Index API is a robust and scalable backend solution designed to provide a comprehensive safety index for every Indian state, leveraging the latest crime data from the National Crime Records Bureau (NCRB) 2022. This API provides a state-wise safety ranking, enabling users to quickly identify areas of high, moderate, or low harassment rates. The API returns detailed crime statistics, recent incidents, and trends for each state, facilitating informed decision-making and promoting women's safety.

🔐Features

- State-wise Safety Index: A comprehensive safety index for every Indian state, categorized into high, moderate, or low harassment rates.
- Safety Status Indicators: Each state is assigned a safety status indicator (high, moderate, or low) based on the NCRB 2022 data.
- Detailed Crime Statistics: The API returns detailed crime statistics, recent incidents, and trends for each state.
- RESTful API: A RESTful API for easy integration with frontend/UI applications.
- CORS Enabled: Cross-origin resource sharing (CORS) is enabled for secure and flexible integration.

💡Tech Stack

- Node.js
- Express
- MongoDB
- CORS
- NCRB 2022 Data

📃Endpoints

- GET /api/states: Returns a list of all states with their corresponding safety index and status.
- GET /api/states/:stateId: Returns detailed crime statistics, recent incidents, and trends for the selected state.

