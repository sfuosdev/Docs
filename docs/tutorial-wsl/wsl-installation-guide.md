---
sidebar_position: 3
---

# What is Linux(WSL)?
Linux (WSL), or the Windows Subsystem for Linux, is a feature in Windows that allows you to run Linux directly on your Windows computer without needing a virtual machine or dual-boot setup. It gives you access to a Linux terminal where you can use Linux commands, run scripts, and even install software from Linux distributions like Ubuntu or Debian. WSL is popular among developers and system administrators because it combines the convenience of Windows with the power of Linux, making tasks like coding, testing, and automating processes much easier.

## MacOS
The best way to utilize **Linux** in MacOS is to use a Virutal machine. \
The following list are tools you can use to use Linux on MacOS
 - [VirtualBox](https://www.virtualbox.org/)
 - [Parallels Desktop](https://www.parallels.com/products/desktop/?utm_medium=cpc&utm_source=google&utm_campaign=PDfM%20-%20B%20-%20EN%20-%20PS%20-%20Tier1%20-%20Consolidated&utm_term=parallels%20desktop&utm_content=General&utm_id=43693686&extensionid=&matchtype=e&device=c&devicemodel=&creative=670597955224&network=g&placement=&x-source=ppc&gad_source=1&gclid=Cj0KCQiA-aK8BhCDARIsAL_-H9lFedZ818kCuJZZlEgaKsgUODiQpwheGeihp-XNp575bqQvPgHIAKAaAjVvEALw_wcB)
 - [VMware Fusion](https://blogs.vmware.com/teamfusion/2024/05/fusion-pro-now-available-free-for-personal-use.html)
 - [UTM](https://mac.getutm.app/)
 
 There are many Virtual Machines out in the market but we personally recommand using **UTM** as it is free of use and it is macOS-native (Pre-installed)

## Recommended Linux Distribution for macOS Users
| Name | Description |
|------------------|------------------|
| Ubuntu  | User-friendly, great for beginners.   |
| Pop!_OS  | Optimized for productivity and developers.   |
| Fedora  | Cutting-edge features and polished experience.  |
| Debian  | Stable and reliable.   |
| Elementary OS   | Designed with a macOS-like interface.  |

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

