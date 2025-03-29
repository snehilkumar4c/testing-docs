---
id: first-steps
title: First Steps with Vault
sidebar_label: First Steps
---

# First Steps with Vault

After installing Vault, let's get started with basic operations.

## Starting the Server

### Development Mode
For testing and development:

```bash
vault server -dev
```

### Production Mode
Create a configuration file `config.hcl`:

```hcl
storage "file" {
  path = "/opt/vault/data"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = "false"
  tls_cert_file = "/opt/vault/tls/tls.crt"
  tls_key_file  = "/opt/vault/tls/tls.key"
}

ui = true
```

Start the server:
```bash
vault server -config=config.hcl
```

## Initializing Vault

```bash
# Initialize Vault
vault operator init

# This will output:
# - 5 Unseal Keys (save securely)
# - Initial Root Token (save securely)
```

## Unsealing Vault

You need 3 of the 5 unseal keys to unseal Vault:

```bash
# Run this 3 times with different keys
vault operator unseal
```

## First Operations

### 1. Authenticate

```bash
# Login with root token
vault login
```

### 2. Enable a Secrets Engine

```bash
# Enable the KV secrets engine
vault secrets enable -path=secret kv-v2
```

### 3. Write & Read Secrets

```bash
# Write a secret
vault kv put secret/hello foo=world

# Read a secret
vault kv get secret/hello
```

### 4. Create a Policy

Create `my-policy.hcl`:
```hcl
path "secret/data/hello" {
  capabilities = ["read"]
}
```

Apply the policy:
```bash
vault policy write my-policy my-policy.hcl
```

### 5. Create a Token

```bash
# Create a token with the policy
vault token create -policy=my-policy
```

## Using the UI

1. Access the UI at `http://localhost:8200`
2. Login with your token
3. Navigate the interface
4. Manage secrets visually

## Next Steps

- [Security Configuration](security)
- [Authentication Methods](../core/auth/methods)
- [Secrets Engines](../core/secrets/engines) 