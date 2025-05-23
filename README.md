# MELD UI

🌐 Frontend for the MELD platform – used to upload animal videos and visualize ML-powered landmark detection results.

This is a lightweight, static single-page app designed to interact with [MELD Core](https://gitlab.com/your-org/meld-core). It handles:
- User authentication via Cognito
- Video upload through presigned S3 URLs
- Inference status display
- Landmark result visualization

## 🔧 Tech Stack
- Built with [Vite](https://vitejs.dev/) + React <!-- Alina - change this if needed -->
- Easily swappable to Vue or other SPA frameworks
- Deployable via S3 + CloudFront

This frontend is designed to be a lightweight, static web interface. It interacts with the MELD Core API to:
- Authenticate users via Cognito
- Generate upload links to S3
- Display upload progress and status
- Visualize detection results

This repo is framework-flexible but assumes a modern frontend stack (e.g., React + Vite) unless otherwise customized.
    ⚠️ Note: This project is currently under active development and may change rapidly.

## 🔧 Local Development

```bash
npm install
npm run dev
```
App runs on [http://localhost:5173](http://localhost:5173) by default (via Vite).

## ⚙️ Environment Variables

Use a `.env` file to configure the base API endpoint:
```bash
VITE_API_URL=https://api.meld.yourdomain.com
```
    ⚠️ Note: This is a Vite-specific convention. For other frameworks, check their documentation for environment variable handling.

## 🚀 CI/CD Pipeline
Static build and deployment to S3 + CloudFront is handled automatically via GitLab CI/CD.
No manual upload is required.

Environment-specific variables (e.g., AWS credentials) are managed through GitLab's CI/CD settings.

## 🙋 Maintainers
<!-- Add later -->

This project is maintained by the MELD subgroup. For any issues or feature requests, please open an issue in this repository.
For any questions or concerns, please reach out to the maintainers.
