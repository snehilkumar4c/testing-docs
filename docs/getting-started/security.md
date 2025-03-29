---
id: security
title: Security Configuration
sidebar_label: Security
---

# Security Configuration

Essential security configurations for your Vault deployment.

## TLS Configuration

### Generate Certificates
Using OpenSSL:

```bash
# Generate private key
openssl genrsa -out vault.key 2048

# Generate CSR
openssl req -new -key vault.key -out vault.csr

# Generate certificate
openssl x509 -req -in vault.csr -signkey vault.key -out vault.crt
```

### Configure TLS in Vault

```hcl
listener "tcp" {
  address       = "0.0.0.0:8200"
  tls_cert_file = "/path/to/vault.crt"
  tls_key_file  = "/path/to/vault.key"
}
```

## Audit Logging

Enable file audit device:

```bash
# Enable audit logging
vault audit enable file file_path=/var/log/vault/audit.log

# Enable syslog (recommended for production)
vault audit enable syslog
```

## Access Control

### Root Token Management

```bash
# Revoke root token after setup
vault token revoke <root_token>

# Generate new root token when needed
vault operator generate-root
```

### Policy Best Practices

Example secure policy:

```hcl
# Restrict access to specific path
path "secret/data/app/*" {
  capabilities = ["create", "read", "update", "delete"]
}

# Deny access to sensitive paths
path "sys/auth/*" {
  capabilities = ["deny"]
}
```

## Network Security

### Firewall Rules

```bash
# Allow Vault API
sudo ufw allow 8200/tcp

# Allow HA communication
sudo ufw allow 8201/tcp
```

## Production Checklist

1. **TLS Configuration**
   - Use valid certificates
   - Enable TLS 1.2+
   - Implement proper certificate management

2. **Authentication**
   - Disable root tokens
   - Use appropriate auth methods
   - Implement MFA where possible

3. **Audit Logging**
   - Enable multiple audit devices
   - Monitor audit logs
   - Set up log rotation

4. **Network Security**
   - Use private networks
   - Implement proper firewalls
   - Use security groups

5. **Secrets Management**
   - Regular key rotation
   - Lease management
   - Secret versioning

## Next Steps

- [Core Security Model](../core/security-model)
- [Authentication Methods](../core/auth/methods)
- [Production Deployment](../operations/deployment) 