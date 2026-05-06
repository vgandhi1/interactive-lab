# The Complete Git & GitHub Guide

This guide covers everything from beginner basics to advanced workflows.

- **[Part 1: Beginner's Guide](#part-1-beginners-guide)** (The "Happy Path" for daily use)
- **[Part 2: Advanced Guide](#part-2-advanced-guide)** (Branching, Rebase, Stashing, Undoing changes)

---

# Part 1: Beginner's Guide

## 📚 What is Git & GitHub?
- **Git** is a version control system (like a time machine for code).
- **GitHub** is a cloud hosting platform for Git repositories.

## 🛠️ Prerequisites
1.  **Install Git**: [git-scm.com/downloads](https://git-scm.com/downloads)
2.  **GitHub Account**: [github.com](https://github.com)
3.  **Configure Identity**:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```

## 🔐 Authentication (Required)
GitHub requires authentication for all write operations. Password authentication was removed in 2021. You must use one of the following methods:

### Method 1: Personal Access Token (PAT) - Easiest
Think of this as an application-specific password.

1.  **Generate**: Go to **Settings** > **Developer settings** > **Tokens (classic)** > **Generate new token (classic)**.
2.  **Scopes**: Check `repo` (full control of private repositories).
3.  **Usage**: Copy the token. When Git asks for a password in the terminal, **paste this token**.
    - *Note*: On Windows/Mac, the credential manager will likely save this for you after the first time.

### Method 2: SSH Keys - Most Secure
This sets up a cryptographic pair between your computer and GitHub.

1.  **Generate Key**:
    ```bash
    ssh-keygen -t ed25519 -C "your.email@example.com"
    ```
    (Press Enter to accept default location)
2.  **Copy Public Key**:
    - Windows: `type %userprofile%\.ssh\id_ed25519.pub`
    - Mac/Linux: `cat ~/.ssh/id_ed25519.pub`
3.  **Add to GitHub**: Go to **Settings** > **SSH and GPG keys** > **New SSH key** and paste the key.
4.  **Test Connection**:
    ```bash
    ssh -T git@github.com
    # Expected: "Hi username! You've successfully authenticated..."
    ```
5.  **Use SSH URL**: When cloning or adding remotes, use the SSH URL format:
    `git@github.com:username/repo.git`

### Method 3: GitHub CLI (Recommended for Modern Use)
If you install the **GitHub CLI** (`gh`), you can handle authentication very easily from the command line.

1.  **Install**: `winget install GitHub.cli` (Windows) or `brew install gh` (Mac).
2.  **Login**:
    ```bash
    gh auth login
    ```
    - Select **GitHub.com**
    - Select **HTTPS**
    - Select **Login with a web browser**
    - Copy the code, press Enter, paste code in browser.
3.  **Bonus**: This automatically sets up Git credential helper for you!

### Method 4: Git Credential Manager
If you install Git on Windows or Mac, it often comes with a "Credential Manager".
- When you first push, a browser window may pop up asking you to sign in to GitHub.
- Once signed in, it saves a token securely in your OS keychain.

---

## 🚀 Core Workflow: The "Happy Path"

### 1. Start a Project
```bash
# New Project
git init
git remote add origin https://github.com/USER/REPO.git

# OR Existing Project
git clone https://github.com/USER/REPO.git
```

### 2. Daily Cycle
1.  **Save Changes**:
    ```bash
    git add .
    git commit -m "Added login feature"
    ```
2.  **Share Changes**:
    ```bash
    git push origin main
    ```
3.  **Get Updates**:
    ```bash
    git pull
    ```

---

# Part 2: Advanced Guide

## 🌳 Branching & Merging
Don't work on `main` directly. Use branches to isolate features.

### Workflow
1.  **Create Branch**: `git checkout -b feature-login`
2.  **Work & Commit**: `git commit -m "..."`
3.  **Merge back to Main**:
    ```bash
    git checkout main
    git pull origin main  # Update main first!
    git merge feature-login
    git push origin main
    ```
4.  **Delete Branch**: `git branch -d feature-login`

## 🔀 Merge vs Rebase
When you have changes on your branch AND new changes on `main`, you need to combine them.

### Option A: Merge (`git merge main`)
- **What it does**: Creates a "merge commit" that ties the two histories together.
- **Pros**: Preserves complete history and chronology. Non-destructive.
- **Cons**: History can become cluttered with "Merge branch 'main'..." commits.
- **Use when**: You want to preserve the exact history of what happened when.

### Option B: Rebase (`git rebase main`)
- **What it does**: "Re-plays" your commits *on top* of the latest main.
- **Pros**: Creates a linear, clean history. No extra merge commits.
- **Cons**: Rewrites history (dangerous on shared branches).
- **Use when**: You want a clean history on your local feature branch before merging.

```bash
# How to Rebase
git checkout feature-branch
git pull origin main --rebase
# If conflicts occur: fix files, then 'git rebase --continue'
```

## 📦 Fetching vs Pulling
- **`git pull`**: Downloads changes AND merges them immediately.
- **`git fetch`**: Downloads changes but **does not** merge them. Safe way to inspect changes.

**Safe Update Pattern:**
```bash
git fetch origin
git log main..origin/main  # See what's new on the server
git merge origin/main      # Merge if it looks good
```

## 💼 Stashing
Useful when you're not ready to commit but need to switch branches.

1.  **Save**: `git stash save "WIP description"`
2.  **Restore**: `git stash pop`
3.  **List**: `git stash list`

## ⏪ Undoing Mistakes

### 1. Undo `git add` (Unstage)
```bash
git reset HEAD file.txt
```

### 2. Undo `git commit` (Keep changes)
```bash
git reset --soft HEAD~1
```

### 3. Discard local changes (Dangerous!)
```bash
git checkout -- file.txt
# OR for all files
git reset --hard HEAD
```

---

# 🔧 Cheat Sheet

| Command | Description |
| :--- | :--- |
| `git status` | Check file status |
| `git log --oneline --graph` | Visual commit history |
| `git diff` | Show unstaged changes |
| `git branch -a` | List all local & remote branches |
| `git remote -v` | Show remote URL |
| `git pull --rebase` | Pull and rebase instead of merge |
| `git commit --amend` | Fix the last commit message |
