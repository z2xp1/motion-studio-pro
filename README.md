# MOTION STUDIO PRO

تطبيق Motion Graphics مبني بـ React وTypeScript وVite، مع محرك Canvas 2D ومشاهد قابلة للتحرير.

## تشغيل نسخة الويب محلياً
```bash
npm install
npm run dev
```

## إنشاء APK للأندرويد
تم تجهيز المشروع باستخدام Capacitor. أسهل مسار لبناء APK دون تثبيت Android Studio على الهاتف هو GitHub Actions:

1. أنشئ مستودع GitHub جديداً وارفع **محتويات هذا المجلد** إليه (وليس ملف ZIP نفسه).
2. تأكد أن اسم الفرع `main`.
3. افتح تبويب **Actions** في المستودع وفعّل GitHub Actions إذا طلب ذلك.
4. شغّل سير العمل **Build Android APK** من زر **Run workflow**، أو ادفع commit إلى `main`.
5. بعد نجاح العملية، افتح نتيجة التشغيل وانزل إلى **Artifacts** ثم حمّل `motion-studio-pro-debug-apk`.
6. فك ضغط ملف Artifact، ثم افتح `app-debug.apk` على جهاز أندرويد واسمح بالتثبيت من هذا المصدر عند الطلب.

## بناء محلياً على كمبيوتر مجهز بـ Android Studio
```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```
ثم من Android Studio أنشئ APK عبر Build > Build Bundle(s) / APK(s) > Build APK(s).

## ملاحظات مهمة
- هذا المسار ينتج **Debug APK** للتجربة والتثبيت المباشر، وليس إصدار متجر Play موقّعاً بمفتاح نشر.
- لم يتم إنشاء APK أو اختباره داخل هذه البيئة؛ ملف APK سينتج بعد نجاح سير عمل GitHub Actions.
- تصدير الفيديو داخل التطبيق يعتمد على WebM في المتصفح/ WebView؛ MP4 و4K وخلط الصوت عبر FFmpeg ليست منفذة في هذه النسخة.
- التطبيق يحتاج أذونات تخزين/وسائط فقط إذا أضيفت لاحقاً وظائف أصلية تتطلبها؛ لا تطلب النسخة الحالية أذونات غير لازمة.
