# **App Name**: CRM Light

## Core Features:

- Dashboard UI: Implement a dashboard with overview stats cards, a calendar widget, a task list with progress indicators, a recent activity feed, and upcoming meetings.
- Navigation Components: Create a sidebar with icons and active states for navigation and a header with a user avatar, search bar, and notifications.
- AI Activity Summarizer: AI Tool to generate a summary from recent activity, helping the user grasp the highlights of the day.
- Authentication: Login & registration with JWT or OAuth
- Dashboard Overview: Search bar for customers; Graph of new customers per weekday; Donut progress chart: Successful deals %; Tasks in progress count; Total prepayment amount display
- Customer Pipeline Stages: Pipeline columns: Contacted, Negotiation, Offer Sent, Deal Closed. Each column shows cards with: Company name & short description, Due date, Icons for comments, attachments, assignee
- Drag & Drop Kanban Workflow: Move customer cards between stages; Update statuses on drop; Animate transitions between columns
- Customer Management: Add customer button (top-right); Sort and filter customers; Modal or drawer to view/edit customer details
- Projects Sidebar: List of active projects; Member list with role tags and avatars
- Task Management: Sidebar badge count for tasks; View, add, and assign tasks per customer/project

## Style Guidelines:

- Primary color: Use a clean white or light grey for the background.
- Secondary color: Utilize a calming blue or teal for key elements and accents.
- Accent: Use a vibrant green (#cream) for positive indicators and interactive elements.
- Employ a grid-based layout for consistent spacing and alignment.
- Incorporate subtle animations for transitions and loading states using Framer Motion.
- Use a consistent icon set (e.g., Remix Icon) throughout the dashboard.
- Background: #FAFAF7 Main background
- Sidebar: #FFFFFF Left nav and side panels
- Primary Black: #000000 Text, active elements
- Gray: #E5E5E5, #D1D1D1 Borders, icons
- Accent Black: #1A1A1A Active card (Prime Estate)
- Button Black: #121212 Add Customer Button
- Text Colors: #555555, #333333, #999999 Labels, subtext
- Highlight: #F6F6F0 Header background & top bar
- 3-panel: Sidebar, Main Content, Action Area
- Responsiveness: Tablet and desktop, optionally mobile
- Sidebar Menu: Navigation: Dashboard, Tasks, Activity, Customers, Settings
- Project Section: Collapsible list with project count
- Members Section: Horizontal avatar list with roles
- Top Action Bar: Sort, filter dropdowns, user menu
- Cards: Task/customer cards with tags, dates, icons
- Tooltips: On hover for icons
- Dark Card: Highlighted (active) card variant (Prime Estate)
- Transitions: Smooth Framer Motion transitions for card movement
- Modals/Forms: Customer creation modal with form validation
- Graphs/Charts: Bar chart for new customers; donut for progress metric

## Original User Request:
Create a fully functional and visually identical CRM Dashboard App inspired by the shared Dribbble design. The application should be responsive, animated, and full-stack with support for managing tasks, users, meetings, analytics, and calendar events.
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS / Shadcn UI
Animation: Framer Motion
Charts: Recharts / Chart.js

📄 Pages to Implement
Login Page

Dashboard

Overview Stats Cards

Calendar Widget

Task List with progress

Recent Activity Feed

Upcoming Meetings

Sales Performance Charts

Contacts (CRM List)

Tasks

Calendar

Settings

🧱 Components
Sidebar (with icons and active states)

Header (user avatar, search bar, notifications)

Stat Cards (animated number counters)

Task Progress Bars

Chart Components (bar, line)

Modal for creating tasks/contacts

Calendar with event dots

🧑‍💻 Backend Requirements
Tech Stack: Node.js + Express.js
Database: MongoDB (with Mongoose)
Auth: JWT-based authentication
API Framework: RESTful APIs
  