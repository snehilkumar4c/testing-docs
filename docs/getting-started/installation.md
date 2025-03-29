---
id: installation
title: Installing Vault
sidebar_label: Installation
---

# Installing HashiCorp Vault

This guide will help you install Vault on various platforms.

## Binary Installation

### Download Latest Version

```bash
VAULT_VERSION="1.15.6"  # Replace with latest version
wget "https://releases.hashicorp.com/vault/${VAULT_VERSION}/vault_${VAULT_VERSION}_linux_amd64.zip"
```

### Install the Binary

```bash
unzip vault_*.zip
sudo mv vault /usr/local/bin/
vault --version
```

## Package Manager Installation

### MacOS with Homebrew

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/vault
```

### Ubuntu/Debian

```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt update
sudo apt install vault
```

### CentOS/RHEL

```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
sudo yum -y install vault
```

## Docker Installation

```bash
docker pull hashicorp/vault:latest
docker run --cap-add=IPC_LOCK -d --name vault hashicorp/vault:latest
```

## Verifying the Installation

After installation, verify that Vault is installed correctly:

```bash
vault --version
```

## Environment Setup

Add these to your shell configuration:

```bash
export VAULT_ADDR='http://127.0.0.1:8200'
# For development only
export VAULT_SKIP_VERIFY='true'
```

## Next Steps

- [First Steps with Vault](first-steps)
- [Security Configuration](security)
- [Core Concepts](../core/architecture) 