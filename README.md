# 🌍 Hok AI Smart Contract Auditor (V3)

[English](#english) | [العربية](#العربية)

---

## English

**Hok AI Smart Contract Auditor** is an advanced, interactive Command-Line Interface (CLI) security tool built for Web3 and Blockchain developers. Powered by the official `@google/genai` SDK and **Gemini 2.5 Flash**, this tool automatically reviews, audits, and fixes Solidity smart contracts right from your terminal (Termux/Linux).

### ✨ Key Features
* **Multi-line Code Analysis:** Easily paste entire Solidity smart contracts without line-breaking issues.
* **Smart Access Control Detection:** Automatically identifies critical vulnerabilities like Unauthorized Minting, Missing Ownership checks, and Reentrancy attacks.
* **Automated Patching (Auto-Fix):** Not only highlights bugs but instantly generates 100% secure, production-ready Solidity code.
* **Deterministic Audit Logs:** Automatically saves structured reports into `JSON` format inside the `Audit_Reports/` directory, timestamped for verification.
* **Localized Outputs:** Provides comprehensive technical breakdowns and developer recommendations in professional Arabic prose.

---

## العربية

أداة **Hok AI Smart Contract Auditor** هي أداة أمان متقدمة وتفاعلية تعمل بواجهة سطر الأوامر (CLI)، مصممة خصيصًا لمطوري Web3 و Blockchain. تعتمد هذه الأداة على حزمة تطوير البرامج الرسمية `@google/genai` (SDK) ونموذج **Gemini 2.5 Flash**، وتقوم تلقائيًا بمراجعة وتدقيق وإصلاح عقود Solidity الذكية مباشرةً من جهازك الطرفي (Termux/Linux).

### ✨ الميزات الرئيسية
* **تحليل التعليمات البرمجية متعددة الأسطر:** يمكنك بسهولة لصق عقود Solidity الذكية بالكامل دون مشاكل في تقسيم الأسطر.
* **الكشف الذكي عن التحكم في الوصول:** يحدد تلقائيًا نقاط الضعف الحرجة مثل سك العملات غير المصرح به (Unauthorized Minting)، وفحص الملكية المفقود، وهجمات إعادة الدخول (Reentrancy).
* **التصحيح التلقائي (الإصلاح التلقائي):** لا يقتصر الأمر على تسليط الضوء على الأخطاء فحسب، بل يقوم أيضًا بإنشاء كود Solidity آمن بنسبة 100٪ وجاهز للإنتاج على الفور.
* **سجلات التدقيق الحتمية:** تقوم تلقائيًا بحفظ التقارير المنظمة بتنسيق `JSON` داخل دليل `Audit_Reports/`، مع وضع طابع زمني للتحقق.
* **مخرجات محلية:** توفر تحليلات فنية شاملة وتوصيات للمطورين بلغة عربية احترافية واضحة.
### 🚀 Quick Start Guide | دليل التشغيل السريع

1. Clone the project & Install dependencies / تحميل المشروع وتثبيت المكتبات:
git clone https://github.com/mhmda1/Hok-AI-Contract-Auditor.git
cd Hok-AI-Contract-Auditor
npm install @google/genai

2. Run the tool / تشغيل الأداة في ترمكس:
node app.js

3. How to use / طريقة الاستخدام:
* Paste your full Solidity contract into the terminal.
(الصق كود العقد الذكي كاملاً في الشاشة)
* Type 'check' on a new line and press Enter to trigger the AI global audit.
(اكتب كلمة check في سطر جديد واضغط Enter لتبدأ عملية الفحص العالمي)
* Type 'exit' to close the application.
(اكتب كلمة exit للخروج من النظام)

---

### 📄 License | الترخيص
This project is licensed under the MIT License - feel free to use, modify, and develop!
هذا المشروع مرخص بموجب رخصة MIT - متاح للاستخدام، التعديل، والتطوير الحر للجميع!
