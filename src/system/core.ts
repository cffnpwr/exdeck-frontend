import { getAuthTokens, postAuthRequest } from './adopter'
import { oauthTokenStore } from './store'

/**
 * OAuthリンクを生成
 *
 * @returns {Promise<string>} OAuthのURL
 */
export async function requestOauthLink(): Promise<string> {
  const { oauth_token: oauthToken } = await getAuthTokens()
  oauthTokenStore.set(oauthToken)
  return `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`
}

/**
 * OAuth
 *
 * @param {string} pin PINコード
 * @returns {Promise<void>}
 */
export async function requestOauth(pin: string): Promise<void> {
  await postAuthRequest(oauthTokenStore.get(), pin)
}