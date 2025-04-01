import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secrets Management',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Securely store and control access to tokens, passwords, certificates, 
        encryption keys, and other sensitive data using a UI, CLI, or HTTP API.
      </>
    ),
  },
  {
    title: 'Identity-Based Access Control',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Enable fine-grained access control with multiple authentication methods 
        and comprehensive policy-based authorization system.
      </>
    ),
  },
  {
    title: 'Encryption as a Service',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Provide encryption and decryption services backed by industry-standard 
        cryptographic algorithms, with support for automatic key rotation.
      </>
    ),
  },
  {
    title: 'Data Protection',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Protect sensitive data with advanced encryption, secure storage, 
        and comprehensive audit logging capabilities.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Access Vault through an intuitive HTTP API, CLI tools, and client 
        libraries available in multiple programming languages.
      </>
    ),
  },
  {
    title: 'High Availability',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Deploy Vault in highly-available configurations with built-in support 
        for clustering, disaster recovery, and performance replication.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
