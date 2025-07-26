teekart/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── [React Vite App]
│   └── Dockerfile
├── docker-compose.yml
├── README.md



✅ Static React Frontend
✅ Docker Compose setup
✅ Dockerized frontend
✅ Deployed to Kubernetes
✅ Ingress + Hosts setup
✅ Autoscaling (HPA)


Area	Action
🔍 Monitoring	Use Prometheus + Grafana to watch frontend metrics (already enabled for other services)
🚀 CI/CD	Add GitHub Actions to build & push your frontend image on every commit
🧪 Testing	Add basic container health checks or simple Cypress/playwright tests
🔒 Security	Scan image using Trivy / Snyk, or enforce image signatures
🧹 Cleanup	Prune unused Docker images/containers, tidy K8s YAMLs
