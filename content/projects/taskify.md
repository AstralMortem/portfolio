---
title: Taskify
description: Simple task manager
date: 2025-05-15
preview: /images/projects/taskify/preview.svg
stack:
    - fastapi
    - python
    - postgresql
    - aws s3
    - nuxtjs
    - typescript
    - tailwindcss
timeline: 2 months
category: Web Development
repoUrl: https://github.com/AstralMortem/Taskify
liveUrl: https://taskify-ua.up.railway.app/
gallery:
    - /images/projects/taskify/1.png
    - /images/projects/taskify/2.png
    - /images/projects/taskify/4.png
    - /images/projects/taskify/3.png

---

Taskify is a collaborative task management service built with FastAPI for the backend and NuxtJS for the frontend, and deployed seamlessly on Railway. It is designed to help users organize their projects using a board-based structure inspired by Kanban.

### Core Features:

🗂️ Boards, Columns, and Cards (CRUD):

- Boards: Users can create, update, delete, and manage multiple boards.
- Columns: Each board supports multiple columns (e.g., To Do, In Progress, Done).
- Cards: Cards represent individual tasks inside columns and support full CRUD.

👥 Board Members:

- Users can add members to boards to collaborate in real-time.

- Permissions can be managed per board (e.g., owner, editor, viewer).

🔗 Public Board Sharing:

- Boards can be shared via a public link that allows read-only view access. This allows non-authenticated users to view the board without signing in.

🔐 OAuth Authentication:

- Secure login via OAuth providers (e.g., Google, GitHub). Authenticated sessions allow personal board management and collaboration.

