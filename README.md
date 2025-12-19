# Full-Spectrum Web App Hardening Project 🛡️

**Course:** Secure Software Development (Fall 2025)  
**Faculty:** Faculty of Computers and Data Science - Alexandria National University  
**Presented to:** Eng. Mohamed Hatem  

## 👥 Team Members
| Name                 | ID      |
| **Mohammad Wael**    | 2305035 |
| **Mahmoud Wael**     | 2305036 |
| **Zainab El Sayed**  | 2305112 |

---

## 📖 Project Overview
This project focuses on securing a deliberately vulnerable Node.js & Express application. We followed a complete DevSecOps lifecycle:
1.  **Phase A (DAST):** Discovered vulnerabilities using **OWASP ZAP** and manual testing with **Postman**.

2.  **Phase B (SAST):** Analyzed the code using **Semgrep** and wrote **Custom Rules** to detect logic bugs.

3.  **Phase C (Fix & Harden):** Patched the source code to mitigate vulnerabilities (SQLi, IDOR, Mass Assignment, etc.).

4.  **Verification:** Re-tested using DAST and SAST to ensure zero findings after fixes.

**Key Achievements:**
*   Identified and fixed **11 distinct vulnerabilities**.
*   Covered **5 different OWASP Top 10 categories**.
*   Developed custom Semgrep rules for business logic vulnerabilities.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v14 or higher)
*   NPM

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/Your-Repo-Name.git
    cd Your-Repo-Name
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Setup Environment Variables:
    *   Rename `.env.example` to `.env` (or create a new `.env` file).
    *   Configure the variables as needed.

4.  Run the application:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

---

## 🛠️ Security Testing Commands

### 1. Dynamic Analysis (DAST) - OWASP ZAP
To perform an automated scan against the running application:
1.  Ensure the app is running on port 5000.
2.  Open OWASP ZAP.
3.  Run an **Automated Scan** targeting: `http://localhost:5000`.
4.  For authenticated scans, we used ZAP's manual exploration and Postman for specific payloads.

### 2. Static Analysis (SAST) - Semgrep
We used Semgrep to scan the codebase for vulnerabilities.

**To run Semgrep with standard JavaScript/Node.js rules:**
```bash
semgrep scan --config=p/javascript --config=p/nodejs

To run our CUSTOM Semgrep rules (located in semgrep-rules/):
These rules were written specifically to detect logic bugs like Mass Assignment and OTP Leaks.
semgrep scan --config=semgrep-rules/my-custom.yaml

📂 Repository Structure
src/ - The source code of the application (Controllers, Routes, Models).
semgrep-rules/ - Contains the custom .yaml rules we wrote for Phase B.
docs/ - Contains the final project report (PDF).
.env.example - Template for environment variables.

🔒 Fixes Implemented
We successfully remediated the following issues:
✅ SQL Injection (via Parameterization).
✅ unstericted file upload
✅ Mass Assignment (via Field Whitelisting).
✅ OTP Leak (via Error Message Sanitization).
✅ Open redirect
✅ Reflected xss
✅ Broken object level Authorization
✅ Weak secret
✅ Unverify jwt
✅ Traversal path
✅ Absence of input validation


