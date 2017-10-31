export class Constant {
  //URL
  public static url_host = "";

  //user code
  public static code_investor = "investor";
  public static code_issuer = "issuer";

  //path
  public static path_home = "home";
  public static path_account = "account";
  public static path_auth = "auth";
  public static path_login = "login";
  public static path_forgot = "forgot";
  public static path_profile = "profile";
  public static path_active = "active";
  public static path_active_success = "success";
  public static path_active_fail = "fail";
  public static path_active_reset_pass = "resetPassword";
  public static path_register_investor = "signUp";
  public static path_register_issuer = "signUp/" + Constant.code_issuer;

  //URL module
  public static url_module_dashboard = "./dashboard/dashboard.module#DashboardModule";
  public static url_module_main = "./main/main.module#MainModule";
  public static url_module_auth = "./authorization/auth.module#AuthModule";
  public static url_module_main_investor = "./investor/investor.module#InvestorModule";
  public static url_module_main_issuer = "./issuer/issuer.module#IssuerModule";
  public static url_module_active_mail = "./active-mail/active-mail.module#ActiveMailModule";

  //URL screen
  public static url_reset_pass =  "/" + Constant.path_active + "/" + Constant.path_active_reset_pass;
  public static url_active_mail_success =  "/" + Constant.path_active + "/" + Constant.path_active_success;
  public static url_active_mail_fail =  "/" + Constant.path_active + "/" + Constant.path_active_fail;
  public static url_forgot =  "/" + Constant.path_auth + "/" + Constant.path_forgot;
  public static url_login = "/" + Constant.path_auth + "/" + Constant.path_login;
  public static url_register_investor =  "/" + Constant.path_auth + "/" + Constant.path_register_investor;
  public static url_register_issuer =  "/" + Constant.path_auth + "/" + Constant.path_register_issuer;

  public static url_issuer_profile = "/" + Constant.path_account +  '/'+ Constant.code_issuer  + '/' + Constant.path_profile;
  public static url_investor_profile =  "/" + Constant.path_account + Constant.code_investor + '/' + Constant.path_profile;

}
