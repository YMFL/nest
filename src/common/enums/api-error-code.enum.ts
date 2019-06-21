export enum ApiErrorCode {
  TIMEOUT = -1, // 系统繁忙
  SUCCESS = 0, // 成功

  ACCOUNT_COMMON_INVALID = 10000, //account 通用错误
  USER_ID_INVALID = 10001, // 用户id无效
  USER_NAME_INVALID = 10002, // 用户姓名无效
  USER_AGE_INVALID = 10003, // 用户年龄无效
  USER_PAGE_INVALID = 10004, // 分页page
  USER_ID_OUT = 10005, // 用户token过期
  ARG_MOBILE_INVALID = 10006, // 用户token过期
}
