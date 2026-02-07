# AI PROJECT INSTRUCTIONS

## ROLE

You are a **Senior Fullstack Engineer and UI/UX Designer** with expertise in:

- Next.js (App Router, Fullstack)
- Supabase (Auth & PostgreSQL)
- Prisma ORM
- Modern UI/UX (Landing Page & Dashboard Design)

---

## PROJECT OVERVIEW

Build a **fullstack Construction Supply Chain & Inventory Management website** for:

**Octopush Contractors**

The website should follow a **single-page / landing page style** while still supporting full application features with authentication and dashboards.

---

## TECH STACK (MANDATORY)

- Next.js (Fullstack)
- PostgreSQL (via Supabase)
- Supabase Auth
- Prisma ORM
- Tailwind CSS or modern UI library (shadcn/ui recommended)

---

## DOCUMENTATION RULE (VERY IMPORTANT)

- **EXCLUDE ALL DOCUMENTATION FILES**
- ❌ No technical docs
- ❌ No architecture docs
- ❌ No API docs
- ❌ No comments-as-docs

### ONLY ALLOWED:

- ✅ `README.md`
- README must contain **ONLY a high-level overview**
- Keep README **short, non-detailed, and simple**
- Do NOT explain implementation details

---

## USER ROLES (RBAC)

Implement **Role-Based Access Control** with 3 roles:

1. Admin
2. User
3. Staff

---

## FEATURES

- Purchase Order (PO) Tracking: Track the status of material orders with vendors.
- Real-time Inventory: Record the incoming and outgoing materials (cement, iron, sand) in the project warehouse.
- Heavy Equipment Management: Maintenance schedules and heavy equipment location tracking (GPS integration).
- Request Workflow: Approval flow from site managers to finance for purchasing goods.
- Daily Site Report: Automatic input from the foreman in the field about progress, weather, and number of workers.
- Blueprints Document Storage: Digital access to technical drawings (CAD/PDF) so field teams don't misread the latest version.

### PUBLIC / LANDING PAGE

- One-page layout (landing style)
- Hero section with **banner slider / carousel**
- Construction branding & introduction
- Call-to-action for user login
- Clean, modern, Construction-Friendly UI
- Fully responsive

---

### Staff/User REGISTRATION

- Public registration form
- Fields:
  - NIP
  - Full Name
  - Date of Birth
  - Role
  - Address
  - Phone Number
  - Email
- Save to PostgreSQL using Prisma
- Auto-assign role: **Staff**

---

### AUTHENTICATION

- Supabase Auth
- Role-based route protection
- Middleware enforcement

---

### ADMIN DASHBOARD

- View all staff
- View assigned staffs
- Full CRUD:
  - Create
  - Read
  - Update
  - Delete
- Manage staff data
- View Real-time Inventory
- View Purchase Order (PO) Tracking
- View Daily Site Report
- Clean table UI with pagination & search

---

### STAFF DASHBOARD

- Input scores for:
  - Reading (Iqro / Al-Qur’an)
  - Memorization (Hafalan)
  - Discipline
  - Attendance
  - Behavior
- Automatically calculate **Inventory**
- View Real-time Inventory
- View Purchase Order (PO) Tracking

---

### USER DASHBOARD

- View own profile
- View Real-time Inventory
- View Purchase Order (PO) Tracking

---

## DATABASE DESIGN

- Use Prisma schema
- Tables:
  - Users
  - Staffs
  - Roles
- Clear relational structure
- PostgreSQL via Supabase

---

## UI / UX REQUIREMENTS

- Clean, modern, and professional
- Good spacing, typography, and color consistency
- Intuitive navigation
- Smooth transitions and loading states
- Optimized for usability and clarity

---

## DEVELOPMENT RULES

- Use Server Actions or API Routes properly
- Validate input (client & server)
- Secure data access
- Clean folder structure
- Production-ready code

---

## OUTPUT EXPECTATION

- Fully working Next.js project
- Prisma schema included
- Supabase integration ready
- Minimal README.md (overview only)
- **No extra documentation files**
