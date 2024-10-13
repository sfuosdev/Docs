---
sidebar_position: 2
---

# Git Setup and Configuration


## Installation

To start using Git, you'll need to install it on your local machine. Below are the installation instructions for various operating systems.

### Windows

1. **Download the Installer**: Visit the [Git for Windows](https://gitforwindows.org/) website and download the latest version of the Git installer.
2. **Run the Installer**: Open the downloaded `.exe` file and follow the installation wizard. You can typically accept the default settings.
3. **Verify Installation**: After installation, open `Git Bash` or the Command Prompt and run the following command to verify Git is installed:
   ```bash
   git --version
   ```

### Mac
1. **Using Homebrew**: If you have Homebrew installed, you can easily install Git with the following command:
    ```bash
    brew install git
    ```
2. **Verify Installation**: Open the Terminal and run:
    ```bash
    git --version
    ```

### Linux

For most Linux distributions, Git can be installed via the package manager.

- **Debian/Ubuntu**: 
    ```bash
    sudo apt update
    sudo apt install git
    ```

- **Fedora**: 
    ```bash
    sudo dnf install git
    ```

- **Arch Linux**:
    ```bash
    sudo pacman -S git
    ```

- **Other Distributions**: If your Linux distribution is not listed here, a quick Google search of your package manager command for Git should help you install.


## Initial Configuration

Following the installation of Git, it's essential to set up your user information. This information will be included in any operations you make, such as commits and merges.

1. **Set Your Name**:
    ```bash
    git config --global user.name "Your Name"
    ```
2. **Set Your Email**:
    ```bash
    git config --global user.email "your.email@example.com"
    ```
3. **Verify Configuration**: You can verify your user configuration any time by running:
    ```bash
    git config --list
    ```

## Conclusion

With Git installed and configured, you are now ready to start using version control in your projects. In the next sections, we'll explore the fundemental Git commands and workflows that will help you manage your code effectively.