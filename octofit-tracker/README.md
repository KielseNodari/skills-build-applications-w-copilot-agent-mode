# OctoFit Tracker — Project Setup

Goals

- User authentication and profiles
- Activity logging and tracking
- Team creation and management
- Competitive leader board
- Personalized workout suggestions

Structure

octofit-tracker/
├── backend/
│   ├── venv/  # created by virtualenv
│   ├── requirements.txt
│   └── octofit_tracker/  # Django project/app will live here
└── frontend/

Forwarded ports (recommended)

- 8000: public (backend)
- 3000: public (frontend)
- 27017: private (mongodb)

Virtual environment and install (run from workspace root; do NOT change directories — use paths as shown)

```bash
python3 -m venv octofit-tracker/backend/venv
source octofit-tracker/backend/venv/bin/activate
pip install -r octofit-tracker/backend/requirements.txt
```

Notes

- Never change directories when agent mode is running commands; always reference paths.
- Use Django's ORM for models and data creation (do not run direct MongoDB scripts to create DB structures).
