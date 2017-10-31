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
  public static path_register_investor = "signUp";
  public static path_register_issuer = "signUp/" + Constant.code_issuer;

  //URL module
  public static url_module_dashboard = "./dashboard/dashboard.module#DashboardModule";
  public static url_module_main = "./main/main.module#MainModule";
  public static url_module_auth = "./authorization/auth.module#AuthModule";
  public static url_module_main_investor = "./investor/investor.module#InvestorModule";
  public static url_module_main_issuer = "./issuer/issuer.module#IssuerModule";

  //URL screen
  public static url_forgot =  "/" + Constant.path_auth + "/" + Constant.path_forgot;
  public static url_login = "/" + Constant.path_auth + "/" + Constant.path_login;
  public static url_register_investor =  "/" + Constant.path_auth + "/" + Constant.path_register_investor;
  public static url_register_issuer =  "/" + Constant.path_auth + "/" + Constant.path_register_issuer;

  public static url_issuer_profile = "/" + Constant.path_account +  '/'+ Constant.code_issuer  + '/' + Constant.path_profile;
  public static url_investor_profile =  "/" + Constant.path_account + Constant.code_investor + '/' + Constant.path_profile;

}
