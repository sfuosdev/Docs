---
sidebar_position: 4
---

## Usage of Linux on MacOS
**MacOS** users needing a full Linux environment can use a virtual machine (VM) like VirtualBox or access a **Computer Science Instructional Lab (CSIL)** lab, where pre-configured Linux systems are available for development and testing.


## MacOS Subsystem for Linux Installation Guide

Before you begin, ensure your system meets the following requirements:
- **macOS 10.13 or later**
- **Safari 12+, Firefox 78.1+, chrome 87+**

## Virtual Machines
The best way to utilize **Linux** in MacOS is to use a Virutal machine. \
The following is a list of tools you can use to utilize Linux on MacOS
 - [VirtualBox](https://www.virtualbox.org/)
 - [Parallels Desktop](https://www.parallels.com/products/desktop/?utm_medium=cpc&utm_source=google&utm_campaign=PDfM%20-%20B%20-%20EN%20-%20PS%20-%20Tier1%20-%20Consolidated&utm_term=parallels%20desktop&utm_content=General&utm_id=43693686&extensionid=&matchtype=e&device=c&devicemodel=&creative=670597955224&network=g&placement=&x-source=ppc&gad_source=1&gclid=Cj0KCQiA-aK8BhCDARIsAL_-H9lFedZ818kCuJZZlEgaKsgUODiQpwheGeihp-XNp575bqQvPgHIAKAaAjVvEALw_wcB)
 - [VMware Fusion](https://blogs.vmware.com/teamfusion/2024/05/fusion-pro-now-available-free-for-personal-use.html)
 - [UTM](https://mac.getutm.app/)
 
 There are many Virtual Machines out in the market but we personally recommand using **UTM** as it is free of use and it is macOS-native (Pre-installed)

## Recommended Linux Distribution for macOS Users
| Name | Description |
|------------------|------------------|
| [Ubuntu](https://ubuntu.com/download/desktop)  | User-friendly, great for beginners.   |
| [Pop!_OS](https://pop.system76.com/)  | Optimized for productivity and developers.   |
| [Fedora](https://fedoraproject.org/)  | Cutting-edge features and polished experience.  |
| [Debian](https://www.debian.org/distrib/)  | Stable and reliable.   |
| [Elementary OS](https://elementary.io/)   | Designed with a macOS-like interface.  |

## How to use Virtual Machine to use Linux
For demonstration purposes we will be using Ubunto ISO file uploaded to the VirtualBox as an example. We will also assume that users have already downloaded the required VM and Linux distribution file before reading this part of the tutorial.

There exists four major steps when using Virtual machines.

- Creating a new Virtual Machine in VirtualBox
- Mount the Linux ISO to the VM
- Start the VM and download Linux
- Complete Post installation setup

### Step 1 Creating a new Virtual Machine in VirtualBox
1. Open VirtualBox:
    - Launch VirtualBox after installation.

2. Create a New VM:
    - Click the "New" button to create a new virtual machine.
    - Enter a name for your VM (e.g., "Ubuntu VM").
    - Choose the type of operating system (e.g., Linux) and version (e.g., Ubuntu (64-bit)).
    - Click Next.
3. Assign Memory (RAM):

   - Decide how much memory (RAM) you want to allocate to the VM.
   - For Ubuntu, a minimum of 2 GB is recommended, but 4 GB is better if your Mac has enough RAM.
   - Click Next.
4. Create a Virtual Hard Disk:

    - Choose Create a virtual hard disk now and click Create.
    - Choose the format for the virtual disk (e.g., VDI).
    - Choose the type of storage (dynamically allocated is fine).
    - Set the size of the virtual hard disk (e.g., 20 GB is a reasonable minimum).
    - Click Create.

### Step 2 Mount the Linux ISO to the VM
- Mount the ISO:
    - In the settings window, go to Storage.
    - Under Controller: IDE, you’ll see an empty disk. Click the empty disk icon and then click the disk icon next to Optical Drive on the right.
    - Select Choose a disk file and navigate to the Ubuntu ISO file you downloaded earlier.
    - Select the ISO and click Open.
    - Click OK to save the settings.

### Step 3 Start the VM and download Linux
- 
    - start the VM
    - Install Linux

### Step 4 Complete Post installation setup
1. log in to Linux with your login info
2. Update the system by inputing the following commands to the terminal 

``` 
sudo apt update && sudo apt upgrade
```
