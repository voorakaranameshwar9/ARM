# Association-rule-mining
#  Grocery Association Rule Mining Web Application

A full-stack data mining application to discover purchasing patterns in grocery transaction datasets using **Apriori**, **FP-Growth**, and **ECLAT** algorithms.

---

##  Features

- **Upload Datasets:** Easily upload CSV transaction datasets.
- **Run Algorithms:** Execute Apriori, FP-Growth, and ECLAT with custom Minimum Support and Minimum Confidence values.
- **View Association Rules:** See generated rules (e.g., `Milk, Bread -> Butter`) with Support, Confidence, and Lift metrics.
- **Performance Comparison:** Compare execution time (ms) and memory usage (MB) across algorithms.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, Multer
- **API Endpoints:**
  - `POST /api/dataset/upload` - Upload dataset file
  - `POST /api/mining` - Run mining algorithms
  - `GET /api/mining/rules` - Get generated rules
  - `GET /api/mining/comparison` - Get algorithm performance metrics

---


