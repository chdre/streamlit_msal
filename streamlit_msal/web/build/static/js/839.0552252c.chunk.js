/*! For license information please see 839.0552252c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_component=self.webpackChunkmy_component||[]).push([[839],{839:(e,t,r)=>{r.r(t),r.d(t,{NestedAppAuthController:()=>C});var n,o=r(290),i=r(2346),c=r(4190),s=r(5548),a=r(6378),u=r(7232),d=r(2200),p=r(3932),h=r(9632),l=r(7561),A=r(4430);!function(e){e.USER_INTERACTION_REQUIRED="USER_INTERACTION_REQUIRED",e.USER_CANCEL="USER_CANCEL",e.NO_NETWORK="NO_NETWORK",e.TRANSIENT_ERROR="TRANSIENT_ERROR",e.PERSISTENT_ERROR="PERSISTENT_ERROR",e.DISABLED="DISABLED",e.ACCOUNT_UNAVAILABLE="ACCOUNT_UNAVAILABLE",e.NESTED_APP_AUTH_UNAVAILABLE="NESTED_APP_AUTH_UNAVAILABLE"}(n||(n={}));class E{constructor(e,t,r,n){this.clientId=e,this.clientCapabilities=t,this.crypto=r,this.logger=n}toNaaSilentTokenRequest(e){var t;let r;r=void 0===e.extraQueryParameters?new Map:new Map(Object.entries(e.extraQueryParameters));return{userObjectId:null===(t=e.account)||void 0===t?void 0:t.homeAccountId,clientId:this.clientId,authority:e.authority,scope:e.scopes.join(" "),correlationId:void 0!==e.correlationId?e.correlationId:this.crypto.createNewGuid(),prompt:void 0!==e.prompt?e.prompt:"",claims:void 0!==e.claims?e.claims:"",authenticationScheme:void 0!==e.authenticationScheme?e.authenticationScheme:"",clientCapabilities:this.clientCapabilities,extraParameters:r}}toNaaTokenRequest(e){var t;let r;r=void 0===e.extraQueryParameters?new Map:new Map(Object.entries(e.extraQueryParameters));return{userObjectId:null===(t=e.account)||void 0===t?void 0:t.homeAccountId,clientId:this.clientId,authority:e.authority,scope:e.scopes.join(" "),correlationId:void 0!==e.correlationId?e.correlationId:"",prompt:void 0!==e.prompt?e.prompt:"",nonce:void 0!==e.nonce?e.nonce:"",claims:void 0!==e.claims?e.claims:"",state:void 0!==e.state?e.state:"",authenticationScheme:void 0!==e.authenticationScheme?e.authenticationScheme:"",clientCapabilities:void 0,extraParameters:r}}fromNaaTokenResponse(e,t){const r=new Date(a.I.nowSeconds()+1e3*(t.expires_in||0)),n=this.fromNaaAccountInfo(t.account);return{authority:t.account.environment,uniqueId:t.account.homeAccountId,tenantId:t.account.tenantId,scopes:t.scope.split(" "),account:this.fromNaaAccountInfo(t.account),idToken:void 0!==t.id_token?t.id_token:"",idTokenClaims:void 0!==n.idTokenClaims?n.idTokenClaims:{},accessToken:t.access_token,fromCache:!0,expiresOn:r,tokenType:void 0!==e.authenticationScheme?e.authenticationScheme:"Bearer",correlationId:e.correlationId,requestId:"",extExpiresOn:r,state:t.state}}fromNaaAccountInfo(e){let t;t=void 0!==e.idToken?u.Z_(e.idToken,this.crypto.base64Decode):void 0;return{homeAccountId:e.homeAccountId,environment:e.environment,tenantId:e.tenantId,username:e.username,localAccountId:e.localAccountId,name:e.name,idToken:e.idToken,idTokenClaims:t}}fromBridgeError(e){if(!function(e){return void 0!==e.status}(e))return new A.l4("unknown_error","An unknown error occurred");switch(e.status){case n.USER_CANCEL:return new d.er(p.$R);case n.NO_NETWORK:return new d.er(p.Mq);case n.ACCOUNT_UNAVAILABLE:return new d.er(p.cX);case n.DISABLED:return new d.er(p.Ls);case n.NESTED_APP_AUTH_UNAVAILABLE:return new d.er(e.code,e.description);case n.TRANSIENT_ERROR:case n.PERSISTENT_ERROR:return new h.n(e.code,e.description);case n.USER_INTERACTION_REQUIRED:return new l.Yo(e.code,e.description);default:return new A.l4(e.code,e.description)}}}const g={code:"unsupported_method",desc:"The PKCE code challenge and verifier could not be generated."};class v extends A.l4{constructor(e,t){super(e,t),Object.setPrototypeOf(this,v.prototype),this.name="NestedAppAuthError"}static createUnsupportedError(){return new v(g.code,g.desc)}}var m=r(4270),I=r(3057);class C{constructor(e){this.operatingContext=e;const t=this.operatingContext.getBridgeProxy();if(void 0===t)throw new Error("unexpected: bridgeProxy is undefined");this.bridgeProxy=t,this.config=e.getConfig(),this.logger=this.operatingContext.getLogger(),this.performanceClient=this.config.telemetry.client,this.browserCrypto=e.isBrowserEnvironment()?new s.Q(this.logger,this.performanceClient):o.d,this.eventHandler=new m.b(this.logger,this.browserCrypto),this.nestedAppAuthAdapter=new E(this.config.auth.clientId,this.config.auth.clientCapabilities,this.browserCrypto,this.logger)}getBrowserStorage(){throw v.createUnsupportedError()}getEventHandler(){return this.eventHandler}static async createController(e){const t=new C(e);return Promise.resolve(t)}initialize(){return Promise.resolve()}async acquireTokenInteractive(e){this.eventHandler.emitEvent(I.t.ACQUIRE_TOKEN_START,c.s_.Popup,e);const t=this.performanceClient.startMeasurement(i.Ak.AcquireTokenPopup,e.correlationId);null===t||void 0===t||t.add({nestedAppAuthRequest:!0});try{const r=this.nestedAppAuthAdapter.toNaaTokenRequest(e),n=await this.bridgeProxy.getTokenInteractive(r),o=this.nestedAppAuthAdapter.fromNaaTokenResponse(r,n);return this.operatingContext.setActiveAccount(o.account),this.eventHandler.emitEvent(I.t.ACQUIRE_TOKEN_SUCCESS,c.s_.Popup,o),t.add({accessTokenSize:o.accessToken.length,idTokenSize:o.idToken.length}),t.end({success:!0,requestId:o.requestId}),o}catch(r){const e=this.nestedAppAuthAdapter.fromBridgeError(r);throw this.eventHandler.emitEvent(I.t.ACQUIRE_TOKEN_FAILURE,c.s_.Popup,null,r),t.end({errorCode:e.errorCode,subErrorCode:e.subError,success:!1}),e}}async acquireTokenSilentInternal(e){this.eventHandler.emitEvent(I.t.ACQUIRE_TOKEN_START,c.s_.Silent,e);const t=this.performanceClient.startMeasurement(i.Ak.SsoSilent,e.correlationId);null===t||void 0===t||t.increment({visibilityChangeCount:0}),null===t||void 0===t||t.add({nestedAppAuthRequest:!0});try{const r=this.nestedAppAuthAdapter.toNaaSilentTokenRequest(e),n=await this.bridgeProxy.getTokenSilent(r),o=this.nestedAppAuthAdapter.fromNaaTokenResponse(r,n);return this.operatingContext.setActiveAccount(o.account),this.eventHandler.emitEvent(I.t.ACQUIRE_TOKEN_SUCCESS,c.s_.Silent,o),null===t||void 0===t||t.add({accessTokenSize:o.accessToken.length,idTokenSize:o.idToken.length}),null===t||void 0===t||t.end({success:!0,requestId:o.requestId}),o}catch(r){const e=this.nestedAppAuthAdapter.fromBridgeError(r);throw this.eventHandler.emitEvent(I.t.ACQUIRE_TOKEN_FAILURE,c.s_.Silent,null,r),null===t||void 0===t||t.end({errorCode:e.errorCode,subErrorCode:e.subError,success:!1}),e}}async acquireTokenPopup(e){return this.acquireTokenInteractive(e)}acquireTokenRedirect(e){throw v.createUnsupportedError()}async acquireTokenSilent(e){return this.acquireTokenSilentInternal(e)}acquireTokenByCode(e){throw v.createUnsupportedError()}acquireTokenNative(e,t,r){throw v.createUnsupportedError()}acquireTokenByRefreshToken(e,t){throw v.createUnsupportedError()}addEventCallback(e){return this.eventHandler.addEventCallback(e)}removeEventCallback(e){this.eventHandler.removeEventCallback(e)}addPerformanceCallback(e){throw v.createUnsupportedError()}removePerformanceCallback(e){throw v.createUnsupportedError()}enableAccountStorageEvents(){throw v.createUnsupportedError()}disableAccountStorageEvents(){throw v.createUnsupportedError()}getAccount(e){throw v.createUnsupportedError()}getAccountByHomeId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.homeAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByLocalId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.localAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByUsername(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.username===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAllAccounts(){const e=this.operatingContext.getActiveAccount();return void 0!==e?[this.nestedAppAuthAdapter.fromNaaAccountInfo(e)]:[]}handleRedirectPromise(e){throw v.createUnsupportedError()}loginPopup(e){if(void 0!==e)return this.acquireTokenInteractive(e);throw v.createUnsupportedError()}loginRedirect(e){throw v.createUnsupportedError()}logout(e){throw v.createUnsupportedError()}logoutRedirect(e){throw v.createUnsupportedError()}logoutPopup(e){throw v.createUnsupportedError()}ssoSilent(e){return this.acquireTokenSilentInternal(e)}getTokenCache(){throw v.createUnsupportedError()}getLogger(){return this.logger}setLogger(e){this.logger=e}setActiveAccount(e){this.logger.warning("nestedAppAuth does not support setActiveAccount")}getActiveAccount(){const e=this.operatingContext.getActiveAccount();return void 0!==e?this.nestedAppAuthAdapter.fromNaaAccountInfo(e):null}initializeWrapperLibrary(e,t){}setNavigationClient(e){this.logger.warning("setNavigationClient is not supported in nested app auth")}getConfiguration(){return this.config}isBrowserEnv(){return this.operatingContext.isBrowserEnvironment()}getBrowserCrypto(){return this.browserCrypto}getPerformanceClient(){throw v.createUnsupportedError()}getRedirectResponse(){throw v.createUnsupportedError()}preflightBrowserEnvironmentCheck(e,t){throw v.createUnsupportedError()}async clearCache(e){throw v.createUnsupportedError()}async hydrateCache(e,t){throw v.createUnsupportedError()}}}}]);
//# sourceMappingURL=839.0552252c.chunk.js.map