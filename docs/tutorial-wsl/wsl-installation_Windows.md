---
sidebar_position: 3
---

# What is Windows Subsystem for Linux?
Linux (WSL), or the Windows Subsystem for Linux, is a feature in Windows that allows you to run Linux directly on your Windows computer without needing a virtual machine or dual-boot setup. It gives you access to a Linux terminal where you can use Linux commands, run scripts, and even install software from Linux distributions like Ubuntu or Debian. WSL is popular among developers and system administrators because it combines the convenience of Windows with the power of Linux, making tasks like coding, testing, and automating processes much easier.


## Windows Subsystem for Linux (WSL) Installation Guide

### **Prerequisites**

Before you begin, ensure your system meets the following requirements:
- **Windows 10:** Version 2004 or higher.
- **Windows 11:** Any version.
- Your system must be running **64-bit** architecture.

You can check your Windows version by pressing `Win + R`, typing `winver`, and pressing Enter.

## Windows

Steps:
1. Download a Linus distribution ISO (e.g, Ubuntu) from the official site.
2. Install your choice of VM tool on you Mac
3. Create a new virtual machine and mount the ISO to install Linux.

## Installing WSL via Commands
First you'll need to nagivate to your computer's PowerShell (Terminal) and run it as [**administrator**](https://learn.microsoft.com/en-us/windows/terminal/faq).\
Type the following command to begin the Linux installation

```
wsl --install
```

This command will enable the features necessary to run WSL and install the Ubuntu distribution of Linux.
**Warning** the above command only works if WSL is not installed at all.

## Install a Specific Linux Distribution
- Open Microsoft Store
- Search for your preferrred Linux distribution
    - [Ubuntu](https://ubuntu.com/download/desktop)
    - [Debian](https://www.debian.org/distrib/)
    - [Kali Linux](https://www.kali.org/get-kali/#kali-platforms)

## How to use WSL in Windows (VSCode)
1. install the WSL extension in VSCode's extension tab
2. Navigate to the folder you would like to open in VSCode
3. Type the following in the terminal
```
code .
```
4. After a moment, a new VSCode will appear, and you will see this notification \

![alt text](https://code.visualstudio.com/assets/docs/remote/wsl/wsl-starting-notification.png)

Congratulation! You have successfully opened a WSL folder in VSCode.
 
