---
name: generating-ats-resumes
description: Generates ATS-friendly (Applicant Tracking System) resumes from user input. Focuses on keyword optimization, standard formatting to prevent parsing glitches, and alignment with job descriptions. Use when the user asks to build, update, or optimize a resume for job applications.
---

# Generating ATS Resumes

## When to use this skill
- Creating a new resume from scratch.
- Optimizing an existing resume for a specific job description.
- Ensuring a resume passes automated recruitment filters (ATS).
- Tailoring skills, tools, and certifications to match industry standards.

## Workflow

1. **Information Gathering**
   - [ ] Ask for the user's current resume or career details (Experience, Education).
   - [ ] Ask for the **Job Description (JD)** for the target role.
   - [ ] Request a list of specific certifications or tools they want to highlight.

2. **Keyword & Gap Analysis**
   - [ ] Extract key skills, tools, and job titles from the JD.
   - [ ] Compare user input with JD keywords.
   - [ ] Identify missing high-priority keywords that the user possesses but hasn't listed.

3. **Resume Construction**
   - [ ] Apply a clean, single-column format (ATS-friendly).
   - [ ] Use standard headings: Professional Summary, Work Experience, Skills, Education.
   - [ ] Use bullet points instead of paragraphs for experience.
   - [ ] Integrate keywords naturally into the summary and experience descriptions.

4. **Validation & Proofing**
   - [ ] Check for "ATS Glitches": No images, charts, columns, or complex tables.
   - [ ] Verify dates follow common formats (e.g., MM/YYYY or Month YYYY).
   - [ ] Ensure all listed tools and certifications are clearly labeled.

## Instructions

### 1. ATS Formatting Rules (Strict)
To ensure the resume is accurately read by parsing systems:
- **No Complex Layouts**: Avoid multi-column layouts, tables with nested cells, or images/icons.
- **Font Selection**: Use standard fonts (Arial, Calibri, Helvetica, or Times New Roman).
- **Header/Footer**: Do not put essential contact info in headers or footers (some ATS skip them).
- **File Type**: Advise the user to save as **PDF** (standard) or **DOCX** (most compatible for older systems).

### 2. Keyword Optimization Strategy
- **Exact Match**: If a JD asks for "Project Management", don't just write "Managed projects". Use the exact phrase.
- **Acronyms**: Use both the acronym and the full term (e.g., "Certified Public Accountant (CPA)").
- **Frequency**: Place the most important keywords in the **Skills** section AND weave them into **Experience** bullet points.

### 3. Key Categories to Target
- **Skills**: Python, SQL, Project Management, Agile, etc.
- **Job Titles**: Data Analyst, HR Executive, Senior Developer.
- **Tools & Software**: SAP, Excel, Salesforce, AWS, Jira.
- **Certifications**: PMP, AWS Certified Solutions Architect, CPA.

### 4. Structure Template
```markdown
# [Full Name]
[City, State] | [Phone Number] | [Email] | [LinkedIn Profile URL]

## PROFESSIONAL SUMMARY
[3-4 sentences highlighting key achievements and target role keywords.]

## SKILLS
- **Technical**: [Key Tools/Software from JD]
- **Core**: [Functional Skills e.g., Strategic Planning, Data Analysis]

## PROFESSIONAL EXPERIENCE
**[Job Title]** | [Company Name] | [Start Date] – [End Date]
- Start with a strong verb.
- Include a quantified achievement (e.g., "Increased sales by 20%").
- Integrate target keywords.

## EDUCATION
**[Degree]** | [University Name] | [Graduation Year]

## CERTIFICATIONS
- [Name of Certification] - [Issuing Organization]
```

## Resources
- [ATS Glitch Checklist](resources/ats-check.md)
- [Action Verbs List](resources/action-verbs.md)
- [Example: Tailored Resume](examples/tailored-resume.md)

## Error Handling
- **Missing JD**: If the user doesn't provide a JD, generate a generic high-quality resume but warn the user that tailoring is the "BIG one" for ATS success.
- **Gaps in History**: Suggest using a "Hybrid" format that focuses on skills if the user has significant employment gaps.
- **Formatting Glitches**: If a user asks to include creative elements (like a photo or bar charts for skill levels), strictly advise against it for ATS purposes.
