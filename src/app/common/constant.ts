import {environment} from "../../environments/environment";

export class Constant {

  //Header config
  public static header_config_code = "Finanma";
  //URL
  public static url_host = "https://" + environment.urlBackEnd;
  public static url_lib_phone = "https://s3-ap-southeast-1.amazonaws.com/finanma-static/assets/lib/js/intlTelInput/utils.js";

  //user code
  public static code_investor = "investor";
  public static CODE_INVESTOR = "INVESTOR";
  public static code_issuer = "issuer";
  public static CODE_ISSUER = "ISSUER";

  //user status code
  public static status_first_login = "USER_FIRST_LOGIN";
  public static status_user_pending = "USER_PENDING";
  public static status_user_active = "USER_ACTIVE";

  //path
  public static path_home = "home";
  public static path_account = "account";
  public static path_auth = "auth";
  public static path_login = "login";
  public static path_forgot = "forgot";
  public static path_profile = "profile";
  public static path_first_login = "required";
  public static path_active = "active";
  public static path_active_success = "success";
  public static path_active_fail = "fail";
  public static path_active_reset_pass = "resetPassword";
  public static path_register_investor = "signUp";
  public static path_register_issuer = "signUp/" + Constant.code_issuer;
  //Path investor
  public static path_market = "market";
  public static path_transaction_management = "transaction";
  public static path_asset_management = "asset";
  public static path_report = "report";
  //Path issuer
  public static path_portfolio = "portfolio";
  public static path_create_product = "create";
  public static path_transaction_issuer = "transaction";
  public static path_money_transaction = "money-transaction";
  public static path_report_issuer = "report";

  //URL module
  public static url_module_dashboard = "./dashboard/dashboard.module#DashboardModule";
  public static url_module_main = "./main/main.module#MainModule";
  public static url_module_auth = "./authorization/auth.module#AuthModule";
  public static url_module_main_investor = "./investor/investor.module#InvestorModule";
  public static url_module_main_issuer = "./issuer/issuer.module#IssuerModule";
  public static url_module_active_mail = "./active-mail/active-mail.module#ActiveMailModule";

  //URL screen
  //Dashboard
  public static url_home = "/" + Constant.path_home;

  public static url_reset_pass =  "/" + Constant.path_active + "/" + Constant.path_active_reset_pass;
  public static url_active_mail_success =  "/" + Constant.path_active + "/" + Constant.path_active_success;
  public static url_active_mail_fail =  "/" + Constant.path_active + "/" + Constant.path_active_fail;
  public static url_forgot =  "/" + Constant.path_auth + "/" + Constant.path_forgot;
  public static url_login = "/" + Constant.path_auth + "/" + Constant.path_login;
  public static url_register_investor =  "/" + Constant.path_auth + "/" + Constant.path_register_investor;
  public static url_register_issuer =  "/" + Constant.path_auth + "/" + Constant.path_register_issuer;

  public static url_first_login =  "/" + Constant.path_account + "/" + Constant.code_issuer  + "/" + Constant.path_first_login;
  public static url_issuer_profile = "/" + Constant.path_account +  "/" + Constant.code_issuer  + "/" + Constant.path_profile;
  public static url_investor_profile =  "/" + Constant.path_account + "/" +  Constant.code_investor + "/" + Constant.path_profile;

  //URL investor
  public static url_investor_market = "/" + Constant.path_account + "/" + Constant.code_investor + "/" + Constant.path_market;
  public static url_investor_transaction = "/" + Constant.path_account + "/" + Constant.code_investor + "/" + Constant.path_transaction_management;
  public static url_investor_asset = "/" + Constant.path_account + "/" + Constant.code_investor + "/" + Constant.path_asset_management;
  public static url_investor_report = "/" + Constant.path_account + "/" + Constant.code_investor + "/" + Constant.path_report;
  //URL issuer
  public static url_issuer_portfolio = "/" + Constant.path_account + "/" + Constant.code_issuer + "/" + Constant.path_portfolio;
  public static url_issuer_crerate_product = "/" + Constant.path_account + "/" + Constant.code_issuer + "/" + Constant.path_create_product;
  public static url_issuer_transaction = "/" + Constant.path_account + "/" + Constant.code_issuer + "/" + Constant.path_transaction_issuer;
  public static url_issuer_money = "/" + Constant.path_account + "/" + Constant.code_issuer + "/" + Constant.path_money_transaction;
  public static url_issuer_report = "/" + Constant.path_account + "/" + Constant.code_issuer + "/" + Constant.path_report_issuer;
  //Key localStorage
  public static key_local_token = "token";
  public static key_local_version = "version";
  public static key_local_language = "language";
  public static key_local_status = "status";
  public static key_local_current_screen = "currentScreen";



  //Error code
  public static error_force_logout = 401;
  public static error_not_connect_server = 0;

  //Success code
  public static success_code = 200;


  //Default variable
  public static default_language = "en_US";

  //API
  public static api_auth_sign_up = "/auth/sign-up";
  public static api_auth_sign_in = "/auth/login";
  public static api_auth_forgot_pass = "/auth/forgot-password";
  public static api_auth_renew_registration_confirm = "/auth/renew-registration-confirm";
  public static api_auth_reset_pass = "/auth/reset-password";
  public static api_user_sign_out = "/users/logout";
  public static api_user_first_sign_in = "/users/first-login";
  public static api_user_profile = "/users/profile";
  public static api_user_change_pass = "/users/change-password";
  public static api_user_add_bank_account = "/users/bank-account";
  public static api_user_delete_bank = "/users/bank-account/";//TODO /users/bank-account/{bankAccountId}
  public static api_user_wallet = "/users/wallet";
  public static api_user_wallet_convert = "/users/wallet/converter";
  public static api_user_wallet_convert_mock = "/users/wallet/mock-converter";
  public static api_user_wallet_withdraw = "/users/wallet/withdraw";
  public static api_user_transactions_history = "/transactions/history/withdraw";
  public static api_user_transaction_management = "/transactions/history";
  public static api_user_transactions_history_detail = "/transactions/history/detail";
  public static api_user_get_verify_code = "/users/get-email-verification-code";
  public static api_user_check_email_verification  = "/users/check-email-verification-code";
  public static api_user_update_profile  = "/users/update-profile-not-verification";

  public static api_common_counties = "/res/countries";
  public static api_common_translations = "/res/translations?language=";
  public static api_common_language = "/res/languages";
  public static api_common_money_type = "/res/money-types";
  public static api_common_banks = "/res/banks";

  //Const url icon
  public static icon_host = "./assets/images/icon/";
  public static icon_url_loading = Constant.icon_host + "loading.svg";
  public static icon_url_close = Constant.icon_host + "close.png";
  public static icon_url_logo = Constant.icon_host + "logo.png";

  //Const
  public static const_refresh_select = "refresh";
  public static const_time_out_set_interval = 5;
  public static const_time_out_interval = 30*60;
  public static const_timeout_default = 100;
}
