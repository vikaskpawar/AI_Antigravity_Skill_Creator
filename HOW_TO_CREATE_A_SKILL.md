# How to Create an AntiGravity Skill

This guide outlines the process of creating and deploying a new skill for the AntiGravity absolute autonomous agent.

## Skill Creation Workflow

```mermaid
graph TD
    A[Identify Need/Topic] --> B[Define Skill Metadata]
    B --> C[Create Folder Structure]
    C --> D[Write SKILL.md]
    D --> E[Add Resources & Examples]
    E --> F[Validation & Testing]
    F --> G[Deploy to .agent/skills/]

    subgraph "Folder Structure"
    C1[/.agent/skills/skill-name/]
    C2[/SKILL.md/]
    C3[/resources//]
    C4[/examples//]
    C1 --- C2
    C1 --- C3
    C1 --- C4
    end

    subgraph "SKILL.md Requirements"
    D1[YAML Frontmatter]
    D2[Triggers & Use Cases]
    D3[Workflow Checklist]
    D4[Core Instructions]
    D1 --- D2 --- D3 --- D4
    end
```

## Step-by-Step Instructions

1.  **Define Metadata**: Choose a gerund name (e.g., `managing-files`) and write a third-person description.
2.  **Initialize Directory**: Create a folder in `.agent/skills/` with your skill name.
3.  **Craft SKILL.md**:
    *   Include YAML frontmatter with `name` and `description`.
    *   Define "When to use this skill".
    *   Provide a clear "Workflow" checklist.
    *   detail "Instructions" and best practices.
4.  **Add Assets**: Populate the `resources/` folder with templates and the `examples/` folder with reference implementations.
5.  **Verify**: Ensure paths use forward slashes (`/`) and the file is under 500 lines.

## Triggers & Triggers
Skills are activated based on:
- Keywords in the user's prompt.
- Intent patterns detected by the LLM.
- File path or content patterns.

---
*Created by AntiGravity AI*
