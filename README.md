# Expense Recorder App with CI/CD + AKS + ACR + Trivy + Blue-Green Deployment

A cloud-native Expense Recorder Web Application deployed on Azure Kubernetes Service (AKS) using GitHub Actions CI/CD, Docker, ACR, and Trivy vulnerability scanning.

# Project Overview

This project tracks daily expenses using a frontend UI and a backend REST API.
It demonstrates a DevOps production-like workflow with:

Docker containerization
Secure Image Scanning (Trivy)
Continuous Integration & Deployment (GitHub Actions)
Image Registry (Azure Container Registry)
Zero-downtime Blue-Green deployment on AKS

📁 Folder Structure
📦 expense-recorder-aks/
 ┣ 📂 frontend/
 ┣ 📂 backend/
 ┣ 📂 k8s/
 ┣ 📂 .github/workflows/
 ┗ 📄 README.md

 🔄 CI/CD Workflow
✔ On Every Push to dev-* Branch:

Build Docker Image
Scan Image using Trivy
Push Secure Image to ACR

✔ On Merge to main Branch:

Deploy to AKS with Blue-Green
Rollback if failure (no downtime)

<img width="1920" height="1080" alt="Screenshot (105)" src="https://github.com/user-attachments/assets/9466dfdc-4452-49e5-9d90-aaff3e3a7129" />
