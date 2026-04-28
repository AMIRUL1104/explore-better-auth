# 🔐 Better Auth + Next.js Setup Guide (Step by Step)

## 📌 Overview

এই guide follow করলে তুমি Next.js project এ Better Auth দিয়ে Email & Password authentication + Email Verification setup করতে পারবে।

---

## ⚙️ Setup Steps

### 1. Better Auth install করো

```bash
npm install better-auth
```

---

### 2. `.env` file setup করো

Project root এ `.env` file তৈরি করো

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
```

---

### 3. Better Auth docs থেকে env variables add করো

👉 official docs দেখে required variables add করো

---

### 4. `/lib/auth.js` file তৈরি করো

👉 এখানে Better Auth config লিখবে

- email & password enable করো
- email verification enable করো
- MongoDB adapter connect করো

---

### 5. MongoDB setup করো

👉 MongoDB install করো:

```bash
npm install mongodb
```

👉 MongoDB adapter install করো:

```bash
npm install @better-auth/mongo-adapter
```

👉 `auth.js` এ:

- Mongo client create করো
- database connect করো
- adapter হিসেবে pass করো

---

### 6. `/lib/email.js` file তৈরি করো

👉 Nodemailer দিয়ে email send logic লিখো

```bash
npm install nodemailer
```

👉 Gmail App Password ব্যবহার করো (normal password না)

---

### 7. Email Verification setup করো

👉 `auth.js` এ:

- `requireEmailVerification: true` দাও
- `sendVerificationEmail` function define করো

👉 এখানে verification link email এ send হবে

---

### 8. Sign Up functionality add করো

👉 signup page এ:

```js
authClient.signUp.email({
  name,
  email,
  password,
});
```

---

### 9. Sign In functionality add করো

👉 login page এ:

```js
authClient.signIn.email({
  email,
  password,
});
```

👉 যদি email verify না থাকে:

- login block হবে
- error handle করতে হবে

---

### 10. Project run করে test করো

```bash
npm run dev
```

👉 Test flow:

- signup
- email check
- verify link click
- login

---

### 11. Error handle + UI improve করো

👉 example:

- "Verify your email first" message
- loading state
- success feedback

---

### 12. Extra features (optional)

👉 চাইলে add করতে পারো:

- Google login
- Facebook login
- Password reset
- Resend verification email

---

## 🚨 Important Notes

- Gmail ব্যবহার করলে App Password লাগবে
- প্রথম email spam এ যেতে পারে
- `.env` ভুল হলে auth কাজ করবে না
- MongoDB connection ঠিক থাকতে হবে

---

## 🎯 Final Result

✔ Email & Password Auth working
✔ Email Verification enabled
✔ Secure login system
✔ Real email sending working

---

🔥 Done — এখন তুমি production-level auth system build করার base তৈরি করে ফেলেছো।
