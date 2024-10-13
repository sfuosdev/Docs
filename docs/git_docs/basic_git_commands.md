---
sidebar_position: 3
---

# Basic Git Commands

Git provides a variety of commands to manage your version control efficiently. Below are some of the most commonly used Git commands along with their descriptions.

## 1. Initializing a Repository

To create a new Git repository, navigate to your project directory and run:

```bash
git init
```

## 2. Cloning a Repository

To create a copy of an existing Git repository on your local machine, use:
```bash
git clone <repository-url>
```


## 3. Checking Repository Status

To check the status of your working directory, incluuding staged, unstaged, and untracked files, run:
```bash
git status
```

## 4. Staging Changes

To stage changes for the next commit, use:
```bash
git add <file-name>
```

To stage all changes at once, use:
```bash
git add .
```

## 5. Commiting Changes

To commit your stages changes with a descriptive message, run:
```bash
git commit -m "Your commit message here"
```

## 6. Viewing Commit History

To view the commit history of your repository, use:
```bash
git log
```

You can format the output of git log using different tags such as --online for a concise view:
```bash
git log --oneline
```

## 7. Pushing Changes

To push your local commits to a remote repository, use:
```bash
git push origin <branch-name>
```

## 8. Pulling Changes

To update your local repository with changes from the remote repository, run:
```bash
git pull
```

## 9. Creating a New Branch

To create a new branch, use:
```bash
git branch <branch-name>
```

## 10. Switching Branches

To switch to an existing branch, run:
```bash
git checkout <branch-name>
```

You can also create and switch to a new branch in one command using this:
```bash
git checkout -b <branch-name>
```

## 11. Merging Branches

To merge changes from one branch into your current branch, use:
```bash
git merge <branch-name>
```

## 12. Deleting Branches

To delete a local branch that you no longer need, run:
```bash
git branch -d <branch-name>
```

## Conclusion

These are some of the basic commands that form the foundation of using Git. Getting comfortable using these commands will help you manage your projects effectively. In the next sections, we will dive into the SFU OS Dev Club specfic Git guidlines as well as more advanced git workflows.