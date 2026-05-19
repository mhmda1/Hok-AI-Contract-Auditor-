const { GoogleGenAI, Type } = require("@google/genai");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

// تهيئة الـ API بمفتاحك الموثق والمفعّل
const ai = new GoogleGenAI({ apiKey: "AIzaSyAFTEPj-BEDBL95zouYouESdjgFjl2HVnA" });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputBuffer = [];

// إنشاء مجلد لحفظ التقارير الأمنية إن لم يكن موجوداً
const reportsDir = path.join(__dirname, "Audit_Reports");
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

async function analyzeInput(userInput) {
  console.log("\n[🤖 Hok AI]: جاري الفحص الشامل وتوليد الكود الآمن، انتظر لحظة...");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `أنت خبير تدقيق أمني عالمي في عقود الـ Web3 والسوليديتي. قم بتحليل الكود التالي واستخراج الثغرات (مثل Reentrancy، مشاكل الصلاحيات، وغيرها) باللغة العربية تماماً، ثم قم بإعادة كتابة الكود كاملاً بشكل آمن ومصحح:\n\n${userInput}`,
      config: {
        temperature: 0, // حتمية كاملة ودقة برمجية عالية
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            contractName: { type: Type.STRING, description: "اسم العقد الذكي المكتشف" },
            isSafe: { type: Type.STRING, description: "هل العقد آمن؟ (آمن / غير آمن / مشبوه)" },
            summaryAnalysis: { type: Type.STRING, description: "خلاصة التحليل الأمني والفني بالعربية" },
            detectedVulnerabilities: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "قائمة بالثغرات المكتشفة بالتفصيل"
            },
            fixedSolidityCode: { type: Type.STRING, description: "كود السوليديتي الكامل بعد تصحيحه وسد كل الثغرات فيه" },
            recommendedAction: { type: Type.STRING, description: "الخطوات التالية الموصى بها للمطور" }
          },
          required: ["contractName", "isSafe", "summaryAnalysis", "fixedSolidityCode"],
        },
      },
    });

    const reportData = JSON.parse(response.text);

    // عرض التقرير المنسق على الشاشة
    console.log("\n================ 📄 تقرير HOK AI الأمني العالمي ================");
    console.log(`اسم العقد: ${reportData.contractName}`);
    console.log(`حالة الأمان: ${reportData.isSafe}`);
    console.log(`\n🔍 التحليل الفني:\n${reportData.summaryAnalysis}`);
    
    console.log(`\n⚠️ الثغرات المكتشفة:`);
    if (reportData.detectedVulnerabilities && reportData.detectedVulnerabilities.length > 0) {
      reportData.detectedVulnerabilities.forEach((v, i) => console.log(`   ${i+1}. ${v}`));
    } else {
      console.log("   ✅ لا توجد ثغرات واضحة.");
    }

    console.log(`\n🛠️ كود السوليديتي المصحح والآمن 100%:\n`);
    console.log(reportData.fixedSolidityCode);
    console.log(`\n💡 التوصية الأمنية:\n${reportData.recommendedAction}`);
    console.log("=========================================================\n");

    // حفظ التقرير تلقائياً في ملف JSON منفصل
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `Audit_${reportData.contractName || "Contract"}_${timestamp}.json`;
    fs.writeFileSync(path.join(reportsDir, fileName), JSON.stringify(reportData, null, 2));
    console.log(`💾 تم حفظ التقرير والكود المصحح تلقائياً في: Audit_Reports/${fileName}\n`);

  } catch (error) {
    console.error("❌ حدث خطأ أثناء الاتصال بالـ API أو حفظ الملف:", error);
  }
  
  inputBuffer = []; // تصفير الذاكرة للمدخل التالي
  startPrompt();
}

function startPrompt() {
  console.log("📝 الصق كود العقد الذكي (وعند الانتهاء اكتب 'check' في سطر جديد لبدء الفحص العالمي):");
  rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'check') {
      const fullInput = inputBuffer.join('\n');
      if (!fullInput.trim()) {
        console.log("الذاكرة فارغة! الرجاء لصق كود أولاً.");
        return;
      }
      rl.removeAllListeners('line'); // إيقاف الاستماع مؤقتاً أثناء الفحص
      analyzeInput(fullInput);
    } else if (line.trim().toLowerCase() === 'exit') {
      rl.close();
      process.exit(0);
    } else {
      inputBuffer.push(line);
    }
  });
}

// واجهة التشغيل الرسمية مع إثبات الحقوق الرقمية للمطور
console.log("=========================================================");
console.log("🌍 مرحبًا بك في منصة Hok AI Smart Contract Auditor العالمية (V3)!");
console.log("👨‍💻 المطور الرئيسي: Mohammed Ghaban (@mhmda1)");
console.log("📦 المستودع الرسمي: https://github.com/mhmda1/Hok-AI-Contract-Auditor");
console.log("=========================================================\n");

startPrompt();
