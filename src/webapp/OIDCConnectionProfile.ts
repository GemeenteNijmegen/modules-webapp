export interface OpenIdConnectConnectionProfile {
  /**
   * The name of this profile must be unique
   */
  readonly name: string;
  /**
   * The title to render for this proble
   */
  readonly title: string;
  /**
   * The CSS class appended to the rendered href.
   */
  readonly cssClass: string;
  /**
   * OIDC client ID
   */
  readonly clientId: string;
  /**
   * OIDC client secret arn of the secretsmanager secret.
   */
  readonly clientSecretArn: string;
  /**
   * The base URL of the application, used to build the redirect url
   */
  readonly applicationBaseUrl: string;
  /**
   * The base URL of the authentication provider
   */
  readonly authenticationBaseUrl: string;
  /**
   * The scopes this profile requests and allows
   * Scopes are separated using spaces
   */
  readonly scope: string;
  /**
   * Do not render the HTML page but redirect to this authentication
   * provider immediately.
   */
  readonly immediateRedirect: boolean;
}