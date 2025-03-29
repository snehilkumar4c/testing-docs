---
id: getting-started
title: Getting Started with Vault
sidebar_label: Getting Started
---

# Getting Started with HashiCorp Vault

This guide will help you get started with HashiCorp Vault, walking you through the installation, basic configuration, and first steps with secrets management.

## Installation

### 1. Download Vault

Choose your platform and download Vault:

```bash
# Linux/MacOS
wget https://releases.hashicorp.com/vault/1.15.6/vault_1.15.6_linux_amd64.zip
unzip vault_1.15.6_linux_amd64.zip

# Move to system path
sudo mv vault /usr/local/bin/
```

### 2. Verify Installation

```bash
vault --version
```

## Initial Configuration

### 1. Create a Configuration File

Create a file named `config.hcl`:

```hcl
storage "file" {
  path = "./vault-data"
}

listener "tcp" {
  address     = "127.0.0.1:8200"
  tls_disable = 1  # Only for development
}

ui = true
```

### 2. Start the Server

```bash
# Start Vault server
vault server -config=config.hcl

# In a new terminal, set the Vault address
export VAULT_ADDR='http://127.0.0.1:8200'
```

### 3. Initialize Vault

```bash
# Initialize Vault
vault operator init

# This will output 5 unseal keys and a root token
# SAVE THESE SECURELY
```

### 4. Unseal Vault

```bash
# You need to run this 3 times with different keys
vault operator unseal
```

## First Steps with Secrets

### 1. Login to Vault

```bash
# Login with root token
vault login
```

### 2. Enable a Secrets Engine

```bash
# Enable the KV secrets engine
vault secrets enable -path=secret kv-v2
```

### 3. Store Your First Secret

```bash
# Write a secret
vault kv put secret/my-app/config \
    api_key=abc123 \
    password=secret123

# Read a secret
vault kv get secret/my-app/config
```

## Basic Policy Management

### 1. Create a Policy

Create a file named `my-policy.hcl`:

```hcl
path "secret/data/my-app/*" {
  capabilities = ["read", "list"]
}
```

Apply the policy:

```bash
vault policy write my-policy my-policy.hcl
```

### 2. Create a Token

```bash
# Create a token with the policy
vault token create -policy=my-policy
```

## Next Steps

After completing these basic steps, you can explore:

1. [Authentication Methods](core/auth-methods)
2. [Secrets Engines](core/secrets-engines)
3. [Access Policies](core/policies)
4. [Token Management](core/tokens)

## Development vs Production

Note: This guide uses development settings. For production:

- Enable TLS
- Use a production-grade storage backend
- Implement proper unsealing mechanisms
- Set up proper access controls
- Configure audit logging

For production deployment, refer to our [Operations Guide](operations/installation).
