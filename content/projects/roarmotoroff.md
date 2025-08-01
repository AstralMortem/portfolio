---
title: RoarMotoroff
description: Web site for selling auto parts in Ukraine
date: 2025-08-01
preview: /images/projects/roarmotoroff/preview.png
stack:
    - django
    - python
    - postgresql
    - drf
    - nuxtjs
    - typescript
    - tailwindcss
    - github actions
    - redis
    - celery
    - docker
timeline: 3 months
category: Web Development
gallery:
    - /images/projects/roarmotoroff/1.png
    - /images/projects/roarmotoroff/2.png
    - /images/projects/roarmotoroff/4.png
    - /images/projects/roarmotoroff/3.png


---

## ⚙️ Key Features

- **Advanced Product Catalog**
  - Auto parts grouped by system (e.g., brake, engine, suspension).
  - Categories and subcategories with filtering by car make, model, and modification.
  - Real-time product availability and pricing.

- **Car Fitment System**
  - Users can select their vehicle and view only compatible parts.
  - Car compatibility powered by relational models and filters.

- **Supplier Integration**
  - Sync stock and prices from multiple suppliers via scheduled Celery tasks.
  - Warehouse-based stock availability.

- **Search & Navigation**
  - Full-text search with intelligent suggestions.
  - Faceted filters (brand, price, compatibility).

- **User System**
  - Authentication (email and phone).
  - Saved vehicles (garage) for personalized browsing.
  - Order history and tracking.

- **Admin & Management**
  - Django admin for product, order, and user management.
  - Background syncing logs and error reporting.

---

## 📦 Architecture Overview

- **API-first design**: All frontend interactions go through a DRF-powered REST API.
- **Stateless Nuxt frontend**: Enables deployment via CDN or SSR with SEO-friendly routing.
- **Async processing with Celery + Redis**: Used for price syncing, email notifications, and long-running tasks.
- **Scalable deployment-ready**: Docker-based setup with environment separation.

---

## 📈 Future Enhancements

- Payment gateway integration (e.g., LiqPay, Stripe).
- Recommendation engine (cross-sell and upsell).
- Multilingual and multi-currency support.
- Telegram bot for price checks and alerts.

---