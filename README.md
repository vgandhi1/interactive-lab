# Web Interactive Collection

**Live hub:** [https://vgandhi1.github.io/web-interactive-collection/](https://vgandhi1.github.io/web-interactive-collection/)

A curated library of **static HTML** slide decks, EV/SDV reference pages, homelab documentation, and browser-based learning tools. The main portfolio ([vgandhi1.github.io](https://vgandhi1.github.io/)) holds the career narrative and GitHub project grid; **this repo** publishes demos and deep-dive material only.

| Site | Repository | URL |
|------|------------|-----|
| Portfolio | [vgandhi1/vgandhi1.github.io](https://github.com/vgandhi1/vgandhi1.github.io) | `https://vgandhi1.github.io/` |
| Interactive lab (this repo) | [vgandhi1/web-interactive-collection](https://github.com/vgandhi1/web-interactive-collection) | `https://vgandhi1.github.io/web-interactive-collection/` |

---

## Hub layout (`index.html`)

The landing page groups artifacts into three areas (in-page anchors):

| Section | Anchor | Purpose |
|---------|--------|---------|
| **Repositories** | `#repos` | Points to portfolio flagship projects and [all GitHub repos](https://github.com/vgandhi1?tab=repositories) |
| **Decks & EV references** | `#decks` | Slide-style pages, manufacturing/ML research, homelab, vehicle protocols & cybersecurity |
| **Tools & simulators** | `#tools` | Interactive glossaries, DSA guide, Git lab, financial/education simulators, calculator |

---

## Artifacts in this repository

### Decks & EV (`#decks`)

| Page | File | Summary |
|------|------|---------|
| Homelab portal | [Homelab/HomelabPortal.html](Homelab/HomelabPortal.html) | Raspberry Pi homelab — Cloudflare Tunnel, Tailscale, self-hosted stack |
| CVML — manufacturing QA | [CVML_Project_Overview.html](CVML_Project_Overview.html) | Edge CV, MQTT, AWS ML, MES/SCADA |
| Amazon Monitron IIoT | [monitron-IIoT-sensors.html](monitron-IIoT-sensors.html) | Vibration sensing, gateway, AWS Monitron workflow |
| OEE data model | [oee_data_model.html](oee_data_model.html) | Star schema, T-SQL, Power BI — on-prem OEE reporting |
| Cancer recurrence ML | [cancer_recurrence_ml_presentation.html](cancer_recurrence_ml_presentation.html) | Clinical ML study presentation |
| ARIMA forecasting | [arima_report.html](arima_report.html) | eCommerce sales — ARIMA baseline & validation |
| DOE — packaging seal | [DOE_Summary_Document.html](DOE_Summary_Document.html) | 2³ factorial, ANOVA, process optimization |
| Vehicle protocols | [ev_protocols.html](ev_protocols.html) | CAN, LIN, FlexRay, DoIP |
| EV cybersecurity | [ev-cybersecurity.html](ev-cybersecurity.html) | SecOC, UN R155/R156, ISO 21434 |

**Homelab folder** ([Homelab/](Homelab/)):

- [HomelabPortal.html](Homelab/HomelabPortal.html) — interactive setup guide
- [README.md](Homelab/README.md) — stack architecture (NPM, Nextcloud, Grafana, Tailscale, etc.)
- [docker-compose-template.yml](Homelab/docker-compose-template.yml)
- [Linux_Cheat_Sheet.md](Homelab/Linux_Cheat_Sheet.md)

### Tools & simulators (`#tools`)

| Page | File | Summary |
|------|------|---------|
| AI Buzzwords | [AI-buzzwords.html](AI-buzzwords.html) | Visual explainers — transformers, RAG, agents, temperature, etc. |
| AI Glossary | [AI-terminology.html](AI-terminology.html) | Searchable LLM terminology |
| DSA Architect | [DSA.html](DSA.html) | Data structures & algorithms reference with complexity notes |
| Mastering uv | [uv-guide.html](uv-guide.html) | Interactive guide to the `uv` Python package manager |
| Hedging simulator | [hedging_simulator.html](hedging_simulator.html) | Stock + put option P/L scenarios |
| Git 101 | [git_101.html](git_101.html) | Guide + working-tree simulator |
| ISO & RSU dashboard | [equity_dashboard.html](equity_dashboard.html) | Equity compensation / tax scenario explorer |
| Calculator | [calculator.html](calculator.html) | Browser calculator with history |

**Markdown companion:**

- [GIT_AND_GITHUB_GUIDE.md](GIT_AND_GITHUB_GUIDE.md) — longer-form Git/GitHub reference (companion to `git_101.html`)

### Related apps (hosted elsewhere)

These are linked from the [main portfolio](https://vgandhi1.github.io/) rather than stored in this repo:

| App | Link |
|-----|------|
| Weather WebApp | [vgandhi1.github.io/weather-WebApp/](https://vgandhi1.github.io/weather-WebApp/) |
| ToDoApp (FARM stack) | [github.com/vgandhi1/ToDoApp](https://github.com/vgandhi1/ToDoApp) |

---

## Tech stack

| Category | Technologies |
|----------|----------------|
| Markup & style | Static HTML, [Tailwind CSS](https://tailwindcss.com/) (CDN on hub), custom CSS per page |
| Charts / viz | [Chart.js](https://www.chartjs.org/), [Plotly.js](https://plotly.com/javascript/) where used |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Inter (hub), per-page fonts elsewhere |
| Hosting | GitHub Pages (project site under `/web-interactive-collection/`) |

Design goals: fast load, no build step for most pages, and readable offline after first fetch (CDN assets excepted).

---

## Local preview

```bash
cd web-interactive-collection   # or your clone path
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) for the hub. Open individual `.html` files via the same origin so relative links (e.g. `Homelab/HomelabPortal.html`) work.

---

## Deploying to GitHub Pages

1. Push to the default branch of **`vgandhi1/web-interactive-collection`**.
2. **Settings → Pages** → deploy from branch, folder `/ (root)`.
3. The site is served at **`https://<user>.github.io/web-interactive-collection/`** (project Pages URL).

Ensure the portfolio repo links to this path (already wired on [vgandhi1.github.io](https://vgandhi1.github.io/)).

---

## Contact

- **GitHub:** [@vgandhi1](https://github.com/vgandhi1)
- **LinkedIn:** [vinaygandhi274](https://www.linkedin.com/in/vinaygandhi274/)
- **Email:** gandhivinay2008@gmail.com

---

## License & attribution

Content is provided for learning, demonstration, and portfolio use. There is no separate `LICENSE` file in this repository; if you fork or reuse pages, please retain attribution to **Vinay Gandhi** and link back to the live hub when practical.
