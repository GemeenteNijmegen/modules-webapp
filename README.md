# Generic webapp

This packages provides the building blocks to create a standardized webapp.
It contains both infrastructure (CloudFront, S3 buckets etc.) as application code (login/authetnication)


## Usage

Creating the webapp foundation is easy.
```ts
/**
 * Create the webapp!
 */
const webapp = new WebappConstruct(this, 'app', {
  applicationName: Statics.projectName,
  cloudFrontCertificate: certificate,
  domainName: `${hostedZone.zoneName}`,
  additionalSourceFilesDir: 'src/resources',
  hostedZone: hostedZone,
  staticResourcesDirectory: './src/app/static-resources/',
  defaultPath: '/home',
  postLoginProcessor: this.postLoginHook(secretBrpMtlsPrivateKey, ssmBrpMtlsCertficate, ssmBrpMtlsRootCa),
  oidcProfiles: props.configuration.oidcProfiles,
});
```

<details>
<summary>Post login processor</summary>
Example on how to setup a post login processor function

```ts
  /**
   * Constrcut a post-login hook function that is passed directly
   * to the webapp. It will register the function and redirect trafic
   * there after the pre-login (auth lambda).
   * @returns
   */
  postLoginHook(privateKey: ISecret, cert: IStringParameter, rootCa: IStringParameter) {
    const hook = new ApiFunction(this, 'post-login-function', {
      description: 'Post-login lambda',
      apiFunction: PostloginFunction,
      environment: {
        BRP_API_URL: StringParameter.valueForStringParameter(this, Statics.ssmBrpApiEndpointUrl),
        MTLS_PRIVATE_KEY_ARN: privateKey.secretArn,
        MTLS_CLIENT_CERT_NAME: Statics.ssmBrpMtlsCertificate,
        MTLS_ROOT_CA_NAME: Statics.ssmBrpMtlsRootCA,
      },
    });
    privateKey.grantRead(hook.lambda);
    cert.grantRead(hook.lambda);
    rootCa.grantRead(hook.lambda);
    return hook;
  }
```

</details>

## Adding multiple pages
```ts
/**
 * Add a home page to the webapp
 * @param webapp
 */
addHomePage(webapp: WebappConstruct) {
  const homeFunction = new ApiFunction(this, 'home-function', {
    description: 'Home lambda',
    apiFunction: HomeFunction,
  });
  webapp.addPage('home', homeFunction, '/home');
}
```