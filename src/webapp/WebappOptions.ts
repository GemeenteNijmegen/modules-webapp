import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { IHostedZone } from 'aws-cdk-lib/aws-route53';
import { Criticality } from './Criticality';
import { OpenIdConnectConnectionProfile } from './OIDCConnectionProfile';
import { Webpage } from './Webpage';

export interface WebappConfigurable {
  readonly webappOptions: WebappOptions;
}

export interface WebappOptions {
  /**
   * The name of the application, can only contain alphanumeric and hypens.
   */
  readonly applicationName: string;

  /**
   * A own lambda to handle project specific logic for handling
   * the login e.g. validating claims, updating the session.
   * note: you are reponsible for redirecting the user to the home page after post login processing.
   * @default none
   */
  readonly postLoginProcessor?: Webpage;

  /**
   * The certificate to use for the cloudfront distribution
   * (should be in us-east-1)
   */
  readonly cloudFrontCertificate: ICertificate;

  /**
   * The domain name used by this webapp
   * This is used for creating redirect urls in the lambdas.
   */
  readonly domainName: string;

  /**
   * Optional alternative domain names
   * Note: certificate provided must be valid for all alternative domain names!
   * @defualt none
   */
  readonly alternativeDomainNames?: string[];

  /**
   * Relative path to a directroy that contains files that need to be packed into the lambda
   * e.g. header.mustache, footer.mustache
   */
  readonly additionalSourceFilesDir: string;

  /**
   * The hosted zone in which to add A and AAAA records
   * for the cloudfront distribution
   */
  readonly hostedZone: IHostedZone;

  /**
   * The directory with static resources that are made available through
   * CloudFront under the /statics and /.well-knonw path.
   */
  readonly staticResourcesDirectory: string;

  /**
   * Default url path the user is send to.
   * Note: responsibility of creating the lambda lies by the user of this construct.
   */
  readonly defaultPath: string;

  /**
   * OpenID Connect connection profiles
   */
  readonly oidcProfiles: OpenIdConnectConnectionProfile[];

  /**
   * Session lifetime in minutes
   * @default 15
   */
  readonly sessionLifetime?: number;

  /**
   * Overwrites the default CSP header value
   */
  readonly cspHeaderValue?: string;

  /**
   * Denotes a general monitoring level for the webapp.
   */
  readonly criticality: Criticality;
}