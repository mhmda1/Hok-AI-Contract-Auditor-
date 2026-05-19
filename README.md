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
محلل العقود الذكية الخارق (Hok AI Auditor) هو أداة تفاعلية متطورة تعمل عبر السطر البرمجي (CLI) مصممة لمطوري الـ Web3 والبلوكشين لتدقيق وفحص عقود السوليديتي (Solidity). الأداة تعتمد على حزمة التطوير الرسمية من قوقل @google/genai ونموذج Gemini 2.5 Flash لتحليل الثغرات، واكتشاف الأخطاء البرمجية الحرجة، وتوليد تقارير أمنية فورية.
​✨ المميزات الرئيسية
​تحليل ديناميكي متعدد الأسطر: يتيح لصق عقود ذكية كاملة وفحصها دفعة واحدة بسلاسة.
​رصد الثغرات الحرجة: فحص فوري لثغرات السك غير المصرح به (Unauthorized Minting)، وغياب نظام الصلاحيات، وثغرات إعادة الدخول (Reentrancy).
​التصحيح التلقائي المباشر (Auto-Fix): الأداة لا تكتفي برصد الأخطاء، بل تعيد كتابة كود Solidity آمن ومحمي 100% وجاهز للنسخ.
​حفظ سجلات التدقيق (Audit Logs): إنشاء وحفظ تقارير حتمية ومنظمة بصيغة ملفات JSON داخل مجلد Audit_Reports/ موثقة بالوقت والتاريخ.
​تقارير باللغة العربية: صياغة أمنية برمجية دقيقة ومفهومة للمطور العربي لتسريع عملية التطوير والأمان.
​🛠️ دليل التشغيل السريع

​تحميل المشروع وتثبيت المكتبات:
git clone https://github.com/mhmda1/Hok-AI-Contract-Auditor.git
cd Hok-AI-Contract-Auditor
npm install @google/genai
تشغيل الأداة في ترمكس:
node app.js
طريقة الاستخدام:
​الصق كود العقد الذكي كاملاً في الشاشة.
​اكتب كلمة check في سطر جديد واضغط Enter لتبدأ عملية الفحص العالمي.
​اكتب كلمة exit للخروج من النظام.
​📄 License | الترخيص
​This project is licensed under the MIT License - feel free to use and develop!
هذا المشروع مرخص بموجب رخصة MIT - متاح للاستخدام والتطوير الحر!
