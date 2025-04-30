---
id: vault
title: HashiCorp Vault Overview
sidebar_label: Vault Overview
---

# HashiCorp Vault Documentation

## Introduction

HashiCorp Vault is a powerful secrets management and encryption service that helps organizations secure, store, and tightly control access to tokens, passwords, certificates, encryption keys, and other sensitive data.

## Key Features

- **Secrets Management**: Securely store and manage secrets
- **Encryption as a Service**: Encrypt data without storing it
- **Dynamic Secrets**: Generate secrets on-demand
- **Token Management**: Manage access tokens and authentication
- **Audit Logging**: Track all access to secrets
- **Policy-based Access Control**: Fine-grained access control
- **Faq Section**

## Getting Started

### Installation

```bash
# Download Vault
wget https://releases.hashicorp.com/vault/1.15.6/vault_1.15.6_linux_amd64.zip

# Unzip the package
unzip vault_1.15.6_linux_amd64.zip

# Move the binary to your PATH
sudo mv vault /usr/local/bin/
```

### Basic Configuration

Create a basic configuration file `config.hcl`:

```hcl
storage "file" {
  path = "/opt/vault/data"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = 1
}

ui = true
```

### Starting Vault

```bash
# Start Vault server
vault server -config=config.hcl

# In a new terminal, initialize Vault
vault operator init

# Unseal Vault (repeat 3 times with different keys)
vault operator unseal <unseal-key>
```

## Core Concepts

### Secrets Engines

Vault supports multiple secrets engines:

- **KV (Key-Value)**: Store static secrets
- **AWS**: Generate AWS credentials
- **Database**: Generate database credentials
- **Transit**: Encryption as a service
- **PKI**: X.509 certificate management

### Authentication Methods

- **Token**: Default authentication method
- **Userpass**: Username/password authentication
- **LDAP**: LDAP authentication
- **AWS**: AWS IAM authentication
- **GitHub**: GitHub authentication

### Policies

Policies define what a user can access:

```hcl
path "secret/data/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "auth/token/lookup-self" {
  capabilities = ["read"]
}
```

## Best Practices

1. **Regular Backups**: Backup your Vault data regularly
2. **Access Control**: Implement least privilege access
3. **Audit Logging**: Enable and monitor audit logs
4. **Secrets Rotation**: Implement regular secrets rotation
5. **High Availability**: Configure Vault for HA when needed

## Common Operations

### Storing Secrets

```bash
# Store a secret
vault kv put secret/my-app/config username=admin password=secret123

# Read a secret
vault kv get secret/my-app/config
```

### Managing Policies

```bash
# Create a policy
vault policy write my-policy policy.hcl

# List policies
vault policy list
```

### Authentication

```bash
# Login with userpass
vault login -method=userpass username=admin

# Login with token
vault login <token>
```

## Monitoring and Maintenance

### Health Check

```bash
# Check Vault status
vault status

# Check seal status
vault operator seal-status
```

### Audit Logs

```bash
# Enable audit logging
vault audit enable file file_path=/var/log/vault/audit.log

# List audit devices
vault audit list
```

## Troubleshooting

Common issues and solutions:

1. **Vault Unseal Issues**
   - Ensure correct unseal keys
   - Check storage backend connectivity

2. **Authentication Problems**
   - Verify token validity
   - Check policy permissions

3. **Performance Issues**
   - Monitor resource usage
   - Check storage backend performance

## Additional Resources

- [Official Vault Documentation](https://www.vaultproject.io/docs)
- [Vault GitHub Repository](https://github.com/hashicorp/vault)
- [Vault Community Forum](https://discuss.hashicorp.com/c/vault/27) 
