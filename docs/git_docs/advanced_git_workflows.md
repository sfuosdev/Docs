---
sidebar_position: 5
---

# Advanced Git Workflows

In the SFU Open Source Development Club, we follow a streamlined Git workflow to facilitate collaboration and maintain code quality. This document outlines our workflow for managing features, bug fixes, and issues.

## Workflow Overview + Detailed Steps

1. **Branch Creation**: Create separate branches for each new feature, bug fix, or issue.
2. **Development**: Implement changes on the designated branch and commit changes with clear and descriptive messages.
3. **Pushing Changes**: Push the branch to the remote repository.
4. **Create Pull Request**: Open a pull request for review and merging.
5. **Code Review and Merging**: Conduct code reviews and merge changes once approved.
6. **Pull the Latest Changes**: Pull the latest changes to ensure your local main is up to date..


## 1. Branch Creation

When starting work on a new feature, bug fix, or issue, create a new branch off the `main` branch.

- **Naming Convention**: Use the following naming convention for branches:
  - **Features**: `feature/your-feature-name`
  - **Bug Fixes**: `bugfix/your-bugfix-name`
  - **Issues**: `issue/your-issue-name`

#### Example Commands:
```bash
# Checkout the main branch
git checkout main

# Pull the latest changes
git pull origin main

# Create a new branch for a feature
git checkout -b feature/new-feature
```

## 2. Development

Make changes in your branch. Ensure you frequently commit your work to save progress.
```bash
# After making changes
git add .
git commit -m "implement new feature"
```

## 3. Pushing Changes

Once you have completed your work and are ready to share it, push your branch to the remote repository.
```bash
git push origin feature/new-feature
```

## 4. Create a Pull Request

After pushing your branch, create a pull request (PR) in the repository on GitHub
- **Description**: Provide a clear description of the changes made, referencing any relevant issues.


## 5. Code Review and Merging

Once the pull request (PR) is created, it is essential for team members to review the changes. This process ensures that the code meets the club's standards and that no issues are overlooked.

### Review Process
- At least one team member should carefully read through the code changes in the PR.
- Consider the following during the review:
  - Code quality and readability
  - Functionality and correctness of the implemented changes
  - Adherence to the club's coding standards
  - Any potential bugs or issues that need to be addressed

### Addressing Feedback
If feedback is provided during the review, make the necessary changes to your branch. You can do this by:
1. Making the changes in your local branch.
2. Committing the updates with clear messages.
3. Pushing the changes to the remote branch.

#### Example Commands:
```bash
# Make changes in your code editor
git add .
git commit -m "address review comments"
git push origin feature/your-feature-name
```

### After Approval

Once the PR has been approved by at least one team member:
1. **Merge the Pull Request**: Merge the changes into the main branch.
2. **Delete the Feature Branch**: If the feature branch is no longer needed, delete it to keep the repository clean.

#### Example Commands to Delete the Local Branch:
```bash
# Delete the local branch
git branch -d feature/your-feature-name
```

#### Example Commands to Delete the Remote Branch:
```bash
# Delete the remote branch
git push origin --delete feature/your-feature-name
```


### 6. Pull the Latest Changes

After merging, ensure your local main branch is up to date.

```bash
# Checkout main branch
git checkout main

# Pull the latest changes
git pull origin main
```

