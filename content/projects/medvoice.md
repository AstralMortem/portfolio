---
title: MedVoice
description: AI-powered medical transcription service
date: 2025-06-09
preview: /images/projects/medvoice/preview.png
stack:
    - fastapi
    - python
    - postgresql
    - sqlalchemy
    - tauri
    - rust
    - nuxtjs
    - typescript
    - tailwindcss
    - github actions
timeline: 3 months
category: Desktop Application
repoUrl: https://github.com/AstralMortem/med-voice
gallery:
    - /images/projects/medvoice/1.png
    - /images/projects/medvoice/2.png
    - /images/projects/medvoice/4.png
    - /images/projects/medvoice/3.png

---

## 🧠 Medical Speech Transcription System (Bachelor thesis)

A **privacy-first, offline-ready system** for medical professionals that transcribes and summarizes patient consultations using **local AI models**. Designed to reduce documentation time and improve accuracy in medical records.

---

## ⚙️ System Overview

This system consists of a **client-server architecture**, where:

* **Backend** (Python + FastAPI) serves only as a bridge to the local database (PostgreSQL).
* **Frontend** (NuxtJS + TailwindCSS + Tauri) handles the **voice capture**, **ASR transcription (Whisper-rs)**, and **LLM summarization (Ollama-rs)** entirely on the client side.

---

## 🧩 Key Features

* 🎤 **Real-time audio transcription** with [Whisper-rs](https://github.com/rustformers/whisper-rs)
* ✍️ **LLM-based summarization** of transcripts via [Ollama-rs](https://github.com/ollama/ollama-rs)
* 🧩 **Modular architecture** using Service–Repository pattern
* 🗄️ Secure **local database** for appointment records
* 📦 Cross-platform GUI app with [Tauri](https://tauri.app/) and [NuxtJS](https://nuxt.com/)
* 🧪 Integrated **unit and integration tests** with Pytest
* 🔁 CI/CD via GitHub Actions

---

## 📦 Technologies Used

| Layer     | Stack                                      |
| --------- | ------------------------------------------ |
| Backend   | Python, FastAPI, SQLAlchemy, PostgreSQL    |
| Frontend  | NuxtJS, Nuxt UI, TailwindCSS, Tauri        |
| AI Models | Whisper-rs, Ollama-rs                      |
| DevOps    | GitHub Actions, PyInstaller, Tauri Builder |

---

## 📝 License

This project is licensed under the MIT License.

---
