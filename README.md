# Employee Directory (React Components & Props)

Employee directory application built with reusable React components, props, and composition for Bloomrix Internship task FE07.

## Requirements
- Node.js v24.12.0
- npm

## Setup and Scripts
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Run ESLint:
   ```bash
   npm run lint
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview the production build:
   ```bash
   npm run preview
   ```

## Component Architecture

`src/components/ui/`: Generic UI components (Button, PageHeader, ProfileImage) with no knowledge of employee data.

`src/components/departments/`: Domain component (DepartmentCard) displaying department info, active selection state, and employee count.

`src/components/employees/`: Domain components (EmployeeCard, EmployeeList) supporting card and compact layouts, optional fields (phone, photo), salary formatting functions, and email actions.

`src/pages/EmployeeDirectoryPage/`: Page component that imports sample data (departments, employees), reads URL query parameters (view, salary, department) via URLSearchParams as a temporary substitute before React state is introduced, and composes child components through props.

## Data Note

All employees, departments, and salaries are sample data. Profile photo `/images/avatars/touseef-ahmed.jpg` is served from `public/`, while employees without a photo display their initials via ProfileImage
