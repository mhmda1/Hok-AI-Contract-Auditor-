# 🌍 Hok AI Smart Contract Auditor (V3)

**Hok AI Smart Contract Auditor** is an advanced, interactive Command-Line Interface (CLI) security tool built for Web3 and Blockchain developers. Powered by the official `@google/genai` SDK and **Gemini 2.5 Flash**, this tool automatically reviews, audits, and fixes Solidity smart contracts right from your terminal (Termux/Linux).

---

### ✨ Key Features
* **Multi-line Code Analysis:** Easily paste entire Solidity smart contracts without line-breaking issues.
* **Smart Access Control Detection:** Automatically identifies critical vulnerabilities like Unauthorized Minting, Missing Ownership checks, and Reentrancy attacks.
* **Automated Patching (Auto-Fix):** Not only highlights bugs but instantly generates 100% secure, production-ready Solidity code.
* **Deterministic Audit Logs:** Automatically saves structured reports into `JSON` format inside the `Audit_Reports/` directory, timestamped for verification.
* **Localized Outputs:** Provides comprehensive technical breakdowns and developer recommendations in professional Arabic prose.

---

### 🚀 Quick Start Guide

1. **Clone the project & Install dependencies:**
```bash
git clone [https://github.com/mhmda1/Hok-AI-Contract-Auditor.git](https://github.com/mhmda1/Hok-AI-Contract-Auditor.git)
cd Hok-AI-Contract-Auditor
npm install @google/genai

Run the tool:
node app.js
How to use:
​Paste your full Solidity contract into the terminal.
​Type check on a new line and press Enter to trigger the AI global audit.
​Type exit to close the application.
​📄 License
​This project is licensed under the MIT License - feel free to use, modify, and develop!
