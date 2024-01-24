# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Webapp <a name="Webapp" id="modules-webapp.Webapp"></a>

- *Implements:* aws-cdk-lib.aws_iam.IGrantable

#### Initializers <a name="Initializers" id="modules-webapp.Webapp.Initializer"></a>

```typescript
import { Webapp } from 'modules-webapp'

new Webapp(scope: Construct, id: string, props: WebappOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.Webapp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#modules-webapp.Webapp.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#modules-webapp.Webapp.Initializer.parameter.props">props</a></code> | <code><a href="#modules-webapp.WebappOptions">WebappOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="modules-webapp.Webapp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="modules-webapp.Webapp.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="modules-webapp.Webapp.Initializer.parameter.props"></a>

- *Type:* <a href="#modules-webapp.WebappOptions">WebappOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#modules-webapp.Webapp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#modules-webapp.Webapp.addPage">addPage</a></code> | Add another page to the webapp. |

---

##### `toString` <a name="toString" id="modules-webapp.Webapp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPage` <a name="addPage" id="modules-webapp.Webapp.addPage"></a>

```typescript
public addPage(id: string, handler: Webpage, path: string, methods?: HttpMethod[]): void
```

Add another page to the webapp.

###### `id`<sup>Required</sup> <a name="id" id="modules-webapp.Webapp.addPage.parameter.id"></a>

- *Type:* string

---

###### `handler`<sup>Required</sup> <a name="handler" id="modules-webapp.Webapp.addPage.parameter.handler"></a>

- *Type:* <a href="#modules-webapp.Webpage">Webpage</a>

---

###### `path`<sup>Required</sup> <a name="path" id="modules-webapp.Webapp.addPage.parameter.path"></a>

- *Type:* string

---

###### `methods`<sup>Optional</sup> <a name="methods" id="modules-webapp.Webapp.addPage.parameter.methods"></a>

- *Type:* aws-cdk-lib.aws_apigatewayv2.HttpMethod[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#modules-webapp.Webapp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="modules-webapp.Webapp.isConstruct"></a>

```typescript
import { Webapp } from 'modules-webapp'

Webapp.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="modules-webapp.Webapp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.Webapp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#modules-webapp.Webapp.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="modules-webapp.Webapp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="modules-webapp.Webapp.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---


### Webpage <a name="Webpage" id="modules-webapp.Webpage"></a>

#### Initializers <a name="Initializers" id="modules-webapp.Webpage.Initializer"></a>

```typescript
import { Webpage } from 'modules-webapp'

new Webpage(scope: Construct, id: string, props: WebpageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.Webpage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#modules-webapp.Webpage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#modules-webapp.Webpage.Initializer.parameter.props">props</a></code> | <code><a href="#modules-webapp.WebpageProps">WebpageProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="modules-webapp.Webpage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="modules-webapp.Webpage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="modules-webapp.Webpage.Initializer.parameter.props"></a>

- *Type:* <a href="#modules-webapp.WebpageProps">WebpageProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#modules-webapp.Webpage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#modules-webapp.Webpage.addLambdaLayer">addLambdaLayer</a></code> | Add the shared resources layer that is constructed for this webapp. |
| <code><a href="#modules-webapp.Webpage.addStandardEnvironment">addStandardEnvironment</a></code> | Add standard environment variables to the lambda. |
| <code><a href="#modules-webapp.Webpage.allowSessionAccess">allowSessionAccess</a></code> | Grant access to the session store and add SESSION_TABLE environment variable. |
| <code><a href="#modules-webapp.Webpage.monitor">monitor</a></code> | Monitor the logs generated by this function for a filter pattern, generate metric and alarm on increased error rate. |
| <code><a href="#modules-webapp.Webpage.overwriteSessionLifetime">overwriteSessionLifetime</a></code> | Add session env variable. |

---

##### `toString` <a name="toString" id="modules-webapp.Webpage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addLambdaLayer` <a name="addLambdaLayer" id="modules-webapp.Webpage.addLambdaLayer"></a>

```typescript
public addLambdaLayer(layer: LayerVersion): void
```

Add the shared resources layer that is constructed for this webapp.

###### `layer`<sup>Required</sup> <a name="layer" id="modules-webapp.Webpage.addLambdaLayer.parameter.layer"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion

---

##### `addStandardEnvironment` <a name="addStandardEnvironment" id="modules-webapp.Webpage.addStandardEnvironment"></a>

```typescript
public addStandardEnvironment(applicationName: string): void
```

Add standard environment variables to the lambda.

###### `applicationName`<sup>Required</sup> <a name="applicationName" id="modules-webapp.Webpage.addStandardEnvironment.parameter.applicationName"></a>

- *Type:* string

---

##### `allowSessionAccess` <a name="allowSessionAccess" id="modules-webapp.Webpage.allowSessionAccess"></a>

```typescript
public allowSessionAccess(table: ITable): void
```

Grant access to the session store and add SESSION_TABLE environment variable.

###### `table`<sup>Required</sup> <a name="table" id="modules-webapp.Webpage.allowSessionAccess.parameter.table"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---

##### `monitor` <a name="monitor" id="modules-webapp.Webpage.monitor"></a>

```typescript
public monitor(applicationName: string, filterPattern?: IFilterPattern): void
```

Monitor the logs generated by this function for a filter pattern, generate metric and alarm on increased error rate.

###### `applicationName`<sup>Required</sup> <a name="applicationName" id="modules-webapp.Webpage.monitor.parameter.applicationName"></a>

- *Type:* string

---

###### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="modules-webapp.Webpage.monitor.parameter.filterPattern"></a>

- *Type:* aws-cdk-lib.aws_logs.IFilterPattern

Pattern to filter by (default: containing ERROR).

---

##### `overwriteSessionLifetime` <a name="overwriteSessionLifetime" id="modules-webapp.Webpage.overwriteSessionLifetime"></a>

```typescript
public overwriteSessionLifetime(minutes: number): void
```

Add session env variable.

###### `minutes`<sup>Required</sup> <a name="minutes" id="modules-webapp.Webpage.overwriteSessionLifetime.parameter.minutes"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#modules-webapp.Webpage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="modules-webapp.Webpage.isConstruct"></a>

```typescript
import { Webpage } from 'modules-webapp'

Webpage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="modules-webapp.Webpage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.Webpage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#modules-webapp.Webpage.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="modules-webapp.Webpage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="modules-webapp.Webpage.property.lambda"></a>

```typescript
public readonly lambda: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


## Structs <a name="Structs" id="Structs"></a>

### OpenIdConnectConnectionProfile <a name="OpenIdConnectConnectionProfile" id="modules-webapp.OpenIdConnectConnectionProfile"></a>

#### Initializer <a name="Initializer" id="modules-webapp.OpenIdConnectConnectionProfile.Initializer"></a>

```typescript
import { OpenIdConnectConnectionProfile } from 'modules-webapp'

const openIdConnectConnectionProfile: OpenIdConnectConnectionProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.applicationBaseUrl">applicationBaseUrl</a></code> | <code>string</code> | The base URL of the application, used to build the redirect url. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.authenticationBaseUrl">authenticationBaseUrl</a></code> | <code>string</code> | The base URL of the authentication provider. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.clientId">clientId</a></code> | <code>string</code> | OIDC client ID. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.clientSecretArn">clientSecretArn</a></code> | <code>string</code> | OIDC client secret arn of the secretsmanager secret. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.cssClass">cssClass</a></code> | <code>string</code> | The CSS class appended to the rendered href. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.immediateRedirect">immediateRedirect</a></code> | <code>boolean</code> | Do not render the HTML page but redirect to this authentication provider immediately. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.name">name</a></code> | <code>string</code> | The name of this profile must be unique. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.scope">scope</a></code> | <code>string</code> | The scopes this profile requests and allows Scopes are separated using spaces. |
| <code><a href="#modules-webapp.OpenIdConnectConnectionProfile.property.title">title</a></code> | <code>string</code> | The title to render for this proble. |

---

##### `applicationBaseUrl`<sup>Required</sup> <a name="applicationBaseUrl" id="modules-webapp.OpenIdConnectConnectionProfile.property.applicationBaseUrl"></a>

```typescript
public readonly applicationBaseUrl: string;
```

- *Type:* string

The base URL of the application, used to build the redirect url.

---

##### `authenticationBaseUrl`<sup>Required</sup> <a name="authenticationBaseUrl" id="modules-webapp.OpenIdConnectConnectionProfile.property.authenticationBaseUrl"></a>

```typescript
public readonly authenticationBaseUrl: string;
```

- *Type:* string

The base URL of the authentication provider.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="modules-webapp.OpenIdConnectConnectionProfile.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OIDC client ID.

---

##### `clientSecretArn`<sup>Required</sup> <a name="clientSecretArn" id="modules-webapp.OpenIdConnectConnectionProfile.property.clientSecretArn"></a>

```typescript
public readonly clientSecretArn: string;
```

- *Type:* string

OIDC client secret arn of the secretsmanager secret.

---

##### `cssClass`<sup>Required</sup> <a name="cssClass" id="modules-webapp.OpenIdConnectConnectionProfile.property.cssClass"></a>

```typescript
public readonly cssClass: string;
```

- *Type:* string

The CSS class appended to the rendered href.

---

##### `immediateRedirect`<sup>Required</sup> <a name="immediateRedirect" id="modules-webapp.OpenIdConnectConnectionProfile.property.immediateRedirect"></a>

```typescript
public readonly immediateRedirect: boolean;
```

- *Type:* boolean

Do not render the HTML page but redirect to this authentication provider immediately.

---

##### `name`<sup>Required</sup> <a name="name" id="modules-webapp.OpenIdConnectConnectionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this profile must be unique.

---

##### `scope`<sup>Required</sup> <a name="scope" id="modules-webapp.OpenIdConnectConnectionProfile.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scopes this profile requests and allows Scopes are separated using spaces.

---

##### `title`<sup>Required</sup> <a name="title" id="modules-webapp.OpenIdConnectConnectionProfile.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title to render for this proble.

---

### WebappConfigurable <a name="WebappConfigurable" id="modules-webapp.WebappConfigurable"></a>

#### Initializer <a name="Initializer" id="modules-webapp.WebappConfigurable.Initializer"></a>

```typescript
import { WebappConfigurable } from 'modules-webapp'

const webappConfigurable: WebappConfigurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.WebappConfigurable.property.webappOptions">webappOptions</a></code> | <code><a href="#modules-webapp.WebappOptions">WebappOptions</a></code> | *No description.* |

---

##### `webappOptions`<sup>Required</sup> <a name="webappOptions" id="modules-webapp.WebappConfigurable.property.webappOptions"></a>

```typescript
public readonly webappOptions: WebappOptions;
```

- *Type:* <a href="#modules-webapp.WebappOptions">WebappOptions</a>

---

### WebappOptions <a name="WebappOptions" id="modules-webapp.WebappOptions"></a>

#### Initializer <a name="Initializer" id="modules-webapp.WebappOptions.Initializer"></a>

```typescript
import { WebappOptions } from 'modules-webapp'

const webappOptions: WebappOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.WebappOptions.property.additionalSourceFilesDir">additionalSourceFilesDir</a></code> | <code>string</code> | Relative path to a directroy that contains files that need to be packed into the lambda e.g. header.mustache, footer.mustache. |
| <code><a href="#modules-webapp.WebappOptions.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the application, can only contain alphanumeric and hypens. |
| <code><a href="#modules-webapp.WebappOptions.property.cloudFrontCertificate">cloudFrontCertificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | The certificate to use for the cloudfront distribution (should be in us-east-1). |
| <code><a href="#modules-webapp.WebappOptions.property.defaultPath">defaultPath</a></code> | <code>string</code> | Default url path the user is send to. |
| <code><a href="#modules-webapp.WebappOptions.property.domainName">domainName</a></code> | <code>string</code> | The domain name used by this webapp This is used for creating redirect urls in the lambdas. |
| <code><a href="#modules-webapp.WebappOptions.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The hosted zone in which to add A and AAAA records for the cloudfront distribution. |
| <code><a href="#modules-webapp.WebappOptions.property.oidcProfiles">oidcProfiles</a></code> | <code><a href="#modules-webapp.OpenIdConnectConnectionProfile">OpenIdConnectConnectionProfile</a>[]</code> | OpenID Connect connection profiles. |
| <code><a href="#modules-webapp.WebappOptions.property.staticResourcesDirectory">staticResourcesDirectory</a></code> | <code>string</code> | The directory with static resources that are made available through CloudFront under the /statics and /.well-knonw path. |
| <code><a href="#modules-webapp.WebappOptions.property.alternativeDomainNames">alternativeDomainNames</a></code> | <code>string[]</code> | Optional alternative domain names Note: certificate provided must be valid for all alternative domain names! |
| <code><a href="#modules-webapp.WebappOptions.property.cspHeaderValue">cspHeaderValue</a></code> | <code>string</code> | Overwrites the default CSP header value. |
| <code><a href="#modules-webapp.WebappOptions.property.postLoginProcessor">postLoginProcessor</a></code> | <code><a href="#modules-webapp.Webpage">Webpage</a></code> | A own lambda to handle project specific logic for handling the login e.g. validating claims, updating the session. note: you are reponsible for redirecting the user to the home page after post login processing. |
| <code><a href="#modules-webapp.WebappOptions.property.sessionLifetime">sessionLifetime</a></code> | <code>number</code> | Session lifetime in minutes. |

---

##### `additionalSourceFilesDir`<sup>Required</sup> <a name="additionalSourceFilesDir" id="modules-webapp.WebappOptions.property.additionalSourceFilesDir"></a>

```typescript
public readonly additionalSourceFilesDir: string;
```

- *Type:* string

Relative path to a directroy that contains files that need to be packed into the lambda e.g. header.mustache, footer.mustache.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="modules-webapp.WebappOptions.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the application, can only contain alphanumeric and hypens.

---

##### `cloudFrontCertificate`<sup>Required</sup> <a name="cloudFrontCertificate" id="modules-webapp.WebappOptions.property.cloudFrontCertificate"></a>

```typescript
public readonly cloudFrontCertificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

The certificate to use for the cloudfront distribution (should be in us-east-1).

---

##### `defaultPath`<sup>Required</sup> <a name="defaultPath" id="modules-webapp.WebappOptions.property.defaultPath"></a>

```typescript
public readonly defaultPath: string;
```

- *Type:* string

Default url path the user is send to.

Note: responsibility of creating the lambda lies by the user of this construct.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="modules-webapp.WebappOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name used by this webapp This is used for creating redirect urls in the lambdas.

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="modules-webapp.WebappOptions.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The hosted zone in which to add A and AAAA records for the cloudfront distribution.

---

##### `oidcProfiles`<sup>Required</sup> <a name="oidcProfiles" id="modules-webapp.WebappOptions.property.oidcProfiles"></a>

```typescript
public readonly oidcProfiles: OpenIdConnectConnectionProfile[];
```

- *Type:* <a href="#modules-webapp.OpenIdConnectConnectionProfile">OpenIdConnectConnectionProfile</a>[]

OpenID Connect connection profiles.

---

##### `staticResourcesDirectory`<sup>Required</sup> <a name="staticResourcesDirectory" id="modules-webapp.WebappOptions.property.staticResourcesDirectory"></a>

```typescript
public readonly staticResourcesDirectory: string;
```

- *Type:* string

The directory with static resources that are made available through CloudFront under the /statics and /.well-knonw path.

---

##### `alternativeDomainNames`<sup>Optional</sup> <a name="alternativeDomainNames" id="modules-webapp.WebappOptions.property.alternativeDomainNames"></a>

```typescript
public readonly alternativeDomainNames: string[];
```

- *Type:* string[]

Optional alternative domain names Note: certificate provided must be valid for all alternative domain names!

---

##### `cspHeaderValue`<sup>Optional</sup> <a name="cspHeaderValue" id="modules-webapp.WebappOptions.property.cspHeaderValue"></a>

```typescript
public readonly cspHeaderValue: string;
```

- *Type:* string

Overwrites the default CSP header value.

---

##### `postLoginProcessor`<sup>Optional</sup> <a name="postLoginProcessor" id="modules-webapp.WebappOptions.property.postLoginProcessor"></a>

```typescript
public readonly postLoginProcessor: Webpage;
```

- *Type:* <a href="#modules-webapp.Webpage">Webpage</a>
- *Default:* none

A own lambda to handle project specific logic for handling the login e.g. validating claims, updating the session. note: you are reponsible for redirecting the user to the home page after post login processing.

---

##### `sessionLifetime`<sup>Optional</sup> <a name="sessionLifetime" id="modules-webapp.WebappOptions.property.sessionLifetime"></a>

```typescript
public readonly sessionLifetime: number;
```

- *Type:* number
- *Default:* 15

Session lifetime in minutes.

---

### WebpageProps <a name="WebpageProps" id="modules-webapp.WebpageProps"></a>

#### Initializer <a name="Initializer" id="modules-webapp.WebpageProps.Initializer"></a>

```typescript
import { WebpageProps } from 'modules-webapp'

const webpageProps: WebpageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#modules-webapp.WebpageProps.property.apiFunction">apiFunction</a></code> | <code>any</code> | *No description.* |
| <code><a href="#modules-webapp.WebpageProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#modules-webapp.WebpageProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#modules-webapp.WebpageProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |
| <code><a href="#modules-webapp.WebpageProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Set a lambda timeout in miliseconds. |

---

##### `apiFunction`<sup>Required</sup> <a name="apiFunction" id="modules-webapp.WebpageProps.property.apiFunction"></a>

```typescript
public readonly apiFunction: any;
```

- *Type:* any

---

##### `description`<sup>Required</sup> <a name="description" id="modules-webapp.WebpageProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Optional</sup> <a name="environment" id="modules-webapp.WebpageProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `role`<sup>Optional</sup> <a name="role" id="modules-webapp.WebpageProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="modules-webapp.WebpageProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 3000 (ms)

Set a lambda timeout in miliseconds.

---



