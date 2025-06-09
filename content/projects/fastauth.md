---
title: FastAuth
description: FastAuth library for FastAPI OAuth authentication and RBAC authorization
date: 2023-06-15
preview: /images/projects/fastauth/preview.png
stack:
    - fastapi
    - nuxtjs
timeline: 3 months
category: Web Development
repoUrl: https://github.com/AstralMortem/fastapi-fastauth
docUrl: https://astralmortem.github.io/fastauth/
    
---

## 🚀 FastAuth – Secure & Extensible Auth for FastAPI

**FastAuth** is a comprehensive authentication and authorization solution for FastAPI, offering token-based security, role-based access control (RBAC), and OAuth2 integration—all packaged in a clean, customizable library.

### 🛠️ Core Features

* **Token-based Authentication**:

  * Support for Access and Refresh tokens
  * Multiple strategies: JWT, Redis-backed sessions, database storage 
  * Flexible token placement: headers, cookies, query parameters 

* **Authorization & RBAC**:

  * Role/permission dependencies for route-level access control 

* **OAuth2 Support**:

  * Built-in router for OAuth flows
  * Easily integrates with providers like GitHub via `httpx_oauth` 

* **User Management**:

  * Pluggable User model interfaces
  * Service–Repository pattern for flexible data handling 
  * ORM support: SQLAlchemy 2.0, Beanie, Tortoise

* **Developer-friendly**:

  * Prebuilt routers for login, refresh, logout endpoints 
  * Extensible `AuthManager` for custom hooks (e.g. `on_after_login`, `on_after_register`)
  * Default password handling via Argon2/Bcrypt
  * Easy installation via pip; optional extras via `[sqlalchemy]`, `[oauth]`

* **Documentation & CI**:

  * Auto-generated docs via MkDocs
  * GitHub Actions for CI/CD and documentation deployment

---

### 📦 Latest Release

**`fastapi-fastauth` v1.1.0** was published on **May 29, 2025**, marking a stable beta with full support up to Python 3.13 .

---

### 💼 Why It’s Portfolio-Worthy

* **Feature-rich & production-ready**: Combines JWT, RBAC, and OAuth2 out of the box.
* **Modular design**: Clear separation using Service–Repository and `AuthManager`.
* **ORM and provider agnostic**: Works with major Python ORMs and OAuth providers.
* **Clean developer experience**: Plug-and-play routers and extensibility hooks.
* **Production-grade setup**: Documentation, CI/CD pipelines, and release management already in place.

---

### ✅ Summary Table

| Aspect           | Details                                                                    |
| ---------------- | -------------------------------------------------------------------------- |
| 📌 Purpose       | FastAPI auth/authz system with RBAC and OAuth2                             |
| 🧩 Modularity    | Token strategies, ORMs (SQLAlchemy, Beanie, Tortoise), OAuth2              |
| 🔧 Extensibility | `AuthManager`, repo pattern, customizable hooks                            |
| 📦 Usage         | `pip install fastapi-fastauth`, optional extras: `[sqlalchemy]`, `[oauth]` |
| 📚 Support       | MkDocs documentation, GitHub Actions CI, active development status         |

---

**License**: MIT (2024–present) ([astralmortem.github.io][2], [astralmortem.github.io][5], [pypi.org][6], [github.com][7])

---

