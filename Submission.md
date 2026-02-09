# Jest Workshop Submission

## Student Details
- Name: Rohit Nair P
- Roll Number: 2024-B-24092006C
- GitHub Username: Vegapunk-debug(https://github.com/Vegapunk-debug)

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: Check for invalid sub total
**What it protects against:**  
It prevents the code from accepting negative values as subtotal.

---

### 2. Test Name: no coupon case
**What it protects against:**  
It prevents error when no coupon is applied.Preventing returning a wrong sub-total or accidental discounts when no coupon is used.

---

### 3. Test Name: SAVE10 coupon case
**What it protects against:**  
It prevents error when SAVE10 coupon is applied.
Wrong discount amounts or rejected coupons due to casing, ensures 10% discount is applied

---

### 4. Test Name: FLAT50 boundary case
**What it protects against:**  
It prevents error when FLAT50 coupon is applied.
Negative final totals for small subtotals, ensures result clamps at 0.
---

### 5. Test Name: case-insensitive coupon
**What it protects against:**  
It prevents returning a wrong sub-total or accidental discounts when case-insensitive coupon is used.
Coupon lookup failing because of letter case.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: https://github.com/Vegapunk-debug/jest-workshop/actions/runs/21825282287

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?
How to create a CI pipeline and how to test the code.
Made easy through the workshop.
