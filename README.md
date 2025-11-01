# Mini ChatGPT

A mini ChatGPT-like application with conversation management, message persistence, and LLM integration.

## Prerequisites

- Docker and Docker Compose installed
- Ports 3000 (frontend), 3001 (backend), 5432 (PostgreSQL), 8080 (mock LLM), and 11434 (Ollama) available

## Quick Start

1. **Start all services:**
   ```bash
   docker compose up -d
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Health check: http://localhost:3001/healthz

3. **Stop all services:**
   ```bash
   docker compose down
   ```

## Services

- **Frontend** - React application (port 3000)
- **Backend** - Express API server (port 3001)
- **Database** - PostgreSQL (port 5432)
- **Mock LLM** - Mock language model for testing (port 8080)
- **Ollama** - Local LLM service (port 11434, optional)

## LLM Configuration

By default, the application uses the **Mock LLM** service. To use Ollama instead:

1. Edit `docker-compose.yml`
2. Comment out the Mock LLM dependency in the backend service
3. Uncomment the Ollama configuration environment variables
4. Uncomment the `ollama-init` dependency

## Troubleshooting

- **View logs:** `docker compose logs -f [service-name]`
- **Rebuild containers:** `docker compose build --no-cache`
- **Reset database:** `docker compose down -v` (removes volumes)

