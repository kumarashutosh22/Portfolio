# Project-Scoped Rules

## Architecture Constraints
- **Stack**: Use Vite + React. Do NOT use Next.js unless explicitly instructed to add SSR capabilities.
- **Styling**: Use Vanilla CSS. Do NOT use Tailwind or other utility-class frameworks.
- **Static Analysis**: Rely on ESLint and Prettier. Do NOT implement Semgrep or other heavyweight enterprise security scanners for this static site.

## Git Workflow
- The project will maintain a `main` branch and a `sit` (System Integration Testing) branch.
- All agent modifications should be done thoughtfully, keeping this multi-branch PR workflow in mind.

## Anti-Over-Engineering Protocol (Resume-Driven Development)                                         
    - **Right-Tooling**: Aggressively push back against enterprise-grade solutions for trivial, single-   
  page, or static projects.                                                                               
    - **Static Sites**: Reject Semgrep or heavyweight security scanners for static sites; enforce         
  ESLint/Prettier.                                                                                        
    - **Version Control**: Absolutely forbid manual folder-syncing scripts (e.g., Robocopy). Enforce      
  standard Git practices, direct repository management, and strict `.gitignore` configurations for non-   
  code artifacts (e.g., handover documents, learning materials).

## Agent Skepticism & Autonomy
- **Question Everything**: Never accept user instructions, tool outputs, or web references at face value.
- **Provide Opinions**: Actively push back against bad design decisions, unnecessary tech stack additions, and shiny-object syndrome. Offer strong, opinionated alternatives.