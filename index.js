module.exports = {
  systemBusy:                         { code: -1,    message: 'system busy, retry later'},
  success:                            { code: 0,     message: 'success'},
  internalError:                      { code: 1,     message: 'internal error, contact us'},
  requireAppKey:                      { code: 10001, message: 'require appKey'},
  requireAppSecret:                   { code: 10002, message: 'require appSecret'},
  requireDeviceUdid:                  { code: 10003, message: 'require deviceUdid'},
  invalidAppKey:                      { code: 10004, message: 'invalid appKey'},
  invalidAppSecret:                   { code: 10005, message: 'invalid appSecret'},
  failedToSaveDevice:                 { code: 10006, message: 'failed to create/update device, contact us'},
  invalidToken:                       { code: 10007, message: 'invalid token'},
  tokenExpired:                       { code: 10008, message: 'token is expired'},
  failedToGenerateToken:              { code: 10009, message: 'failed to generate token, contact us'},
  requireToken:                       { code: 10010, message: 'require token'},
  requireDataFile:                    { code: 10011, message: 'require uploaded data file'},
  requireAppBundle:                   { code: 10012, message: 'require appBundle'},
  failedToGetApp:                     { code: 10013, message: 'rpc error, failed to Get App'},
  requireUsername:                    { code: 11001, message: 'require username'},
  requirePassword:                    { code: 11002, message: 'require password'},
  userNotExist:                       { code: 11003, message: 'user not exist'},
  passwordNotMatch:                   { code: 11004, message: 'password not match'},
  failedToCreateUser:                 { code: 11006, message: 'failed to create user'},
  failedToHashPassword:               { code: 11007, message: 'failed to hash password'},
  failedToSaveUser:                   { code: 11008, message: 'failed to save user, please check if required field is correct'},
  failedToSaveFile:                   { code: 11009, message: 'failed to save file'},
  failedToDeleteFile:                 { code: 11010, message: 'failed to delete file'},
  fileNotExist:                       { code: 11011, message: 'file not exist'},
  failedToReadFile:                   { code: 11012, message: 'error when read file'},
  requireClientKey:                   { code: 11014, message: 'require clientKey'},
  requireClientSecret:                { code: 11015, message: 'require clientSecret'},
  clientNotExist:                     { code: 11016, message: 'client not exist'},
  invalidClientKey:                   { code: 11017, message: 'invalid clientKey'},
  invalidClientSecret:                { code: 11018, message: 'invalid clientSecret'},
  requirePoi:                         { code: 11020, message: 'require poi'},
  requireOwner:                       { code: 11021, message: 'require owner'},
  pendingPoiPullRequestExists:        { code: 11020, message: 'pending poi pull request exists'},
  failedToUpdatePoi:                  { code: 11021, message: 'failed to update poi'},
  failedToGetPoi:                     { code: 11022, message: 'rpc error, failed to get poi'},
  failedToFindResource:               { code: 12001, message: 'failed to find specified resource'},
  wrongParameter:                     { code: 12003, message: 'wrong parameter'},
  failedToFindUserBehaviors:          { code: 12004, message: 'failed to find user behaviors'},
  failedToFindCubePoint:              { code: 12005, message: 'failed to find cube point'},
  failedToValidateEmail:              { code: 14001, message: 'failed to validate email'},
  failedToSendMail:                   { code: 14026, message: 'failed to send mail'},
  alreadyActivated:                   { code: 14028, message: 'already activated'},
  invalidPasswordResetCode:           { code: 14029, message: 'invalid password reset code'},
  requireUserOrCodeToResetPassword:   { code: 14031, message: 'require user or code to reset password'},
  failedToCreateDevice:               { code: 40001, message: 'failed to create device, contact us'},
  failedToGetDevice:                  { code: 40002, message: 'failed to get device, contact us'},
  failedToUpdateDevice:               { code: 40003, message: 'failed to update device, contact us'},
  failedToQueueDeviceDataCollectJob:  { code: 40004, message: 'failed to queue device data collect job'},
  failedToQueuePoiImportJob:          { code: 40005, message: 'failed to queue poi import job'},
  failedToFindRegions:                { code: 40006, message: 'failed to find regions'},
  failedToFindPois:                   { code: 40007, message: 'failed to find pois'},
  failedToEnsureDevice:               { code: 40008, message: 'rpc error, failed to ensure device'},
  requirePoiId:                       { code: 40009, message: 'require poi id'},
  poiNotExist:                        { code: 40010, message: 'poi not exist'},
  requirePoiPullRequest:              { code: 40011, message: 'require poi pull request info'},
  requirePoiPullRequestId:            { code: 40012, message: 'require poi pull request id'},
  poiNotReady:                        { code: 40013, message: 'poi not ready'},
  failedToFindPoiPullRequest:         { code: 40014, message: 'failed to find poi pull request, contact us'},
  poiPullRequestNotExist:             { code: 40015, message: 'poi pull request not exist'},
  poiPullRequestNotActive:            { code: 40016, message: 'poi pull request not active'},
  failedToUpdatePoiPullRequest:       { code: 40017, message: 'failed to update poi pull request'},
  requireAttachment:                  { code: 40019, message: 'require attachment'},
  requireAttachmentId:                { code: 40020, message: 'require attachment id'},
  failedToFindAttachment:             { code: 40021, message: 'failed to find attachment'},
  attachmentNotExist:                 { code: 40022, message: 'attachment not exist'},
  failedToCreateAttachment:           { code: 40023, message: 'failed to create attachment'},
  failedToUpdateAttachment:           { code: 40024, message: 'failed to update attachment'},
  failedToDestroyAttachment:          { code: 40025, message: 'failed to destroy attachment'},
  requireScenario:                    { code: 40026, message: 'require scenario'},
  requireScenarioId:                  { code: 40027, message: 'require scenario id'},
  failedToFindScenario:               { code: 40028, message: 'failed to find scenario'},
  scenarioNotExist:                   { code: 40029, message: 'scenario not exist'},
  failedToCreateScenario:             { code: 40030, message: 'failed to create scenario'},
  failedToUpdateScenario:             { code: 40031, message: 'failed to update scenario'},
  failedToDestroyScenario:            { code: 40032, message: 'failed to destroy scenario'},
  requireApp:                         { code: 40033, message: 'require app'},
  notYourApp:                         { code: 40034, message: 'app is not yours'},
  failedToUpdateScenarioLastOperation:{ code: 40035, message: 'failed to update scenario last operation'},
  requireAppPlatformSettingsId:       { code: 40036, message: 'require app platform settings id'},
  failedToFindAppPlatformSettings:    { code: 40037, message: 'failed to find app platform settings'},
  appPlatformSettingsNotExist:        { code: 40038, message: 'app platform settings not exist'},
  failedToCreateAppPlatformSettings:  { code: 40039, message: 'failed to create app platform settings'},
  failedToUpdateAppPlatformSettings:  { code: 40040, message: 'failed to update app platform settings'},
  failedToDestroyAppPlatformSettings: { code: 40041, message: 'failed to destroy app platform settings'},
  failedToQueuePoiExportJob:          { code: 40042, message: 'failed to queue poi export job'},
  failedToFindApp:                    { code: 41002, message: 'failed to get app, check if appKey is valid'},
  appNotExist:                        { code: 41003, message: 'app not exist'},
  failedToUpdateApp:                  { code: 41004, message: 'failed to update app'},
  requireAdId:                        { code: 42001, message: 'require ad id'},
  failedToFindAd:                     { code: 42002, message: 'failed to find ad'},
  adNotExist:                         { code: 42003, message: 'ad not exist'},
  requireAd:                          { code: 42004, message: 'require ad'},
  failedToCreateAd:                   { code: 42005, message: 'failed to create ad'},
  failedToUpdateAd:                   { code: 42006, message: 'failed to update ad'},
  failedToDestroyAd:                  { code: 42007, message: 'failed to destroy ad'},
  failedToUpdateAdLastOperation:      { code: 42008, message: 'failed to update ad last operation'},
  failedToUpdateAppLastOperation:     { code: 42009, message: 'failed to update app last operation'},
  requireUmm:                         { code: 42010, message: 'require umm'},
  requireJobId:                       { code: 50001, message: 'require job id'},
  failedToGetJob:                     { code: 50002, message: 'failed to get job status'}
};
