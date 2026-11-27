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

Definition of Ready (DoR)

A ticket can go into a sprint only when all of these are true.

User story
The title starts with the story number and says what the actor does (for example, "US-10: Visitor submits a quote request without an account").
The story is written as "As a [Visitor / Client / Owner / Subcontractor], I want … so that …", using the names from our ubiquitous language.
The acceptance criteria are numbered and written as Given / When / Then with "I".
The story is linked to its epic.
It has a priority and a rank in the product backlog.
It has an original estimate in hours, and the story fits in one sprint. A bigger story is split by behaviour, never by layer.
Its dependencies are linked in Jira ("blocks" / "is blocked by"), and every blocker is done or planned to finish before this story starts.
It is feasible: we have the time, the skills and the money it needs (including any third-party service).
Every team member understands the story and its acceptance criteria and agrees with the estimate.
Bug
The title starts with "Bug:" and the ticket type is Bug.
A description of the problem: what happened and what should have happened.
Steps to reproduce.
The environment: deployed site or local development, the browser, and the portal or page (Visitor, Client, Owner or Subcontractor).
A screenshot, and the logs if there are any.
A priority and an estimate in hours.
Definition of Done (DoD)

A story is done only when all of these are true.

All of its acceptance criteria pass.
The code is merged into main through a pull request approved by 2 teammates, with all review conversations resolved.
Frontend CI and Backend CI are green.
Every new service method has unit tests, written or checked by the developer. Each test must fail if the behaviour breaks.
The story's main scenario is covered by an end-to-end test.
Every page works in French and English.
Every page works on mobile (390 px) and desktop (1440 px).
Accessibility: every field has a label, everything can be used with the keyboard, and text contrast is at least 4.5:1.
The API checks the user's role and checks that the record belongs to that user.
Emails are sent in the Client's language. A failed email is logged and does not cancel the action.
There are no secrets in the code. Keys and passwords live in environment variables or GitHub secrets.
The story is deployed and checked in the deployment environment.
The Product Owner checked the story against its acceptance criteria and accepted it.

## Team — Mylvy Tech

Yacoub Bakayoko · Zié Abdoul Malick Konate · Jesse John Dizon · Yanis Achamou · Loukmane Bessam
