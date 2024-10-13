---
sidebar_position: 4
---

# Club-Specific Guidelines

Welcome to the SFU Open Source Development Club! To ensure smooth collaboration on our projects, we have established the following Git guidelines. Please adhere to these practices when working with Git and GitHub.

## 1. Repository Structure

- Each project should have its own repository under the club's GitHub organization.
- Follow a consistent naming convention for repositories, such as `project-name` or `club-name/project-name`.


## 2. Branching Strategy

Ensure a new branch is created for each change such as feature, or bug fix. No changes should be made in the main branch. Instead, create a new branch and create a pull request for any changes you want to merge into the main branch.

### 2.1 Branch Naming

- Use descriptive names for branches that reflect the purpose of the branch.
  - For bug fixes: `bugfix/<issue-number>/short-description`
  - For features: `feature/<issue-number>/<short-description>`

### 2.2 Default Branch

- The default branch for all projects should be named `main`.
- All development work should be done on seperate branches, and the main branch should always be stable.


## 3. Commit Guidelines

### 3.1 Commit Messages

- **Use the imperative mood**: Write commit messages in the imperative form (e.g., "Add feature" instead of "Added feature" or "Adding feature"). This aligns with the convention used in Git, making the history easier to read.

- **Limit the subject line**: Keep the subject line concise, ideally around 50 characters or fewer. This helps maintain readability in logs and ensures that the main point of the commit is clear at a glance.

- **Separate subject and body**: If you need to provide additional details, separate the subject line from the body with a blank line. Use the body to explain the *why* behind the change, providing context that may not be obvious from the subject line alone.

- **Be descriptive**: Write commit messages that clearly describe the changes made. Avoid vague messages like "Fixed things" and instead specify what was fixed and why it was necessary.

- **Reference issues**: If applicable, reference any related issue numbers in your commit message (e.g., "Fixes #123") to establish a clear connection between the commit and the issue being addressed.

- **Use the body for details**: Use the body of the commit message to explain the reasoning behind the change, any potential impacts, and any relevant background information that may help others understand the context.

### 3.2 Small Commits

- Make small, incremental commits. Each commit should represent a single logical change.
- Avoid committing large changes all at once; this makes it harder to track history and review code.


## 4. Pull Requests

### 4.1 Creating Pull Requests

- Always create a pull request (PR) for any changes you want to merge into the main branch.
- Provide a clear title and description for the PR, referencing any related issues (e.g., "Fixes #3").

### 4.2 Review Process

- Request reviews from at least one other member before merging your PR.
- Address any comments or suggestions from reviewers before merging.

### 4.3 Merging Pull Requests

- Only merge PRs into the main branch if they have been reviewed and approved.
- Use the "Squash and merge" option to keep the commit history clean.


## 5. Documentation

- Update the project documentation as part of your PR if your changes affect usage or setup.
- Use Markdown files for documentation and keep them organized within the repository.


## 6. Git Best Practices

- Regularly pull from the main branch to keep your feature branches up-to-date.
- Resolve merge conflicts promptly and communicate with your team about any significant changes.
- Use tags for marking releases in your projects (e.g., `v1.0.0`).