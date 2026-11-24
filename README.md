# ReflectoFlow

Web system for **Reflecto Prestige**, a window film installer in Montréal and the South Shore.
Clients request and approve quotes online, Subcontractors record site evaluations, and the Owner schedules installations.

Built by **Mylvy Tech** — 420-N53 Final Project 1, Champlain College Saint-Lambert (Fall 2026).

## Stack

| Tier | Technology |
|---|---|
| Front end | Vue 3, TypeScript, Vite, Pinia, Vue Router, Vue I18n |
| Back end | Java 21, Spring Boot 3, Spring Data JPA, Spring Security (Clerk JWT) |
| Database | PostgreSQL 16, Flyway migrations |
| Services | Clerk (sign-in), Resend (email) |
| DevOps | Docker, Docker Compose, GitHub Actions |

## Repository structure

```
frontend/   Vue 3 app (views, components, stores, services, router, i18n)
backend/    Spring Boot API (controller → service → repository)
docs/       diagrams and System Document
.github/    CI/CD workflows and pull request template
```

## Run locally

1. Copy `.env.example` to `.env` and fill in the values (never commit `.env`).
2. Start the database:
   ```bash
   docker compose up -d
   ```
3. Front end and back end start instructions will be added with SET-02 and SET-03.

| Service | Port |
|---|---|
| PostgreSQL | 5432 |
| API | 8080 |
| Front end | 5173 |

## How we work

- `main` is protected: every change goes through a pull request with 1 approval and passing checks.
- One branch per Jira story: `feature/RFS-24-quote-request`, `fix/RFS-41-token-expiry`.
- Commit messages start with the story key: `RFS-24 add quote request form`.

## Team — Mylvy Tech

Yacoub Bakayoko · Zié Abdoul Malick Konate · Jesse John Dizon · Yanis Achamou · Loukmane Bessam
