# Kids MBTI Test - Project Overview

## Overview

This is a web-based MBTI (Myers-Briggs Type Indicator) personality test designed specifically for children and young adults. The application provides age-appropriate personality assessments with a playful, engaging interface inspired by educational platforms like Duolingo and Khan Academy Kids. Users select their age group (elementary, middle school, high school, or adult), answer tailored questions, and receive personalized MBTI results with friendly mascot characters representing each personality type.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing, providing a lightweight alternative to React Router.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives, providing accessible and customizable components following the "New York" style variant. The component system uses Tailwind CSS for styling with custom design tokens.

**State Management**: React hooks for local state management, with TanStack Query (React Query) for server state and data fetching. The application uses a client-side storage approach for the quiz flow without persistent backend storage.

**Design System**: 
- Custom CSS variables for theming (light mode focused)
- Tailwind CSS with extended configuration for rounded corners and custom color palette
- Google Fonts integration (Nunito for body text, Fredoka for headings)
- Playful, child-friendly visual language with gradient backgrounds and mascot illustrations

**Key Features**:
- Multi-stage quiz flow (home → age selection → quiz → results)
- Progressive question answering with visual feedback
- Age-adaptive question sets (12-20 questions depending on age group)
- MBTI calculation algorithm based on four dimensions (E/I, S/N, T/F, J/P)
- Shareable results with mascot characters for each personality type

### Backend Architecture

**Server**: Express.js with TypeScript running on Node.js.

**API Design**: RESTful API architecture with routes namespaced under `/api`. Currently using in-memory storage (MemStorage class) as a placeholder, designed to be replaced with a persistent database solution.

**Session Management**: Prepared infrastructure for express-session with potential PostgreSQL session store (connect-pg-simple).

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling, optimizing for cold start performance by bundling common dependencies.

**Development Environment**: 
- Vite HMR (Hot Module Replacement) integrated with Express in development
- Separate production build pipeline
- Replit-specific plugins for development tooling

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Map data structures (MemStorage class) for user data.

**Planned Schema** (Drizzle ORM with PostgreSQL):
- Users table with id, username, and password fields
- Drizzle-kit configuration for migrations
- Type-safe schema definitions with Zod validation

**Database Technology**: PostgreSQL (prepared but not actively used), configured through Drizzle ORM with connection via DATABASE_URL environment variable.

**Note**: The application currently operates without persistent storage. Quiz results and user progress are client-side only. The database schema exists as scaffolding for future user authentication and result persistence features.

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives for accessible components (accordion, dialog, dropdown, toast, etc.)
- Lucide React for icons
- Embla Carousel for potential carousel functionality
- CMDK for command palette interface

**Data Fetching & State**:
- TanStack React Query for server state management
- React Hook Form with Zod resolvers for form validation

**Styling**:
- Tailwind CSS with PostCSS
- class-variance-authority for variant-based component styling
- clsx and tailwind-merge for className utilities

**Backend Dependencies**:
- Express.js for HTTP server
- Drizzle ORM for database interactions
- Zod for runtime validation
- Prepared (but unused): passport for authentication, nodemailer, stripe, OpenAI API client

**Development Tools**:
- Vite with React plugin
- TypeScript compiler
- Replit-specific development plugins (cartographer, dev-banner, runtime-error-modal)

**Fonts**: Google Fonts (Nunito and Fredoka) loaded via CDN in HTML.

**Assets**: Mascot images stored in `attached_assets/generated_images/` directory, one for each of the 16 MBTI types (e.g., INTJ as wise owl, ENFP as butterfly explorer).